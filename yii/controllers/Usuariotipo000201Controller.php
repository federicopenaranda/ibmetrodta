<?php

namespace app\controllers;

use Yii;

use yii\filters\AccessControl;
use yii\web\Controller;
use app\models\UsuarioTipo000201;
use app\models\Usuario000101;

/**
 * Esta es la clase controlador para la tabla "usuario_tipo_00_02_01".
 */
class Usuariotipo000201Controller extends Controller
{
	public function behaviors() {
        $model = new Usuario000101;
        if (Yii::$app->user->getIdentity()) {
			$objLog = Yii::$app->user->getIdentity();
			$nom_login = $objLog->login_usuario;
		} else 
			$nom_login="admin";
		$userQuery = $model->listaAccion($nom_login,'UsuarioTipo000201');
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
				'class'=>'app\controllers\UsuarioTipo000201\ReadAction'
			],
			'create'=>[
				'class'=>'app\controllers\UsuarioTipo000201\CreateAction'
			],
			'update'=>[
				'class'=>'app\controllers\UsuarioTipo000201\UpdateAction'
			],
			'delete'=>[
				'class'=>'app\controllers\UsuarioTipo000201\DeleteAction'
			],
            'checkUnique'=>[
				'class'=>'app\controllers\UsuarioTipo000201\CheckUniqueAction'
			],
		];
	}
}
