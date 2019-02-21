<?php

namespace app\controllers;

use Yii;

use yii\filters\AccessControl;
use yii\web\Controller;
use app\models\SatisfaccionCliente041201;
use app\models\Usuario000101;

/**
 * Esta es la clase controlador para la tabla "satisfaccion_cliente_04_12_01".
 */
class Satisfaccioncliente041201Controller extends Controller
{
	public function behaviors() {
        $model = new Usuario000101;
        if (Yii::$app->user->getIdentity()) {
			$objLog = Yii::$app->user->getIdentity();
			$nom_login = $objLog->login_usuario;
		} else 
			$nom_login="admin";
		$userQuery = $model->listaAccion($nom_login,'SatisfaccionCliente041201');
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
				'class'=>'app\controllers\SatisfaccionCliente041201\ReadAction'
			],
			'create'=>[
				'class'=>'app\controllers\SatisfaccionCliente041201\CreateAction'
			],
			'update'=>[
				'class'=>'app\controllers\SatisfaccionCliente041201\UpdateAction'
			],
			'delete'=>[
				'class'=>'app\controllers\SatisfaccionCliente041201\DeleteAction'
			],
            'checkUnique'=>[
				'class'=>'app\controllers\SatisfaccionCliente041201\CheckUniqueAction'
			],
		];
	}
}
