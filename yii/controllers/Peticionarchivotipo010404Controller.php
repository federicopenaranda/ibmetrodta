<?php

namespace app\controllers;

use Yii;

use yii\filters\AccessControl;
use yii\web\Controller;
use app\models\PeticionArchivoTipo010404;
use app\models\Usuario000101;

/**
 * Esta es la clase controlador para la tabla "peticion_archivo_tipo_01_04_04".
 */
class Peticionarchivotipo010404Controller extends Controller
{
	public function behaviors() {
        $model = new Usuario000101;
        if (Yii::$app->user->getIdentity()) {
			$objLog = Yii::$app->user->getIdentity();
			$nom_login = $objLog->login_usuario;
		} else 
			$nom_login="admin";
		$userQuery = $model->listaAccion($nom_login,'PeticionArchivoTipo010404');
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
				'class'=>'app\controllers\PeticionArchivoTipo010404\ReadAction'
			],
			'create'=>[
				'class'=>'app\controllers\PeticionArchivoTipo010404\CreateAction'
			],
			'update'=>[
				'class'=>'app\controllers\PeticionArchivoTipo010404\UpdateAction'
			],
			'delete'=>[
				'class'=>'app\controllers\PeticionArchivoTipo010404\DeleteAction'
			],
            'checkUnique'=>[
				'class'=>'app\controllers\PeticionArchivoTipo010404\CheckUniqueAction'
			],
		];
	}
}
