<?php

namespace app\controllers;

use Yii;

use yii\filters\AccessControl;
use yii\web\Controller;
use app\models\EquipoPeticion010701;
use app\models\Usuario000101;

/**
 * Esta es la clase controlador para la tabla "equipo_peticion_01_07_01".
 */
class Equipopeticion010701Controller extends Controller
{
	public function behaviors() {
        $model = new Usuario000101;
        if (Yii::$app->user->getIdentity()) {
			$objLog = Yii::$app->user->getIdentity();
			$nom_login = $objLog->login_usuario;
		} else 
			$nom_login="admin";
		$userQuery = $model->listaAccion($nom_login,'EquipoPeticion010701');
        $userQuery[]="checkUnique";
        $userQuery[]="verifEquipoPet";
        $userQuery[]="equipo";
        return [
            'access' => [
                'class' => AccessControl::className(),
                'only' => ['create','index','update','delete','checkUnique','verifEquipoPet','equipo'],
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
				'class'=>'app\controllers\EquipoPeticion010701\ReadAction'
			],
			'create'=>[
				'class'=>'app\controllers\EquipoPeticion010701\CreateAction'
			],
			'update'=>[
				'class'=>'app\controllers\EquipoPeticion010701\UpdateAction'
			],
			'delete'=>[
				'class'=>'app\controllers\EquipoPeticion010701\DeleteAction'
			],
            'checkUnique'=>[
				'class'=>'app\controllers\EquipoPeticion010701\CheckUniqueAction'
			],
			'verifEquipoPet'=>[
				'class'=>'app\controllers\EquipoPeticion010701\VerifEquipoPetAction'
			],
			'equipo'=>[
				'class'=>'app\controllers\EquipoPeticion010701\EquipoAction'
			],
		];
	}
}
