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
use app\models\Usuario000101;

class VerifEquipoPetAction extends Action
{
    public function run()
    {
		$respuesta=new \stdClass();
		$model = new EquipoPeticion010701;
		$error="";
		$error.= (!isset($_GET['callback'])) ? "{ Parametro indefinido Callback } " : "";
        $error.= (!isset($_GET['fk_id_peticion'])) ? "{ Parametro indefinido fk_id_peticion } " : "";
        $listManyMany = [
        				];

		if ($error == "") {
			try {
				if (isset($_GET['fk_id_peticion'])) {

                    $query1 = Usuario000101::find()
                    			->distinct(true)
								->with('fkIdUsuarioTipos','equipoPeticion010701s')
								->asArray()
								->joinWith('fkIdUsuarioTipos')
								->joinWith('equipoPeticion010701s')
								->where(['fk_id_peticion'=>$_GET['fk_id_peticion']])
								->andWhere(['nombre_usuario_tipo'=>'equipo_lider'])
								->count();
					$query2 = Usuario000101::find()
                    			->distinct(true)
								->with('fkIdUsuarioTipos','equipoPeticion010701s')
								->asArray()
								->joinWith('fkIdUsuarioTipos')
								->joinWith('equipoPeticion010701s')
								->where(['fk_id_peticion'=>$_GET['fk_id_peticion']])
                                ->andWhere(['nombre_usuario_tipo'=>'equipo_tecnico'])
                                ->count();
                    $response=[];
                    if($query1==1 && $query2==0) {
                    	$message="Hay un único equipo líder";	
                    } else {
                    	if ($query1==0 && $query2==1){
                    		$message="Hay un único equipo técnico";
                    	} else {
                    		if ($query1>0 || $query2>0){
                    			$message="Hay más equipos";
                    		} else {
                    			$message="No hay ningún equipo";
                    		}
                    	}
                    }							
                }
				
			} catch (\Exception $e) {
				$error=$e->getMessage();
			}
			if ($error=="")	{
				$respuesta->meta=array("success"=>"true","msg"=>$message);
				return $this->controller->renderPartial('read',['model'=>$respuesta,'callback'=>$_GET['callback']]);
				//return $this->controller->renderPartial('read',['model'=>$respuesta,'callback'=>$_GET['callback']]);
			} else {
				$respuesta->meta=array("success"=>"false","msg"=>$error);
				return $this->controller->renderPartial('read',['model'=>$respuesta,'callback'=>$_GET['callback']]);
			}
		} else {
			$respuesta->meta=array("success"=>"false","msg"=>$error);
			return $this->controller->renderPartial('read',['model'=>$respuesta,'callback'=>'']);
		}
    }
}