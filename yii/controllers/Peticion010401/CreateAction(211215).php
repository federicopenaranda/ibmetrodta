<?php

namespace app\controllers\Peticion010401;

use yii\base\Action;
use app\models\Peticion010401;
use yii\db\Transaction;
use yii\helpers\Json;
use app\models\LogSistema030003;
use app\models\Estado010601;
use app\models\Transicion010202;
use app\models\PeticionAccion010301;
use app\models\PeticionEstado010403;
use app\models\ContactForm;
use app\models\Usuario000101;
use app\models\EstadoNotificacion010203;
use app\models\CodigoPeticion010404;

use Yii;

/**
 * Esta es la accion "create" para el controlador "Peticion010401Controller".
 */
class CreateAction extends  Action
{
	public function run()
    {
		$respuesta=new \stdClass();
        $error="";
		$error.= (!isset($_GET['records'])) ? "{ Error en la variable records } " : "";
		$error.= (!isset($_GET['callback'])) ? "{ Error de Callback } " : "";
        
        if ($error == "") {
			$callback=$_GET['callback'];
			$query=explode('&', $_SERVER['QUERY_STRING']);
			$model=new Peticion010401();
			$listRecords=$model->divideRecords($query);
			$transaction = $model->db->beginTransaction();
			try {
				foreach ($listRecords as $listaRecord):
					$error = "";
					$model = new Peticion010401();
                    $audi = new LogSistema030003();
    	        	try {
						$record = Json::decode(urldecode($listaRecord));

						$listDifAtriP = array_diff($model->atributes(),array_keys($record));

						if (sizeof($listDifAtriP) == 0) {
							$listObjRels = array_diff(array_keys($record),$model->atributes());
							$listDiffRel = array_diff($listObjRels,$model->getListHasMany());
							/**
							* creamos normalmente una peticion 
							*/
							foreach ($model->atributes() as $atributo) {
								if ($atributo == "fk_id_usuario")
									$model->$atributo = yii::$app->user->getId();
								else
									$model->$atributo = $record[$atributo];
								if($atributo=="fk_id_codigo_peticion")
									$fk_id_codigo_peticion = $record[$atributo];
							}

							if ($model->validate()) {
								
								$model->save();
								$audi->insertAudi("create",$model->tableName(),$model->getPrimaryKey());
								/**
								* El codigo de peticion es para encontrar el codigo de tramite para el cuerpo del mensaje de correo
								*/
								$codPeticion = CodigoPeticion010404::find()
								 				->where(['id_codigo_peticion'=>$fk_id_codigo_peticion])
								 				->one();
								/**
								* buscamos el estado que tiene el id_proceso X y el nombre_proceso_estado = 'inicio'
								*/
								$stateQuery = Estado010601::find()
													->distinct(true)
													->with('actividadEstado010602s','fkIdEstadoTipo','fkIdProceso','transicion010202s')
													->joinWith('fkIdEstadoTipo')
													->joinWith('fkIdProceso')
													->joinWith('peticionEstado010403s')
													->joinWith('transicion010202s')
													->where(['proceso_01_01_01.id_proceso'=>$record['fk_id_proceso'],'estado_tipo_01_06_04.nombre_proceso_estado'=>"inicio"])
													->one();
								/**
								* filtramos todas las transiciones que tiene el estado actual a X 
								*/
								$transQuery = Transicion010202::find()
													->distinct(true)
													->with('fkIdAccions')
													->asArray()
													->joinWith('fkIdAccions')
													->where(['fk_id_estado_actual'=>$stateQuery->id_estado])
													->all();

								$audi = new LogSistema030003();
								$modPetEst = new PeticionEstado010403();
								$modPetEst->fk_id_peticion 			= $model->getPrimaryKey();
								$modPetEst->fk_id_estado 			= $stateQuery->id_estado;
								$modPetEst->activo_peticion_estado 	= 1;

								if ($modPetEst->validate()) {
									$modPetEst->save();
									$audi->insertAudi("create",$modPetEst->tableName(),$modPetEst->getPrimaryKey());

									//************EMAIL******************************
									$estadoNots = EstadoNotificacion010203::find()
															->with('fkIdEstado','fkIdUsuarioTipo')
															->where(['fk_id_estado'=>$stateQuery->id_estado])
															->all();
									
									foreach($estadoNots as $estadoNot) {

										$mensaje = str_replace("codigo_peticion",$codPeticion->codigo_peticion,$estadoNot->mensaje_estado_notificacion);

										$usuarios = Usuario000101::find()
				                    						->distinct(true)
															->with('usuarioTipoUsuario000102s')
															->joinWith('usuarioTipoUsuario000102s')
															->where(['fk_id_usuario_tipo'=>$estadoNot->fk_id_usuario_tipo])
															->all();
										
										foreach($usuarios as $usuario){

											$estadoNot->asunto_estado_notificacion;
									
											$contac = new ContactForm();
						                	$contac->email   = "sistemaacreditacion@ibmetro.gob.bo";
						                	$contac->name    = "ibmetro";
						                	$contac->subject = $estadoNot->asunto_estado_notificacion;
						                	$contac->body    = $mensaje;
						                	
						                	if (!$contac->contact(urldecode($usuario->correo_usuario)))
												 $audi->insertAudi("correo no enviado",$usuario->correo_usuario,"");
										}
									}
									//****************************************************************************
								} else {
									$error = $modPetEst->getErrors();
								}
								
								for ($i=0; $i < sizeof($transQuery); $i++) {
									/**
									* 
									*/
									for ($j=0; $j < sizeof($transQuery[$i]['fkIdAccions']); $j++) {
										$audi = new LogSistema030003();	
										$modPetiAc = new PeticionAccion010301();
										$modPetiAc->fk_id_peticion				= $model->getPrimaryKey();
										$modPetiAc->fk_id_accion				= $transQuery[$i]['fkIdAccions'][$j]['id_accion'];
										$modPetiAc->fk_id_transicion			= $transQuery[$i]['id_transicion'];
										$modPetiAc->fk_id_usuario				= "";
										$modPetiAc->completa_peticion_accion	= 0;
										$modPetiAc->activa_peticion_accion		= 1;
										$modPetiAc->observacion_peticion_accion	= "";
										
										if ($modPetiAc->validate()) {
											$modPetiAc->save();
											$audi->insertAudi("create",$modPetiAc->tableName(),$modPetiAc->getPrimaryKey());
										} else {
											$error=$modPetiAc->getErrors();
										}
									}
								}
							} else {
								$error = $model->getErrors();
							}
						} else {
							foreach ($listDifAtriP as $atrib):
								$error.="Error Atributo(s) indefinido(s): ".$atrib.", ";
							endforeach;
						}				
					} catch(\Exception $e) {
						$error=$e->getMessage();
					}
				endforeach;
				if ($error == "") {

					$transaction->commit();
					$respuesta->meta=array("success"=>"true","msg"=>"Se creo exitosamente !!!");
					return $this->controller->renderPartial('create',array('model'=>$respuesta,'callback'=>$callback));
				} else {
					$respuesta->meta=["success"=>"false","msg"=>$error];
					return $this->controller->renderPartial('create',['model'=>$respuesta,'callback'=>$callback]);
				}
			} catch (Exception $e) {
				$transaction->rollback();
				throw $e;
			}
		} else {
			$respuesta->meta=["success"=>"false","msg"=>$error];
			return $this->controller->renderPartial('read',['model'=>$respuesta,'callback'=>'']);
		}
	} 
}
