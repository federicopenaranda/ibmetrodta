<?php

namespace app\controllers;

namespace app\controllers\Evaluacion030001;
use yii\base\Action;
use app\models\Evaluacion030001;
use yii\base\Exception;
use yii\helpers\Json;
use app\models\CTQ;
use yii\db\Query;

class ReadAction extends Action
{
    public function run()
    {
		$respuesta=new \stdClass();
		$model = new Evaluacion030001;
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
					$propertySort	= "id_evaluacion";
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
                    $models = Evaluacion030001::find()
                    							->distinct(true)
												->with('fkIdOecContactoAltaDireccion','fkIdOecContactoGerenteTecnico','fkIdOecContactoGerenteCalidad','fkIdPeticion')
												->asArray()
												->joinWith('alcanceAcreditacionCert030003s')
												->joinWith('alcanceAcreditacionInsp030003s')
												->joinWith('alcanceAcreditacionLab030003s')
												->joinWith('fkIdOecContactoAltaDireccion')
												->joinWith('fkIdOecContactoGerenteTecnico')
												->joinWith('fkIdOecContactoGerenteCalidad')
												->joinWith('fkIdPeticion')
												->joinWith('planEvaluacion030003s')
												->where($condiQuery)
                                                ->all();
                    $total = sizeof($models);
					$models = Evaluacion030001::find()
                    							->distinct(true)
												->with('fkIdOecContactoAltaDireccion','fkIdOecContactoGerenteTecnico','fkIdOecContactoGerenteCalidad','fkIdPeticion')
												->asArray()
												->joinWith('fkIdOecContactoAltaDireccion')
												->joinWith('fkIdOecContactoGerenteTecnico')
												->joinWith('fkIdOecContactoGerenteCalidad')
												->joinWith('fkIdPeticion')
												->where($condiQuery)
												->offset($_GET['start'])
												->limit($_GET['limit'])
												->all();
											for ($i=0; $i < sizeof($models); $i++) {
                            					unset($models[$i]['fkIdOecContactoAltaDireccion']);
                            					unset($models[$i]['fkIdOecContactoGerenteTecnico']);
                            					unset($models[$i]['fkIdOecContactoGerenteCalidad']);
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
                                
                                $listSubQuery[] = Evaluacion030001::find()
                                				->distinct(true)
                                                ->with('fkIdOecContactoAltaDireccion','fkIdOecContactoGerenteTecnico','fkIdOecContactoGerenteCalidad','fkIdPeticion')
                                                ->asArray()
												->joinWith('fkIdOecContactoAltaDireccion')
												->joinWith('fkIdOecContactoGerenteTecnico')
												->joinWith('fkIdOecContactoGerenteCalidad')
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
                        	$models = Evaluacion030001::find()
                            					->distinct(true)
                                                ->with('fkIdOecContactoAltaDireccion','fkIdOecContactoGerenteTecnico','fkIdOecContactoGerenteCalidad','fkIdPeticion')
                                                ->asArray()
												->joinWith('fkIdOecContactoAltaDireccion')
												->joinWith('fkIdOecContactoGerenteTecnico')
												->joinWith('fkIdOecContactoGerenteCalidad')
												->joinWith('fkIdPeticion')
                                                ->where($condi)
                                                ->all();
                            $total = sizeof($models);
                            $models = Evaluacion030001::find()
                            					->distinct(true)
                                                ->select ([
														'id_evaluacion',
														'fk_id_peticion',
														'fk_id_oec_contacto_alta_direccion',
														'fk_id_oec_contacto_gerente_tecnico',
														'fk_id_oec_contacto_gerente_calidad',
														'codigo_evaluacion',
														'fecha_inicio_evaluacion',
														'fecha_fin_evaluacion',
														'objetivo_evaluacion',
														'documento_referencia_evaluacion',
														'identificacion_manual_evaluacion',
														'fecha_reunion_inicial_evaluacion',
														'hora_reunion_inicial_evaluacion',
														'fecha_reunion_ee_evaluacion',
														'hora_reunion_ee_evaluacion',
														'fecha_reunion_final_evaluacion',
														'hora_reunion_final_evaluacion',
														'idioma_evaluacion',
														'observacion_ra_oec_evaluacion',
														'observacion_ra_ee_evaluacion',
														'cumplimiento_etapas_evaluacion',
														'recomendacion_ra_evaluacion',
														'recomendacion_fecha_evaluacion',
														'decision_da_evaluacion',
														'decision_fecha_da_evaluacion',
														'fecha_creacion_evaluacion',
														'cad.primer_nombre_oec_contacto',
														'cgt.primer_nombre_oec_contacto',
														'cgc.primer_nombre_oec_contacto',
														'titulo_peticion',
														])
                                                ->with('fkIdOecContactoAltaDireccion','fkIdOecContactoGerenteTecnico','fkIdOecContactoGerenteCalidad','fkIdPeticion')
                                                ->asArray()
												->joinWith('fkIdOecContactoAltaDireccion')
												->joinWith('fkIdOecContactoGerenteTecnico')
												->joinWith('fkIdOecContactoGerenteCalidad')
												->joinWith('fkIdPeticion')
                                                ->where($condi)
                                                ->orderby($propertySort." ".$directionSort)
                                                ->offset($_GET['start'])
                                                ->limit($_GET['limit'])
                                                ->all();
											for ($i=0; $i < sizeof($models); $i++) {
                            					unset($models[$i]['fkIdOecContactoAltaDireccion']);
                            					unset($models[$i]['fkIdOecContactoGerenteTecnico']);
                            					unset($models[$i]['fkIdOecContactoGerenteCalidad']);
                            					unset($models[$i]['fkIdPeticion']);
											}
                        } else {
                        	$models = Evaluacion030001::find()
                            					->distinct(true)
                                                ->with('fkIdOecContactoAltaDireccion','fkIdOecContactoGerenteTecnico','fkIdOecContactoGerenteCalidad','fkIdPeticion')
                                                ->asArray()
												->joinWith('fkIdOecContactoAltaDireccion')
												->joinWith('fkIdOecContactoGerenteTecnico')
												->joinWith('fkIdOecContactoGerenteCalidad')
												->joinWith('fkIdPeticion')
                                                ->where(['IN','id_evaluacion',$listSubQuery[0]])
                                                ->andWhere(['IN','id_evaluacion',$listSubQuery[sizeof($listSubQuery)-1]])
                            					->all();
                            $total = sizeof($models);
                            $models = Evaluacion030001::find()
                            					->distinct(true)
                                                ->select ([
														'id_evaluacion',
														'fk_id_peticion',
														'fk_id_oec_contacto_alta_direccion',
														'fk_id_oec_contacto_gerente_tecnico',
														'fk_id_oec_contacto_gerente_calidad',
														'codigo_evaluacion',
														'fecha_inicio_evaluacion',
														'fecha_fin_evaluacion',
														'objetivo_evaluacion',
														'documento_referencia_evaluacion',
														'identificacion_manual_evaluacion',
														'fecha_reunion_inicial_evaluacion',
														'hora_reunion_inicial_evaluacion',
														'fecha_reunion_ee_evaluacion',
														'hora_reunion_ee_evaluacion',
														'fecha_reunion_final_evaluacion',
														'hora_reunion_final_evaluacion',
														'idioma_evaluacion',
														'observacion_ra_oec_evaluacion',
														'observacion_ra_ee_evaluacion',
														'cumplimiento_etapas_evaluacion',
														'recomendacion_ra_evaluacion',
														'recomendacion_fecha_evaluacion',
														'decision_da_evaluacion',
														'decision_fecha_da_evaluacion',
														'fecha_creacion_evaluacion',
														'cad.primer_nombre_oec_contacto',
														'cgt.primer_nombre_oec_contacto',
														'cgc.primer_nombre_oec_contacto',
														'titulo_peticion',
														])
                                                ->with('fkIdOecContactoAltaDireccion','fkIdOecContactoGerenteTecnico','fkIdOecContactoGerenteCalidad','fkIdPeticion')
                                                ->asArray()
												->joinWith('fkIdOecContactoAltaDireccion')
												->joinWith('fkIdOecContactoGerenteTecnico')
												->joinWith('fkIdOecContactoGerenteCalidad')
												->joinWith('fkIdPeticion')
                                                ->where(['IN','id_evaluacion',$listSubQuery[0]])
                                                ->andWhere(['IN','id_evaluacion',$listSubQuery[sizeof($listSubQuery)-1]])
                                                ->orderby($propertySort." ".$directionSort)
                                                ->offset($_GET['start'])
                                                ->limit($_GET['limit'])
                                                ->all();
											for ($i=0; $i < sizeof($models); $i++) {
                            					unset($models[$i]['fkIdOecContactoAltaDireccion']);
                            					unset($models[$i]['fkIdOecContactoGerenteTecnico']);
                            					unset($models[$i]['fkIdOecContactoGerenteCalidad']);
                            					unset($models[$i]['fkIdPeticion']);
											}
                        }
                        
                    } else {
                    	$models = Evaluacion030001::find()
                        	->distinct(true)
                            ->with('fkIdOecContactoAltaDireccion','fkIdOecContactoGerenteTecnico','fkIdOecContactoGerenteCalidad','fkIdPeticion')
                            ->asArray()
							->joinWith('fkIdOecContactoAltaDireccion')
							->joinWith('fkIdOecContactoGerenteTecnico')
							->joinWith('fkIdOecContactoGerenteCalidad')
							->joinWith('fkIdPeticion')
							->all();
						$total = sizeof($models);
                        $models = Evaluacion030001::find()
                        	->distinct(true)
							 ->select ([
										'id_evaluacion',
										'fk_id_peticion',
										'fk_id_oec_contacto_alta_direccion',
										'fk_id_oec_contacto_gerente_tecnico',
										'fk_id_oec_contacto_gerente_calidad',
										'codigo_evaluacion',
										'fecha_inicio_evaluacion',
										'fecha_fin_evaluacion',
										'objetivo_evaluacion',
										'documento_referencia_evaluacion',
										'identificacion_manual_evaluacion',
										'fecha_reunion_inicial_evaluacion',
										'hora_reunion_inicial_evaluacion',
										'fecha_reunion_ee_evaluacion',
										'hora_reunion_ee_evaluacion',
										'fecha_reunion_final_evaluacion',
										'hora_reunion_final_evaluacion',
										'idioma_evaluacion',
										'observacion_ra_oec_evaluacion',
										'observacion_ra_ee_evaluacion',
										'cumplimiento_etapas_evaluacion',
										'recomendacion_ra_evaluacion',
										'recomendacion_fecha_evaluacion',
										'decision_da_evaluacion',
										'decision_fecha_da_evaluacion',
										'fecha_creacion_evaluacion',
										'cad.primer_nombre_oec_contacto',
										'cgt.primer_nombre_oec_contacto',
										'cgc.primer_nombre_oec_contacto',
										'titulo_peticion',
										])
                            ->with('fkIdOecContactoAltaDireccion','fkIdOecContactoGerenteTecnico','fkIdOecContactoGerenteCalidad','fkIdPeticion')
                            ->asArray()
							->joinWith('fkIdOecContactoAltaDireccion')
							->joinWith('fkIdOecContactoGerenteTecnico')
							->joinWith('fkIdOecContactoGerenteCalidad')
							->joinWith('fkIdPeticion')
                            ->orderby($propertySort." ".$directionSort)
                            ->offset($_GET['start'])
                            ->limit($_GET['limit'])
                            ->all();
						for ($i=0; $i < sizeof($models); $i++) {
                            unset($models[$i]['fkIdOecContactoAltaDireccion']);
                            unset($models[$i]['fkIdOecContactoGerenteTecnico']);
                            unset($models[$i]['fkIdOecContactoGerenteCalidad']);
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