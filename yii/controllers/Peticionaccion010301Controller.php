<?php

namespace app\controllers;

use Yii;

use yii\filters\AccessControl;
use yii\web\Controller;
use app\models\PeticionAccion010301;
use app\models\Usuario000101;

/**
 * Esta es la clase controlador para la tabla "peticion_accion_01_03_01".
 */
class Peticionaccion010301Controller extends Controller
{
	public function behaviors() {
        $model = new Usuario000101;
        if (Yii::$app->user->getIdentity()) {
			$objLog = Yii::$app->user->getIdentity();
			$nom_login = $objLog->login_usuario;
		} else 
			$nom_login="admin";
		$userQuery = $model->listaAccion($nom_login,'PeticionAccion010301');
        $userQuery[] = "checkUnique";
		$userQuery[] = "verifAction";
        return [
            'access' => [
                'class' => AccessControl::className(),
                'only' => ['create','index','update','delete','checkUnique','verifAction','habilitaAction'],
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
				'class'=>'app\controllers\PeticionAccion010301\ReadAction'
			],
			'create'=>[
				'class'=>'app\controllers\PeticionAccion010301\CreateAction'
			],
			'update'=>[
				'class'=>'app\controllers\PeticionAccion010301\UpdateAction'
			],
			'delete'=>[
				'class'=>'app\controllers\PeticionAccion010301\DeleteAction'
			],
            'checkUnique'=>[
				'class'=>'app\controllers\PeticionAccion010301\CheckUniqueAction'
			],
			'verifAction'=>[
				'class'=>'app\controllers\PeticionAccion010301\VerifActionAction'
			],
			'habilita'=>[
				'class'=>'app\controllers\PeticionAccion010301\habilitaAction'
			],
		];
	}
}
