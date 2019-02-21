<?php

namespace app\controllers;

use Yii;

use yii\filters\AccessControl;
use yii\web\Controller;
use app\models\Usuario000101;

/**
 * Esta es la clase controlador para la tabla "usuario_00_01_01".
 */
class Usuario000101Controller extends Controller
{
	public function behaviors() {
		$ip = [];
		if (isset($_GET['login_usuario'])) {
			$res = Usuario000101::find()->where(['login_usuario'=>$_GET['login_usuario']])->one(); 
			if($res)
				if($res->acceso_ip_usuario != NULL || $res->acceso_ip_usuario!="")
					$ip[]	= $res->acceso_ip_usuario;
		}
        
    	return[
			'access'=>[
				'class' => AccessControl::className(),
				'only' => ['create','index','update','delete','listaPrivilegiosUsuario','login'],
				'rules'=>[
                	[
					'actions'=>['login'],
					'allow'=>true,
					'ips'=>$ip,
					],
					[
					'actions'=>['login','insert'],
					'allow'=>true,
					'roles'=>['?'],
					],
					[
					'actions'=>['logout','create','index','update','delete','checkUnique','listaPrivilegiosUsuario',],
					'allow'=>true,
					'roles'=>['@'],
					],	
				],
			],
		];
    }
    
    public function actions() {
		return [
			'index'=>[
				'class'=>'app\controllers\Usuario000101\ReadAction'
			],
			'create'=>[
				'class'=>'app\controllers\Usuario000101\CreateAction'
			],
			'update'=>[
				'class'=>'app\controllers\Usuario000101\UpdateAction'
			],
			'delete'=>[
				'class'=>'app\controllers\Usuario000101\DeleteAction'
			],
            'checkUnique'=>[
				'class'=>'app\controllers\Usuario000101\CheckUniqueAction'
			],
            'login'=>[
				'class'=>'app\controllers\Usuario000101\LoginAction'
			],
			'logout'=>[
				'class'=>'app\controllers\Usuario000101\LogoutAction'
			],
            'insert'=>[
				'class'=>'app\controllers\Usuario000101\InsertAction'
			],
            'listaPrivilegiosUsuario'=>[
				'class'=>'app\controllers\Usuario000101\ListaPrivilegiosUsuarioAction'
			],
		];
	}
}
