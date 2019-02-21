<?php

namespace app\controllers;

use Yii;

use yii\filters\AccessControl;
use yii\web\Controller;
use app\models\Transicion010202;
use app\models\Usuario000101;

/**
 * Esta es la clase controlador para la tabla "transicion_01_02_02".
 */
class Transicion010202Controller extends Controller
{
	public function behaviors() {
        $model = new Usuario000101;
        if (Yii::$app->user->getIdentity()) {
			$objLog = Yii::$app->user->getIdentity();
			$nom_login = $objLog->login_usuario;
		} else 
			$nom_login="admin";
		$userQuery = $model->listaAccion($nom_login,'Transicion010202');
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
				'class'=>'app\controllers\Transicion010202\ReadAction'
			],
			'create'=>[
				'class'=>'app\controllers\Transicion010202\CreateAction'
			],
			'update'=>[
				'class'=>'app\controllers\Transicion010202\UpdateAction'
			],
			'delete'=>[
				'class'=>'app\controllers\Transicion010202\DeleteAction'
			],
            'checkUnique'=>[
				'class'=>'app\controllers\Transicion010202\CheckUniqueAction'
			],
		];
	}
}