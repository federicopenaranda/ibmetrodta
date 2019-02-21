<?php

namespace app\controllers;

namespace app\controllers\Oec020001;
use yii\base\Action;
use app\models\Oec020001;
use app\models\CTQ;
use yii\db\Transaction;
use yii\db\Connection;
use yii\helpers\Json;
use app\models\LogSistema030003;

class UpdateDateAction extends Action
{
    public function run()
    {
		$respuesta=new \stdClass();
        $error="";
		$error.= (!isset($_GET['id_oec'])) ? "{ Error en la variable id_oec } " : "";
		$error.= (!isset($_GET['callback'])) ? "{ Error de Callback } " : "";
        
        if ($error == "") {
			$callback=$_GET['callback'];
			$query=explode('&', $_SERVER['QUERY_STRING']);
			$model=new Oec020001();
			$listRecords=$model->divideRecords($query);
			$audi = new LogSistema030003();
			$model = Oec020001::findOne($_GET['id_oec']);
			$model->fecha_actualizacion_oec = date("Y-m-d H:m:s");
			if ($model->validate()) {
				$model->update();
                $audi->insertAudi("update",$model->tableName(),$model->getPrimaryKey());
			} else {
				$error=$model->getErrors();
			}

			if ($error == "") {
				$respuesta->meta=array("success"=>"true","msg"=>"Se actualizo exitosamente !!!");
				return $this->controller->renderPartial('update',array('model'=>$respuesta,'callback'=>$callback));
			} else {
				$respuesta->meta=["success"=>"false","msg"=>$error];
				return $this->controller->renderPartial('update',['model'=>$respuesta,'callback'=>$callback]);
			}	
		} else {
			$respuesta->meta=["success"=>"false","msg"=>$error];
			return $this->controller->renderPartial('update',['model'=>$respuesta,'callback'=>'']);
		}
    }
}