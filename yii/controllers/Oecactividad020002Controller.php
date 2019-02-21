<?php

namespace app\controllers;

use Yii;

use yii\filters\AccessControl;
use yii\web\Controller;
use app\models\OecActividad020002;
use app\models\Usuario000101;

/**
 * Esta es la clase controlador para la tabla "oec_actividad_02_00_02".
 */
class Oecactividad020002Controller extends Controller
{
	public function behaviors() {
        $model = new Usuario000101;
        if (Yii::$app->user->getIdentity()) {
			$objLog = Yii::$app->user->getIdentity();
			$nom_login = $objLog->login_usuario;
		} else 
			$nom_login="admin";
		$userQuery = $model->listaAccion($nom_login,'OecActividad020002');
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
				'class'=>'app\controllers\OecActividad020002\ReadAction'
			],
			'create'=>[
				'class'=>'app\controllers\OecActividad020002\CreateAction'
			],
			'update'=>[
				'class'=>'app\controllers\OecActividad020002\UpdateAction'
			],
			'delete'=>[
				'class'=>'app\controllers\OecActividad020002\DeleteAction'
			],
            'checkUnique'=>[
				'class'=>'app\controllers\OecActividad020002\CheckUniqueAction'
			],
		];
	}
}
