<?php

namespace app\controllers;

use Yii;

use yii\filters\AccessControl;
use yii\web\Controller;
use app\models\TipoCurso050104;
use app\models\Usuario000101;

/**
 * Esta es la clase controlador para la tabla "tipo_curso_05_01_04".
 */
class Tipocurso050104Controller extends Controller
{
	public function behaviors() {
        $model = new Usuario000101;
        if (Yii::$app->user->getIdentity()) {
			$objLog = Yii::$app->user->getIdentity();
			$nom_login = $objLog->login_usuario;
		} else 
			$nom_login="admin";
		$userQuery = $model->listaAccion($nom_login,'TipoCurso050104');
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
				'class'=>'app\controllers\TipoCurso050104\ReadAction'
			],
			'create'=>[
				'class'=>'app\controllers\TipoCurso050104\CreateAction'
			],
			'update'=>[
				'class'=>'app\controllers\TipoCurso050104\UpdateAction'
			],
			'delete'=>[
				'class'=>'app\controllers\TipoCurso050104\DeleteAction'
			],
            'checkUnique'=>[
				'class'=>'app\controllers\TipoCurso050104\CheckUniqueAction'
			],
		];
	}
}
