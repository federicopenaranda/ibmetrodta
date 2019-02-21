<?php

namespace app\controllers;

use Yii;

use yii\filters\AccessControl;
use yii\web\Controller;
use app\models\AlcanceAcreditacionInsp041303;
use app\models\Usuario000101;

/**
 * Esta es la clase controlador para la tabla "alcance_acreditacion_insp_04_13_03".
 */
class Alcanceacreditacioninsp041303Controller extends Controller
{
	public function behaviors() {
        $model = new Usuario000101;
        if (Yii::$app->user->getIdentity()) {
			$objLog = Yii::$app->user->getIdentity();
			$nom_login = $objLog->login_usuario;
		} else 
			$nom_login="admin";
		$userQuery = $model->listaAccion($nom_login,'AlcanceAcreditacionInsp041303');
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
				'class'=>'app\controllers\AlcanceAcreditacionInsp041303\ReadAction'
			],
			'create'=>[
				'class'=>'app\controllers\AlcanceAcreditacionInsp041303\CreateAction'
			],
			'update'=>[
				'class'=>'app\controllers\AlcanceAcreditacionInsp041303\UpdateAction'
			],
			'delete'=>[
				'class'=>'app\controllers\AlcanceAcreditacionInsp041303\DeleteAction'
			],
            'checkUnique'=>[
				'class'=>'app\controllers\AlcanceAcreditacionInsp041303\CheckUniqueAction'
			],
		];
	}
}
