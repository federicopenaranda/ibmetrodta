<?php

namespace app\controllers;

namespace app\controllers\Transicion010202;
use yii\base\Action;
use app\models\Transicion010202;
use yii\base\Exception;
use yii\helpers\Json;
use app\models\CTQ;
use yii\db\Query;

class ReadAction extends Action
{
    public function run()
    {
		$respuesta=new \stdClass();
		$model = new Transicion010202;
		$error="";
		$error.= (!isset($_GET['callback'])) ? "{ Error de Callback } " : "";
        $error.= (!isset($_GET['start'])) ? "{ Error de start } " : "";
        $error.= (!isset($_GET['limit'])) ? "{ Error de limit } " : "";
        $listManyMany = [
						'fk_id_accion',
						'fk_id_actividad',
        				];

		if ($error == "") {
			try {
				if (isset($_GET['sort'])) {
					$sort=Json::decode($_GET['sort']);
					$propertySort	= $sort[0]['property'];
					$directionSort	= $sort[0]['direction'];
				} else {
					$propertySort	= "id_transicion";
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
                    $models = Transicion010202::find()
                    							->distinct(true)
												->with('accionTransicion010202s','actividadTransicion010502s','fkIdProceso','fkIdEstadoActual','fkIdEstadoSiguiente')
												->asArray()
												->joinWith('accionTransicion010202s')
												->joinWith('fkIdAccions')
												->joinWith('actividadTransicion010502s')
												->joinWith('fkIdActividads')
												->joinWith('peticionAccion010301s')
												->joinWith('fkIdProceso')
												->joinWith('fkIdEstadoActual')
												->joinWith('fkIdEstadoSiguiente')
												->where($condiQuery)
                                                ->all();
                    $total = sizeof($models);
					$models = Transicion010202::find()
                    							->distinct(true)
												->with('accionTransicion010202s','actividadTransicion010502s','fkIdProceso','fkIdEstadoActual','fkIdEstadoSiguiente')
												->asArray()
												->joinWith('accionTransicion010202s')
												->joinWith('actividadTransicion010502s')
												->joinWith('fkIdProceso')
												->joinWith('fkIdEstadoActual')
												->joinWith('fkIdEstadoSiguiente')
												->where($condiQuery)
												->offset($_GET['start'])
												->limit($_GET['limit'])
												->all();
											for ($i=0; $i < sizeof($models); $i++) {
                            					unset($models[$i]['fkIdProceso']);
                            					unset($models[$i]['fkIdEstadoActual']);
                            					unset($models[$i]['fkIdEstadoSiguiente']);
											}
           
					for ($i=0; $i < sizeof($models); $i++) {
						$aux=array();
						for ($j=0; $j < sizeof($models[$i]['accionTransicion010202s']); $j++){
							$aux[] = $models[$i]['accionTransicion010202s'][$j]['fk_id_accion'];	
						}
						$models[$i]['accionTransicion010202s'] = $aux;
					}
					for ($i=0; $i < sizeof($models); $i++) {
						$aux=array();
						for ($j=0; $j < sizeof($models[$i]['actividadTransicion010502s']); $j++){
							$aux[] = $models[$i]['actividadTransicion010502s'][$j]['fk_id_actividad'];	
						}
						$models[$i]['actividadTransicion010502s'] = $aux;
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
                                
                                $listSubQuery[] = Transicion010202::find()
                                				->distinct(true)
                                                ->with('accionTransicion010202s','actividadTransicion010502s','fkIdProceso','fkIdEstadoActual','fkIdEstadoSiguiente')
                                                ->asArray()
												->joinWith('accionTransicion010202s')
												->joinWith('actividadTransicion010502s')
												->joinWith('fkIdProceso')
												->joinWith('fkIdEstadoActual')
												->joinWith('fkIdEstadoSiguiente')
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
                        	$models = Transicion010202::find()
                            					->distinct(true)
                                                ->with('accionTransicion010202s','actividadTransicion010502s','fkIdProceso','fkIdEstadoActual','fkIdEstadoSiguiente')
                                                ->asArray()
												->joinWith('accionTransicion010202s')
												->joinWith('actividadTransicion010502s')
												->joinWith('fkIdProceso')
												->joinWith('fkIdEstadoActual')
												->joinWith('fkIdEstadoSiguiente')
                                                ->where($condi)
                                                ->all();
                            $total = sizeof($models);
                            $models = Transicion010202::find()
                            					->distinct(true)
                                                ->select ([
														'id_transicion',
														'fk_id_proceso',
														'fk_id_estado_actual',
														'fk_id_estado_siguiente',

														'nombre_proceso',

														'nombre_estado',

														'nombre_estado',
														])
                                                ->with('accionTransicion010202s','actividadTransicion010502s','fkIdProceso','fkIdEstadoActual','fkIdEstadoSiguiente')
                                                ->asArray()
												->joinWith('accionTransicion010202s')
												->joinWith('actividadTransicion010502s')
												->joinWith('fkIdProceso')
												->joinWith('fkIdEstadoActual')
												->joinWith('fkIdEstadoSiguiente')
                                                ->where($condi)
                                                ->orderby($propertySort." ".$directionSort)
                                                ->offset($_GET['start'])
                                                ->limit($_GET['limit'])
                                                ->all();
											for ($i=0; $i < sizeof($models); $i++) {
                            					unset($models[$i]['fkIdProceso']);
                            					unset($models[$i]['fkIdEstadoActual']);
                            					unset($models[$i]['fkIdEstadoSiguiente']);
											}
                            for ($i=0; $i < sizeof($models); $i++) {
                                $aux=array();
                                for($j=0; $j < sizeof($models[$i]['accionTransicion010202s']); $j++){
                                    $aux[] = $models[$i]['accionTransicion010202s'][$j]['fk_id_accion'];	
                                }
                                $models[$i]['accionTransicion010202s'] = $aux;
                            }
                            for ($i=0; $i < sizeof($models); $i++) {
                                $aux=array();
                                for($j=0; $j < sizeof($models[$i]['actividadTransicion010502s']); $j++){
                                    $aux[] = $models[$i]['actividadTransicion010502s'][$j]['fk_id_actividad'];	
                                }
                                $models[$i]['actividadTransicion010502s'] = $aux;
                            }
                        } else {
                        	$models = Transicion010202::find()
                            					->distinct(true)
                                                ->with('accionTransicion010202s','actividadTransicion010502s','fkIdProceso','fkIdEstadoActual','fkIdEstadoSiguiente')
                                                ->asArray()
							->joinWith('accionTransicion010202s')
							->joinWith('actividadTransicion010502s')
							->joinWith('fkIdProceso')
							->joinWith('fkIdEstadoActual')
							->joinWith('fkIdEstadoSiguiente')
                                                ->where(['IN','id_transicion',$listSubQuery[0]])
                                                ->andWhere(['IN','id_transicion',$listSubQuery[sizeof($listSubQuery)-1]])
                            					->all();
                            $total = sizeof($models);
                            $models = Transicion010202::find()
                            					->distinct(true)
                                                ->select ([
														'id_transicion',
														'fk_id_proceso',
														'fk_id_estado_actual',
														'fk_id_estado_siguiente',
														'nombre_proceso',
														'nombre_estado',
														'nombre_estado',
														])
                                                ->with('accionTransicion010202s','actividadTransicion010502s','fkIdProceso','fkIdEstadoActual','fkIdEstadoSiguiente')
                                                ->asArray()
												->joinWith('accionTransicion010202s')
												->joinWith('actividadTransicion010502s')
												->joinWith('fkIdProceso')
												->joinWith('fkIdEstadoActual')
												->joinWith('fkIdEstadoSiguiente')
                                                ->where(['IN','id_transicion',$listSubQuery[0]])
                                                ->andWhere(['IN','id_transicion',$listSubQuery[sizeof($listSubQuery)-1]])
                                                ->orderby($propertySort." ".$directionSort)
                                                ->offset($_GET['start'])
                                                ->limit($_GET['limit'])
                                                ->all();
											for ($i=0; $i < sizeof($models); $i++) {
                            					unset($models[$i]['fkIdProceso']);
                            					unset($models[$i]['fkIdEstadoActual']);
                            					unset($models[$i]['fkIdEstadoSiguiente']);
											}
                            for ($i=0; $i < sizeof($models); $i++) {
                                $aux=array();
                                for($j=0; $j < sizeof($models[$i]['accionTransicion010202s']); $j++){
                                    $aux[] = $models[$i]['accionTransicion010202s'][$j]['fk_id_accion'];	
                                }
                                $models[$i]['accionTransicion010202s'] = $aux;
                            }
                            for ($i=0; $i < sizeof($models); $i++) {
                                $aux=array();
                                for($j=0; $j < sizeof($models[$i]['actividadTransicion010502s']); $j++){
                                    $aux[] = $models[$i]['actividadTransicion010502s'][$j]['fk_id_actividad'];	
                                }
                                $models[$i]['actividadTransicion010502s'] = $aux;
                            }
                        }
                        
                    } else {
                    	$models = Transicion010202::find()
                        	->distinct(true)
                            ->with('accionTransicion010202s','actividadTransicion010502s','fkIdProceso','fkIdEstadoActual','fkIdEstadoSiguiente')
                            ->asArray()
							->joinWith('fkIdProceso')
							->joinWith('fkIdEstadoActual')
							->joinWith('fkIdEstadoSiguiente')
							->all();
						$total = sizeof($models);
                        $models = Transicion010202::find()
                        	->distinct(true)
							 ->select ([
										'id_transicion',
										'fk_id_proceso',
										'fk_id_estado_actual',
										'fk_id_estado_siguiente',
										'nombre_proceso',
										'nombre_estado',
										'nombre_estado',
										])
                            ->with('accionTransicion010202s','actividadTransicion010502s','fkIdProceso','fkIdEstadoActual','fkIdEstadoSiguiente')
                            ->asArray()
							->joinWith('fkIdProceso')
							->joinWith('fkIdEstadoActual')
							->joinWith('fkIdEstadoSiguiente')
                            ->orderby($propertySort." ".$directionSort)
                            ->offset($_GET['start'])
                            ->limit($_GET['limit'])
                            ->all();
						for ($i=0; $i < sizeof($models); $i++) {
                            unset($models[$i]['fkIdProceso']);
                            unset($models[$i]['fkIdEstadoActual']);
                            unset($models[$i]['fkIdEstadoSiguiente']);
						}
						for ($i=0; $i < sizeof($models); $i++) {
							$aux=array();
							for($j=0; $j < sizeof($models[$i]['accionTransicion010202s']); $j++){
								$aux[] = $models[$i]['accionTransicion010202s'][$j]['fk_id_accion'];
							}
							$models[$i]['accionTransicion010202s'] = $aux;
						}
						for ($i=0; $i < sizeof($models); $i++) {
							$aux=array();
							for($j=0; $j < sizeof($models[$i]['actividadTransicion010502s']); $j++){
								$aux[] = $models[$i]['actividadTransicion010502s'][$j]['fk_id_actividad'];
							}
							$models[$i]['actividadTransicion010502s'] = $aux;
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