<?php

namespace app\controllers;

use Yii;

use yii\filters\AccessControl;
use yii\web\Controller;
use app\models\Oec020001;
use app\models\Usuario000101;

/**
 * Esta es la clase controlador para la tabla "oec_02_00_01".
 */
class UsuariooecController extends Controller
{
	public function behaviors() {
        $model = new Usuario000101;
        if (Yii::$app->user->getIdentity()) {
			$objLog = Yii::$app->user->getIdentity();
			$nom_login = $objLog->login_usuario;
		} else 
			$nom_login="admin";
		$userQuery = $model->listaAccion($nom_login,'Oec020001');
        $userQuery[]="checkUnique";
		$userQuery[]="usuarioOec";
        return [
            'access' => [
                'class' => AccessControl::className(),
                'only' => ['create','index','update','delete','checkUnique','usuarioOec'],
                'rules' => [
                    [
                        'allow' => true,
                        'actions' =>  $userQuery,
                        'roles' => ['@'],
                    ],
                ],
            ],
        ];
    }
    
    public function actions() {
		return [
			'index'=>[
				'class'=>'app\controllers\UsuarioOec\ReadAction'
			],
			'create'=>[
				'class'=>'app\controllers\UsuarioOec\CreateAction'
			],
			'update'=>[
				'class'=>'app\controllers\UsuarioOec\UpdateAction'
			],
			'delete'=>[
				'class'=>'app\controllers\UsuarioOec\DeleteAction'
			],
            'checkUnique'=>[
				'class'=>'app\controllers\UsuarioOec\CheckUniqueAction'
			],
			'usuarioOec'=>[
				'class'=>'app\controllers\UsuarioOec\UsuarioOecAction'
			],
		];
	}
}
