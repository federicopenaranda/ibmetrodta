<?php

namespace app\controllers;

namespace app\controllers\UsuarioOec;
use yii\base\Action;
use app\models\Oec020001;
use yii\base\Exception;
use yii\helpers\Json;
use app\models\CTQ;
use yii\db\Query;
use yii;

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
      	if($error == "") {
                                                
	        $models = Oec020001::find()
	                     	->distinct(true)
	                        ->with('fkIdNormaReferencia','fkIdOecTipo','oecAcreditacionSolicitada020003s','oecActividad020002s','oecContacto020003s','usuarioOec000102s')
	                        ->asArray()
							->joinWith('fkIdNormaReferencia')
							->joinWith('fkIdOecTipo')
							->joinWith('fkIdPais')
							->joinWith('usuarioOec000102s')
							->where(['fk_id_usuario'=>yii::$app->user->getId()])
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
									'codigo_oec_tipo',
									'nombre_pais',
									'empresa_publica_oec',
									'zona_oec'
									])
	                        ->with('fkIdNormaReferencia','fkIdOecTipo','oecAcreditacionSolicitada020003s','oecActividad020002s','oecContacto020003s','usuarioOec000102s')
	                        ->asArray()
							->joinWith('fkIdNormaReferencia')
							->joinWith('fkIdOecTipo')
							->joinWith('fkIdPais')
							->joinWith('usuarioOec000102s')
							->where(['fk_id_usuario'=>yii::$app->user->getId()])
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

			$respuesta->registros=$models;	
			$respuesta->total=$total;
			return $this->controller->renderPartial('read',['model'=>$respuesta,'callback'=>$_GET['callback']]);
		} else {
			$respuesta->meta=array("success"=>"false","msg"=>$error);
			return $this->controller->renderPartial('read',['model'=>$respuesta,'callback'=>'']);
		}
    }
}