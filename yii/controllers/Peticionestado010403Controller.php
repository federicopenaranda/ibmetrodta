<?php

namespace app\controllers;

use Yii;

use yii\filters\AccessControl;
use yii\web\Controller;
use app\models\PeticionEstado010403;
use app\models\Usuario000101;

/**
 * Esta es la clase controlador para la tabla "peticion_estado_01_04_03".
 */
class Peticionestado010403Controller extends Controller
{
	public function behaviors() {
        $model = new Usuario000101;
        if (Yii::$app->user->getIdentity()) {
			$objLog = Yii::$app->user->getIdentity();
			$nom_login = $objLog->login_usuario;
		} else 
			$nom_login="admin";
		$userQuery = $model->listaAccion($nom_login,'PeticionEstado010403');
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
				'class'=>'app\controllers\PeticionEstado010403\ReadAction'
			],
			'create'=>[
				'class'=>'app\controllers\PeticionEstado010403\CreateAction'
			],
			'update'=>[
				'class'=>'app\controllers\PeticionEstado010403\UpdateAction'
			],
			'delete'=>[
				'class'=>'app\controllers\PeticionEstado010403\DeleteAction'
			],
            'checkUnique'=>[
				'class'=>'app\controllers\PeticionEstado010403\CheckUniqueAction'
			],
		];
	}
}
