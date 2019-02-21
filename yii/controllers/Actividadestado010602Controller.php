<?php

namespace app\controllers;

use Yii;

use yii\filters\AccessControl;
use yii\web\Controller;
use app\models\ActividadEstado010602;
use app\models\Usuario000101;

/**
 * Esta es la clase controlador para la tabla "actividad_estado_01_06_02".
 */
class Actividadestado010602Controller extends Controller
{
	public function behaviors() {
        $model = new Usuario000101;
        if (Yii::$app->user->getIdentity()) {
			$objLog = Yii::$app->user->getIdentity();
			$nom_login = $objLog->login_usuario;
		} else 
			$nom_login="admin";
		$userQuery = $model->listaAccion($nom_login,'ActividadEstado010602');
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
				'class'=>'app\controllers\ActividadEstado010602\ReadAction'
			],
			'create'=>[
				'class'=>'app\controllers\ActividadEstado010602\CreateAction'
			],
			'update'=>[
				'class'=>'app\controllers\ActividadEstado010602\UpdateAction'
			],
			'delete'=>[
				'class'=>'app\controllers\ActividadEstado010602\DeleteAction'
			],
            'checkUnique'=>[
				'class'=>'app\controllers\ActividadEstado010602\CheckUniqueAction'
			],
		];
	}
}
