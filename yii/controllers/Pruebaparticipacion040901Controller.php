<?php

namespace app\controllers;

use Yii;

use yii\filters\AccessControl;
use yii\web\Controller;
use app\models\PruebaParticipacion040901;
use app\models\Usuario000101;

/**
 * Esta es la clase controlador para la tabla "prueba_participacion_04_09_01".
 */
class Pruebaparticipacion040901Controller extends Controller
{
	public function behaviors() {
        $model = new Usuario000101;
        if (Yii::$app->user->getIdentity()) {
			$objLog = Yii::$app->user->getIdentity();
			$nom_login = $objLog->login_usuario;
		} else 
			$nom_login="admin";
		$userQuery = $model->listaAccion($nom_login,'PruebaParticipacion040901');
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
				'class'=>'app\controllers\PruebaParticipacion040901\ReadAction'
			],
			'create'=>[
				'class'=>'app\controllers\PruebaParticipacion040901\CreateAction'
			],
			'update'=>[
				'class'=>'app\controllers\PruebaParticipacion040901\UpdateAction'
			],
			'delete'=>[
				'class'=>'app\controllers\PruebaParticipacion040901\DeleteAction'
			],
            'checkUnique'=>[
				'class'=>'app\controllers\PruebaParticipacion040901\CheckUniqueAction'
			],
		];
	}
}
