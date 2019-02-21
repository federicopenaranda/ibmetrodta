<?php

namespace app\controllers;

namespace app\controllers\Accion010201;
use yii\base\Action;
use app\models\Accion010201;
use yii\base\Exception;
use yii\helpers\Json;
use app\models\CTQ;
use yii\db\Query;

class ReadAction extends Action
{
    public function run()
    {
		$respuesta=new \stdClass();
		$model = new Accion010201;
		$error="";
		$error.= (!isset($_GET['callback'])) ? "{ Error de Callback } " : "";
        $error.= (!isset($_GET['start'])) ? "{ Error de start } " : "";
        $error.= (!isset($_GET['limit'])) ? "{ Error de limit } " : "";
        $listManyMany = [
						'fk_id_transicion',
        				];

		if ($error == "") {
			try {
				if (isset($_GET['sort'])) {
					$sort=Json::decode($_GET['sort']);
					$propertySort	= $sort[0]['property'];
					$directionSort	= $sort[0]['direction'];
				} else {
					$propertySort	= "id_accion";
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
                    $models = Accion010201::find()
                    							->distinct(true)
												->with('fkIdAccionTipo','fkIdProceso','accionTransicion010202s')
												->asArray()
												->joinWith('fkIdAccionTipo')
												->joinWith('fkIdProceso')
												->joinWith('accionTransicion010202s')
												->joinWith('fkIdTransicions')
												->joinWith('obsPeticionAccion010303s')
												->joinWith('peticionAccion010301s')
												->joinWith('peticionArchivo010401s')
												->where($condiQuery)
                                                ->all();
                    $total = sizeof($models);
					$models = Accion010201::find()
                    							->distinct(true)
												->with('fkIdAccionTipo','fkIdProceso','accionTransicion010202s')
												->asArray()
												->joinWith('fkIdAccionTipo')
												->joinWith('fkIdProceso')
												->joinWith('accionTransicion010202s')
												->where($condiQuery)
												->offset($_GET['start'])
												->limit($_GET['limit'])
												->all();
											for ($i=0; $i < sizeof($models); $i++) {
                            					unset($models[$i]['fkIdAccionTipo']);
                            					unset($models[$i]['fkIdProceso']);
											}
           
					for ($i=0; $i < sizeof($models); $i++) {
						$aux=array();
						for ($j=0; $j < sizeof($models[$i]['accionTransicion010202s']); $j++){
							$aux[] = $models[$i]['accionTransicion010202s'][$j]['fk_id_transicion'];	
						}
						$models[$i]['accionTransicion010202s'] = $aux;
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
                                
                                $listSubQuery[] = Accion010201::find()
                                				->distinct(true)
                                                ->with('fkIdAccionTipo','fkIdProceso','accionTransicion010202s')
                                                ->asArray()
												->joinWith('fkIdAccionTipo')
												->joinWith('fkIdProceso')
												->joinWith('accionTransicion010202s')
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
                        	$models = Accion010201::find()
                            					->distinct(true)
                                                ->with('fkIdAccionTipo','fkIdProceso','accionTransicion010202s')
                                                ->asArray()
												->joinWith('fkIdAccionTipo')
												->joinWith('fkIdProceso')
												->joinWith('accionTransicion010202s')
                                                ->where($condi)
                                                ->all();
                            $total = sizeof($models);
                            $models = Accion010201::find()
                            					->distinct(true)
                                                ->select ([
														'id_accion',
														'fk_id_accion_tipo',
														'fk_id_proceso',
														'nombre_accion',
														'descripcion_accion',

														'nombre_accion_tipo',

														'nombre_proceso',
														])
                                                ->with('fkIdAccionTipo','fkIdProceso','accionTransicion010202s')
                                                ->asArray()
												->joinWith('fkIdAccionTipo')
												->joinWith('fkIdProceso')
												->joinWith('accionTransicion010202s')
                                                ->where($condi)
                                                ->orderby($propertySort." ".$directionSort)
                                                ->offset($_GET['start'])
                                                ->limit($_GET['limit'])
                                                ->all();
											for ($i=0; $i < sizeof($models); $i++) {
                            					unset($models[$i]['fkIdAccionTipo']);
                            					unset($models[$i]['fkIdProceso']);
											}
                            for ($i=0; $i < sizeof($models); $i++) {
                                $aux=array();
                                for($j=0; $j < sizeof($models[$i]['accionTransicion010202s']); $j++){
                                    $aux[] = $models[$i]['accionTransicion010202s'][$j]['fk_id_transicion'];	
                                }
                                $models[$i]['accionTransicion010202s'] = $aux;
                            }
                        } else {
                        	$models = Accion010201::find()
                            					->distinct(true)
                                                ->with('fkIdAccionTipo','fkIdProceso','accionTransicion010202s')
                                                ->asArray()
							->joinWith('fkIdAccionTipo')
							->joinWith('fkIdProceso')
							->joinWith('accionTransicion010202s')
                                                ->where(['IN','id_accion',$listSubQuery[0]])
                                                ->andWhere(['IN','id_accion',$listSubQuery[sizeof($listSubQuery)-1]])
                            					->all();
                            $total = sizeof($models);
                            $models = Accion010201::find()
                            					->distinct(true)
                                                ->select ([
														'id_accion',
														'fk_id_accion_tipo',
														'fk_id_proceso',
														'nombre_accion',
														'descripcion_accion',
														'nombre_accion_tipo',
														'nombre_proceso',
														])
                                                ->with('fkIdAccionTipo','fkIdProceso','accionTransicion010202s')
                                                ->asArray()
												->joinWith('fkIdAccionTipo')
												->joinWith('fkIdProceso')
												->joinWith('accionTransicion010202s')
                                                ->where(['IN','id_accion',$listSubQuery[0]])
                                                ->andWhere(['IN','id_accion',$listSubQuery[sizeof($listSubQuery)-1]])
                                                ->orderby($propertySort." ".$directionSort)
                                                ->offset($_GET['start'])
                                                ->limit($_GET['limit'])
                                                ->all();
											for ($i=0; $i < sizeof($models); $i++) {
                            					unset($models[$i]['fkIdAccionTipo']);
                            					unset($models[$i]['fkIdProceso']);
											}
                            for ($i=0; $i < sizeof($models); $i++) {
                                $aux=array();
                                for($j=0; $j < sizeof($models[$i]['accionTransicion010202s']); $j++){
                                    $aux[] = $models[$i]['accionTransicion010202s'][$j]['fk_id_transicion'];	
                                }
                                $models[$i]['accionTransicion010202s'] = $aux;
                            }
                        }
                        
                    } else {
                    	$models = Accion010201::find()
                        	->distinct(true)
                            ->with('fkIdAccionTipo','fkIdProceso','accionTransicion010202s')
                            ->asArray()
							->joinWith('fkIdAccionTipo')
							->joinWith('fkIdProceso')
							->all();
						$total = sizeof($models);
                        $models = Accion010201::find()
                        	->distinct(true)
							 ->select ([
										'id_accion',
										'fk_id_accion_tipo',
										'fk_id_proceso',
										'nombre_accion',
										'descripcion_accion',
										'nombre_accion_tipo',
										'nombre_proceso',
										])
                            ->with('fkIdAccionTipo','fkIdProceso','accionTransicion010202s')
                            ->asArray()
							->joinWith('fkIdAccionTipo')
							->joinWith('fkIdProceso')
                            ->orderby($propertySort." ".$directionSort)
                            ->offset($_GET['start'])
                            ->limit($_GET['limit'])
                            ->all();
						for ($i=0; $i < sizeof($models); $i++) {
                            unset($models[$i]['fkIdAccionTipo']);
                            unset($models[$i]['fkIdProceso']);
						}
						for ($i=0; $i < sizeof($models); $i++) {
							$aux=array();
							for($j=0; $j < sizeof($models[$i]['accionTransicion010202s']); $j++){
								$aux[] = $models[$i]['accionTransicion010202s'][$j]['fk_id_transicion'];
							}
							$models[$i]['accionTransicion010202s'] = $aux;
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