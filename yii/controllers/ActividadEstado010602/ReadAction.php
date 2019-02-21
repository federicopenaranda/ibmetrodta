<?php

namespace app\controllers;

namespace app\controllers\ActividadEstado010602;
use yii\base\Action;
use app\models\ActividadEstado010602;
use yii\base\Exception;
use yii\helpers\Json;
use app\models\CTQ;
use yii\db\Query;

class ReadAction extends Action
{
    public function run()
    {
		$respuesta=new \stdClass();
		$model = new ActividadEstado010602;
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
					$propertySort	= "fk_id_actividad";
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
                    $models = ActividadEstado010602::find()
                    							->distinct(true)
												->with('fkIdActividad','fkIdEstado')
												->asArray()
												->joinWith('fkIdActividad')
												->joinWith('fkIdEstado')
												->where($condiQuery)
                                                ->all();
                    $total = sizeof($models);
					$models = ActividadEstado010602::find()
                    							->distinct(true)
												->with('fkIdActividad','fkIdEstado')
												->asArray()
												->joinWith('fkIdActividad')
												->joinWith('fkIdEstado')
												->where($condiQuery)
												->offset($_GET['start'])
												->limit($_GET['limit'])
												->all();
											for ($i=0; $i < sizeof($models); $i++) {
                            					unset($models[$i]['fkIdActividad']);
                            					unset($models[$i]['fkIdEstado']);
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
                                
                                $listSubQuery[] = ActividadEstado010602::find()
                                				->distinct(true)
                                                ->with('fkIdActividad','fkIdEstado')
                                                ->asArray()
												->joinWith('fkIdActividad')
												->joinWith('fkIdEstado')
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
                        	$models = ActividadEstado010602::find()
                            					->distinct(true)
                                                ->with('fkIdActividad','fkIdEstado')
                                                ->asArray()
												->joinWith('fkIdActividad')
												->joinWith('fkIdEstado')
                                                ->where($condi)
                                                ->all();
                            $total = sizeof($models);
                            $models = ActividadEstado010602::find()
                            					->distinct(true)
                                                ->select ([
														'fk_id_actividad',
														'fk_id_estado',

														'nombre_actividad',

														'nombre_estado',
														])
                                                ->with('fkIdActividad','fkIdEstado')
                                                ->asArray()
												->joinWith('fkIdActividad')
												->joinWith('fkIdEstado')
                                                ->where($condi)
                                                ->orderby($propertySort." ".$directionSort)
                                                ->offset($_GET['start'])
                                                ->limit($_GET['limit'])
                                                ->all();
											for ($i=0; $i < sizeof($models); $i++) {
                            					unset($models[$i]['fkIdActividad']);
                            					unset($models[$i]['fkIdEstado']);
											}
                        } else {
                        	$models = ActividadEstado010602::find()
                            					->distinct(true)
                                                ->with('fkIdActividad','fkIdEstado')
                                                ->asArray()
							->joinWith('fkIdActividad')
							->joinWith('fkIdEstado')
                                                ->where(['IN','fk_id_actividad',$listSubQuery[0]])
                                                ->andWhere(['IN','fk_id_actividad',$listSubQuery[sizeof($listSubQuery)-1]])
                            					->all();
                            $total = sizeof($models);
                            $models = ActividadEstado010602::find()
                            					->distinct(true)
                                                ->select ([
														'fk_id_actividad',
														'fk_id_estado',
														'nombre_actividad',
														'nombre_estado',
														])
                                                ->with('fkIdActividad','fkIdEstado')
                                                ->asArray()
												->joinWith('fkIdActividad')
												->joinWith('fkIdEstado')
                                                ->where(['IN','fk_id_actividad',$listSubQuery[0]])
                                                ->andWhere(['IN','fk_id_actividad',$listSubQuery[sizeof($listSubQuery)-1]])
                                                ->orderby($propertySort." ".$directionSort)
                                                ->offset($_GET['start'])
                                                ->limit($_GET['limit'])
                                                ->all();
											for ($i=0; $i < sizeof($models); $i++) {
                            					unset($models[$i]['fkIdActividad']);
                            					unset($models[$i]['fkIdEstado']);
											}
                        }
                        
                    } else {
                    	$models = ActividadEstado010602::find()
                        	->distinct(true)
                            ->with('fkIdActividad','fkIdEstado')
                            ->asArray()
							->joinWith('fkIdActividad')
							->joinWith('fkIdEstado')
							->all();
						$total = sizeof($models);
                        $models = ActividadEstado010602::find()
                        	->distinct(true)
							 ->select ([
										'fk_id_actividad',
										'fk_id_estado',
										'nombre_actividad',
										'nombre_estado',
										])
                            ->with('fkIdActividad','fkIdEstado')
                            ->asArray()
							->joinWith('fkIdActividad')
							->joinWith('fkIdEstado')
                            ->orderby($propertySort." ".$directionSort)
                            ->offset($_GET['start'])
                            ->limit($_GET['limit'])
                            ->all();
						for ($i=0; $i < sizeof($models); $i++) {
                            unset($models[$i]['fkIdActividad']);
                            unset($models[$i]['fkIdEstado']);
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