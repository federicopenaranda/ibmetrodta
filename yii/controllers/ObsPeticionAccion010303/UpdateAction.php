<?php

namespace app\controllers;

namespace app\controllers\ObsPeticionAccion010303;
use yii\base\Action;
use app\models\ObsPeticionAccion010303;
use app\models\CTQ;
use yii\db\Transaction;
use yii\db\Connection;
use yii\helpers\Json;
use app\models\LogSistema030003;
use app\models\Accion010201;
use app\models\ContactForm;
use app\models\Usuario000101;
use app\models\Peticion010401;
use app\models\AccionObservacion010203;

class UpdateAction extends Action
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
					$model=new ObsPeticionAccion010303();
                    $audi = new LogSistema030003();
    	        	try {
						$record = Json::decode(urldecode($listaRecord));
						$listDifAtriP = array_diff($model->atributes(),array_keys($record));

						if (sizeof($listDifAtriP) == 0) {
							$listObjRels = array_diff(array_keys($record),$model->atributes());
							$listDiffRel = array_diff($listObjRels,$model->getListHasMany());
                                                        $pk=$model->getNamePk();
							$model = ObsPeticionAccion010303::findOne($record[$pk[0]]);
							if ($model) {
								foreach ($model->atributes() as $atributo) {
									$model->$atributo=$record[$atributo];
								}
								if ($model->validate()) {
									$model->update();
                                    $audi->insertAudi("update",$model->tableName(),$model->getPrimaryKey());
									
									//************EMAIL******************************
	                                $pet = Peticion010401::find()
	                                					->with('fkIdCodigoPeticion','fkIdOec')
	                                					->where(['id_peticion'=>$record['fk_id_peticion']])
	                                					->one();

									$mensaje = "Codigo de tramite: ".$pet->fkIdCodigoPeticion->codigo_peticion." OEC: ".$pet->fkIdOec->nombre_oec." ".$record['obs_peticion_accion'];

									$AccionObs = AccionObservacion010203::find()
														->where(['fk_id_accion'=>$record['fk_id_accion']])
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
										}
										
									}
									//***************************************************************
									foreach ($listObjRels as $listObjRel):
                                    
										$listObjRel2 = ucfirst(rtrim($listObjRel,"s"));
                                        $sw=0;
										
                                        if (in_array($listObjRel2,$model->getListHasMany())) {		
											
                                            if ($record[$listObjRel]){
                                                
                                                foreach ($record[$listObjRel] as $subCampo):
                                                        
                                                    $objRel = $model->getInstance($listObjRel2);
                                                    $audi=new LogSistema030003();
                                                    $pkR = $objRel->getNamePk();

                                                    if(substr($listObjRel2,-2) != "02"){
														$objRel=$objRel::find()->where([$pkR[0] => $subCampo[$pkR[0]]])->one();
													} else {
	                                                    if ($sw==0) {
	                                                        $objRel::deleteAll("fk_id_obs_peticion_accion = ".$model->getPrimaryKey());
	                                                        $sw=1;
	                                                    }
	                                                }
                                                    
                                                    foreach($objRel->atributes() as $campo):	
                                                        if ($campo == 'fk_id_obs_peticion_accion')
                                                            $objRel->$campo=$record['id_obs_peticion_accion'];
                                                        else {
                                                            $objRel->$campo=$subCampo[$campo];
                                                        }
                                                    endforeach;
                                                    if ($objRel->validate()){
                                                        if(substr($listObjRel2,-2) == "02")
                                                        	$objRel->save();
														else
															$objRel->update();
                                                        if(!is_array($objRel->getPrimaryKey()))
                                                            $audi->insertAudi("update",$objRel->tableName(),$objRel->getPrimaryKey());
                                                        else {
                                                            $pkComp = $objRel->getPrimaryKey();
                                                            $audi->insertAudi("update",$objRel->tableName(),current($pkComp)/*."-".next($pkComp)*/);
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
								$error="Registro no encontrado";
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
					$respuesta->meta=array("success"=>"true","msg"=>"Se actualizo exitosamente !!!");
					return $this->controller->renderPartial('update',array('model'=>$respuesta,'callback'=>$callback));
				} else {
					$respuesta->meta=["success"=>"false","msg"=>$error];
					return $this->controller->renderPartial('update',['model'=>$respuesta,'callback'=>$callback]);
				}
			} catch (Exception $e) {
				$transaction->rollback();
				throw $e;
			}
		} else {
			$respuesta->meta=["success"=>"false","msg"=>$error];
			return $this->controller->renderPartial('update',['model'=>$respuesta,'callback'=>'']);
		}
    }
}