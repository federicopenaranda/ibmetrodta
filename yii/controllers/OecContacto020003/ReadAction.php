<?php

namespace app\controllers;

namespace app\controllers\OecContacto020003;
use yii\base\Action;
use app\models\OecContacto020003;
use yii\base\Exception;
use yii\helpers\Json;
use app\models\CTQ;
use yii\db\Query;

class ReadAction extends Action
{
    public function run()
    {
		$respuesta=new \stdClass();
		$model = new OecContacto020003;
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
					$propertySort	= "id_oec_contacto";
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
                    $models = OecContacto020003::find()
                    							->distinct(true)
												->with('fkIdOec','fkIdOecTitulo')
												->asArray()
												->joinWith('evaluacion030001s')
												->joinWith('fkIdOec')
												->joinWith('fkIdOecTitulo')
												->joinWith('planEvaluacion030003s')
												->where($condiQuery)
                                                ->all();
                    $total = sizeof($models);
					$models = OecContacto020003::find()
                    							->distinct(true)
												->with('fkIdOec','fkIdOecTitulo')
												->asArray()
												->joinWith('fkIdOec')
												->joinWith('fkIdOecTitulo')
												->where($condiQuery)
												->offset($_GET['start'])
												->limit($_GET['limit'])
												->all();
											for ($i=0; $i < sizeof($models); $i++) {
                            					unset($models[$i]['fkIdOec']);
                            					unset($models[$i]['fkIdOecTitulo']);
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
                                
                                $listSubQuery[] = OecContacto020003::find()
                                				->distinct(true)
                                                ->with('fkIdOec','fkIdOecTitulo')
                                                ->asArray()
												->joinWith('fkIdOec')
												->joinWith('fkIdOecTitulo')
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
                        	$models = OecContacto020003::find()
                            					->distinct(true)
                                                ->with('fkIdOec','fkIdOecTitulo')
                                                ->asArray()
												->joinWith('fkIdOec')
												->joinWith('fkIdOecTitulo')
                                                ->where($condi)
                                                ->all();
                            $total = sizeof($models);
                            $models = OecContacto020003::find()
                            					->distinct(true)
                                                ->select ([
														'id_oec_contacto',
														'fk_id_oec',
														'fk_id_oec_titulo',
														'primer_nombre_oec_contacto',
														'segundo_nombre_oec_contacto',
														'apellido_paterno_oec_contacto',
														'apellido_materno_oec_contacto',
														'cargo_oec_contacto',
														'email_oec_contacto',
														'celular_oec_contacto',
														'telefono_oec_contacto',
														'representante_legal_oec_contacto',

														'nombre_oec',

														'nombre_oec_titulo',
														])
                                                ->with('fkIdOec','fkIdOecTitulo')
                                                ->asArray()
												->joinWith('fkIdOec')
												->joinWith('fkIdOecTitulo')
                                                ->where($condi)
                                                ->orderby($propertySort." ".$directionSort)
                                                ->offset($_GET['start'])
                                                ->limit($_GET['limit'])
                                                ->all();
											for ($i=0; $i < sizeof($models); $i++) {
                            					unset($models[$i]['fkIdOec']);
                            					unset($models[$i]['fkIdOecTitulo']);
											}
                        } else {
                        	$models = OecContacto020003::find()
                            					->distinct(true)
                                                ->with('fkIdOec','fkIdOecTitulo')
                                                ->asArray()
							->joinWith('fkIdOec')
							->joinWith('fkIdOecTitulo')
                                                ->where(['IN','id_oec_contacto',$listSubQuery[0]])
                                                ->andWhere(['IN','id_oec_contacto',$listSubQuery[sizeof($listSubQuery)-1]])
                            					->all();
                            $total = sizeof($models);
                            $models = OecContacto020003::find()
                            					->distinct(true)
                                                ->select ([
														'id_oec_contacto',
														'fk_id_oec',
														'fk_id_oec_titulo',
														'primer_nombre_oec_contacto',
														'segundo_nombre_oec_contacto',
														'apellido_paterno_oec_contacto',
														'apellido_materno_oec_contacto',
														'cargo_oec_contacto',
														'email_oec_contacto',
														'celular_oec_contacto',
														'telefono_oec_contacto',
														'representante_legal_oec_contacto',
														'nombre_oec',
														'nombre_oec_titulo',
														])
                                                ->with('fkIdOec','fkIdOecTitulo')
                                                ->asArray()
												->joinWith('fkIdOec')
												->joinWith('fkIdOecTitulo')
                                                ->where(['IN','id_oec_contacto',$listSubQuery[0]])
                                                ->andWhere(['IN','id_oec_contacto',$listSubQuery[sizeof($listSubQuery)-1]])
                                                ->orderby($propertySort." ".$directionSort)
                                                ->offset($_GET['start'])
                                                ->limit($_GET['limit'])
                                                ->all();
											for ($i=0; $i < sizeof($models); $i++) {
                            					unset($models[$i]['fkIdOec']);
                            					unset($models[$i]['fkIdOecTitulo']);
											}
                        }
                        
                    } else {
                    	$models = OecContacto020003::find()
                        	->distinct(true)
                            ->with('fkIdOec','fkIdOecTitulo')
                            ->asArray()
							->joinWith('fkIdOec')
							->joinWith('fkIdOecTitulo')
							->all();
						$total = sizeof($models);
                        $models = OecContacto020003::find()
                        	->distinct(true)
							 ->select ([
										'id_oec_contacto',
										'fk_id_oec',
										'fk_id_oec_titulo',
										'primer_nombre_oec_contacto',
										'segundo_nombre_oec_contacto',
										'apellido_paterno_oec_contacto',
										'apellido_materno_oec_contacto',
										'cargo_oec_contacto',
										'email_oec_contacto',
										'celular_oec_contacto',
										'telefono_oec_contacto',
										'representante_legal_oec_contacto',
										'nombre_oec',
										'nombre_oec_titulo',
										])
                            ->with('fkIdOec','fkIdOecTitulo')
                            ->asArray()
							->joinWith('fkIdOec')
							->joinWith('fkIdOecTitulo')
                            ->orderby($propertySort." ".$directionSort)
                            ->offset($_GET['start'])
                            ->limit($_GET['limit'])
                            ->all();
						for ($i=0; $i < sizeof($models); $i++) {
                            unset($models[$i]['fkIdOec']);
                            unset($models[$i]['fkIdOecTitulo']);
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