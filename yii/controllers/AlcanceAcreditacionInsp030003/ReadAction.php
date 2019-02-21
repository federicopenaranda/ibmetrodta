<?php

namespace app\controllers;

namespace app\controllers\AlcanceAcreditacionInsp030003;
use yii\base\Action;
use app\models\AlcanceAcreditacionInsp030003;
use yii\base\Exception;
use yii\helpers\Json;
use app\models\CTQ;
use yii\db\Query;

class ReadAction extends Action
{
    public function run()
    {
		$respuesta=new \stdClass();
		$model = new AlcanceAcreditacionInsp030003;
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
					$propertySort	= "id_alcance_acreditacion_insp";
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
                    $models = AlcanceAcreditacionInsp030003::find()
                    							->distinct(true)
												->with('fkIdEvaluacion')
												->asArray()
												->joinWith('fkIdEvaluacion')
												->where($condiQuery)
                                                ->all();
                    $total = sizeof($models);
					$models = AlcanceAcreditacionInsp030003::find()
                    							->distinct(true)
												->with('fkIdEvaluacion')
												->asArray()
												->joinWith('fkIdEvaluacion')
												->where($condiQuery)
												->offset($_GET['start'])
												->limit($_GET['limit'])
												->all();
											for ($i=0; $i < sizeof($models); $i++) {
                            					unset($models[$i]['fkIdEvaluacion']);
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
                                
                                $listSubQuery[] = AlcanceAcreditacionInsp030003::find()
                                				->distinct(true)
                                                ->with('fkIdEvaluacion')
                                                ->asArray()
												->joinWith('fkIdEvaluacion')
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
                        	$models = AlcanceAcreditacionInsp030003::find()
                            					->distinct(true)
                                                ->with('fkIdEvaluacion')
                                                ->asArray()
												->joinWith('fkIdEvaluacion')
                                                ->where($condi)
                                                ->all();
                            $total = sizeof($models);
                            $models = AlcanceAcreditacionInsp030003::find()
                            					->distinct(true)
                                                ->select ([
														'id_alcance_acreditacion_insp',
														'fk_id_evaluacion',
														'procedimiento_inspeccion_alcance_acreditacion_insp',
														'norma_referencia_alcance_acreditacion_insp',
														'items_inspeccionados_alcance_acreditacion_insp',
														'items_referencia_alcance_acreditacion_insp',
														'signatario_alcance_acreditacion_insp',

														'codigo_evaluacion',
														])
                                                ->with('fkIdEvaluacion')
                                                ->asArray()
												->joinWith('fkIdEvaluacion')
                                                ->where($condi)
                                                ->orderby($propertySort." ".$directionSort)
                                                ->offset($_GET['start'])
                                                ->limit($_GET['limit'])
                                                ->all();
											for ($i=0; $i < sizeof($models); $i++) {
                            					unset($models[$i]['fkIdEvaluacion']);
											}
                        } else {
                        	$models = AlcanceAcreditacionInsp030003::find()
                            					->distinct(true)
                                                ->with('fkIdEvaluacion')
                                                ->asArray()
							->joinWith('fkIdEvaluacion')
                                                ->where(['IN','id_alcance_acreditacion_insp',$listSubQuery[0]])
                                                ->andWhere(['IN','id_alcance_acreditacion_insp',$listSubQuery[sizeof($listSubQuery)-1]])
                            					->all();
                            $total = sizeof($models);
                            $models = AlcanceAcreditacionInsp030003::find()
                            					->distinct(true)
                                                ->select ([
														'id_alcance_acreditacion_insp',
														'fk_id_evaluacion',
														'procedimiento_inspeccion_alcance_acreditacion_insp',
														'norma_referencia_alcance_acreditacion_insp',
														'items_inspeccionados_alcance_acreditacion_insp',
														'items_referencia_alcance_acreditacion_insp',
														'signatario_alcance_acreditacion_insp',
														'codigo_evaluacion',
														])
                                                ->with('fkIdEvaluacion')
                                                ->asArray()
												->joinWith('fkIdEvaluacion')
                                                ->where(['IN','id_alcance_acreditacion_insp',$listSubQuery[0]])
                                                ->andWhere(['IN','id_alcance_acreditacion_insp',$listSubQuery[sizeof($listSubQuery)-1]])
                                                ->orderby($propertySort." ".$directionSort)
                                                ->offset($_GET['start'])
                                                ->limit($_GET['limit'])
                                                ->all();
											for ($i=0; $i < sizeof($models); $i++) {
                            					unset($models[$i]['fkIdEvaluacion']);
											}
                        }
                        
                    } else {
                    	$models = AlcanceAcreditacionInsp030003::find()
                        	->distinct(true)
                            ->with('fkIdEvaluacion')
                            ->asArray()
							->joinWith('fkIdEvaluacion')
							->all();
						$total = sizeof($models);
                        $models = AlcanceAcreditacionInsp030003::find()
                        	->distinct(true)
							 ->select ([
										'id_alcance_acreditacion_insp',
										'fk_id_evaluacion',
										'procedimiento_inspeccion_alcance_acreditacion_insp',
										'norma_referencia_alcance_acreditacion_insp',
										'items_inspeccionados_alcance_acreditacion_insp',
										'items_referencia_alcance_acreditacion_insp',
										'signatario_alcance_acreditacion_insp',
										'codigo_evaluacion',
										])
                            ->with('fkIdEvaluacion')
                            ->asArray()
							->joinWith('fkIdEvaluacion')
                            ->orderby($propertySort." ".$directionSort)
                            ->offset($_GET['start'])
                            ->limit($_GET['limit'])
                            ->all();
						for ($i=0; $i < sizeof($models); $i++) {
                            unset($models[$i]['fkIdEvaluacion']);
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