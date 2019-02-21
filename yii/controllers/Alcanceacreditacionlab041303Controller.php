<?php

namespace app\controllers;

use Yii;

use yii\filters\AccessControl;
use yii\web\Controller;
use app\models\AlcanceAcreditacionLab041303;
use app\models\Usuario000101;

/**
 * Esta es la clase controlador para la tabla "alcance_acreditacion_lab_04_13_03".
 */
class Alcanceacreditacionlab041303Controller extends Controller
{
	public function behaviors() {
        $model = new Usuario000101;
        if (Yii::$app->user->getIdentity()) {
			$objLog = Yii::$app->user->getIdentity();
			$nom_login = $objLog->login_usuario;
		} else 
			$nom_login="admin";
		$userQuery = $model->listaAccion($nom_login,'AlcanceAcreditacionLab041303');
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
				'class'=>'app\controllers\AlcanceAcreditacionLab041303\ReadAction'
			],
			'create'=>[
				'class'=>'app\controllers\AlcanceAcreditacionLab041303\CreateAction'
			],
			'update'=>[
				'class'=>'app\controllers\AlcanceAcreditacionLab041303\UpdateAction'
			],
			'delete'=>[
				'class'=>'app\controllers\AlcanceAcreditacionLab041303\DeleteAction'
			],
            'checkUnique'=>[
				'class'=>'app\controllers\AlcanceAcreditacionLab041303\CheckUniqueAction'
			],
		];
	}
}
