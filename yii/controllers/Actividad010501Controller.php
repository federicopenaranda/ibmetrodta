<?php

namespace app\controllers;

use Yii;

use yii\filters\AccessControl;
use yii\web\Controller;
use app\models\Actividad010501;
use app\models\Usuario000101;

/**
 * Esta es la clase controlador para la tabla "actividad_01_05_01".
 */
class Actividad010501Controller extends Controller
{
	public function behaviors() {
        $model = new Usuario000101;
        if (Yii::$app->user->getIdentity()) {
			$objLog = Yii::$app->user->getIdentity();
			$nom_login = $objLog->login_usuario;
		} else 
			$nom_login="admin";
		$userQuery = $model->listaAccion($nom_login,'Actividad010501');
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
				'class'=>'app\controllers\Actividad010501\ReadAction'
			],
			'create'=>[
				'class'=>'app\controllers\Actividad010501\CreateAction'
			],
			'update'=>[
				'class'=>'app\controllers\Actividad010501\UpdateAction'
			],
			'delete'=>[
				'class'=>'app\controllers\Actividad010501\DeleteAction'
			],
            'checkUnique'=>[
				'class'=>'app\controllers\Actividad010501\CheckUniqueAction'
			],
		];
	}
}
