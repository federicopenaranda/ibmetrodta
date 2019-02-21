<?php

namespace app\controllers;

use Yii;

use yii\filters\AccessControl;
use yii\web\Controller;
use app\models\NoConformidad040701;
use app\models\Usuario000101;

/**
 * Esta es la clase controlador para la tabla "no_conformidad_04_07_01".
 */
class Noconformidad040701Controller extends Controller
{
	public function behaviors() {
        $model = new Usuario000101;
        if (Yii::$app->user->getIdentity()) {
			$objLog = Yii::$app->user->getIdentity();
			$nom_login = $objLog->login_usuario;
		} else 
			$nom_login="admin";
		$userQuery = $model->listaAccion($nom_login,'NoConformidad040701');
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
				'class'=>'app\controllers\NoConformidad040701\ReadAction'
			],
			'create'=>[
				'class'=>'app\controllers\NoConformidad040701\CreateAction'
			],
			'update'=>[
				'class'=>'app\controllers\NoConformidad040701\UpdateAction'
			],
			'delete'=>[
				'class'=>'app\controllers\NoConformidad040701\DeleteAction'
			],
            'checkUnique'=>[
				'class'=>'app\controllers\NoConformidad040701\CheckUniqueAction'
			],
		];
	}
}
