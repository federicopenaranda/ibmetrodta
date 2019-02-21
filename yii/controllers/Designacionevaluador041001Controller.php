<?php

namespace app\controllers;

use Yii;

use yii\filters\AccessControl;
use yii\web\Controller;
use app\models\DesignacionEvaluador041001;
use app\models\Usuario000101;

/**
 * Esta es la clase controlador para la tabla "designacion_evaluador_04_10_01".
 */
class Designacionevaluador041001Controller extends Controller
{
	public function behaviors() {
        $model = new Usuario000101;
        if (Yii::$app->user->getIdentity()) {
			$objLog = Yii::$app->user->getIdentity();
			$nom_login = $objLog->login_usuario;
		} else 
			$nom_login="admin";
		$userQuery = $model->listaAccion($nom_login,'DesignacionEvaluador041001');
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
				'class'=>'app\controllers\DesignacionEvaluador041001\ReadAction'
			],
			'create'=>[
				'class'=>'app\controllers\DesignacionEvaluador041001\CreateAction'
			],
			'update'=>[
				'class'=>'app\controllers\DesignacionEvaluador041001\UpdateAction'
			],
			'delete'=>[
				'class'=>'app\controllers\DesignacionEvaluador041001\DeleteAction'
			],
            'checkUnique'=>[
				'class'=>'app\controllers\DesignacionEvaluador041001\CheckUniqueAction'
			],
		];
	}
}
