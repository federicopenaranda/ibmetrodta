<?php

namespace app\controllers;

namespace app\controllers\PeticionAccion010301;
use yii\base\Action;
use app\models\PeticionAccion010301;
use yii\base\Exception;
use yii\helpers\Json;
use app\models\CTQ;
use yii\db\Query;
use app\models\Transicion010202;
use app\models\PeticionEstado010403;
use app\models\LogSistema030003;
use app\models\AccionNotificacion010203;
use app\models\ContactForm;
use app\models\Usuario000101;
use app\models\EstadoNotificacion010203;
use yii;

class VerifActionAction extends Action
{
    public function run()
    {
		$respuesta=new \stdClass();
		$model = new PeticionAccion010301;
		$error="";
		$sw=0;
		$error.= (!isset($_GET['callback'])) ? "Error de Callback" : "";
        $error.= (!isset($_GET['filter'])) ? "Error de filter" : "";

		if ($error == "") {
			$peticionAccion = new PeticionAccion010301();
			$audi = new LogSistema030003();
			$transaction = $peticionAccion->db->beginTransaction();
			try {
				if (isset($_GET['filter']) && $_GET['filter'] != '') {
					
					$filtros = Json::decode($_GET['filter']);
					$contFil = 1;
					$condi 	 = "";
					$message="";
					foreach($filtros as $filtro):
						if($filtro['property']=="nombre_accion")
							$nombre_accion=$filtro['value'];
						else 
							$fk_id_peticion=$filtro['value'];

						if (is_numeric($filtro['value']) && strpos($filtro['property'],'fk_id_') !== FALSE) 
									$condi.= $contFil!=sizeof($filtros) ? $filtro['property']." = ".$filtro['value']." AND " : $filtro['property']." = ".$filtro['value'];
                                else
                                	$condi.= $contFil!=sizeof($filtros) ? $filtro['property']." LIKE '%".$filtro['value']."%' AND " : $filtro['property']." LIKE '%".$filtro['value']."%'";	
                        $contFil++;
					endforeach;
					
					$peticionAccion = PeticionAccion010301::find()
								->distinct(true)
								->with('fkIdPeticion','fkIdAccion','fkIdTransicion','fkIdUsuario')
								->joinWith('fkIdPeticion')
								->joinWith('fkIdAccion')
								->joinWith('fkIdTransicion')
								->joinWith('fkIdUsuario')
								->where($condi)
								->andWhere(['completa_peticion_accion'=>0,'activa_peticion_accion'=>1])
								->all();
		    		
					foreach($peticionAccion as $val) {
						$val->fk_id_usuario = yii::$app->user->getId();
						$val->completa_peticion_accion=1;
						$val->activa_peticion_accion = 0;
						if ($val->validate()) {
							$val->update();
							$audi->insertAudi("update",$val->tableName(),$val->getPrimaryKey());
							//************EMAIL******************************
							$modptContact = PeticionAccion010301::find()
									->with('fkIdPeticion','fkIdAccion','fkIdTransicion','fkIdUsuario')
									->joinWith('fkIdAccion')
									->where(['fk_id_peticion'=>$fk_id_peticion,'nombre_accion'=>$nombre_accion])
									->one();
							
							$accionNots = AccionNotificacion010203::find()
													->with('fkIdAccion','fkIdUsuarioTipo')
													->where(['fk_id_accion'=>$modptContact->fkIdAccion->id_accion])
													->all();
							
							foreach($accionNots as $accionNot) {

								$usuarios = Usuario000101::find()
		                    						->distinct(true)
													->with('usuarioTipoUsuario000102s')
													->joinWith('usuarioTipoUsuario000102s')
													->where(['fk_id_usuario_tipo'=>$accionNot->fk_id_usuario_tipo])
													->all();
								
								foreach($usuarios as $usuario){

									$accionNot->asunto_accion_notificacion;
							
									$contac = new ContactForm();
				                	$contac->email   = "sistemaacreditacion@ibmetro.gob.bo";
				                	$contac->name    = "ibmetro";
				                	$contac->subject = $accionNot->asunto_accion_notificacion;
				                	$contac->body    = $accionNot->mensaje_accion_notificacion;
				                	
				                	if (!$contac->contact(urldecode($usuario->correo_usuario)))
										 $audi->insertAudi("correo no enviado",$usuario->correo_usuario,"");
								}
							}
							//****************************************************************************

						} else {

							$error=$error=$peticionAccion->getErrors();
						}
					}
					
					$subQueryPTs = PeticionAccion010301::find()
								->distinct(true)
								->with('fkIdPeticion','fkIdAccion','fkIdTransicion','fkIdUsuario')
								#->asArray()
								->joinWith('fkIdPeticion')
								->joinWith('fkIdAccion')
								->joinWith('fkIdTransicion')
								->joinWith('fkIdUsuario')
								->where($condi)
								->all();

			
					foreach($subQueryPTs as $subQueryPT):

						$subPetAc = PeticionAccion010301::find()
								->distinct(true)
								->with('fkIdPeticion','fkIdAccion','fkIdTransicion','fkIdUsuario')
								->joinWith('fkIdPeticion')
								->joinWith('fkIdAccion')
								->joinWith('fkIdTransicion')
								->joinWith('fkIdUsuario')
								->where(['completa_peticion_accion'=>0,'activa_peticion_accion'=>1,'fk_id_transicion'=>$subQueryPT->fk_id_transicion,'fk_id_peticion'=>$fk_id_peticion])
								->all();
						/**
						* Verificamos si todas las peticiones accion estan todas etiquetiadas (completadas) en 1
						*/
						
						if (sizeof($subPetAc) == 0){
							
							$trans = Transicion010202::find()
                    						->distinct(true)
											->where(['id_transicion'=>$subQueryPT->fk_id_transicion])
											->one();
							
							$transQuery = Transicion010202::find()
                    					->distinct(true)
										->asArray()
										->joinWith('fkIdAccions')
										->where(['fk_id_estado_actual'=>$trans->fk_id_estado_siguiente])
										->all();

							$audi = new LogSistema030003();
							$modPetEst = new PeticionEstado010403();
							$modPetEst->fk_id_peticion = $fk_id_peticion;
							$modPetEst->fk_id_estado = $trans->fk_id_estado_siguiente;
							$modPetEst->activo_peticion_estado = 1;
 							
							if ($modPetEst->validate()) {

								$modPetEst->save();
								$audi->insertAudi("create",$modPetEst->tableName(),$modPetEst->getPrimaryKey());

								//************EMAIL******************************
								$estadoNots = EstadoNotificacion010203::find()
														->with('fkIdEstado','fkIdUsuarioTipo')
														->where(['fk_id_estado'=>$trans->fk_id_estado_actual])
														->all();
								
								foreach($estadoNots as $estadoNot) {

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
					                	$contac->body    = $estadoNot->mensaje_estado_notificacion;
					                	
					                	if (!$contac->contact(urldecode($usuario->correo_usuario)))
											 $audi->insertAudi("correo no enviado",$usuario->correo_usuario,"");
									}
								}
								//****************************************************************************
							} else {
								$error = $modPetEst->getErrors();
							}
						
							for ($i=0; $i < sizeof($transQuery); $i++) {
										
								for ($j=0; $j < sizeof($transQuery[$i]['fkIdAccions']); $j++) {
									$audi = new LogSistema030003();	
									$modPetiAc = new PeticionAccion010301();
										
									$modPetiAc->fk_id_peticion				= $fk_id_peticion;
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
						}
							
					endforeach;
					
					if ($error == "") {
						if (sizeof($peticionAccion) > 0) {
							$message = "true";
						} else {
							$message = "false";
						}
						$transaction->commit();
						$respuesta->meta=array("success"=>"true","msg"=>$message);
						return $this->controller->renderPartial('read',['model'=>$respuesta,'callback'=>$_GET['callback']]);
					} else {
						$respuesta->meta=array("success"=>"false","msg"=>$error);
						return $this->controller->renderPartial('read',['model'=>$respuesta,'callback'=>$_GET['callback']]);
					}	
				}
			} catch (\Exception $e) {
				$error=$e->getMessage();
			}

			if ($error=="") {
				//$transaction->commit();	
				return $this->controller->renderPartial('read',['model'=>$respuesta,'callback'=>$_GET['callback']]);
			} else {
				$transaction->rollback();
				$respuesta->meta=array("success"=>"false","msg"=>$error);
				return $this->controller->renderPartial('read',['model'=>$respuesta,'callback'=>$_GET['callback']]);
			}
		} else {
			$respuesta->meta=array("success"=>"false","msg"=>$error);
			return $this->controller->renderPartial('read',['model'=>$respuesta,'callback'=>'']);
		}
    }
}