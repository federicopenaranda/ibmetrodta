<?php

namespace app\controllers;

use Yii;

use yii\filters\AccessControl;
use yii\web\Controller;
use app\models\Gestion050104;
use app\models\Usuario000101;

/**
 * Esta es la clase controlador para la tabla "gestion_05_01_04".
 */
class Gestion050104Controller extends Controller
{
	public function behaviors() {
        $model = new Usuario000101;
        if (Yii::$app->user->getIdentity()) {
			$objLog = Yii::$app->user->getIdentity();
			$nom_login = $objLog->login_usuario;
		} else 
			$nom_login="admin";
		$userQuery = $model->listaAccion($nom_login,'Gestion050104');
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
				'class'=>'app\controllers\Gestion050104\ReadAction'
			],
			'create'=>[
				'class'=>'app\controllers\Gestion050104\CreateAction'
			],
			'update'=>[
				'class'=>'app\controllers\Gestion050104\UpdateAction'
			],
			'delete'=>[
				'class'=>'app\controllers\Gestion050104\DeleteAction'
			],
            'checkUnique'=>[
				'class'=>'app\controllers\Gestion050104\CheckUniqueAction'
			],
		];
	}
}
