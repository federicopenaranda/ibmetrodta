<?php

namespace app\controllers\ObsPeticionAccion010303;

use yii\base\Action;
use app\models\ObsPeticionAccion010303;
use yii\db\Transaction;
use yii\helpers\Json;
use app\models\LogSistema030003;
use app\models\Accion010201;
use app\models\ContactForm;
use app\models\Usuario000101;
use app\models\Peticion010401;
use app\models\AccionObservacion010203;

use Yii;

/**
 * Esta es la accion "create" para el controlador "ObsPeticionAccion010303Controller".
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
			$model=new ObsPeticionAccion010303();
			$listRecords=$model->divideRecords($query);
			$transaction = $model->db->beginTransaction();
			try{
				foreach ($listRecords as $listaRecord):
					$error="";
					$model = new ObsPeticionAccion010303();
                    $audi = new LogSistema030003();
    	        	try {
						$record = Json::decode(urldecode($listaRecord));
						$listDifAtriP = array_diff($model->atributes(),array_keys($record));

						if (sizeof($listDifAtriP) == 0) {
							$listObjRels = array_diff(array_keys($record),$model->atributes());
							$listDiffRel = array_diff($listObjRels,$model->getListHasMany());
							
							foreach ($model->atributes() as $atributo) {
								if ($atributo == "fk_id_usuario")
									$model->$atributo = yii::$app->user->getId();
								else {
									if($atributo == "fk_id_accion"){
										$action = Accion010201::find()
                    							->distinct(true)
												->where(['nombre_accion'=>$record['nombre_accion']])
												->one();
										$model->$atributo = $action->id_accion;
									} else {
										$model->$atributo = $record[$atributo];
									}
								}
									
							}
							if ($model->validate()) {
								$model->save();
								$audi->insertAudi("create",$model->tableName(),$model->getPrimaryKey());
                                
                                //************EMAIL******************************
                                $pet = Peticion010401::find()
                                					->with('fkIdCodigoPeticion','fkIdOec')
                                					->where(['id_peticion'=>$record['fk_id_peticion']])
                                					->one();

								$mensaje = "Codigo de tramite: ".$pet->fkIdCodigoPeticion->codigo_peticion." OEC: ".$pet->fkIdOec->nombre_oec." ".$record['obs_peticion_accion'];

								$AccionObs = AccionObservacion010203::find()
													->where(['fk_id_accion'=>$action->id_accion])
													->all();
								foreach($AccionObs as $AccionOb){
									
									$usuarios = Usuario000101::find()
				                    					->distinct(true)
														->with('usuarioTipoUsuario000102s','usuarioOec000102s')
														->joinWith('usuarioTipoUsuario000102s')
														->joinWith('usuarioOec000102s')
														->where(['fk_id_oec'=>$pet->fk_id_oec,'fk_id_usuario_tipo'=>$AccionOb->fk_id_usuario_tipo])
														->all();

									foreach($usuarios as $usuario){
										echo $usuario->id_usuario;
										$contac = new ContactForm();
							            $contac->email   = "sistemaacreditacion@ibmetro.gob.bo";
							            $contac->name    = "ibmetro";
							            $contac->subject = "[IBMETRO] Observaciones del Trámite";
							            $contac->body    = $mensaje;
							                	
							            if (!$contac->contact(urldecode($usuario->correo_usuario)))
											$audi->insertAudi("correo no enviado",$usuario->correo_usuario,"");
									else
										$audi->insertAudi("correo enviado!!!",$usuario->correo_usuario,"");
									}
								}
								//***************************************************************
								foreach ($listObjRels as $listObjRel):
									
                                    $listObjRel2 = ucfirst(rtrim($listObjRel,"s"));
                                    
									if (in_array($listObjRel2,$model->getListHasMany())){

										if ($record[$listObjRel]){
                                            
                                            foreach ($record[$listObjRel] as $subCampo):
                                                
                                                $objRel = $model->getInstance($listObjRel2);
                                                $audi=new LogSistema030003();
                                                foreach($objRel->atributes() as $campo):	
                                                    if ($campo!='fk_id_obs_peticion_accion') {
                                                        $objRel->$campo=$subCampo[$campo];
                                                    } else {
                                                        if($campo == "fk_id_usuario")
                                                        	if ($objRel->getLogin() != "") 
                                                            	$objRel->$campo= yii::$app->user->getId();
                                                             else
                                                             	$objRel->$campo=$model->getPrimaryKey();
                                                        else
                                                            $objRel->$campo=$model->getPrimaryKey();
                                                    }
                                                endforeach;
                                                if ($objRel->validate()){
                                                    $objRel->save();
                                                    if(!is_array($objRel->getPrimaryKey()))
                                                        $audi->insertAudi("create",$objRel->tableName(),$objRel->getPrimaryKey());
                                                    else {
                                                        $pkComp = $objRel->getPrimaryKey();
                                                        $audi->insertAudi("create",$objRel->tableName(),current($pkComp)/*."-".next($pkComp)*/);
                                                    }
                                                } else {
                                                    $error=$objRel->getErrors();
                                                }
                                            endforeach;
                                        }
									}
								endforeach;
							} else {
								$error=$model->getErrors();
							}
						} else {
							foreach ($listDifAtriP as $atrib):
								$error.="No esta definido {".$atrib."}, ";
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
