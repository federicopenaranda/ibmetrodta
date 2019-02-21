<?php

namespace app\controllers;

use Yii;

use yii\filters\AccessControl;
use yii\web\Controller;
use app\models\CodigoPeticion010404;
use app\models\Usuario000101;

/**
 * Esta es la clase controlador para la tabla "codigo_peticion_01_04_04".
 */
class Codigopeticion010404Controller extends Controller
{
	public function behaviors() {
        $model = new Usuario000101;
        if (Yii::$app->user->getIdentity()) {
			$objLog = Yii::$app->user->getIdentity();
			$nom_login = $objLog->login_usuario;
		} else 
			$nom_login="admin";
		$userQuery = $model->listaAccion($nom_login,'CodigoPeticion010404');
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
				'class'=>'app\controllers\CodigoPeticion010404\ReadAction'
			],
			'create'=>[
				'class'=>'app\controllers\CodigoPeticion010404\CreateAction'
			],
			'update'=>[
				'class'=>'app\controllers\CodigoPeticion010404\UpdateAction'
			],
			'delete'=>[
				'class'=>'app\controllers\CodigoPeticion010404\DeleteAction'
			],
            'checkUnique'=>[
				'class'=>'app\controllers\CodigoPeticion010404\CheckUniqueAction'
			],
		];
	}
}
