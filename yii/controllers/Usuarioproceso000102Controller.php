<?php

namespace app\controllers;

use Yii;

use yii\filters\AccessControl;
use yii\web\Controller;
use app\models\UsuarioProceso000102;
use app\models\Usuario000101;

/**
 * Esta es la clase controlador para la tabla "usuario_proceso_00_01_02".
 */
class Usuarioproceso000102Controller extends Controller
{
	public function behaviors() {
        $model = new Usuario000101;
        if (Yii::$app->user->getIdentity()) {
			$objLog = Yii::$app->user->getIdentity();
			$nom_login = $objLog->login_usuario;
		} else 
			$nom_login="admin";
		$userQuery = $model->listaAccion($nom_login,'UsuarioProceso000102');
        $userQuery[]="checkUnique";
        return [
            'access' => [
                'class' => AccessControl::className(),
                'only' => ['create','index','update','delete','checkUnique',],
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
				'class'=>'app\controllers\UsuarioProceso000102\ReadAction'
			],
			'create'=>[
				'class'=>'app\controllers\UsuarioProceso000102\CreateAction'
			],
			'update'=>[
				'class'=>'app\controllers\UsuarioProceso000102\UpdateAction'
			],
			'delete'=>[
				'class'=>'app\controllers\UsuarioProceso000102\DeleteAction'
			],
            'checkUnique'=>[
				'class'=>'app\controllers\UsuarioProceso000102\CheckUniqueAction'
			],
		];
	}
}
