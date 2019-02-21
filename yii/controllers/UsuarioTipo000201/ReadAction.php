<?php

namespace app\controllers;

namespace app\controllers\UsuarioTipo000201;
use yii\base\Action;
use app\models\UsuarioTipo000201;
use yii\base\Exception;
use yii\helpers\Json;
use app\models\CTQ;
use yii\db\Query;

class ReadAction extends Action
{
    public function run()
    {
		$respuesta=new \stdClass();
		$model = new UsuarioTipo000201;
		$error="";
		$error.= (!isset($_GET['callback'])) ? "{ Error de Callback } " : "";
        $error.= (!isset($_GET['start'])) ? "{ Error de start } " : "";
        $error.= (!isset($_GET['limit'])) ? "{ Error de limit } " : "";
        $listManyMany = [
						'fk_id_usuario_privilegio',
						'fk_id_usuario',
        				];

		if ($error == "") {
			try {
				if (isset($_GET['sort'])) {
					$sort=Json::decode($_GET['sort']);
					$propertySort	= $sort[0]['property'];
					$directionSort	= $sort[0]['direction'];
				} else {
					$propertySort	= "id_usuario_tipo";
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
                    $models = UsuarioTipo000201::find()
                    							->distinct(true)
												->with('usuarioTipoPrivilegio000202s','usuarioTipoUsuario000102s')
												->asArray()
												->joinWith('usuarioTipoPrivilegio000202s')
												->joinWith('fkIdUsuarioPrivilegios')
												->joinWith('usuarioTipoUsuario000102s')
												->joinWith('fkIdUsuarios')
												->where($condiQuery)
                                                ->all();
                    $total = sizeof($models);
					$models = UsuarioTipo000201::find()
                    							->distinct(true)
												->with('usuarioTipoPrivilegio000202s','usuarioTipoUsuario000102s')
												->asArray()
												->joinWith('usuarioTipoPrivilegio000202s')
												->joinWith('usuarioTipoUsuario000102s')
												->where($condiQuery)
												->offset($_GET['start'])
												->limit($_GET['limit'])
												->all();
											for ($i=0; $i < sizeof($models); $i++) {
											}
           
					for ($i=0; $i < sizeof($models); $i++) {
						$aux=array();
						for ($j=0; $j < sizeof($models[$i]['usuarioTipoPrivilegio000202s']); $j++){
							$aux[] = $models[$i]['usuarioTipoPrivilegio000202s'][$j]['fk_id_usuario_privilegio'];	
						}
						$models[$i]['usuarioTipoPrivilegio000202s'] = $aux;
					}
					for ($i=0; $i < sizeof($models); $i++) {
						$aux=array();
						for ($j=0; $j < sizeof($models[$i]['usuarioTipoUsuario000102s']); $j++){
							$aux[] = $models[$i]['usuarioTipoUsuario000102s'][$j]['fk_id_usuario'];	
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
                                
                                $listSubQuery[] = UsuarioTipo000201::find()
                                				->distinct(true)
                                                ->with('usuarioTipoPrivilegio000202s','usuarioTipoUsuario000102s')
                                                ->asArray()
												->joinWith('usuarioTipoPrivilegio000202s')
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
                        	$models = UsuarioTipo000201::find()
                            					->distinct(true)
                                                ->with('usuarioTipoPrivilegio000202s','usuarioTipoUsuario000102s')
                                                ->asArray()
												->joinWith('usuarioTipoPrivilegio000202s')
												->joinWith('usuarioTipoUsuario000102s')
                                                ->where($condi)
                                                ->all();
                            $total = sizeof($models);
                            $models = UsuarioTipo000201::find()
                            					->distinct(true)
                                                ->select ([
														'id_usuario_tipo',
														'nombre_usuario_tipo',
														'descripcion_usuario_tipo',
														])
                                                ->with('usuarioTipoPrivilegio000202s','usuarioTipoUsuario000102s')
                                                ->asArray()
												->joinWith('usuarioTipoPrivilegio000202s')
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
                                for($j=0; $j < sizeof($models[$i]['usuarioTipoPrivilegio000202s']); $j++){
                                    $aux[] = $models[$i]['usuarioTipoPrivilegio000202s'][$j]['fk_id_usuario_privilegio'];	
                                }
                                $models[$i]['usuarioTipoPrivilegio000202s'] = $aux;
                            }
                            for ($i=0; $i < sizeof($models); $i++) {
                                $aux=array();
                                for($j=0; $j < sizeof($models[$i]['usuarioTipoUsuario000102s']); $j++){
                                    $aux[] = $models[$i]['usuarioTipoUsuario000102s'][$j]['fk_id_usuario'];	
                                }
                                $models[$i]['usuarioTipoUsuario000102s'] = $aux;
                            }
                        } else {
                        	$models = UsuarioTipo000201::find()
                            					->distinct(true)
                                                ->with('usuarioTipoPrivilegio000202s','usuarioTipoUsuario000102s')
                                                ->asArray()
							->joinWith('usuarioTipoPrivilegio000202s')
							->joinWith('usuarioTipoUsuario000102s')
                                                ->where(['IN','id_usuario_tipo',$listSubQuery[0]])
                                                ->andWhere(['IN','id_usuario_tipo',$listSubQuery[sizeof($listSubQuery)-1]])
                            					->all();
                            $total = sizeof($models);
                            $models = UsuarioTipo000201::find()
                            					->distinct(true)
                                                ->select ([
														'id_usuario_tipo',
														'nombre_usuario_tipo',
														'descripcion_usuario_tipo',
														])
                                                ->with('usuarioTipoPrivilegio000202s','usuarioTipoUsuario000102s')
                                                ->asArray()
												->joinWith('usuarioTipoPrivilegio000202s')
												->joinWith('usuarioTipoUsuario000102s')
                                                ->where(['IN','id_usuario_tipo',$listSubQuery[0]])
                                                ->andWhere(['IN','id_usuario_tipo',$listSubQuery[sizeof($listSubQuery)-1]])
                                                ->orderby($propertySort." ".$directionSort)
                                                ->offset($_GET['start'])
                                                ->limit($_GET['limit'])
                                                ->all();
											for ($i=0; $i < sizeof($models); $i++) {
											}
                            for ($i=0; $i < sizeof($models); $i++) {
                                $aux=array();
                                for($j=0; $j < sizeof($models[$i]['usuarioTipoPrivilegio000202s']); $j++){
                                    $aux[] = $models[$i]['usuarioTipoPrivilegio000202s'][$j]['fk_id_usuario_privilegio'];	
                                }
                                $models[$i]['usuarioTipoPrivilegio000202s'] = $aux;
                            }
                            for ($i=0; $i < sizeof($models); $i++) {
                                $aux=array();
                                for($j=0; $j < sizeof($models[$i]['usuarioTipoUsuario000102s']); $j++){
                                    $aux[] = $models[$i]['usuarioTipoUsuario000102s'][$j]['fk_id_usuario'];	
                                }
                                $models[$i]['usuarioTipoUsuario000102s'] = $aux;
                            }
                        }
                        
                    } else {
                    	$models = UsuarioTipo000201::find()
                        	->distinct(true)
                            ->with('usuarioTipoPrivilegio000202s','usuarioTipoUsuario000102s')
                            ->asArray()
							->all();
						$total = sizeof($models);
                        $models = UsuarioTipo000201::find()
                        	->distinct(true)
							 ->select ([
										'id_usuario_tipo',
										'nombre_usuario_tipo',
										'descripcion_usuario_tipo',
										])
                            ->with('usuarioTipoPrivilegio000202s','usuarioTipoUsuario000102s')
                            ->asArray()
                            ->orderby($propertySort." ".$directionSort)
                            ->offset($_GET['start'])
                            ->limit($_GET['limit'])
                            ->all();
						for ($i=0; $i < sizeof($models); $i++) {
						}
						for ($i=0; $i < sizeof($models); $i++) {
							$aux=array();
							for($j=0; $j < sizeof($models[$i]['usuarioTipoPrivilegio000202s']); $j++){
								$aux[] = $models[$i]['usuarioTipoPrivilegio000202s'][$j]['fk_id_usuario_privilegio'];
							}
							$models[$i]['usuarioTipoPrivilegio000202s'] = $aux;
						}
						for ($i=0; $i < sizeof($models); $i++) {
							$aux=array();
							for($j=0; $j < sizeof($models[$i]['usuarioTipoUsuario000102s']); $j++){
								$aux[] = $models[$i]['usuarioTipoUsuario000102s'][$j]['fk_id_usuario'];
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