<?php

namespace app\controllers;

use Yii;

use yii\filters\AccessControl;
use yii\web\Controller;
use app\models\CampoCalibracion040004;
use app\models\Usuario000101;

/**
 * Esta es la clase controlador para la tabla "campo_calibracion_04_00_04".
 */
class Campocalibracion040004Controller extends Controller
{
	public function behaviors() {
        $model = new Usuario000101;
        if (Yii::$app->user->getIdentity()) {
			$objLog = Yii::$app->user->getIdentity();
			$nom_login = $objLog->login_usuario;
		} else 
			$nom_login="admin";
		$userQuery = $model->listaAccion($nom_login,'CampoCalibracion040004');
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
				'class'=>'app\controllers\CampoCalibracion040004\ReadAction'
			],
			'create'=>[
				'class'=>'app\controllers\CampoCalibracion040004\CreateAction'
			],
			'update'=>[
				'class'=>'app\controllers\CampoCalibracion040004\UpdateAction'
			],
			'delete'=>[
				'class'=>'app\controllers\CampoCalibracion040004\DeleteAction'
			],
            'checkUnique'=>[
				'class'=>'app\controllers\CampoCalibracion040004\CheckUniqueAction'
			],
		];
	}
}
