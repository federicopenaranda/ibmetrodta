<?php

namespace app\controllers\Usuario000101;

use yii\base\Action;
use app\models\Usuario000101;
use yii\db\Transaction;
use yii\helpers\Json;
use app\models\LoginForm;

/**
 * Esta es la accion "login" para el controlador "Usuario000101Controller".
 */
class LoginAction extends Action
{
    public function run()
    {
		$respuesta=new \stdClass();
		$model = new Usuario000101;
		$error="";
		$error.= (!isset($_GET['callback'])) ? "{ Error de Callback } " : "";
        $error.= (!isset($_GET['login_usuario'])) ? "{ Error de login usuario } " : "";
        $error.= (!isset($_GET['contrasena_usuario'])) ? "{ Error de contrasena usuario } " : "";
		if ($error == "") {
			
			$model=new LoginForm;

			if ($model->login($_GET['login_usuario'],$_GET['contrasena_usuario'])) {
				$respuesta = ["success"=>"true","msg"=>"Congratulation this Logueado!!...!!"];
				return $this->controller->renderPartial('login', [
					'model' => $respuesta,'callback'=>$_GET['callback'],
				]);
			} else {
				$respuesta = ["success"=>"false","msg"=>"Error de Autentificación!!...!!"];
				return $this->controller->renderPartial('login', [
					'model' => $respuesta,'callback'=>$_GET['callback'],
				]);
			}	
		} else {
			$respuesta->meta=["success"=>"false","msg"=>$error];
			return $this->controller->renderPartial('read',['model'=>$respuesta,'callback'=>'']);
		}
    }
}