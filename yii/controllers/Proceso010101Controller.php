<?php

namespace app\controllers;

use Yii;

use yii\filters\AccessControl;
use yii\web\Controller;
use app\models\Proceso010101;
use app\models\Usuario000101;

/**
 * Esta es la clase controlador para la tabla "proceso_01_01_01".
 */
class Proceso010101Controller extends Controller
{
	public function behaviors() {
        $model = new Usuario000101;
        if (Yii::$app->user->getIdentity()) {
			$objLog = Yii::$app->user->getIdentity();
			$nom_login = $objLog->login_usuario;
		} else 
			$nom_login="admin";
		$userQuery = $model->listaAccion($nom_login,'Proceso010101');
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
				'class'=>'app\controllers\Proceso010101\ReadAction'
			],
			'create'=>[
				'class'=>'app\controllers\Proceso010101\CreateAction'
			],
			'update'=>[
				'class'=>'app\controllers\Proceso010101\UpdateAction'
			],
			'delete'=>[
				'class'=>'app\controllers\Proceso010101\DeleteAction'
			],
            'checkUnique'=>[
				'class'=>'app\controllers\Proceso010101\CheckUniqueAction'
			],
		];
	}
}
