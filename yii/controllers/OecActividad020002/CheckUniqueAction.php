<?php

namespace app\controllers\OecActividad020002;

use yii\base\Action;
use app\models\OecActividad020002;
use yii\db\Transaction;
use yii\helpers\Json;


class CheckUniqueAction extends Action
{
    public function run()
    {
    	$respuesta=new \stdClass();
		$model = new OecActividad020002;
		$error="";
		$error.= (!isset($_GET['callback'])) ? "{ Error de Callback } " : "";
		$error.= (!isset($_GET['filter'])) ? "{ Parametro indefinido filter } " : "";			
		if ($error == "") {
			try{
				$filtros = Json::decode($_GET['filter']);
				foreach ($filtros as $filter) {
					$col = $filter['property'];
					$val = $filter['value'];
					$model = OecActividad020002::find()
					->where($col.' = :campo', [':campo' => $val])
					->all();
					if(sizeof($model) > 0)
						$res="true";
					else 
						$res="false";
					$models[$col]=$res;
				}//foreach	
				
			} catch (\Exception $e) {
				$error=$e->getMessage();
			}
			if ($error == "") {
				$respuesta->registros=$models;	
				return $this->controller->renderPartial('read',['model'=>$respuesta,'callback'=>$_GET['callback']]);
			} else {
				$respuesta = ["success"=>"false","msg"=>$error];
				return $this->controller->renderPartial('read', [
					'model' => $respuesta,'callback'=>$_GET['callback'],
				]);
			}

		} else {
			$respuesta->meta=["success"=>"false","msg"=>$error];
			return $this->controller->renderPartial('read',['model'=>$respuesta,'callback'=>'']);
		}
    }
}