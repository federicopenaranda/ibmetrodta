<?php

namespace app\controllers;

use Yii;

use yii\filters\AccessControl;
use yii\web\Controller;
use app\models\InformeAcred041301;
use app\models\Usuario000101;

/**
 * Esta es la clase controlador para la tabla "informe_acred_04_13_01".
 */
class Informeacred041301Controller extends Controller
{
	public function behaviors() {
        $model = new Usuario000101;
        if (Yii::$app->user->getIdentity()) {
			$objLog = Yii::$app->user->getIdentity();
			$nom_login = $objLog->login_usuario;
		} else 
			$nom_login="admin";
		$userQuery = $model->listaAccion($nom_login,'InformeAcred041301');
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
				'class'=>'app\controllers\InformeAcred041301\ReadAction'
			],
			'create'=>[
				'class'=>'app\controllers\InformeAcred041301\CreateAction'
			],
			'update'=>[
				'class'=>'app\controllers\InformeAcred041301\UpdateAction'
			],
			'delete'=>[
				'class'=>'app\controllers\InformeAcred041301\DeleteAction'
			],
            'checkUnique'=>[
				'class'=>'app\controllers\InformeAcred041301\CheckUniqueAction'
			],
		];
	}
}
