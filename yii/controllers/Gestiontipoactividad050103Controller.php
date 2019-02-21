<?php

namespace app\controllers;

use Yii;

use yii\filters\AccessControl;
use yii\web\Controller;
use app\models\GestionTipoActividad050103;
use app\models\Usuario000101;

/**
 * Esta es la clase controlador para la tabla "gestion_tipo_actividad_05_01_03".
 */
class Gestiontipoactividad050103Controller extends Controller
{
	public function behaviors() {
        $model = new Usuario000101;
        if (Yii::$app->user->getIdentity()) {
			$objLog = Yii::$app->user->getIdentity();
			$nom_login = $objLog->login_usuario;
		} else 
			$nom_login="admin";
		$userQuery = $model->listaAccion($nom_login,'GestionTipoActividad050103');
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
				'class'=>'app\controllers\GestionTipoActividad050103\ReadAction'
			],
			'create'=>[
				'class'=>'app\controllers\GestionTipoActividad050103\CreateAction'
			],
			'update'=>[
				'class'=>'app\controllers\GestionTipoActividad050103\UpdateAction'
			],
			'delete'=>[
				'class'=>'app\controllers\GestionTipoActividad050103\DeleteAction'
			],
            'checkUnique'=>[
				'class'=>'app\controllers\GestionTipoActividad050103\CheckUniqueAction'
			],
		];
	}
}
