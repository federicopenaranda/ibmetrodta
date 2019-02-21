<?php

namespace app\controllers\Usuario000101;

use yii\base\Action;
use app\models\Usuario000101;
use yii\db\Transaction;
use yii\helpers\Json;

use Yii;

/**
 * Esta es la accion "create" para el controlador "Usuario000101Controller".
 */
class LogoutAction extends Action
{
    public function run()
    {
		$respuesta=new \stdClass();
		$error="";
		$error.= (!isset($_GET['callback'])) ? "{ Error de Callback } " : "";
		if ($error == "") {
			Yii::$app->user->logout();

			$respuesta->meta=["success"=>"true","msg"=>"Congratulation this Deslogueado!!...!!"];
				return $this->controller->renderPartial('logout', [
					'model' => $respuesta,'callback'=>$_GET['callback'],
				]);
		} else {
			$respuesta->meta=["success"=>"false","msg"=>$error];
			return $this->controller->renderPartial('read',['model'=>$respuesta,'callback'=>'']);
		}
    }
}
