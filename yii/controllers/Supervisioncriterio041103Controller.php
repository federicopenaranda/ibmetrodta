<?php

namespace app\controllers;

use Yii;

use yii\filters\AccessControl;
use yii\web\Controller;
use app\models\SupervisionCriterio041103;
use app\models\Usuario000101;

/**
 * Esta es la clase controlador para la tabla "supervision_criterio_04_11_03".
 */
class Supervisioncriterio041103Controller extends Controller
{
	public function behaviors() {
        $model = new Usuario000101;
        if (Yii::$app->user->getIdentity()) {
			$objLog = Yii::$app->user->getIdentity();
			$nom_login = $objLog->login_usuario;
		} else 
			$nom_login="admin";
		$userQuery = $model->listaAccion($nom_login,'SupervisionCriterio041103');
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
				'class'=>'app\controllers\SupervisionCriterio041103\ReadAction'
			],
			'create'=>[
				'class'=>'app\controllers\SupervisionCriterio041103\CreateAction'
			],
			'update'=>[
				'class'=>'app\controllers\SupervisionCriterio041103\UpdateAction'
			],
			'delete'=>[
				'class'=>'app\controllers\SupervisionCriterio041103\DeleteAction'
			],
            'checkUnique'=>[
				'class'=>'app\controllers\SupervisionCriterio041103\CheckUniqueAction'
			],
		];
	}
}
