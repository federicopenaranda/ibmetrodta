<?php

namespace app\controllers;

namespace app\controllers\PeticionArchivo010401;
use yii\base\Action;
use app\models\PeticionArchivo010401;
use yii\base\Exception;
use yii\helpers\Json;
use app\models\CTQ;
use yii\db\Query;
use app\models\Estado010601;
use app\models\PeticionArchivoTipo010404;

class ReadAction extends Action
{
    public function run()
    {
		$respuesta=new \stdClass();
		$model = new PeticionArchivo010401;
		$error="";
		$error.= (!isset($_GET['callback'])) ? "{ Error de Callback } " : "";
        $error.= (!isset($_GET['start'])) ? "{ Error de start } " : "";
        $error.= (!isset($_GET['limit'])) ? "{ Error de limit } " : "";
        $listManyMany = [
        				];

		if ($error == "") {
			try {
				if (isset($_GET['sort'])) {
					$sort=Json::decode($_GET['sort']);
					$propertySort	= $sort[0]['property'];
					$directionSort	= $sort[0]['direction'];
				} else {
					$propertySort	= "id_peticion_archivo";
					$directionSort	= "asc";
				}
                $condiQuery = "";
                
                if (isset($_GET['query']) && $_GET['query'] != "") {
					
					$filtro = Json::decode($_GET['query']);

					foreach ($filtro as $fvalues):
						foreach($fvalues as $fk => $fv):
                        	if ($fv != "")
								$condiQuery.= $fk." LIKE '%".$fv."%' OR ";
						endforeach;
					endforeach;
					$condiQuery = substr ($condiQuery, 0, -3);
				}//query
                
                if (isset($_GET['query']) && $_GET['query'] != "" && $condiQuery != "") {
                    $models = PeticionArchivo010401::find()
                    							->distinct(true)
												->with('fkIdAccion','fkIdPeticionEstado')
												->asArray()
												->joinWith('fkIdAccion')
												->joinWith('fkIdPeticionEstado')
												->where($condiQuery)
                                                ->all();
                    $total = sizeof($models);
					$models = PeticionArchivo010401::find()
                    							->distinct(true)
												->with('fkIdAccion','fkIdPeticionEstado')
												->asArray()
												->joinWith('fkIdAccion')
												->joinWith('fkIdPeticionEstado')
												->where($condiQuery)
												->offset($_GET['start'])
												->limit($_GET['limit'])
												->all();
											for ($i=0; $i < sizeof($models); $i++) {
                            					unset($models[$i]['fkIdAccion']);
                            					unset($models[$i]['fkIdPeticionEstado']);
											}
           
				} else {

                    $filtros=array();
                    if (isset($_GET['filter']) && $_GET['filter']!='') {
                        
                        $filtros = Json::decode($_GET['filter']);
                        $contFil=1;
                        $condi="";
                        $sw = 0;

                        foreach($filtros as $filtro):
                            
                            if (in_array($filtro['property'],$listManyMany)) {
                                
                                $listSubQuery[] = PeticionArchivo010401::find()
                                				->distinct(true)
                                                ->with('fkIdAccion','fkIdPeticionEstado')
                                                ->asArray()
												->joinWith('fkIdAccion')
												->joinWith('fkIdPeticionEstado')
                                                ->where([$filtro['property']=>$filtro['value']])
                                                ->all();
                                $sw=1;	
                            } else {
                            	if (is_numeric($filtro['value']) && strpos($filtro['property'],'fk_id_') !== FALSE){ 
									$condi.= $contFil!=sizeof($filtros) ? $filtro['property']." = ".$filtro['value']." AND " : $filtro['property']." = ".$filtro['value'];
                                } else {
                                	if($filtro['property'] == "nombre_estado") {
										$estado = Estado010601::find()
													->where(['LIKE','nombre_estado',$filtro['value']])
													->one();
										$condi.= $contFil!=sizeof($filtros) ? "fk_id_estado"." LIKE '%".$estado->id_estado."%' AND " : "fk_id_estado"." LIKE '%".$estado->id_estado."%'";
                                	} else
                                	if ($filtro['property'] == "codigo_peticion_archivo_tipo"){
                                		//echo $filtro['property'];
                                		$petArch = PeticionArchivoTipo010404::find()
												->where(['codigo_peticion_archivo_tipo'=>$filtro['value']])
												->one();
										$id_peticion_archivo_tipo = isset($petArch) ? $petArch->id_peticion_archivo_tipo:0;
										$condi.= $contFil!=sizeof($filtros) ? "fk_id_peticion_archivo_tipo LIKE '%".$id_peticion_archivo_tipo."%' AND " : "fk_id_peticion_archivo_tipo LIKE '%".$id_peticion_archivo_tipo."%'";
									} else {
                                		$condi.= $contFil!=sizeof($filtros) ? $filtro['property']." LIKE '%".$filtro['value']."%' AND " : $filtro['property']." LIKE '%".$filtro['value']."%'";	
                               		}
                               }
                               $contFil++;
                            }
                        endforeach;
                        
                        if ($sw == 0) {

                        	$models = PeticionArchivo010401::find()
                            					->distinct(true)
                                                ->with('fkIdAccion','fkIdPeticionEstado'/*,'fkIdPeticionArchivoTipo'*/)
                                                ->asArray()
												->joinWith('fkIdAccion')
												->joinWith('fkIdPeticionEstado')
												//->joinWith('fkIdPeticionArchivoTipo')
                                                ->where($condi)
                                                ->all();
                            $total = sizeof($models);

                            $models = PeticionArchivo010401::find()
                            					->distinct(true)
                                                ->select ([
														'id_peticion_archivo',
														'fk_id_peticion_estado',
														'fk_id_accion',
														'nombre_peticion_archivo',
														'version_peticion_archivo',
														'activo_peticion_archivo',
														'descripcion_peticion_archivo',
														'tipo_peticion_archivo',
														'estado_peticion_archivo',
														'adicional_peticion_archivo',
														'escaneado_peticion_archivo',
														'fecha_creacion_peticion_archivo',
														'nombre_accion',
														'id_peticion_estado',
														])
                                                ->with('fkIdAccion','fkIdPeticionEstado'/*,'fkIdPeticionArchivoTipo'*/)
                                                ->asArray()
												->joinWith('fkIdAccion')
												->joinWith('fkIdPeticionEstado')
												//->joinWith('fkIdPeticionArchivoTipo','INNER JOIN')
                                                ->where($condi)
                                                ->orderby($propertySort." ".$directionSort)
                                                ->offset($_GET['start'])
                                                ->limit($_GET['limit'])
                                                ->all();

											for ($i=0; $i < sizeof($models); $i++) {
                            					unset($models[$i]['fkIdAccion']);
                            					unset($models[$i]['fkIdPeticionEstado']);
											}
                        	
                        } else {
                        	$models = PeticionArchivo010401::find()
                            					->distinct(true)
                                                ->with('fkIdAccion','fkIdPeticionEstado')
                                                ->asArray()
												->joinWith('fkIdAccion')
												->joinWith('fkIdPeticionEstado')
                                                ->where(['IN','id_peticion_archivo',$listSubQuery[0]])
                                                ->andWhere(['IN','id_peticion_archivo',$listSubQuery[sizeof($listSubQuery)-1]])
                            					->all();
                            $total = sizeof($models);
                            $models = PeticionArchivo010401::find()
                            					->distinct(true)
                                                ->select ([
														'id_peticion_archivo',
														'fk_id_peticion_estado',
														'fk_id_accion',
														'nombre_peticion_archivo',
														'version_peticion_archivo',
														'activo_peticion_archivo',
														'descripcion_peticion_archivo',
														'tipo_peticion_archivo',
														'estado_peticion_archivo',
														'adicional_peticion_archivo',
														'escaneado_peticion_archivo',
														'fecha_creacion_peticion_archivo',
														'nombre_accion',
														'id_peticion_estado',
														])
                                                ->with('fkIdAccion','fkIdPeticionEstado')
                                                ->asArray()
												->joinWith('fkIdAccion')
												->joinWith('fkIdPeticionEstado')
                                                ->where(['IN','id_peticion_archivo',$listSubQuery[0]])
                                                ->andWhere(['IN','id_peticion_archivo',$listSubQuery[sizeof($listSubQuery)-1]])
                                                ->orderby($propertySort." ".$directionSort)
                                                ->offset($_GET['start'])
                                                ->limit($_GET['limit'])
                                                ->all();
											for ($i=0; $i < sizeof($models); $i++) {
                            					unset($models[$i]['fkIdAccion']);
                            					unset($models[$i]['fkIdPeticionEstado']);
											}
                        }
                        
                    } else {
                    	$models = PeticionArchivo010401::find()
                        	->distinct(true)
                            ->with('fkIdAccion','fkIdPeticionEstado')
                            ->asArray()
							->joinWith('fkIdAccion')
							->joinWith('fkIdPeticionEstado')
							->all();
						$total = sizeof($models);
                        $models = PeticionArchivo010401::find()
                        	->distinct(true)
							 ->select ([
										'id_peticion_archivo',
										'fk_id_peticion_estado',
										'fk_id_accion',
										'nombre_peticion_archivo',
										'version_peticion_archivo',
										'activo_peticion_archivo',
										'descripcion_peticion_archivo',
										'tipo_peticion_archivo',
										'estado_peticion_archivo',
										'adicional_peticion_archivo',
										'escaneado_peticion_archivo',
										'fecha_creacion_peticion_archivo',
										'nombre_accion',
										'id_peticion_estado',
										])
                            ->with('fkIdAccion','fkIdPeticionEstado')
                            ->asArray()
							->joinWith('fkIdAccion')
							->joinWith('fkIdPeticionEstado')
                            ->orderby($propertySort." ".$directionSort)
                            ->offset($_GET['start'])
                            ->limit($_GET['limit'])
                            ->all();
						for ($i=0; $i < sizeof($models); $i++) {
                            unset($models[$i]['fkIdAccion']);
                            unset($models[$i]['fkIdPeticionEstado']);
						}
                    }
				}//if query	
				$respuesta->registros=$models;	
				$respuesta->total=$total;
			} catch (\Exception $e) {
				$error=$e->getMessage();
			}
			if ($error=="")	
				return $this->controller->renderPartial('read',['model'=>$respuesta,'callback'=>$_GET['callback']]);
			else {
				$respuesta->meta=array("success"=>"false","msg"=>$error);
				return $this->controller->renderPartial('read',['model'=>$respuesta,'callback'=>$_GET['callback']]);
			}
		} else {
			$respuesta->meta=array("success"=>"false","msg"=>$error);
			return $this->controller->renderPartial('read',['model'=>$respuesta,'callback'=>'']);
		}
    }
}