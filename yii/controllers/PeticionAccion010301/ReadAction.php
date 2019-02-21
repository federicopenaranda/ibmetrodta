<?php

namespace app\controllers;

namespace app\controllers\PeticionAccion010301;
use yii\base\Action;
use app\models\PeticionAccion010301;
use yii\base\Exception;
use yii\helpers\Json;
use app\models\CTQ;
use yii\db\Query;

class ReadAction extends Action
{
    public function run()
    {
		$respuesta=new \stdClass();
		$model = new PeticionAccion010301;
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
					$propertySort	= "id_peticion_accion";
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
                    $models = PeticionAccion010301::find()
                    							->distinct(true)
												->with('fkIdAccion','fkIdTransicion','fkIdUsuario','fkIdPeticion')
												->asArray()
												->joinWith('fkIdAccion')
												->joinWith('fkIdTransicion')
												->joinWith('fkIdUsuario')
												->joinWith('fkIdPeticion')
												->where($condiQuery)
                                                ->all();
                    $total = sizeof($models);
					$models = PeticionAccion010301::find()
                    							->distinct(true)
												->with('fkIdAccion','fkIdTransicion','fkIdUsuario','fkIdPeticion')
												->asArray()
												->joinWith('fkIdAccion')
												->joinWith('fkIdTransicion')
												->joinWith('fkIdUsuario')
												->joinWith('fkIdPeticion')
												->where($condiQuery)
												->offset($_GET['start'])
												->limit($_GET['limit'])
												->all();
											for ($i=0; $i < sizeof($models); $i++) {
                            					unset($models[$i]['fkIdAccion']);
                            					unset($models[$i]['fkIdTransicion']);
                            					unset($models[$i]['fkIdUsuario']);
                            					unset($models[$i]['fkIdPeticion']);
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
                                
                                $listSubQuery[] = PeticionAccion010301::find()
                                				->distinct(true)
                                                ->with('fkIdAccion','fkIdTransicion','fkIdUsuario','fkIdPeticion')
                                                ->asArray()
												->joinWith('fkIdAccion')
												->joinWith('fkIdTransicion')
												->joinWith('fkIdUsuario')
												->joinWith('fkIdPeticion')
                                                ->where([$filtro['property']=>$filtro['value']])
                                                ->all();
                                $sw=1;	
                            } else {
                            	if (is_numeric($filtro['value']) && strpos($filtro['property'],'fk_id_') !== FALSE) 
									$condi.= $contFil!=sizeof($filtros) ? $filtro['property']." = ".$filtro['value']." AND " : $filtro['property']." = ".$filtro['value'];
                                else
                                	$condi.= $contFil!=sizeof($filtros) ? $filtro['property']." LIKE '%".$filtro['value']."%' AND " : $filtro['property']." LIKE '%".$filtro['value']."%'";	
                                $contFil++;
                            }
                        endforeach;
                        if ($sw == 0) {
                        	$models = PeticionAccion010301::find()
                            					->distinct(true)
                                                ->with('fkIdAccion','fkIdTransicion','fkIdUsuario','fkIdPeticion')
                                                ->asArray()
												->joinWith('fkIdAccion')
												->joinWith('fkIdTransicion')
												->joinWith('fkIdUsuario')
												->joinWith('fkIdPeticion')
                                                ->where($condi)
                                                ->all();
                            $total = sizeof($models);
                            $models = PeticionAccion010301::find()
                            					->distinct(true)
                                                ->select ([
														'id_peticion_accion',
														'fk_id_peticion',
														'fk_id_accion',
														'fk_id_transicion',
														'peticion_accion_01_03_01.fk_id_usuario',
														'completa_peticion_accion',
														'activa_peticion_accion',
														'observacion_peticion_accion',
														'fecha_creacion_peticion_accion',

														'nombre_accion',

														'id_transicion',

														'codigo_usuario',

														'titulo_peticion',
														])
                                                ->with('fkIdAccion','fkIdTransicion','fkIdUsuario','fkIdPeticion')
                                                ->asArray()
												->joinWith('fkIdAccion')
												->joinWith('fkIdTransicion')
												->joinWith('fkIdUsuario')
												->joinWith('fkIdPeticion')
                                                ->where($condi)
                                                ->orderby($propertySort." ".$directionSort)
                                                ->offset($_GET['start'])
                                                ->limit($_GET['limit'])
                                                ->all();
											for ($i=0; $i < sizeof($models); $i++) {
                            					unset($models[$i]['fkIdAccion']);
                            					unset($models[$i]['fkIdTransicion']);
                            					unset($models[$i]['fkIdUsuario']);
                            					unset($models[$i]['fkIdPeticion']);
											}
                        } else {
                        	$models = PeticionAccion010301::find()
                            					->distinct(true)
                                                ->with('fkIdAccion','fkIdTransicion','fkIdUsuario','fkIdPeticion')
                                                ->asArray()
							->joinWith('fkIdAccion')
							->joinWith('fkIdTransicion')
							->joinWith('fkIdUsuario')
							->joinWith('fkIdPeticion')
                                                ->where(['IN','id_peticion_accion',$listSubQuery[0]])
                                                ->andWhere(['IN','id_peticion_accion',$listSubQuery[sizeof($listSubQuery)-1]])
                            					->all();
                            $total = sizeof($models);
                            $models = PeticionAccion010301::find()
                            					->distinct(true)
                                                ->select ([
														'id_peticion_accion',
														'fk_id_peticion',
														'fk_id_accion',
														'fk_id_transicion',
														'peticion_accion_01_03_01.fk_id_usuario',
														'completa_peticion_accion',
														'activa_peticion_accion',
														'observacion_peticion_accion',
														'fecha_creacion_peticion_accion',
														'nombre_accion',
														'id_transicion',
														'codigo_usuario',
														'titulo_peticion',
														])
                                                ->with('fkIdAccion','fkIdTransicion','fkIdUsuario','fkIdPeticion')
                                                ->asArray()
												->joinWith('fkIdAccion')
												->joinWith('fkIdTransicion')
												->joinWith('fkIdUsuario')
												->joinWith('fkIdPeticion')
                                                ->where(['IN','id_peticion_accion',$listSubQuery[0]])
                                                ->andWhere(['IN','id_peticion_accion',$listSubQuery[sizeof($listSubQuery)-1]])
                                                ->orderby($propertySort." ".$directionSort)
                                                ->offset($_GET['start'])
                                                ->limit($_GET['limit'])
                                                ->all();
											for ($i=0; $i < sizeof($models); $i++) {
                            					unset($models[$i]['fkIdAccion']);
                            					unset($models[$i]['fkIdTransicion']);
                            					unset($models[$i]['fkIdUsuario']);
                            					unset($models[$i]['fkIdPeticion']);
											}
                        }
                        
                    } else {
                    	$models = PeticionAccion010301::find()
                        	->distinct(true)
                            ->with('fkIdAccion','fkIdTransicion','fkIdUsuario','fkIdPeticion')
                            ->asArray()
							->joinWith('fkIdAccion')
							->joinWith('fkIdTransicion')
							->joinWith('fkIdUsuario')
							->joinWith('fkIdPeticion')
							->all();
						$total = sizeof($models);
                        $models = PeticionAccion010301::find()
                        	->distinct(true)
							 ->select ([
										'id_peticion_accion',
										'fk_id_peticion',
										'fk_id_accion',
										'fk_id_transicion',
										'peticion_accion_01_03_01.fk_id_usuario',
										'completa_peticion_accion',
										'activa_peticion_accion',
										'observacion_peticion_accion',
										'fecha_creacion_peticion_accion',
										'nombre_accion',
										'id_transicion',
										'codigo_usuario',
										'titulo_peticion',
										])
                            ->with('fkIdAccion','fkIdTransicion','fkIdUsuario','fkIdPeticion')
                            ->asArray()
							->joinWith('fkIdAccion')
							->joinWith('fkIdTransicion')
							->joinWith('fkIdUsuario')
							->joinWith('fkIdPeticion')
                            ->orderby($propertySort." ".$directionSort)
                            ->offset($_GET['start'])
                            ->limit($_GET['limit'])
                            ->all();
						for ($i=0; $i < sizeof($models); $i++) {
                            unset($models[$i]['fkIdAccion']);
                            unset($models[$i]['fkIdTransicion']);
                            unset($models[$i]['fkIdUsuario']);
                            unset($models[$i]['fkIdPeticion']);
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