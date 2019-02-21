<?php

namespace app\controllers;

namespace app\controllers\Usuario000101;
use yii\base\Action;
use app\models\Usuario000101;
use yii\base\Exception;
use yii\helpers\Json;
use app\models\CTQ;
use yii\db\Query;

class ReadAction extends Action
{
    public function run()
    {
		$respuesta=new \stdClass();
		$model = new Usuario000101;
		$error="";
		$error.= (!isset($_GET['callback'])) ? "{ Error de Callback } " : "";
        $error.= (!isset($_GET['start'])) ? "{ Error de start } " : "";
        $error.= (!isset($_GET['limit'])) ? "{ Error de limit } " : "";
        $listManyMany = [
						'fk_id_oec',
						'fk_id_proceso',
						'fk_id_usuario_tipo',
        				];

		if ($error == "") {
			try {
				if (isset($_GET['sort'])) {
					$sort=Json::decode($_GET['sort']);
					$propertySort	= $sort[0]['property'];
					$directionSort	= $sort[0]['direction'];
				} else {
					$propertySort	= "id_usuario";
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
                    $models = Usuario000101::find()
                    							->distinct(true)
												->with('usuarioOec000102s','usuarioProceso000102s','usuarioTipoUsuario000102s')
												->asArray()
												->joinWith('equipoPeticion010701s')
												->joinWith('logSistema030003s')
												->joinWith('obsPeticionAccion010303s')
												->joinWith('peticion010401s')
												->joinWith('peticionAccion010301s')
												->joinWith('planEvaluacion030003s')
												->joinWith('usuarioOec000102s')
												->joinWith('fkIdOecs')
												->joinWith('usuarioProceso000102s')
												->joinWith('fkIdProcesos')
												->joinWith('usuarioTipoUsuario000102s')
												->joinWith('fkIdUsuarioTipos')
												->where($condiQuery)
                                                ->all();
                    $total = sizeof($models);
					$models = Usuario000101::find()
                    							->distinct(true)
												->with('usuarioOec000102s','usuarioProceso000102s','usuarioTipoUsuario000102s')
												->asArray()
												->joinWith('usuarioOec000102s')
												->joinWith('usuarioProceso000102s')
												->joinWith('usuarioTipoUsuario000102s')
												->where($condiQuery)
												->offset($_GET['start'])
												->limit($_GET['limit'])
												->all();
											for ($i=0; $i < sizeof($models); $i++) {
											}
           
					for ($i=0; $i < sizeof($models); $i++) {
						$aux=array();
						for ($j=0; $j < sizeof($models[$i]['usuarioOec000102s']); $j++){
							$aux[] = $models[$i]['usuarioOec000102s'][$j]['fk_id_oec'];	
						}
						$models[$i]['usuarioOec000102s'] = $aux;
					}
					for ($i=0; $i < sizeof($models); $i++) {
						$aux=array();
						for ($j=0; $j < sizeof($models[$i]['usuarioProceso000102s']); $j++){
							$aux[] = $models[$i]['usuarioProceso000102s'][$j]['fk_id_proceso'];	
						}
						$models[$i]['usuarioProceso000102s'] = $aux;
					}
					for ($i=0; $i < sizeof($models); $i++) {
						$aux=array();
						for ($j=0; $j < sizeof($models[$i]['usuarioTipoUsuario000102s']); $j++){
							$aux[] = $models[$i]['usuarioTipoUsuario000102s'][$j]['fk_id_usuario_tipo'];	
						}
						$models[$i]['usuarioTipoUsuario000102s'] = $aux;
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
                                
                                $listSubQuery[] = Usuario000101::find()
                                				->distinct(true)
                                                ->with('usuarioOec000102s','usuarioProceso000102s','usuarioTipoUsuario000102s')
                                                ->asArray()
												->joinWith('usuarioOec000102s')
												->joinWith('usuarioProceso000102s')
												->joinWith('usuarioTipoUsuario000102s')
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
                        	$models = Usuario000101::find()
                            					->distinct(true)
                                                ->with('usuarioOec000102s','usuarioProceso000102s','usuarioTipoUsuario000102s')
                                                ->asArray()
												->joinWith('usuarioOec000102s')
												->joinWith('usuarioProceso000102s')
												->joinWith('usuarioTipoUsuario000102s')
                                                ->where($condi)
                                                ->all();
                            $total = sizeof($models);
                            $models = Usuario000101::find()
                            					->distinct(true)
                                                ->select ([
														'id_usuario',
														'primer_nombre_usuario',
														'segundo_nombre_usuario',
														'apellido_paterno_usuario',
														'apellido_materno_usuario',
														'codigo_usuario',
														'login_usuario',
														'sexo_usuario',
														'telefono_usuario',
														'fecha_nacimiento_usuario',
														'celular_usuario',
														'correo_usuario',
														'direccion_usuario',
														'imagen_usuario',
														'observaciones_usuario',
														'acceso_ip_usuario',
														'fecha_creacion_usuario',
														'empresa_usuario',
														'estado_usuario',
														])
                                                ->with('usuarioOec000102s','usuarioProceso000102s','usuarioTipoUsuario000102s')
                                                ->asArray()
												->joinWith('usuarioOec000102s')
												->joinWith('usuarioProceso000102s')
												->joinWith('usuarioTipoUsuario000102s')
                                                ->where($condi)
                                                ->orderby($propertySort." ".$directionSort)
                                                ->offset($_GET['start'])
                                                ->limit($_GET['limit'])
                                                ->all();
											for ($i=0; $i < sizeof($models); $i++) {
											}
                            for ($i=0; $i < sizeof($models); $i++) {
                                $aux=array();
                                for($j=0; $j < sizeof($models[$i]['usuarioOec000102s']); $j++){
                                    $aux[] = $models[$i]['usuarioOec000102s'][$j]['fk_id_oec'];	
                                }
                                $models[$i]['usuarioOec000102s'] = $aux;
                            }
                            for ($i=0; $i < sizeof($models); $i++) {
                                $aux=array();
                                for($j=0; $j < sizeof($models[$i]['usuarioProceso000102s']); $j++){
                                    $aux[] = $models[$i]['usuarioProceso000102s'][$j]['fk_id_proceso'];	
                                }
                                $models[$i]['usuarioProceso000102s'] = $aux;
                            }
                            for ($i=0; $i < sizeof($models); $i++) {
                                $aux=array();
                                for($j=0; $j < sizeof($models[$i]['usuarioTipoUsuario000102s']); $j++){
                                    $aux[] = $models[$i]['usuarioTipoUsuario000102s'][$j]['fk_id_usuario_tipo'];	
                                }
                                $models[$i]['usuarioTipoUsuario000102s'] = $aux;
                            }
                        } else {
                        	$models = Usuario000101::find()
                            					->distinct(true)
                                                ->with('usuarioOec000102s','usuarioProceso000102s','usuarioTipoUsuario000102s')
                                                ->asArray()
							->joinWith('usuarioOec000102s')
							->joinWith('usuarioProceso000102s')
							->joinWith('usuarioTipoUsuario000102s')
                                                ->where(['IN','id_usuario',$listSubQuery[0]])
                                                ->andWhere(['IN','id_usuario',$listSubQuery[sizeof($listSubQuery)-1]])
                            					->all();
                            $total = sizeof($models);
                            $models = Usuario000101::find()
                            					->distinct(true)
                                                ->select ([
														'id_usuario',
														'primer_nombre_usuario',
														'segundo_nombre_usuario',
														'apellido_paterno_usuario',
														'apellido_materno_usuario',
														'codigo_usuario',
														'login_usuario',
														'sexo_usuario',
														'telefono_usuario',
														'celular_usuario',
														'correo_usuario',
														'direccion_usuario',
														'fecha_nacimiento_usuario',
														'imagen_usuario',
														'observaciones_usuario',
														'acceso_ip_usuario',
														'fecha_creacion_usuario',
														'empresa_usuario',
														'estado_usuario',
														])
                                                ->with('usuarioOec000102s','usuarioProceso000102s','usuarioTipoUsuario000102s')
                                                ->asArray()
												->joinWith('usuarioOec000102s')
												->joinWith('usuarioProceso000102s')
												->joinWith('usuarioTipoUsuario000102s')
                                                ->where(['IN','id_usuario',$listSubQuery[0]])
                                                ->andWhere(['IN','id_usuario',$listSubQuery[sizeof($listSubQuery)-1]])
                                                ->orderby($propertySort." ".$directionSort)
                                                ->offset($_GET['start'])
                                                ->limit($_GET['limit'])
                                                ->all();
											for ($i=0; $i < sizeof($models); $i++) {
											}
                            for ($i=0; $i < sizeof($models); $i++) {
                                $aux=array();
                                for($j=0; $j < sizeof($models[$i]['usuarioOec000102s']); $j++){
                                    $aux[] = $models[$i]['usuarioOec000102s'][$j]['fk_id_oec'];	
                                }
                                $models[$i]['usuarioOec000102s'] = $aux;
                            }
                            for ($i=0; $i < sizeof($models); $i++) {
                                $aux=array();
                                for($j=0; $j < sizeof($models[$i]['usuarioProceso000102s']); $j++){
                                    $aux[] = $models[$i]['usuarioProceso000102s'][$j]['fk_id_proceso'];	
                                }
                                $models[$i]['usuarioProceso000102s'] = $aux;
                            }
                            for ($i=0; $i < sizeof($models); $i++) {
                                $aux=array();
                                for($j=0; $j < sizeof($models[$i]['usuarioTipoUsuario000102s']); $j++){
                                    $aux[] = $models[$i]['usuarioTipoUsuario000102s'][$j]['fk_id_usuario_tipo'];	
                                }
                                $models[$i]['usuarioTipoUsuario000102s'] = $aux;
                            }
                        }
                        
                    } else {
                    	$models = Usuario000101::find()
                        	->distinct(true)
                            ->with('usuarioOec000102s','usuarioProceso000102s','usuarioTipoUsuario000102s')
                            ->asArray()
							->all();
						$total = sizeof($models);
                        $models = Usuario000101::find()
                        	->distinct(true)
							 ->select ([
										'id_usuario',
										'primer_nombre_usuario',
										'segundo_nombre_usuario',
										'apellido_paterno_usuario',
										'apellido_materno_usuario',
										'codigo_usuario',
										'login_usuario',
										'sexo_usuario',
										'telefono_usuario',
										'celular_usuario',
										'correo_usuario',
										'direccion_usuario',
										'imagen_usuario',
										'fecha_nacimiento_usuario',
										'observaciones_usuario',
										'acceso_ip_usuario',
										'fecha_creacion_usuario',
										'empresa_usuario',
										'estado_usuario',
										])
                            ->with('usuarioOec000102s','usuarioProceso000102s','usuarioTipoUsuario000102s')
                            ->asArray()
                            ->orderby($propertySort." ".$directionSort)
                            ->offset($_GET['start'])
                            ->limit($_GET['limit'])
                            ->all();
						for ($i=0; $i < sizeof($models); $i++) {
						}
						for ($i=0; $i < sizeof($models); $i++) {
							$aux=array();
							for($j=0; $j < sizeof($models[$i]['usuarioOec000102s']); $j++){
								$aux[] = $models[$i]['usuarioOec000102s'][$j]['fk_id_oec'];
							}
							$models[$i]['usuarioOec000102s'] = $aux;
						}
						for ($i=0; $i < sizeof($models); $i++) {
							$aux=array();
							for($j=0; $j < sizeof($models[$i]['usuarioProceso000102s']); $j++){
								$aux[] = $models[$i]['usuarioProceso000102s'][$j]['fk_id_proceso'];
							}
							$models[$i]['usuarioProceso000102s'] = $aux;
						}
						for ($i=0; $i < sizeof($models); $i++) {
							$aux=array();
							for($j=0; $j < sizeof($models[$i]['usuarioTipoUsuario000102s']); $j++){
								$aux[] = $models[$i]['usuarioTipoUsuario000102s'][$j]['fk_id_usuario_tipo'];
							}
							$models[$i]['usuarioTipoUsuario000102s'] = $aux;
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