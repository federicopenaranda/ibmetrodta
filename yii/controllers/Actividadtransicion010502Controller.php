<?php

namespace app\controllers;

use Yii;

use yii\filters\AccessControl;
use yii\web\Controller;
use app\models\ActividadTransicion010502;
use app\models\Usuario000101;

/**
 * Esta es la clase controlador para la tabla "actividad_transicion_01_05_02".
 */
class Actividadtransicion010502Controller extends Controller
{
	public function behaviors() {
        $model = new Usuario000101;
        if (Yii::$app->user->getIdentity()) {
			$objLog = Yii::$app->user->getIdentity();
			$nom_login = $objLog->login_usuario;
		} else 
			$nom_login="admin";
		$userQuery = $model->listaAccion($nom_login,'ActividadTransicion010502');
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
				'class'=>'app\controllers\ActividadTransicion010502\ReadAction'
			],
			'create'=>[
				'class'=>'app\controllers\ActividadTransicion010502\CreateAction'
			],
			'update'=>[
				'class'=>'app\controllers\ActividadTransicion010502\UpdateAction'
			],
			'delete'=>[
				'class'=>'app\controllers\ActividadTransicion010502\DeleteAction'
			],
            'checkUnique'=>[
				'class'=>'app\controllers\ActividadTransicion010502\CheckUniqueAction'
			],
		];
	}
}
