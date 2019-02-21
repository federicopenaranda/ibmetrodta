<?php

namespace app\controllers;

namespace app\controllers\Peticion010401;
use yii\base\Action;
use app\models\Peticion010401;
use yii\base\Exception;
use yii\helpers\Json;
use app\models\CTQ;
use yii\db\Query;
use app\models\Estado010601;

class ReadAction extends Action
{
    public function run()
    {
		$respuesta=new \stdClass();
		$model = new Peticion010401;
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
					$propertySort	= "id_peticion";
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
                    $models = Peticion010401::find()
                    							->distinct(true)
												->with('detalleEquipos040201s','fkIdProceso','fkIdUsuario','fkIdOec')
												->asArray()
												->joinWith('anexoConvenio041301s')
												->joinWith('certificado041401s')
												->joinWith('designacionEvaluador041001s')
												->joinWith('detalleCalibracion040301s')
												->joinWith('detalleCertificacion040501s')
												->joinWith('detalleEquipos040201s')
												->joinWith('detalleInspeccion040401s')
												->joinWith('equipoPeticion010701s')
												->joinWith('evalTecnica040801s')
												->joinWith('evaluacion030001s')
												->joinWith('infoEnsayo040101s')
												->joinWith('informeAcred041301s')
												->joinWith('informeEvaluacion040601s')
												->joinWith('noConformidad040701s')
												->joinWith('fkIdProceso')
												->joinWith('fkIdUsuario')
												->joinWith('fkIdOec')
												->joinWith('peticionAccion010301s')
												->joinWith('peticionEstado010403s')
												->joinWith('pruebaParticipacion040901s')
												->joinWith('satisfaccionCliente041201s')
												->joinWith('supervisionEvaluador041101s')
												->where($condiQuery)
                                                ->all();
                    $total = sizeof($models);
					$models = Peticion010401::find()
                    							->distinct(true)
												->with('detalleEquipos040201s','fkIdProceso','fkIdUsuario','fkIdOec')
												->asArray()
												->joinWith('detalleEquipos040201s')
												->joinWith('fkIdProceso')
												->joinWith('fkIdUsuario')
												->joinWith('fkIdOec')
												->where($condiQuery)
												->offset($_GET['start'])
												->limit($_GET['limit'])
												->all();
											for ($i=0; $i < sizeof($models); $i++) {
                            					unset($models[$i]['fkIdProceso']);
                            					unset($models[$i]['fkIdUsuario']);
                            					unset($models[$i]['fkIdOec']);
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
                               
                                $listSubQuery[] = Peticion010401::find()
                                				->distinct(true)
                                                ->with('detalleEquipos040201s','fkIdProceso','fkIdUsuario','fkIdOec')
                                                ->asArray()
												->joinWith('detalleEquipos040201s')
												->joinWith('fkIdProceso')
												->joinWith('fkIdUsuario')
												->joinWith('fkIdOec')
                                                ->where([$filtro['property']=>$filtro['value']])
                                                ->all();
                                $sw=1;	
                            } else {
								
                            	if (is_numeric($filtro['value']) && strpos($filtro['property'],'fk_id_') !== FALSE) 
									if($filtro['property'] == "fk_id_oec") {
										$condi.= $contFil!=sizeof($filtros) ? "peticion_01_04_01.".$filtro['property']." = ".$filtro['value']." AND " : "peticion_01_04_01.".$filtro['property']." = ".$filtro['value'];
									 
									} else {
										$condi.= $contFil!=sizeof($filtros) ? $filtro['property']." = ".$filtro['value']." AND " : $filtro['property']." = ".$filtro['value'];
									}
                                else 
                                	$condi.= $contFil!=sizeof($filtros) ? $filtro['property']." LIKE '%".$filtro['value']."%' AND " : $filtro['property']." LIKE '%".$filtro['value']."%'";	
                                $contFil++;	
                            }		
                        endforeach;
                        if ($sw == 0) {

                        	$models = Peticion010401::find()
                            					->distinct(true)
                                                ->with('detalleEquipos040201s','fkIdProceso','fkIdUsuario','fkIdOec')
                                                ->asArray()
												->joinWith('detalleEquipos040201s')
												->joinWith('fkIdProceso')
												->joinWith('fkIdUsuario')
												->joinWith('fkIdOec')
                                                ->where($condi)
                                                ->all();
                            $total = sizeof($models);
                            $models = Peticion010401::find()
                            					->distinct(true)
                                                ->select ([
														'id_peticion',
														'fk_id_proceso',
														'fk_id_usuario',
														'peticion_01_04_01.fk_id_oec',
														'fk_id_codigo_peticion',
														'titulo_peticion',
														'fechahora_peticion',
														'descripcion_peticion',
														'codigo_acreditacion_peticion',
														'fecha_creacion_peticion',
														'nombre_proceso',
														'codigo_usuario',
														'nombre_oec',
														'codigo_peticion',
														'estado_peticion',
														'necesidad_comite_peticion',
														'codigo_temporal'
														])
                                                ->with('detalleEquipos040201s','fkIdProceso','fkIdUsuario','fkIdOec','fkIdCodigoPeticion')
                                                ->asArray()
												->joinWith('detalleEquipos040201s')
												->joinWith('fkIdProceso')
												->joinWith('fkIdUsuario')
												->joinWith('fkIdOec')
												->joinWith('fkIdCodigoPeticion')
                                                ->where($condi)
                                                ->orderby($propertySort." ".$directionSort)
                                                ->offset($_GET['start'])
                                                ->limit($_GET['limit'])
                                                ->all();
											for ($i=0; $i < sizeof($models); $i++) {
												
												$estado = Estado010601::find()
		                    							->distinct(true)
														->with('peticionEstado010403s')
														->joinWith('peticionEstado010403s')
														->where(['fk_id_peticion'=>$models[$i]['id_peticion'],'activo_peticion_estado'=>1])
														->one();

												$models[$i]['nombre_estado'] = $estado->nombre_estado;
                            					unset($models[$i]['fkIdProceso']);
                            					unset($models[$i]['fkIdUsuario']);
                            					unset($models[$i]['fkIdOec']);
											}

                        } else {
                        	$models = Peticion010401::find()
                            					->distinct(true)
                                                ->with('detalleEquipos040201s','fkIdProceso','fkIdUsuario','fkIdOec')
                                                ->asArray()
												->joinWith('detalleEquipos040201s')
												->joinWith('fkIdProceso')
												->joinWith('fkIdUsuario')
												->joinWith('fkIdOec')
                                                ->where(['IN','id_peticion',$listSubQuery[0]])
                                                ->andWhere(['IN','id_peticion',$listSubQuery[sizeof($listSubQuery)-1]])
                            					->all();
                            $total = sizeof($models);
                            $models = Peticion010401::find()
                            					->distinct(true)
                                                ->select ([
														'id_peticion',
														'fk_id_proceso',
														'fk_id_usuario',
														'peticion_01_04_01.fk_id_oec',
														'fk_id_codigo_peticion',
														'titulo_peticion',
														'fechahora_peticion',
														'descripcion_peticion',
														'codigo_acreditacion_peticion',
														'fecha_creacion_peticion',
														'nombre_proceso',
														'codigo_usuario',
														'nombre_oec',
														'codigo_peticion',
														'estado_peticion',
														'necesidad_comite_peticion',
														'codigo_temporal'
														])
                                                ->with('detalleEquipos040201s','fkIdProceso','fkIdUsuario','fkIdOec','fkIdCodigoPeticion')
                                                ->asArray()
												->joinWith('detalleEquipos040201s')
												->joinWith('fkIdProceso')
												->joinWith('fkIdUsuario')
												->joinWith('fkIdOec')
												->joinWith('fkIdCodigoPeticion')
                                                ->where(['IN','id_peticion',$listSubQuery[0]])
                                                ->andWhere(['IN','id_peticion',$listSubQuery[sizeof($listSubQuery)-1]])
                                                ->orderby($propertySort." ".$directionSort)
                                                ->offset($_GET['start'])
                                                ->limit($_GET['limit'])
                                                ->all();
											for ($i=0; $i < sizeof($models); $i++) {
                            					unset($models[$i]['fkIdProceso']);
                            					unset($models[$i]['fkIdUsuario']);
                            					unset($models[$i]['fkIdOec']);
											}
                        }
                        
                    } else {

                    	$models = Peticion010401::find()
                        	->distinct(true)
                            ->with('detalleEquipos040201s','fkIdProceso','fkIdUsuario','fkIdOec')
                            ->asArray()
							->joinWith('fkIdProceso')
							->joinWith('fkIdUsuario')
							->joinWith('fkIdOec')
							->all();
						$total = sizeof($models);
                        $models = Peticion010401::find()
                        	->distinct(true)
							 ->select ([
										'id_peticion',
										'fk_id_proceso',
										'fk_id_usuario',
										'peticion_01_04_01.fk_id_oec',
										'fk_id_codigo_peticion',
										'titulo_peticion',
										'fechahora_peticion',
										'descripcion_peticion',
										'codigo_acreditacion_peticion',
										'fecha_creacion_peticion',
										'nombre_proceso',
										'codigo_usuario',
										'nombre_oec',
										'codigo_peticion',
										'estado_peticion',
										'necesidad_comite_peticion',
										'codigo_temporal'

										])
                            ->with('detalleEquipos040201s','fkIdProceso','fkIdUsuario','fkIdOec','fkIdCodigoPeticion')
                            ->asArray()
							->joinWith('fkIdProceso')
							->joinWith('fkIdUsuario')
							->joinWith('fkIdOec')
							->joinWith('fkIdCodigoPeticion')
                            ->orderby($propertySort." ".$directionSort)
                            ->offset($_GET['start'])
                            ->limit($_GET['limit'])
                            ->all();
						for ($i=0; $i < sizeof($models); $i++) {
							$estado = Estado010601::find()
                    							->distinct(true)
												->with('peticionEstado010403s')
												->joinWith('peticionEstado010403s')
												->where(['fk_id_peticion'=>$models[$i]['id_peticion'],'activo_peticion_estado'=>1])
												->one();
							$models[$i]['nombre_estado'] = $estado->nombre_estado;
                            unset($models[$i]['fkIdProceso']);
                            unset($models[$i]['fkIdUsuario']);
                            unset($models[$i]['fkIdOec']);
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