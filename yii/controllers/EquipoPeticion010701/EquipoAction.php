<?php

namespace app\controllers;

namespace app\controllers\EquipoPeticion010701;
use yii\base\Action;
use app\models\EquipoPeticion010701;
use yii\base\Exception;
use yii\helpers\Json;
use app\models\CTQ;
use yii\db\Query;
use app\models\UsuarioTipo000201;
use app\models\ObsPeticionAccion010303;

class EquipoAction extends Action
{
    public function run()
    {
		$respuesta=new \stdClass();
		$model = new EquipoPeticion010701;
		$error="";
		$error.= (!isset($_GET['callback'])) ? "{ Error de Callback } " : "";
        $error.= (!isset($_GET['start'])) ? " Error de start  " : "";
        $error.= (!isset($_GET['limit'])) ? " Error de limit " : "";
        $error.= (!isset($_GET['fk_id_peticion'])) ? "Parametro indefinido fk_id_peticion " : "";
        $error.= (!isset($_GET['nombre_accion'])) ? "Parametro indefinido nombre_accion" : "";
       
		if ($error == "") {
			try {
				
                $obPets = ObsPeticionAccion010303::find()
                							->all();
               
                $models = EquipoPeticion010701::find()
                        	->distinct(true)
                            ->with('fkIdPeticion','fkIdUsuario')
                            ->asArray()
							->joinWith('fkIdPeticion')
							->joinWith('fkIdUsuario')
							->where(['fk_id_peticion'=>$_GET['fk_id_peticion']])
							->all();
				$total = sizeof($models);
                $models = EquipoPeticion010701::find()
                        	->distinct(true)
							 ->select ([
										'id_equipo_peticion',
										'fk_id_peticion',
										'equipo_peticion_01_07_01.fk_id_usuario',
										'cantidad_horas_equipo_peticion',
										'observaciones_equipo_peticion',
										'estado_equipo_peticion',
										'titulo_peticion',
										'primer_nombre_usuario',
										'segundo_nombre_usuario',
										'apellido_paterno_usuario',
										'apellido_materno_usuario',
										'codigo_usuario',
										])
                            ->with('fkIdPeticion','fkIdUsuario')
                            ->asArray()
							->joinWith('fkIdPeticion')
							->joinWith('fkIdUsuario')
							->where(['fk_id_peticion'=>$_GET['fk_id_peticion']])
                            ->offset($_GET['start'])
                            ->limit($_GET['limit'])
                            ->all();

				for ($i=0; $i < sizeof($models); $i++) {
					$obPets = ObsPeticionAccion010303::find()
										->joinWith('fkIdAccion')
										->where(['nombre_accion'=>$_GET['nombre_accion'],'fk_id_peticion'=>$_GET['fk_id_peticion'],'fk_id_usuario'=>$models[$i]['fk_id_usuario'],'procede_obs_peticion_accion'=>1])
                						->one();
                	
					$usTipo = UsuarioTipo000201::find()
								->joinWith('usuarioTipoUsuario000102s')
                        		->where(['usuario_tipo_usuario_00_01_02.fk_id_usuario'=>$models[$i]['fk_id_usuario']])
                        		->all();
                    $models[$i]['procede_obs_peticion_accion'] = isset($obPets) ? $obPets->procede_obs_peticion_accion : 0;
                    $models[$i]['usuarioTipo000201s']=$usTipo;
                    unset($models[$i]['fkIdPeticion']);
                    unset($models[$i]['fkIdUsuario']);
				}
				
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
			return $this->controller->renderPartial('read',['model'=>$respuesta,'callback'=>$_GET['callback']]);
		}
    }
}