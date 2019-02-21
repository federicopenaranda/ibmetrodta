<?php

namespace app\controllers;

use Yii;

use yii\filters\AccessControl;
use yii\web\Controller;
use app\models\EvalTecnica040801;
use app\models\Usuario000101;

/**
 * Esta es la clase controlador para la tabla "eval_tecnica_04_08_01".
 */
class Evaltecnica040801Controller extends Controller
{
	public function behaviors() {
        $model = new Usuario000101;
        if (Yii::$app->user->getIdentity()) {
			$objLog = Yii::$app->user->getIdentity();
			$nom_login = $objLog->login_usuario;
		} else 
			$nom_login="admin";
		$userQuery = $model->listaAccion($nom_login,'EvalTecnica040801');
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
				'class'=>'app\controllers\EvalTecnica040801\ReadAction'
			],
			'create'=>[
				'class'=>'app\controllers\EvalTecnica040801\CreateAction'
			],
			'update'=>[
				'class'=>'app\controllers\EvalTecnica040801\UpdateAction'
			],
			'delete'=>[
				'class'=>'app\controllers\EvalTecnica040801\DeleteAction'
			],
            'checkUnique'=>[
				'class'=>'app\controllers\EvalTecnica040801\CheckUniqueAction'
			],
		];
	}
}
