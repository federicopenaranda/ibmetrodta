<?php

namespace app\controllers;

use Yii;

use yii\filters\AccessControl;
use yii\web\Controller;
use app\models\InformeEvaluacion040601;
use app\models\Usuario000101;

/**
 * Esta es la clase controlador para la tabla "informe_evaluacion_04_06_01".
 */
class Informeevaluacion040601Controller extends Controller
{
	public function behaviors() {
        $model = new Usuario000101;
        if (Yii::$app->user->getIdentity()) {
			$objLog = Yii::$app->user->getIdentity();
			$nom_login = $objLog->login_usuario;
		} else 
			$nom_login="admin";
		$userQuery = $model->listaAccion($nom_login,'InformeEvaluacion040601');
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
				'class'=>'app\controllers\InformeEvaluacion040601\ReadAction'
			],
			'create'=>[
				'class'=>'app\controllers\InformeEvaluacion040601\CreateAction'
			],
			'update'=>[
				'class'=>'app\controllers\InformeEvaluacion040601\UpdateAction'
			],
			'delete'=>[
				'class'=>'app\controllers\InformeEvaluacion040601\DeleteAction'
			],
            'checkUnique'=>[
				'class'=>'app\controllers\InformeEvaluacion040601\CheckUniqueAction'
			],
		];
	}
}
