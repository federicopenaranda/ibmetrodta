<?php

namespace app\controllers;

use Yii;

use yii\filters\AccessControl;
use yii\web\Controller;
use app\models\Evaluacion030001;
use app\models\Usuario000101;

/**
 * Esta es la clase controlador para la tabla "evaluacion_03_00_01".
 */
class Evaluacion030001Controller extends Controller
{
	public function behaviors() {
        $model = new Usuario000101;
        if (Yii::$app->user->getIdentity()) {
			$objLog = Yii::$app->user->getIdentity();
			$nom_login = $objLog->login_usuario;
		} else 
			$nom_login="admin";
		$userQuery = $model->listaAccion($nom_login,'Evaluacion030001');
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
				'class'=>'app\controllers\Evaluacion030001\ReadAction'
			],
			'create'=>[
				'class'=>'app\controllers\Evaluacion030001\CreateAction'
			],
			'update'=>[
				'class'=>'app\controllers\Evaluacion030001\UpdateAction'
			],
			'delete'=>[
				'class'=>'app\controllers\Evaluacion030001\DeleteAction'
			],
            'checkUnique'=>[
				'class'=>'app\controllers\Evaluacion030001\CheckUniqueAction'
			],
		];
	}
}
