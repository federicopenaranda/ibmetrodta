<?php

namespace app\controllers;

use Yii;

use yii\filters\AccessControl;
use yii\web\Controller;
use app\models\DetalleCalibracion040301;
use app\models\Usuario000101;

/**
 * Esta es la clase controlador para la tabla "detalle_calibracion_04_03_01".
 */
class Detallecalibracion040301Controller extends Controller
{
	public function behaviors() {
        $model = new Usuario000101;
        if (Yii::$app->user->getIdentity()) {
			$objLog = Yii::$app->user->getIdentity();
			$nom_login = $objLog->login_usuario;
		} else 
			$nom_login="admin";
		$userQuery = $model->listaAccion($nom_login,'DetalleCalibracion040301');
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
				'class'=>'app\controllers\DetalleCalibracion040301\ReadAction'
			],
			'create'=>[
				'class'=>'app\controllers\DetalleCalibracion040301\CreateAction'
			],
			'update'=>[
				'class'=>'app\controllers\DetalleCalibracion040301\UpdateAction'
			],
			'delete'=>[
				'class'=>'app\controllers\DetalleCalibracion040301\DeleteAction'
			],
            'checkUnique'=>[
				'class'=>'app\controllers\DetalleCalibracion040301\CheckUniqueAction'
			],
		];
	}
}
