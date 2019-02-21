<?php

namespace app\controllers;

use Yii;

use yii\filters\AccessControl;
use yii\web\Controller;
use app\models\EstadoTipo010604;
use app\models\Usuario000101;

/**
 * Esta es la clase controlador para la tabla "estado_tipo_01_06_04".
 */
class Estadotipo010604Controller extends Controller
{
	public function behaviors() {
        $model = new Usuario000101;
        if (Yii::$app->user->getIdentity()) {
			$objLog = Yii::$app->user->getIdentity();
			$nom_login = $objLog->login_usuario;
		} else 
			$nom_login="admin";
		$userQuery = $model->listaAccion($nom_login,'EstadoTipo010604');
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
				'class'=>'app\controllers\EstadoTipo010604\ReadAction'
			],
			'create'=>[
				'class'=>'app\controllers\EstadoTipo010604\CreateAction'
			],
			'update'=>[
				'class'=>'app\controllers\EstadoTipo010604\UpdateAction'
			],
			'delete'=>[
				'class'=>'app\controllers\EstadoTipo010604\DeleteAction'
			],
            'checkUnique'=>[
				'class'=>'app\controllers\EstadoTipo010604\CheckUniqueAction'
			],
		];
	}
}
