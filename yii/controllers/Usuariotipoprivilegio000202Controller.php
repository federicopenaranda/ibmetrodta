<?php

namespace app\controllers;

use Yii;

use yii\filters\AccessControl;
use yii\web\Controller;
use app\models\UsuarioTipoPrivilegio000202;
use app\models\Usuario000101;

/**
 * Esta es la clase controlador para la tabla "usuario_tipo_privilegio_00_02_02".
 */
class Usuariotipoprivilegio000202Controller extends Controller
{
	public function behaviors() {
        $model = new Usuario000101;
        if (Yii::$app->user->getIdentity()) {
			$objLog = Yii::$app->user->getIdentity();
			$nom_login = $objLog->login_usuario;
		} else 
			$nom_login="admin";
		$userQuery = $model->listaAccion($nom_login,'UsuarioTipoPrivilegio000202');
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
				'class'=>'app\controllers\UsuarioTipoPrivilegio000202\ReadAction'
			],
			'create'=>[
				'class'=>'app\controllers\UsuarioTipoPrivilegio000202\CreateAction'
			],
			'update'=>[
				'class'=>'app\controllers\UsuarioTipoPrivilegio000202\UpdateAction'
			],
			'delete'=>[
				'class'=>'app\controllers\UsuarioTipoPrivilegio000202\DeleteAction'
			],
            'checkUnique'=>[
				'class'=>'app\controllers\UsuarioTipoPrivilegio000202\CheckUniqueAction'
			],
		];
	}
}
