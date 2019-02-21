<?php

namespace app\controllers;

namespace app\controllers\Proceso010101;
use yii\base\Action;
use app\models\Proceso010101;
use yii\base\Exception;
use yii\helpers\Json;
use app\models\CTQ;
use yii\db\Query;

class ReadAction extends Action
{
    public function run()
    {
		$respuesta=new \stdClass();
		$model = new Proceso010101;
		$error="";
		$error.= (!isset($_GET['callback'])) ? "{ Error de Callback } " : "";
        $error.= (!isset($_GET['start'])) ? "{ Error de start } " : "";
        $error.= (!isset($_GET['limit'])) ? "{ Error de limit } " : "";
        $listManyMany = [
						'fk_id_usuario',
        				];

		if ($error == "") {
			try {
				if (isset($_GET['sort'])) {
					$sort=Json::decode($_GET['sort']);
					$propertySort	= $sort[0]['property'];
					$directionSort	= $sort[0]['direction'];
				} else {
					$propertySort	= "id_proceso";
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
                    $models = Proceso010101::find()
                    							->distinct(true)
												->with('accion010201s','transicion010202s','usuarioProceso000102s')
												->asArray()
												->joinWith('accion010201s')
												->joinWith('actividad010501s')
												->joinWith('estado010601s')
												->joinWith('peticion010401s')
												->joinWith('transicion010202s')
												->joinWith('usuarioProceso000102s')
												->joinWith('fkIdUsuarios')
												->where($condiQuery)
                                                ->all();
                    $total = sizeof($models);
					$models = Proceso010101::find()
                    							->distinct(true)
												->with('accion010201s','transicion010202s','usuarioProceso000102s')
												->asArray()
												->joinWith('accion010201s')
												->joinWith('transicion010202s')
												->joinWith('usuarioProceso000102s')
												->where($condiQuery)
												->offset($_GET['start'])
												->limit($_GET['limit'])
												->all();
											for ($i=0; $i < sizeof($models); $i++) {
											}
           
					for ($i=0; $i < sizeof($models); $i++) {
						$aux=array();
						for ($j=0; $j < sizeof($models[$i]['transicion010202s']); $j++){
							$aux[] = $models[$i]['transicion010202s'][$j]['fk_id_estado_siguiente'];	
						}
						$models[$i]['transicion010202s'] = $aux;
					}
					for ($i=0; $i < sizeof($models); $i++) {
						$aux=array();
						for ($j=0; $j < sizeof($models[$i]['usuarioProceso000102s']); $j++){
							$aux[] = $models[$i]['usuarioProceso000102s'][$j]['fk_id_usuario'];	
						}
						$models[$i]['usuarioProceso000102s'] = $aux;
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
                                
                                $listSubQuery[] = Proceso010101::find()
                                				->distinct(true)
                                                ->with('accion010201s','transicion010202s','usuarioProceso000102s')
                                                ->asArray()
												->joinWith('accion010201s')
												->joinWith('transicion010202s')
												->joinWith('usuarioProceso000102s')
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
                        	$models = Proceso010101::find()
                            					->distinct(true)
                                                ->with('accion010201s','transicion010202s','usuarioProceso000102s')
                                                ->asArray()
												->joinWith('accion010201s')
												->joinWith('transicion010202s')
												->joinWith('usuarioProceso000102s')
                                                ->where($condi)
                                                ->all();
                            $total = sizeof($models);
                            $models = Proceso010101::find()
                            					->distinct(true)
                                                ->select ([
														'id_proceso',
														'nombre_proceso',
														'valor_proceso',
														])
                                                ->with('accion010201s','transicion010202s','usuarioProceso000102s')
                                                ->asArray()
												->joinWith('accion010201s')
												->joinWith('transicion010202s')
												->joinWith('usuarioProceso000102s')
                                                ->where($condi)
                                                ->orderby($propertySort." ".$directionSort)
                                                ->offset($_GET['start'])
                                                ->limit($_GET['limit'])
                                                ->all();
											for ($i=0; $i < sizeof($models); $i++) {
											}
                            for ($i=0; $i < sizeof($models); $i++) {
                                $aux=array();
                                for($j=0; $j < sizeof($models[$i]['transicion010202s']); $j++){
                                    $aux[] = $models[$i]['transicion010202s'][$j]['fk_id_estado_siguiente'];	
                                }
                                $models[$i]['transicion010202s'] = $aux;
                            }
                            for ($i=0; $i < sizeof($models); $i++) {
                                $aux=array();
                                for($j=0; $j < sizeof($models[$i]['usuarioProceso000102s']); $j++){
                                    $aux[] = $models[$i]['usuarioProceso000102s'][$j]['fk_id_usuario'];	
                                }
                                $models[$i]['usuarioProceso000102s'] = $aux;
                            }
                        } else {
                        	$models = Proceso010101::find()
                            					->distinct(true)
                                                ->with('accion010201s','transicion010202s','usuarioProceso000102s')
                                                ->asArray()
							->joinWith('accion010201s')
							->joinWith('transicion010202s')
							->joinWith('usuarioProceso000102s')
                                                ->where(['IN','id_proceso',$listSubQuery[0]])
                                                ->andWhere(['IN','id_proceso',$listSubQuery[sizeof($listSubQuery)-1]])
                            					->all();
                            $total = sizeof($models);
                            $models = Proceso010101::find()
                            					->distinct(true)
                                                ->select ([
														'id_proceso',
														'nombre_proceso',
														'valor_proceso',
														])
                                                ->with('accion010201s','transicion010202s','usuarioProceso000102s')
                                                ->asArray()
												->joinWith('accion010201s')
												->joinWith('transicion010202s')
												->joinWith('usuarioProceso000102s')
                                                ->where(['IN','id_proceso',$listSubQuery[0]])
                                                ->andWhere(['IN','id_proceso',$listSubQuery[sizeof($listSubQuery)-1]])
                                                ->orderby($propertySort." ".$directionSort)
                                                ->offset($_GET['start'])
                                                ->limit($_GET['limit'])
                                                ->all();
											for ($i=0; $i < sizeof($models); $i++) {
											}
                            for ($i=0; $i < sizeof($models); $i++) {
                                $aux=array();
                                for($j=0; $j < sizeof($models[$i]['transicion010202s']); $j++){
                                    $aux[] = $models[$i]['transicion010202s'][$j]['fk_id_estado_siguiente'];	
                                }
                                $models[$i]['transicion010202s'] = $aux;
                            }
                            for ($i=0; $i < sizeof($models); $i++) {
                                $aux=array();
                                for($j=0; $j < sizeof($models[$i]['usuarioProceso000102s']); $j++){
                                    $aux[] = $models[$i]['usuarioProceso000102s'][$j]['fk_id_usuario'];	
                                }
                                $models[$i]['usuarioProceso000102s'] = $aux;
                            }
                        }
                        
                    } else {
                    	$models = Proceso010101::find()
                        	->distinct(true)
                            ->with('accion010201s','transicion010202s','usuarioProceso000102s')
                            ->asArray()
							->all();
						$total = sizeof($models);
                        $models = Proceso010101::find()
                        	->distinct(true)
							 ->select ([
										'id_proceso',
										'nombre_proceso',
										'valor_proceso',
										])
                            ->with('accion010201s','transicion010202s','usuarioProceso000102s')
                            ->asArray()
                            ->orderby($propertySort." ".$directionSort)
                            ->offset($_GET['start'])
                            ->limit($_GET['limit'])
                            ->all();
						for ($i=0; $i < sizeof($models); $i++) {
						}
						for ($i=0; $i < sizeof($models); $i++) {
							$aux=array();
							for($j=0; $j < sizeof($models[$i]['transicion010202s']); $j++){
								$aux[] = $models[$i]['transicion010202s'][$j]['fk_id_estado_siguiente'];
							}
							$models[$i]['transicion010202s'] = $aux;
						}
						for ($i=0; $i < sizeof($models); $i++) {
							$aux=array();
							for($j=0; $j < sizeof($models[$i]['usuarioProceso000102s']); $j++){
								$aux[] = $models[$i]['usuarioProceso000102s'][$j]['fk_id_usuario'];
							}
							$models[$i]['usuarioProceso000102s'] = $aux;
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