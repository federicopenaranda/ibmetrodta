<?php

namespace app\controllers;

namespace app\controllers\UsuarioTipo000201;
use yii\base\Action;
use app\models\UsuarioTipo000201;
use app\models\CTQ;
use yii\db\Transaction;
use yii\db\Connection;
use yii\helpers\Json;
use app\models\LogSistema030003;

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
			$model=new UsuarioTipo000201();
			$listRecords=$model->divideRecords($query);
			$transaction = $model->db->beginTransaction();
			try{
				foreach ($listRecords as $listaRecord):
					$error="";
					$model=new UsuarioTipo000201();
                    $audi = new LogSistema030003();
    	        	try {
						$record = Json::decode(urldecode($listaRecord));
						$listDifAtriP = array_diff($model->atributes(),array_keys($record));

						if (sizeof($listDifAtriP) == 0) {
							$listObjRels = array_diff(array_keys($record),$model->atributes());
							$listDiffRel = array_diff($listObjRels,$model->getListHasMany());
                                                        $pk=$model->getNamePk();
							$model = UsuarioTipo000201::findOne($record[$pk[0]]);
							if ($model) {
								foreach ($model->atributes() as $atributo) {
									$model->$atributo=$record[$atributo];
								}
								if ($model->validate()) {
									$model->update();
                                    $audi->insertAudi("update",$model->tableName(),$model->getPrimaryKey());
									
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
	                                                        $objRel::deleteAll("fk_id_usuario_tipo = ".$model->getPrimaryKey());
	                                                        $sw=1;
	                                                    }
	                                                }
                                                    
                                                    foreach($objRel->atributes() as $campo):	
                                                        if ($campo == 'fk_id_usuario_tipo')
                                                            $objRel->$campo=$record['id_usuario_tipo'];
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