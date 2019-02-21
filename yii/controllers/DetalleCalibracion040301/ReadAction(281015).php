<?php

namespace app\controllers;

namespace app\controllers\DetalleCalibracion040301;
use yii\base\Action;
use app\models\DetalleCalibracion040301;
use yii\base\Exception;
use yii\helpers\Json;
use app\models\CTQ;
use yii\db\Query;

class ReadAction extends Action
{
    public function run()
    {
		$respuesta=new \stdClass();
		$model = new DetalleCalibracion040301;
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
					$propertySort	= "id_detalle_calibracion";
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
                    $models = DetalleCalibracion040301::find()
                    							->distinct(true)
												->with('fkIdPeticion','fkIdCampoCalibracion')
												->asArray()
												->joinWith('fkIdPeticion')
												->joinWith('fkIdCampoCalibracion')
												->where($condiQuery)
                                                ->all();
                    $total = sizeof($models);
					$models = DetalleCalibracion040301::find()
                    							->distinct(true)
												->with('fkIdPeticion','fkIdCampoCalibracion')
												->asArray()
												->joinWith('fkIdPeticion')
												->joinWith('fkIdCampoCalibracion')
												->where($condiQuery)
												->offset($_GET['start'])
												->limit($_GET['limit'])
												->all();
											for ($i=0; $i < sizeof($models); $i++) {
                            					unset($models[$i]['fkIdPeticion']);
                            					unset($models[$i]['fkIdCampoCalibracion']);
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
                                
                                $listSubQuery[] = DetalleCalibracion040301::find()
                                				->distinct(true)
                                                ->with('fkIdPeticion','fkIdCampoCalibracion')
                                                ->asArray()
												->joinWith('fkIdPeticion')
												->joinWith('fkIdCampoCalibracion')
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
                        	$models = DetalleCalibracion040301::find()
                            					->distinct(true)
                                                ->with('fkIdPeticion','fkIdCampoCalibracion')
                                                ->asArray()
												->joinWith('fkIdPeticion')
												->joinWith('fkIdCampoCalibracion')
                                                ->where($condi)
                                                ->all();
                            $total = sizeof($models);
                            $models = DetalleCalibracion040301::find()
                            					->distinct(true)
                                                ->select ([
														'id_detalle_calibracion',
														'fk_id_peticion',
														'fk_id_campo_calibracion',
														'estado_detalle_calibracion',
														'objetivo_detalle_calibracion',
														'descripcion_detalle_calibracion',
														'norma_detalle_calibracion',
														'equipo_calibrado_detalle_calibracion',
														'tipo_servicio_detalle_calibracion',
														'personal_autorizado_detalle_calibracion',
														'rango_calibracion_detalle_calibracion',
														'mejor_capacidad_medicion_detalle_calibracion',
														'equipos_utilizados_detalle_calibracion',
														'ad_estimacion_incertidumbre_detalle_calibracion',
														'ad_patrones_referencia_detalle_calibracion',
														'ad_manipulacion_patrones_referencia_detalle_calibracion',
														'ad_fecha_ultima_calibracion_detalle_calibracion',
														'ad_organismo_realizo_calibracion_detalle_calibracion',
														'ad_certificado_calibracion_detalle_calibracion',
														'ad_fecha_proxima_calibracion_detalle_calibracion',
														'ad_declaracion_trazabilidad_detalle_calibracion',
														'ad_criterio_aceptacion_detalle_calibracion',
														'ad_comparaciones_interlaboratorios_detalle_calibracion',
														'fecha_creacion_detalle_calibracion',

														'titulo_peticion',

														'nombre_campo_calibracion',
														])
                                                ->with('fkIdPeticion','fkIdCampoCalibracion')
                                                ->asArray()
												->joinWith('fkIdPeticion')
												->joinWith('fkIdCampoCalibracion')
                                                ->where($condi)
                                                ->orderby($propertySort." ".$directionSort)
                                                ->offset($_GET['start'])
                                                ->limit($_GET['limit'])
                                                ->all();
											for ($i=0; $i < sizeof($models); $i++) {
                            					unset($models[$i]['fkIdPeticion']);
                            					unset($models[$i]['fkIdCampoCalibracion']);
											}
                        } else {
                        	$models = DetalleCalibracion040301::find()
                            					->distinct(true)
                                                ->with('fkIdPeticion','fkIdCampoCalibracion')
                                                ->asArray()
							->joinWith('fkIdPeticion')
							->joinWith('fkIdCampoCalibracion')
                                                ->where(['IN','id_detalle_calibracion',$listSubQuery[0]])
                                                ->andWhere(['IN','id_detalle_calibracion',$listSubQuery[sizeof($listSubQuery)-1]])
                            					->all();
                            $total = sizeof($models);
                            $models = DetalleCalibracion040301::find()
                            					->distinct(true)
                                                ->select ([
														'id_detalle_calibracion',
														'fk_id_peticion',
														'fk_id_campo_calibracion',
														'estado_detalle_calibracion',
														'objetivo_detalle_calibracion',
														'descripcion_detalle_calibracion',
														'norma_detalle_calibracion',
														'equipo_calibrado_detalle_calibracion',
														'tipo_servicio_detalle_calibracion',
														'personal_autorizado_detalle_calibracion',
														'rango_calibracion_detalle_calibracion',
														'mejor_capacidad_medicion_detalle_calibracion',
														'equipos_utilizados_detalle_calibracion',
														'ad_estimacion_incertidumbre_detalle_calibracion',
														'ad_patrones_referencia_detalle_calibracion',
														'ad_manipulacion_patrones_referencia_detalle_calibracion',
														'ad_fecha_ultima_calibracion_detalle_calibracion',
														'ad_organismo_realizo_calibracion_detalle_calibracion',
														'ad_certificado_calibracion_detalle_calibracion',
														'ad_fecha_proxima_calibracion_detalle_calibracion',
														'ad_declaracion_trazabilidad_detalle_calibracion',
														'ad_criterio_aceptacion_detalle_calibracion',
														'ad_comparaciones_interlaboratorios_detalle_calibracion',
														'fecha_creacion_detalle_calibracion',
														'titulo_peticion',
														'nombre_campo_calibracion',
														])
                                                ->with('fkIdPeticion','fkIdCampoCalibracion')
                                                ->asArray()
												->joinWith('fkIdPeticion')
												->joinWith('fkIdCampoCalibracion')
                                                ->where(['IN','id_detalle_calibracion',$listSubQuery[0]])
                                                ->andWhere(['IN','id_detalle_calibracion',$listSubQuery[sizeof($listSubQuery)-1]])
                                                ->orderby($propertySort." ".$directionSort)
                                                ->offset($_GET['start'])
                                                ->limit($_GET['limit'])
                                                ->all();
											for ($i=0; $i < sizeof($models); $i++) {
                            					unset($models[$i]['fkIdPeticion']);
                            					unset($models[$i]['fkIdCampoCalibracion']);
											}
                        }
                        
                    } else {
                    	$models = DetalleCalibracion040301::find()
                        	->distinct(true)
                            ->with('fkIdPeticion','fkIdCampoCalibracion')
                            ->asArray()
							->joinWith('fkIdPeticion')
							->joinWith('fkIdCampoCalibracion')
							->all();
						$total = sizeof($models);
                        $models = DetalleCalibracion040301::find()
                        	->distinct(true)
							 ->select ([
										'id_detalle_calibracion',
										'fk_id_peticion',
										'fk_id_campo_calibracion',
										'estado_detalle_calibracion',
										'objetivo_detalle_calibracion',
										'descripcion_detalle_calibracion',
										'norma_detalle_calibracion',
										'equipo_calibrado_detalle_calibracion',
										'tipo_servicio_detalle_calibracion',
										'personal_autorizado_detalle_calibracion',
										'rango_calibracion_detalle_calibracion',
										'mejor_capacidad_medicion_detalle_calibracion',
										'equipos_utilizados_detalle_calibracion',
										'ad_estimacion_incertidumbre_detalle_calibracion',
										'ad_patrones_referencia_detalle_calibracion',
										'ad_manipulacion_patrones_referencia_detalle_calibracion',
										'ad_fecha_ultima_calibracion_detalle_calibracion',
										'ad_organismo_realizo_calibracion_detalle_calibracion',
										'ad_certificado_calibracion_detalle_calibracion',
										'ad_fecha_proxima_calibracion_detalle_calibracion',
										'ad_declaracion_trazabilidad_detalle_calibracion',
										'ad_criterio_aceptacion_detalle_calibracion',
										'ad_comparaciones_interlaboratorios_detalle_calibracion',
										'fecha_creacion_detalle_calibracion',
										'titulo_peticion',
										'nombre_campo_calibracion',
										])
                            ->with('fkIdPeticion','fkIdCampoCalibracion')
                            ->asArray()
							->joinWith('fkIdPeticion')
							->joinWith('fkIdCampoCalibracion')
                            ->orderby($propertySort." ".$directionSort)
                            ->offset($_GET['start'])
                            ->limit($_GET['limit'])
                            ->all();
						for ($i=0; $i < sizeof($models); $i++) {
                            unset($models[$i]['fkIdPeticion']);
                            unset($models[$i]['fkIdCampoCalibracion']);
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