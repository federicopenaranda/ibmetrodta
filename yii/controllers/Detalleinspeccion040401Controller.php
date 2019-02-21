<?php

namespace app\controllers;

use Yii;

use yii\filters\AccessControl;
use yii\web\Controller;
use app\models\DetalleInspeccion040401;
use app\models\Usuario000101;

/**
 * Esta es la clase controlador para la tabla "detalle_inspeccion_04_04_01".
 */
class Detalleinspeccion040401Controller extends Controller
{
	public function behaviors() {
        $model = new Usuario000101;
        if (Yii::$app->user->getIdentity()) {
			$objLog = Yii::$app->user->getIdentity();
			$nom_login = $objLog->login_usuario;
		} else 
			$nom_login="admin";
		$userQuery = $model->listaAccion($nom_login,'DetalleInspeccion040401');
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
				'class'=>'app\controllers\DetalleInspeccion040401\ReadAction'
			],
			'create'=>[
				'class'=>'app\controllers\DetalleInspeccion040401\CreateAction'
			],
			'update'=>[
				'class'=>'app\controllers\DetalleInspeccion040401\UpdateAction'
			],
			'delete'=>[
				'class'=>'app\controllers\DetalleInspeccion040401\DeleteAction'
			],
            'checkUnique'=>[
				'class'=>'app\controllers\DetalleInspeccion040401\CheckUniqueAction'
			],
		];
	}
}
