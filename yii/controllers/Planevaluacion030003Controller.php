<?php

namespace app\controllers;

use Yii;

use yii\filters\AccessControl;
use yii\web\Controller;
use app\models\PlanEvaluacion030003;
use app\models\Usuario000101;

/**
 * Esta es la clase controlador para la tabla "plan_evaluacion_03_00_03".
 */
class Planevaluacion030003Controller extends Controller
{
	public function behaviors() {
        $model = new Usuario000101;
        if (Yii::$app->user->getIdentity()) {
			$objLog = Yii::$app->user->getIdentity();
			$nom_login = $objLog->login_usuario;
		} else 
			$nom_login="admin";
		$userQuery = $model->listaAccion($nom_login,'PlanEvaluacion030003');
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
				'class'=>'app\controllers\PlanEvaluacion030003\ReadAction'
			],
			'create'=>[
				'class'=>'app\controllers\PlanEvaluacion030003\CreateAction'
			],
			'update'=>[
				'class'=>'app\controllers\PlanEvaluacion030003\UpdateAction'
			],
			'delete'=>[
				'class'=>'app\controllers\PlanEvaluacion030003\DeleteAction'
			],
            'checkUnique'=>[
				'class'=>'app\controllers\PlanEvaluacion030003\CheckUniqueAction'
			],
		];
	}
}
