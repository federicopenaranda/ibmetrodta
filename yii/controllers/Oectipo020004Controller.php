<?php

namespace app\controllers;

use Yii;

use yii\filters\AccessControl;
use yii\web\Controller;
use app\models\OecTipo020004;
use app\models\Usuario000101;

/**
 * Esta es la clase controlador para la tabla "oec_tipo_02_00_04".
 */
class Oectipo020004Controller extends Controller
{
	public function behaviors() {
        $model = new Usuario000101;
        if (Yii::$app->user->getIdentity()) {
			$objLog = Yii::$app->user->getIdentity();
			$nom_login = $objLog->login_usuario;
		} else 
			$nom_login="admin";
		$userQuery = $model->listaAccion($nom_login,'OecTipo020004');
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
				'class'=>'app\controllers\OecTipo020004\ReadAction'
			],
			'create'=>[
				'class'=>'app\controllers\OecTipo020004\CreateAction'
			],
			'update'=>[
				'class'=>'app\controllers\OecTipo020004\UpdateAction'
			],
			'delete'=>[
				'class'=>'app\controllers\OecTipo020004\DeleteAction'
			],
            'checkUnique'=>[
				'class'=>'app\controllers\OecTipo020004\CheckUniqueAction'
			],
		];
	}
}
