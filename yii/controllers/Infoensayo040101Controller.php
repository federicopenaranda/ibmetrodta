<?php

namespace app\controllers;

use Yii;

use yii\filters\AccessControl;
use yii\web\Controller;
use app\models\InfoEnsayo040101;
use app\models\Usuario000101;

/**
 * Esta es la clase controlador para la tabla "info_ensayo_04_01_01".
 */
class Infoensayo040101Controller extends Controller
{
	public function behaviors() {
        $model = new Usuario000101;
        if (Yii::$app->user->getIdentity()) {
			$objLog = Yii::$app->user->getIdentity();
			$nom_login = $objLog->login_usuario;
		} else 
			$nom_login="admin";
		$userQuery = $model->listaAccion($nom_login,'InfoEnsayo040101');
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
				'class'=>'app\controllers\InfoEnsayo040101\ReadAction'
			],
			'create'=>[
				'class'=>'app\controllers\InfoEnsayo040101\CreateAction'
			],
			'update'=>[
				'class'=>'app\controllers\InfoEnsayo040101\UpdateAction'
			],
			'delete'=>[
				'class'=>'app\controllers\InfoEnsayo040101\DeleteAction'
			],
            'checkUnique'=>[
				'class'=>'app\controllers\InfoEnsayo040101\CheckUniqueAction'
			],
		];
	}
}
