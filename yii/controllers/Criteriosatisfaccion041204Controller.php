<?php

namespace app\controllers;

use Yii;

use yii\filters\AccessControl;
use yii\web\Controller;
use app\models\CriterioSatisfaccion041204;
use app\models\Usuario000101;

/**
 * Esta es la clase controlador para la tabla "criterio_satisfaccion_04_12_04".
 */
class Criteriosatisfaccion041204Controller extends Controller
{
	public function behaviors() {
        $model = new Usuario000101;
        if (Yii::$app->user->getIdentity()) {
			$objLog = Yii::$app->user->getIdentity();
			$nom_login = $objLog->login_usuario;
		} else 
			$nom_login="admin";
		$userQuery = $model->listaAccion($nom_login,'CriterioSatisfaccion041204');
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
				'class'=>'app\controllers\CriterioSatisfaccion041204\ReadAction'
			],
			'create'=>[
				'class'=>'app\controllers\CriterioSatisfaccion041204\CreateAction'
			],
			'update'=>[
				'class'=>'app\controllers\CriterioSatisfaccion041204\UpdateAction'
			],
			'delete'=>[
				'class'=>'app\controllers\CriterioSatisfaccion041204\DeleteAction'
			],
            'checkUnique'=>[
				'class'=>'app\controllers\CriterioSatisfaccion041204\CheckUniqueAction'
			],
		];
	}
}
