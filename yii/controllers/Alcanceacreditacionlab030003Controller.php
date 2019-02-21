<?php

namespace app\controllers;

use Yii;

use yii\filters\AccessControl;
use yii\web\Controller;
use app\models\AlcanceAcreditacionLab030003;
use app\models\Usuario000101;

/**
 * Esta es la clase controlador para la tabla "alcance_acreditacion_lab_03_00_03".
 */
class Alcanceacreditacionlab030003Controller extends Controller
{
	public function behaviors() {
        $model = new Usuario000101;
        if (Yii::$app->user->getIdentity()) {
			$objLog = Yii::$app->user->getIdentity();
			$nom_login = $objLog->login_usuario;
		} else 
			$nom_login="admin";
		$userQuery = $model->listaAccion($nom_login,'AlcanceAcreditacionLab030003');
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
				'class'=>'app\controllers\AlcanceAcreditacionLab030003\ReadAction'
			],
			'create'=>[
				'class'=>'app\controllers\AlcanceAcreditacionLab030003\CreateAction'
			],
			'update'=>[
				'class'=>'app\controllers\AlcanceAcreditacionLab030003\UpdateAction'
			],
			'delete'=>[
				'class'=>'app\controllers\AlcanceAcreditacionLab030003\DeleteAction'
			],
            'checkUnique'=>[
				'class'=>'app\controllers\AlcanceAcreditacionLab030003\CheckUniqueAction'
			],
		];
	}
}
