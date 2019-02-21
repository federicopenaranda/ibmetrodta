<?php

namespace app\controllers;

namespace app\controllers\Actividad050101;
use yii\base\Action;
use app\models\Actividad050101;
use app\models\CTQ;
use yii\db\Transaction;
use yii\db\Connection;
use yii\helpers\Json;
use app\models\LogSistema030003;
use app\models\GestionTipoActividad050103;
use app\models\Vacacion050104;
use app\models\Feriado050104;

class UpdateAction extends Action
{
    public function run()
    {
		$respuesta=new \stdClass();
        $error="";
        $message="";
		$error.= (!isset($_GET['records'])) ? "{ Error en la variable records } " : "";
		$error.= (!isset($_GET['callback'])) ? "{ Error de Callback } " : "";
        
        if ($error == "") {
			$callback=$_GET['callback'];
			$query=explode('&', $_SERVER['QUERY_STRING']);
			$model=new Actividad050101();
			$listRecords=$model->divideRecords($query);
			$transaction = $model->db->beginTransaction();
			try{
				foreach ($listRecords as $listaRecord):
					$error="";
					$model=new Actividad050101();
                    $audi = new LogSistema030003();
    	        	try {
						$record = Json::decode(urldecode($listaRecord));
						$listDifAtriP = array_diff($model->atributes(),array_keys($record));

						if (sizeof($listDifAtriP) == 0) {
							$listObjRels = array_diff(array_keys($record),$model->atributes());
							$listDiffRel = array_diff($listObjRels,$model->getListHasMany());
                                                        $pk=$model->getNamePk();
							$model = Actividad050101::findOne($record[$pk[0]]);
							if ($model) {
								foreach ($model->atributes() as $atributo) {
									$model->$atributo=$record[$atributo];
								}
								if ($model->validate()) {
									
									$date_start=$record['fecha_inicial_actividad'];
	                                $date_end= $record['fecha_final_actividad'];
									$feriados = Feriado050104::find()
	                                 	              	->all();
	                                $sw=0;$sw2=0; $fecha_fer="";
	                                foreach ($feriados as $feriado) {
	                                    $date = $feriado->fecha_feriado;
	                                    if($model->check_in_range($date_start,$date_end,$date)){
	                                    	$sw=1;
	                                    	$fecha_fer.= $date." ; ";
	                                    }  	
	                                }

	                                $vacacions = Vacacion050104::find()
	                                                ->with('fkIdUsuario')
													->asArray()
	                                                ->all();
		                             foreach ($vacacions as $vacacion) {

		                             	if ($model->check_in_range($vacacion['fecha_inicio_vacacion'], $vacacion['fecha_fin_vacacion'], $record['fecha_inicial_actividad']) ||
		                                    $model->check_in_range($vacacion['fecha_inicio_vacacion'], $vacacion['fecha_fin_vacacion'], $record['fecha_final_actividad']) ||
		                                    $model->check_in_range($record['fecha_inicial_actividad'], $record['fecha_final_actividad'], $vacacion['fecha_inicio_vacacion']) ||
		                                    $model->check_in_range($record['fecha_inicial_actividad'], $record['fecha_final_actividad'], $vacacion['fecha_fin_vacacion']) ||
		                                	$model->check_in_range($record['fecha_inicial_actividad'], $record['fecha_final_actividad'],$vacacion['fkIdUsuario']['fecha_nacimiento_usuario'])
		                                ) {
		                                	$error="No se pudo crear la actividad debido a que tiene vaciones un usuario o cumeple años";
		                             		$sw=1;
		                             		$sw2=1;
		                             	}
		                             }

	                                if ($sw == 0){

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
	                                                    
	                                                    if(substr($listObjRel2,-2) != "02"){
	                                                    	$pk = $objRel->getNamePk();
															$objRel=$objRel::find()->where([$pk[0] => $subCampo[$pk[0]]])->one();
														}
	                                                    if ($sw==0) {
	                                                        $objRel::deleteAll("fk_id_actividad = ".$model->getPrimaryKey());
	                                                        $sw=1;
	                                                    }
	                                                    
	                                                    foreach($objRel->atributes() as $campo):	
	                                                        if ($campo == 'fk_id_actividad')
	                                                            $objRel->$campo=$record['id_actividad'];
	                                                        else {
	                                                            $objRel->$campo=$subCampo[$campo];
	                                                        }
	                                                    endforeach;

	                                                    if ($objRel->validate()){

	                                                    	if ($listObjRel == "actividadUsuario050103s"){

	                                                    		$vacacions = Vacacion050104::find()
	                                                    					->with('fkIdUsuario')
																			->asArray()
	                                                						->where(['fk_id_usuario'=>$subCampo['fk_id_usuario']])
	                                                						->all();
	                                                			$sw=0;
		                                                		foreach ($vacacions as $vacacion) {
		                                                			$fi = $vacacion['fecha_inicio_vacacion'];
		                                                			$ff = $vacacion['fecha_fin_vacacion'];
		                                                			if ($model->check_in_range($date_start, $date_end, $fi) ||
		                                                				$model->check_in_range($date_start, $date_end, $ff) || 
		                                                				$model->check_in_range($fi, $ff, $date_start) ||
		                                                				$model->check_in_range($fi, $ff, $date_end)
		                                                				) {
		                                                				$sw=1;
		                                                			}
		                                                		}
		                                                		if ($sw==0) {
		                                                			$objRel->update();
		                                                			if(!is_array($objRel->getPrimaryKey()))
			                                                            $audi->insertAudi("update",$objRel->tableName(),$objRel->getPrimaryKey());
			                                                        else {
			                                                            $pkComp = $objRel->getPrimaryKey();
			                                                            $audi->insertAudi("update",$objRel->tableName(),current($pkComp)/*."-".next($pkComp)*/);
			                                                        }
		                                                		} else {
		                                                			$message.=" No se pudo actulizar el usuario ".$vacacion['fkIdUsuario']['primer_nombre_usuario']." porque tiene vacaciones ";
		                                                		}

	                                                    	} else {
																$objRel->update();
		                                                        if(!is_array($objRel->getPrimaryKey()))
		                                                            $audi->insertAudi("update",$objRel->tableName(),$objRel->getPrimaryKey());
		                                                        else {
		                                                            $pkComp = $objRel->getPrimaryKey();
		                                                            $audi->insertAudi("update",$objRel->tableName(),current($pkComp)/*."-".next($pkComp)*/);
		                                                        }
	                                                    	}
	                                                        
	                                                    } else {

	                                                        $error=$objRel->getErrors();
	                                                    }
	                                                endforeach;
												}
											}
										endforeach;
									}  else {
										if($sw2 == 0){
											$error="No se puedo crear la actividad por que existe un feriado en: ".$fecha_fer;
										}
									}//if($sw==0)
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