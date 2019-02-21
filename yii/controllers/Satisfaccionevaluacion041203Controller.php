<?php

namespace app\controllers;

use Yii;

use yii\filters\AccessControl;
use yii\web\Controller;
use app\models\SatisfaccionEvaluacion041203;
use app\models\Usuario000101;

/**
 * Esta es la clase controlador para la tabla "satisfaccion_evaluacion_04_12_03".
 */
class Satisfaccionevaluacion041203Controller extends Controller
{
	public function behaviors() {
        $model = new Usuario000101;
        if (Yii::$app->user->getIdentity()) {
			$objLog = Yii::$app->user->getIdentity();
			$nom_login = $objLog->login_usuario;
		} else 
			$nom_login="admin";
		$userQuery = $model->listaAccion($nom_login,'SatisfaccionEvaluacion041203');
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
				'class'=>'app\controllers\SatisfaccionEvaluacion041203\ReadAction'
			],
			'create'=>[
				'class'=>'app\controllers\SatisfaccionEvaluacion041203\CreateAction'
			],
			'update'=>[
				'class'=>'app\controllers\SatisfaccionEvaluacion041203\UpdateAction'
			],
			'delete'=>[
				'class'=>'app\controllers\SatisfaccionEvaluacion041203\DeleteAction'
			],
            'checkUnique'=>[
				'class'=>'app\controllers\SatisfaccionEvaluacion041203\CheckUniqueAction'
			],
		];
	}
}
