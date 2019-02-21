<?php

namespace app\controllers;

use Yii;

use yii\filters\AccessControl;
use yii\web\Controller;
use app\models\Peticion010401;
use app\models\Usuario000101;

/**
 * Esta es la clase controlador para la tabla "peticion_01_04_01".
 */
class Peticion010401Controller extends Controller
{
	public function behaviors() {
        $model = new Usuario000101;
        if (Yii::$app->user->getIdentity()) {
			$objLog = Yii::$app->user->getIdentity();
			$nom_login = $objLog->login_usuario;
		} else 
			$nom_login="admin";
		$userQuery = $model->listaAccion($nom_login,'Peticion010401');
        $userQuery[]="checkUnique";
		$userQuery[]="vefifState";
		$userQuery[]="verifForm50";
		$userQuery[]="controlTiempo";
		$userQuery[]="admEstadoProceso";
        return [
            'access' => [
                'class' => AccessControl::className(),
                'only' => ['create','index','update','delete','checkUnique','vefifState','verifForm50','controlTiempo','admEstadoProceso'],
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
				'class'=>'app\controllers\Peticion010401\ReadAction'
			],
			'create'=>[
				'class'=>'app\controllers\Peticion010401\CreateAction'
			],
			'update'=>[
				'class'=>'app\controllers\Peticion010401\UpdateAction'
			],
			'delete'=>[
				'class'=>'app\controllers\Peticion010401\DeleteAction'
			],
            'checkUnique'=>[
				'class'=>'app\controllers\Peticion010401\CheckUniqueAction'
			],
			'verifState'=>[
				'class'=>'app\controllers\Peticion010401\VerifStateAction'
			],
			'verifForm50'=>[
				'class'=>'app\controllers\Peticion010401\VerifForm50Action'
			],
			'controlTiempo'=>[
				'class'=>'app\controllers\Peticion010401\ControlTiempoAction'
			],
			'admEstadoProceso'=>[
				'class'=>'app\controllers\Peticion010401\admEstadoProcesoAction'
			]
		];
	}
}
