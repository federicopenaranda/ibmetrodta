<?php

namespace app\controllers;

namespace app\controllers\EvalTecnica040801;
use yii\base\Action;
use app\models\EvalTecnica040801;
use yii\base\Exception;
use yii\helpers\Json;
use app\models\CTQ;
use yii\db\Query;

class ReadAction extends Action
{
    public function run()
    {
		$respuesta=new \stdClass();
		$model = new EvalTecnica040801;
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
					$propertySort	= "id_eval_tecnica";
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
                    $models = EvalTecnica040801::find()
                    							->distinct(true)
												->with('fkIdPeticion')
												->asArray()
												->joinWith('aspectosEvaluados040803s')
												->joinWith('equipoEval040803s')
												->joinWith('fkIdPeticion')
												->joinWith('proveedorEval040803s')
												->where($condiQuery)
                                                ->all();
                    $total = sizeof($models);
					$models = EvalTecnica040801::find()
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
                                
                                $listSubQuery[] = EvalTecnica040801::find()
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
                        	$models = EvalTecnica040801::find()
                            					->distinct(true)
                                                ->with('fkIdPeticion')
                                                ->asArray()
												->joinWith('fkIdPeticion')
                                                ->where($condi)
                                                ->all();
                            $total = sizeof($models);
                            $models = EvalTecnica040801::find()
                            					->distinct(true)
                                                ->select ([
														'id_eval_tecnica',
														'fk_id_peticion',
														'area_ensayo_eval_tecnica',
														'metodo_ensayo_eval_tecnica',
														'lista_signatarios_eval_tecnica',
														'supervision_personal_eval_tecnica',
														'autorizacion_eval_tecnica',
														'adecuacion_eval_tecnica',
														'seguimiento_eval_tecnica',
														'separacion_areas_eval_tecnica',
														'control_acceso_eval_tecnica',
														'orden_limpieza_eval_tecnica',
														'uso_metodos_apropiados_eval_tecnica',
														'confirmacion_metodos_eval_tecnica',
														'instructivo_uso_eval_tecnica',
														'validacion_desviaciones_eval_tecnica',
														'estimacion_incertidumbre_eval_tecnica',
														'verificacion_calculos_eval_tecnica',
														'procedimientos_calibracion_eval_tecnica',
														'trazabilidad_calibracion_eval_tecnica',
														'disponibilidad_material_eval_tecnica',
														'certificados_calibracion_eval_tecnica',
														'plan_muestreo_eval_tecnica',
														'registros_muestreo_eval_tecnica',
														'tecnicas_estadisticas_eval_tecnica',
														'procedimiento_muestras_eval_tecnica',
														'sistema_identificacion_eval_tecnica',
														'adecuacion_instalaciones_eval_tecnica',
														'procedimiento_aseguramiento_eval_tecnica',
														'uso_regular_material_eval_tecnica',
														'participacion_intercomparaciones_eval_tecnica',
														'repeticion_ensayos_eval_tecnica',
														'correlacion_eval_tecnica',
														'registro_aseguramiento_eval_tecnica',
														'formatos_apropiados_eval_tecnica',
														'cumple_requisitos_norma_eval_tecnica',
														'documentacion_opiniones_eval_tecnica',
														'seguridad_transmision_eval_tecnica',
														'confidencialidad_eval_tecnica',
														'criterios_insertidumbre_eval_tecnica',
														'criterios_trazabilidad_eval_tecnica',
														'numero_requisito_eval_tecnica',
														'comentario_requisito_eval_tecnica',
														'conclusion_eval_tecnica',
														'fecha_inicio_eval_tecnica',
														'fecha_fin_eval_tecnica',
														'hora_inicio_eval_tecnica',
														'hora_fin_eval_tecnica',
														'fecha_creacion_eval_tecnica',

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
                        	$models = EvalTecnica040801::find()
                            					->distinct(true)
                                                ->with('fkIdPeticion')
                                                ->asArray()
							->joinWith('fkIdPeticion')
                                                ->where(['IN','id_eval_tecnica',$listSubQuery[0]])
                                                ->andWhere(['IN','id_eval_tecnica',$listSubQuery[sizeof($listSubQuery)-1]])
                            					->all();
                            $total = sizeof($models);
                            $models = EvalTecnica040801::find()
                            					->distinct(true)
                                                ->select ([
														'id_eval_tecnica',
														'fk_id_peticion',
														'area_ensayo_eval_tecnica',
														'metodo_ensayo_eval_tecnica',
														'lista_signatarios_eval_tecnica',
														'supervision_personal_eval_tecnica',
														'autorizacion_eval_tecnica',
														'adecuacion_eval_tecnica',
														'seguimiento_eval_tecnica',
														'separacion_areas_eval_tecnica',
														'control_acceso_eval_tecnica',
														'orden_limpieza_eval_tecnica',
														'uso_metodos_apropiados_eval_tecnica',
														'confirmacion_metodos_eval_tecnica',
														'instructivo_uso_eval_tecnica',
														'validacion_desviaciones_eval_tecnica',
														'estimacion_incertidumbre_eval_tecnica',
														'verificacion_calculos_eval_tecnica',
														'procedimientos_calibracion_eval_tecnica',
														'trazabilidad_calibracion_eval_tecnica',
														'disponibilidad_material_eval_tecnica',
														'certificados_calibracion_eval_tecnica',
														'plan_muestreo_eval_tecnica',
														'registros_muestreo_eval_tecnica',
														'tecnicas_estadisticas_eval_tecnica',
														'procedimiento_muestras_eval_tecnica',
														'sistema_identificacion_eval_tecnica',
														'adecuacion_instalaciones_eval_tecnica',
														'procedimiento_aseguramiento_eval_tecnica',
														'uso_regular_material_eval_tecnica',
														'participacion_intercomparaciones_eval_tecnica',
														'repeticion_ensayos_eval_tecnica',
														'correlacion_eval_tecnica',
														'registro_aseguramiento_eval_tecnica',
														'formatos_apropiados_eval_tecnica',
														'cumple_requisitos_norma_eval_tecnica',
														'documentacion_opiniones_eval_tecnica',
														'seguridad_transmision_eval_tecnica',
														'confidencialidad_eval_tecnica',
														'criterios_insertidumbre_eval_tecnica',
														'criterios_trazabilidad_eval_tecnica',
														'numero_requisito_eval_tecnica',
														'comentario_requisito_eval_tecnica',
														'conclusion_eval_tecnica',
														'fecha_inicio_eval_tecnica',
														'fecha_fin_eval_tecnica',
														'hora_inicio_eval_tecnica',
														'hora_fin_eval_tecnica',
														'fecha_creacion_eval_tecnica',
														'titulo_peticion',
														])
                                                ->with('fkIdPeticion')
                                                ->asArray()
												->joinWith('fkIdPeticion')
                                                ->where(['IN','id_eval_tecnica',$listSubQuery[0]])
                                                ->andWhere(['IN','id_eval_tecnica',$listSubQuery[sizeof($listSubQuery)-1]])
                                                ->orderby($propertySort." ".$directionSort)
                                                ->offset($_GET['start'])
                                                ->limit($_GET['limit'])
                                                ->all();
											for ($i=0; $i < sizeof($models); $i++) {
                            					unset($models[$i]['fkIdPeticion']);
											}
                        }
                        
                    } else {
                    	$models = EvalTecnica040801::find()
                        	->distinct(true)
                            ->with('fkIdPeticion')
                            ->asArray()
							->joinWith('fkIdPeticion')
							->all();
						$total = sizeof($models);
                        $models = EvalTecnica040801::find()
                        	->distinct(true)
							 ->select ([
										'id_eval_tecnica',
										'fk_id_peticion',
										'area_ensayo_eval_tecnica',
										'metodo_ensayo_eval_tecnica',
										'lista_signatarios_eval_tecnica',
										'supervision_personal_eval_tecnica',
										'autorizacion_eval_tecnica',
										'adecuacion_eval_tecnica',
										'seguimiento_eval_tecnica',
										'separacion_areas_eval_tecnica',
										'control_acceso_eval_tecnica',
										'orden_limpieza_eval_tecnica',
										'uso_metodos_apropiados_eval_tecnica',
										'confirmacion_metodos_eval_tecnica',
										'instructivo_uso_eval_tecnica',
										'validacion_desviaciones_eval_tecnica',
										'estimacion_incertidumbre_eval_tecnica',
										'verificacion_calculos_eval_tecnica',
										'procedimientos_calibracion_eval_tecnica',
										'trazabilidad_calibracion_eval_tecnica',
										'disponibilidad_material_eval_tecnica',
										'certificados_calibracion_eval_tecnica',
										'plan_muestreo_eval_tecnica',
										'registros_muestreo_eval_tecnica',
										'tecnicas_estadisticas_eval_tecnica',
										'procedimiento_muestras_eval_tecnica',
										'sistema_identificacion_eval_tecnica',
										'adecuacion_instalaciones_eval_tecnica',
										'procedimiento_aseguramiento_eval_tecnica',
										'uso_regular_material_eval_tecnica',
										'participacion_intercomparaciones_eval_tecnica',
										'repeticion_ensayos_eval_tecnica',
										'correlacion_eval_tecnica',
										'registro_aseguramiento_eval_tecnica',
										'formatos_apropiados_eval_tecnica',
										'cumple_requisitos_norma_eval_tecnica',
										'documentacion_opiniones_eval_tecnica',
										'seguridad_transmision_eval_tecnica',
										'confidencialidad_eval_tecnica',
										'criterios_insertidumbre_eval_tecnica',
										'criterios_trazabilidad_eval_tecnica',
										'numero_requisito_eval_tecnica',
										'comentario_requisito_eval_tecnica',
										'conclusion_eval_tecnica',
										'fecha_inicio_eval_tecnica',
										'fecha_fin_eval_tecnica',
										'hora_inicio_eval_tecnica',
										'hora_fin_eval_tecnica',
										'fecha_creacion_eval_tecnica',
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