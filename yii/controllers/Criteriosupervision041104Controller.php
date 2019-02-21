<?php

namespace app\controllers;

use Yii;

use yii\filters\AccessControl;
use yii\web\Controller;
use app\models\CriterioSupervision041104;
use app\models\Usuario000101;

/**
 * Esta es la clase controlador para la tabla "criterio_supervision_04_11_04".
 */
class Criteriosupervision041104Controller extends Controller
{
	public function behaviors() {
        $model = new Usuario000101;
        if (Yii::$app->user->getIdentity()) {
			$objLog = Yii::$app->user->getIdentity();
			$nom_login = $objLog->login_usuario;
		} else 
			$nom_login="admin";
		$userQuery = $model->listaAccion($nom_login,'CriterioSupervision041104');
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
				'class'=>'app\controllers\CriterioSupervision041104\ReadAction'
			],
			'create'=>[
				'class'=>'app\controllers\CriterioSupervision041104\CreateAction'
			],
			'update'=>[
				'class'=>'app\controllers\CriterioSupervision041104\UpdateAction'
			],
			'delete'=>[
				'class'=>'app\controllers\CriterioSupervision041104\DeleteAction'
			],
            'checkUnique'=>[
				'class'=>'app\controllers\CriterioSupervision041104\CheckUniqueAction'
			],
		];
	}
}
