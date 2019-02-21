<?php

namespace app\controllers;

use Yii;

use yii\filters\AccessControl;
use yii\web\Controller;
use app\models\DetalleCertificacion040501;
use app\models\Usuario000101;

/**
 * Esta es la clase controlador para la tabla "detalle_certificacion_04_05_01".
 */
class Detallecertificacion040501Controller extends Controller
{
	public function behaviors() {
        $model = new Usuario000101;
        if (Yii::$app->user->getIdentity()) {
			$objLog = Yii::$app->user->getIdentity();
			$nom_login = $objLog->login_usuario;
		} else 
			$nom_login="admin";
		$userQuery = $model->listaAccion($nom_login,'DetalleCertificacion040501');
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
				'class'=>'app\controllers\DetalleCertificacion040501\ReadAction'
			],
			'create'=>[
				'class'=>'app\controllers\DetalleCertificacion040501\CreateAction'
			],
			'update'=>[
				'class'=>'app\controllers\DetalleCertificacion040501\UpdateAction'
			],
			'delete'=>[
				'class'=>'app\controllers\DetalleCertificacion040501\DeleteAction'
			],
            'checkUnique'=>[
				'class'=>'app\controllers\DetalleCertificacion040501\CheckUniqueAction'
			],
		];
	}
}
