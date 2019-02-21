<?php

namespace app\controllers;

use Yii;

use yii\filters\AccessControl;
use yii\web\Controller;
use app\models\ProveedorEval040803;
use app\models\Usuario000101;

/**
 * Esta es la clase controlador para la tabla "proveedor_eval_04_08_03".
 */
class Proveedoreval040803Controller extends Controller
{
	public function behaviors() {
        $model = new Usuario000101;
        if (Yii::$app->user->getIdentity()) {
			$objLog = Yii::$app->user->getIdentity();
			$nom_login = $objLog->login_usuario;
		} else 
			$nom_login="admin";
		$userQuery = $model->listaAccion($nom_login,'ProveedorEval040803');
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
				'class'=>'app\controllers\ProveedorEval040803\ReadAction'
			],
			'create'=>[
				'class'=>'app\controllers\ProveedorEval040803\CreateAction'
			],
			'update'=>[
				'class'=>'app\controllers\ProveedorEval040803\UpdateAction'
			],
			'delete'=>[
				'class'=>'app\controllers\ProveedorEval040803\DeleteAction'
			],
            'checkUnique'=>[
				'class'=>'app\controllers\ProveedorEval040803\CheckUniqueAction'
			],
		];
	}
}
