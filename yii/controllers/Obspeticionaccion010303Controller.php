<?php

namespace app\controllers;

use Yii;

use yii\filters\AccessControl;
use yii\web\Controller;
use app\models\ObsPeticionAccion010303;
use app\models\Usuario000101;

/**
 * Esta es la clase controlador para la tabla "obs_peticion_accion_01_03_03".
 */
class Obspeticionaccion010303Controller extends Controller
{
	public function behaviors() {
        $model = new Usuario000101;
        if (Yii::$app->user->getIdentity()) {
			$objLog = Yii::$app->user->getIdentity();
			$nom_login = $objLog->login_usuario;
		} else 
			$nom_login="admin";
		$userQuery = $model->listaAccion($nom_login,'ObsPeticionAccion010303');
        $userQuery[]="checkUnique";
		$userQuery[]="consejoPeticion";
        return [
            'access' => [
                'class' => AccessControl::className(),
                'only' => ['create','index','update','delete','checkUnique','consejoPeticion'],
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
				'class'=>'app\controllers\ObsPeticionAccion010303\ReadAction'
			],
			'create'=>[
				'class'=>'app\controllers\ObsPeticionAccion010303\CreateAction'
			],
			'update'=>[
				'class'=>'app\controllers\ObsPeticionAccion010303\UpdateAction'
			],
			'delete'=>[
				'class'=>'app\controllers\ObsPeticionAccion010303\DeleteAction'
			],
            'checkUnique'=>[
				'class'=>'app\controllers\ObsPeticionAccion010303\CheckUniqueAction'
			],
			 'consejoPeticion'=>[
				'class'=>'app\controllers\ObsPeticionAccion010303\ConsejoPeticionAction'
			],
		];
	}
}
