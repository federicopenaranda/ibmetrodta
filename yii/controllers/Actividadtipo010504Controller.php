<?php

namespace app\controllers;

use Yii;

use yii\filters\AccessControl;
use yii\web\Controller;
use app\models\ActividadTipo010504;
use app\models\Usuario000101;

/**
 * Esta es la clase controlador para la tabla "actividad_tipo_01_05_04".
 */
class Actividadtipo010504Controller extends Controller
{
	public function behaviors() {
        $model = new Usuario000101;
        if (Yii::$app->user->getIdentity()) {
			$objLog = Yii::$app->user->getIdentity();
			$nom_login = $objLog->login_usuario;
		} else 
			$nom_login="admin";
		$userQuery = $model->listaAccion($nom_login,'ActividadTipo010504');
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
				'class'=>'app\controllers\ActividadTipo010504\ReadAction'
			],
			'create'=>[
				'class'=>'app\controllers\ActividadTipo010504\CreateAction'
			],
			'update'=>[
				'class'=>'app\controllers\ActividadTipo010504\UpdateAction'
			],
			'delete'=>[
				'class'=>'app\controllers\ActividadTipo010504\DeleteAction'
			],
            'checkUnique'=>[
				'class'=>'app\controllers\ActividadTipo010504\CheckUniqueAction'
			],
		];
	}
}
