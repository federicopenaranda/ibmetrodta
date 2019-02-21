<?php

namespace app\controllers;

use Yii;

use yii\filters\AccessControl;
use yii\web\Controller;
use app\models\Accion010201;
use app\models\Usuario000101;

/**
 * Esta es la clase controlador para la tabla "accion_01_02_01".
 */
class Accion010201Controller extends Controller
{
	public function behaviors() {
        $model = new Usuario000101;
        if (Yii::$app->user->getIdentity()) {
			$objLog = Yii::$app->user->getIdentity();
			$nom_login = $objLog->login_usuario;
		} else 
			$nom_login="admin";
		$userQuery = $model->listaAccion($nom_login,'Accion010201');
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
				'class'=>'app\controllers\Accion010201\ReadAction'
			],
			'create'=>[
				'class'=>'app\controllers\Accion010201\CreateAction'
			],
			'update'=>[
				'class'=>'app\controllers\Accion010201\UpdateAction'
			],
			'delete'=>[
				'class'=>'app\controllers\Accion010201\DeleteAction'
			],
            'checkUnique'=>[
				'class'=>'app\controllers\Accion010201\CheckUniqueAction'
			],
		];
	}
}
