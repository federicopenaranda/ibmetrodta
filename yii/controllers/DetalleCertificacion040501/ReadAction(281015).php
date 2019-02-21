<?php

namespace app\controllers;

namespace app\controllers\DetalleCertificacion040501;
use yii\base\Action;
use app\models\DetalleCertificacion040501;
use yii\base\Exception;
use yii\helpers\Json;
use app\models\CTQ;
use yii\db\Query;

class ReadAction extends Action
{
    public function run()
    {
		$respuesta=new \stdClass();
		$model = new DetalleCertificacion040501;
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
					$propertySort	= "id_detalle_certificacion";
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
                    $models = DetalleCertificacion040501::find()
                    							->distinct(true)
												->with('fkIdPeticion')
												->asArray()
												->joinWith('fkIdPeticion')
												->where($condiQuery)
                                                ->all();
                    $total = sizeof($models);
					$models = DetalleCertificacion040501::find()
                    							->distinct(true)
												->with('fkIdPeticion')
												->asArray()
												->joinWith('fkIdPeticion')
												->where($condiQuery)
												->offset($_GET['start'])
												->limit($_GET['limit'])
												->all();
											for ($i=0; $i < sizeof($models); $i++) {
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
                                
                                $listSubQuery[] = DetalleCertificacion040501::find()
                                				->distinct(true)
                                                ->with('fkIdPeticion')
                                                ->asArray()
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
                        	$models = DetalleCertificacion040501::find()
                            					->distinct(true)
                                                ->with('fkIdPeticion')
                                                ->asArray()
												->joinWith('fkIdPeticion')
                                                ->where($condi)
                                                ->all();
                            $total = sizeof($models);
                            $models = DetalleCertificacion040501::find()
                            					->distinct(true)
                                                ->select ([
														'id_detalle_certificacion',
														'fk_id_peticion',
														'estado_detalle_certificacion',
														'objetivo_detalle_certificacion',
														'tipo_certificacion_detalle_certificacion',
														'documento_normativo_detalle_certificacion',
														'procedimiento_certificacion_detalle_certificacion',
														'producto_certificar_detalle_certificacion',
														'codigo_nace_detalle_certificacion',
														'auditores_calificados_detalle_certificacion',
														'expertos_tecnicos_detalle_certificacion',
														'observaciones_detalle_certificacion',
														'ensayos_en_produccto_detalle_certificacion',
														'laboratorios_ensayos_detalle_certificacion',
														'fecha_creacion_detalle_certificacion',

														'titulo_peticion',
														])
                                                ->with('fkIdPeticion')
                                                ->asArray()
												->joinWith('fkIdPeticion')
                                                ->where($condi)
                                                ->orderby($propertySort." ".$directionSort)
                                                ->offset($_GET['start'])
                                                ->limit($_GET['limit'])
                                                ->all();
											for ($i=0; $i < sizeof($models); $i++) {
                            					unset($models[$i]['fkIdPeticion']);
											}
                        } else {
                        	$models = DetalleCertificacion040501::find()
                            					->distinct(true)
                                                ->with('fkIdPeticion')
                                                ->asArray()
							->joinWith('fkIdPeticion')
                                                ->where(['IN','id_detalle_certificacion',$listSubQuery[0]])
                                                ->andWhere(['IN','id_detalle_certificacion',$listSubQuery[sizeof($listSubQuery)-1]])
                            					->all();
                            $total = sizeof($models);
                            $models = DetalleCertificacion040501::find()
                            					->distinct(true)
                                                ->select ([
														'id_detalle_certificacion',
														'fk_id_peticion',
														'estado_detalle_certificacion',
														'objetivo_detalle_certificacion',
														'tipo_certificacion_detalle_certificacion',
														'documento_normativo_detalle_certificacion',
														'procedimiento_certificacion_detalle_certificacion',
														'producto_certificar_detalle_certificacion',
														'codigo_nace_detalle_certificacion',
														'auditores_calificados_detalle_certificacion',
														'expertos_tecnicos_detalle_certificacion',
														'observaciones_detalle_certificacion',
														'ensayos_en_produccto_detalle_certificacion',
														'laboratorios_ensayos_detalle_certificacion',
														'fecha_creacion_detalle_certificacion',
														'titulo_peticion',
														])
                                                ->with('fkIdPeticion')
                                                ->asArray()
												->joinWith('fkIdPeticion')
                                                ->where(['IN','id_detalle_certificacion',$listSubQuery[0]])
                                                ->andWhere(['IN','id_detalle_certificacion',$listSubQuery[sizeof($listSubQuery)-1]])
                                                ->orderby($propertySort." ".$directionSort)
                                                ->offset($_GET['start'])
                                                ->limit($_GET['limit'])
                                                ->all();
											for ($i=0; $i < sizeof($models); $i++) {
                            					unset($models[$i]['fkIdPeticion']);
											}
                        }
                        
                    } else {
                    	$models = DetalleCertificacion040501::find()
                        	->distinct(true)
                            ->with('fkIdPeticion')
                            ->asArray()
							->joinWith('fkIdPeticion')
							->all();
						$total = sizeof($models);
                        $models = DetalleCertificacion040501::find()
                        	->distinct(true)
							 ->select ([
										'id_detalle_certificacion',
										'fk_id_peticion',
										'estado_detalle_certificacion',
										'objetivo_detalle_certificacion',
										'tipo_certificacion_detalle_certificacion',
										'documento_normativo_detalle_certificacion',
										'procedimiento_certificacion_detalle_certificacion',
										'producto_certificar_detalle_certificacion',
										'codigo_nace_detalle_certificacion',
										'auditores_calificados_detalle_certificacion',
										'expertos_tecnicos_detalle_certificacion',
										'observaciones_detalle_certificacion',
										'ensayos_en_produccto_detalle_certificacion',
										'laboratorios_ensayos_detalle_certificacion',
										'fecha_creacion_detalle_certificacion',
										'titulo_peticion',
										])
                            ->with('fkIdPeticion')
                            ->asArray()
							->joinWith('fkIdPeticion')
                            ->orderby($propertySort." ".$directionSort)
                            ->offset($_GET['start'])
                            ->limit($_GET['limit'])
                            ->all();
						for ($i=0; $i < sizeof($models); $i++) {
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