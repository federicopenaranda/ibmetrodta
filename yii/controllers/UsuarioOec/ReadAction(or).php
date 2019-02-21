<?php

#namespace app\controllers;

namespace app\controllers\UsuarioOec;
use yii\base\Action;
use app\models\Oec020001;
use yii\base\Exception;
use yii\helpers\Json;
use app\models\CTQ;
use yii\db\Query;

class ReadAction extends Action
{
    public function run()
    {
		$respuesta=new \stdClass();
		$model = new Oec020001;
		$error="";
		$error.= (!isset($_GET['callback'])) ? "{ Error de Callback } " : "";
        $error.= (!isset($_GET['start'])) ? "{ Error de start } " : "";
        $error.= (!isset($_GET['limit'])) ? "{ Error de limit } " : "";
        $listManyMany = [
						'fk_id_actividad_economica',
						'fk_id_usuario',
        				];

		if ($error == "") {
			try {
				if (isset($_GET['sort'])) {
					$sort=Json::decode($_GET['sort']);
					$propertySort	= $sort[0]['property'];
					$directionSort	= $sort[0]['direction'];
				} else {
					$propertySort	= "id_oec";
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
                    $models = Oec020001::find()
                    							->distinct(true)
												->with('fkIdNormaReferencia','fkIdOecTipo','oecAcreditacionSolicitada020003s','oecActividad020002s','oecContacto020003s','usuarioOec000102s')
												->asArray()
												->joinWith('fkIdNormaReferencia')
												->joinWith('fkIdOecTipo')
												->joinWith('fkIdPais')
												->joinWith('oecAcreditacionSolicitada020003s')
												->joinWith('oecActividad020002s')
												->joinWith('fkIdActividadEconomicas')
												->joinWith('oecContacto020003s')
												->joinWith('peticion010401s')
												->joinWith('usuarioOec000102s')
												->joinWith('fkIdUsuarios')
												->where($condiQuery)
                                                ->all();
                    $total = sizeof($models);
					$models = Oec020001::find()
                    							->distinct(true)
												->with('fkIdNormaReferencia','fkIdOecTipo','oecAcreditacionSolicitada020003s','oecActividad020002s','oecContacto020003s','usuarioOec000102s')
												->asArray()
												->joinWith('fkIdNormaReferencia')
												->joinWith('fkIdOecTipo')
												->joinWith('fkIdPais')
												->joinWith('oecAcreditacionSolicitada020003s')
												->joinWith('oecActividad020002s')
												->joinWith('oecContacto020003s')
												->joinWith('usuarioOec000102s')
												->where($condiQuery)
												->offset($_GET['start'])
												->limit($_GET['limit'])
												->all();
											for ($i=0; $i < sizeof($models); $i++) {
                            					unset($models[$i]['fkIdNormaReferencia']);
                            					unset($models[$i]['fkIdOecTipo']);
                            					unset($models[$i]['fkIdPais']);
											}
           
					for ($i=0; $i < sizeof($models); $i++) {
						$aux=array();
						for ($j=0; $j < sizeof($models[$i]['oecActividad020002s']); $j++){
							$aux[] = $models[$i]['oecActividad020002s'][$j]['fk_id_actividad_economica'];	
						}
						$models[$i]['oecActividad020002s'] = $aux;
					}
					for ($i=0; $i < sizeof($models); $i++) {
						$aux=array();
						for ($j=0; $j < sizeof($models[$i]['usuarioOec000102s']); $j++){
							$aux[] = $models[$i]['usuarioOec000102s'][$j]['fk_id_usuario'];	
						}
						$models[$i]['usuarioOec000102s'] = $aux;
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
                                
                                $listSubQuery[] = Oec020001::find()
                                				->distinct(true)
                                                ->with('fkIdNormaReferencia','fkIdOecTipo','oecAcreditacionSolicitada020003s','oecActividad020002s','oecContacto020003s','usuarioOec000102s')
                                                ->asArray()
												->joinWith('fkIdNormaReferencia')
												->joinWith('fkIdOecTipo')
												->joinWith('fkIdPais')
												->joinWith('oecAcreditacionSolicitada020003s')
												->joinWith('oecActividad020002s')
												->joinWith('oecContacto020003s')
												->joinWith('usuarioOec000102s')
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
                        	$models = Oec020001::find()
                            					->distinct(true)
                                                ->with('fkIdNormaReferencia','fkIdOecTipo','oecAcreditacionSolicitada020003s','oecActividad020002s','oecContacto020003s','usuarioOec000102s')
                                                ->asArray()
												->joinWith('fkIdNormaReferencia')
												->joinWith('fkIdOecTipo')
												->joinWith('fkIdPais')
												->joinWith('oecAcreditacionSolicitada020003s')
												->joinWith('oecActividad020002s')
												->joinWith('oecContacto020003s')
												->joinWith('usuarioOec000102s')
                                                ->where($condi)
                                                ->all();
                            $total = sizeof($models);
                            $models = Oec020001::find()
                            					->distinct(true)
                                                ->select ([
														'id_oec',
														'fk_id_oec_tipo',
														'fk_id_pais',
														'fk_id_norma_referencia',
														'nombre_oec',
														'nit_oec',
														'direccion_oec',
														'ciudad_oec',
														'departamento_oec',
														'telefono1_oec',
														'telefono2_oec',
														'celular_oec',
														'fax_oec',
														'email1_oec',
														'email2_oec',
														'fecha_creacion_oec',

														'nombre_norma_referencia',

														'nombre_oec_tipo',

														'nombre_pais',
														])
                                                ->with('fkIdNormaReferencia','fkIdOecTipo','oecAcreditacionSolicitada020003s','oecActividad020002s','oecContacto020003s','usuarioOec000102s')
                                                ->asArray()
												->joinWith('fkIdNormaReferencia')
												->joinWith('fkIdOecTipo')
												->joinWith('fkIdPais')
												->joinWith('oecAcreditacionSolicitada020003s')
												->joinWith('oecActividad020002s')
												->joinWith('oecContacto020003s')
												->joinWith('usuarioOec000102s')
                                                ->where($condi)
                                                ->orderby($propertySort." ".$directionSort)
                                                ->offset($_GET['start'])
                                                ->limit($_GET['limit'])
                                                ->all();
											for ($i=0; $i < sizeof($models); $i++) {
                            					unset($models[$i]['fkIdNormaReferencia']);
                            					unset($models[$i]['fkIdOecTipo']);
                            					unset($models[$i]['fkIdPais']);
											}
                            for ($i=0; $i < sizeof($models); $i++) {
                                $aux=array();
                                for($j=0; $j < sizeof($models[$i]['oecActividad020002s']); $j++){
                                    $aux[] = $models[$i]['oecActividad020002s'][$j]['fk_id_actividad_economica'];	
                                }
                                $models[$i]['oecActividad020002s'] = $aux;
                            }
                            for ($i=0; $i < sizeof($models); $i++) {
                                $aux=array();
                                for($j=0; $j < sizeof($models[$i]['usuarioOec000102s']); $j++){
                                    $aux[] = $models[$i]['usuarioOec000102s'][$j]['fk_id_usuario'];	
                                }
                                $models[$i]['usuarioOec000102s'] = $aux;
                            }
                        } else {
                        	$models = Oec020001::find()
                            					->distinct(true)
                                                ->with('fkIdNormaReferencia','fkIdOecTipo','oecAcreditacionSolicitada020003s','oecActividad020002s','oecContacto020003s','usuarioOec000102s')
                                                ->asArray()
							->joinWith('fkIdNormaReferencia')
							->joinWith('fkIdOecTipo')
							->joinWith('fkIdPais')
							->joinWith('oecAcreditacionSolicitada020003s')
							->joinWith('oecActividad020002s')
							->joinWith('oecContacto020003s')
							->joinWith('usuarioOec000102s')
                                                ->where(['IN','id_oec',$listSubQuery[0]])
                                                ->andWhere(['IN','id_oec',$listSubQuery[sizeof($listSubQuery)-1]])
                            					->all();
                            $total = sizeof($models);
                            $models = Oec020001::find()
                            					->distinct(true)
                                                ->select ([
														'id_oec',
														'fk_id_oec_tipo',
														'fk_id_pais',
														'fk_id_norma_referencia',
														'nombre_oec',
														'nit_oec',
														'direccion_oec',
														'ciudad_oec',
														'departamento_oec',
														'telefono1_oec',
														'telefono2_oec',
														'celular_oec',
														'fax_oec',
														'email1_oec',
														'email2_oec',
														'fecha_creacion_oec',
														'nombre_norma_referencia',
														'nombre_oec_tipo',
														'nombre_pais',
														])
                                                ->with('fkIdNormaReferencia','fkIdOecTipo','oecAcreditacionSolicitada020003s','oecActividad020002s','oecContacto020003s','usuarioOec000102s')
                                                ->asArray()
												->joinWith('fkIdNormaReferencia')
												->joinWith('fkIdOecTipo')
												->joinWith('fkIdPais')
												->joinWith('oecAcreditacionSolicitada020003s')
												->joinWith('oecActividad020002s')
												->joinWith('oecContacto020003s')
												->joinWith('usuarioOec000102s')
                                                ->where(['IN','id_oec',$listSubQuery[0]])
                                                ->andWhere(['IN','id_oec',$listSubQuery[sizeof($listSubQuery)-1]])
                                                ->orderby($propertySort." ".$directionSort)
                                                ->offset($_GET['start'])
                                                ->limit($_GET['limit'])
                                                ->all();
											for ($i=0; $i < sizeof($models); $i++) {
                            					unset($models[$i]['fkIdNormaReferencia']);
                            					unset($models[$i]['fkIdOecTipo']);
                            					unset($models[$i]['fkIdPais']);
											}
                            for ($i=0; $i < sizeof($models); $i++) {
                                $aux=array();
                                for($j=0; $j < sizeof($models[$i]['oecActividad020002s']); $j++){
                                    $aux[] = $models[$i]['oecActividad020002s'][$j]['fk_id_actividad_economica'];	
                                }
                                $models[$i]['oecActividad020002s'] = $aux;
                            }
                            for ($i=0; $i < sizeof($models); $i++) {
                                $aux=array();
                                for($j=0; $j < sizeof($models[$i]['usuarioOec000102s']); $j++){
                                    $aux[] = $models[$i]['usuarioOec000102s'][$j]['fk_id_usuario'];	
                                }
                                $models[$i]['usuarioOec000102s'] = $aux;
                            }
                        }
                        
                    } else {
                    	$models = Oec020001::find()
                        	->distinct(true)
                            ->with('fkIdNormaReferencia','fkIdOecTipo','oecAcreditacionSolicitada020003s','oecActividad020002s','oecContacto020003s','usuarioOec000102s')
                            ->asArray()
							->joinWith('fkIdNormaReferencia')
							->joinWith('fkIdOecTipo')
							->joinWith('fkIdPais')
							->all();
						$total = sizeof($models);
                        $models = Oec020001::find()
                        	->distinct(true)
							 ->select ([
										'id_oec',
										'fk_id_oec_tipo',
										'fk_id_pais',
										'fk_id_norma_referencia',
										'nombre_oec',
										'nit_oec',
										'direccion_oec',
										'ciudad_oec',
										'departamento_oec',
										'telefono1_oec',
										'telefono2_oec',
										'celular_oec',
										'fax_oec',
										'email1_oec',
										'email2_oec',
										'fecha_creacion_oec',
										'nombre_norma_referencia',
										'nombre_oec_tipo',
										'nombre_pais',
										])
                            ->with('fkIdNormaReferencia','fkIdOecTipo','oecAcreditacionSolicitada020003s','oecActividad020002s','oecContacto020003s','usuarioOec000102s')
                            ->asArray()
							->joinWith('fkIdNormaReferencia')
							->joinWith('fkIdOecTipo')
							->joinWith('fkIdPais')
                            ->orderby($propertySort." ".$directionSort)
                            ->offset($_GET['start'])
                            ->limit($_GET['limit'])
                            ->all();
						for ($i=0; $i < sizeof($models); $i++) {
                            unset($models[$i]['fkIdNormaReferencia']);
                            unset($models[$i]['fkIdOecTipo']);
                            unset($models[$i]['fkIdPais']);
						}
						for ($i=0; $i < sizeof($models); $i++) {
							$aux=array();
							for($j=0; $j < sizeof($models[$i]['oecActividad020002s']); $j++){
								$aux[] = $models[$i]['oecActividad020002s'][$j]['fk_id_actividad_economica'];
							}
							$models[$i]['oecActividad020002s'] = $aux;
						}
						for ($i=0; $i < sizeof($models); $i++) {
							$aux=array();
							for($j=0; $j < sizeof($models[$i]['usuarioOec000102s']); $j++){
								$aux[] = $models[$i]['usuarioOec000102s'][$j]['fk_id_usuario'];
							}
							$models[$i]['usuarioOec000102s'] = $aux;
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