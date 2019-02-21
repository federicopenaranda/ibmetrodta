<?php

namespace app\controllers;

use Yii;

use yii\filters\AccessControl;
use yii\web\Controller;
use app\models\PeticionArchivo010401;
use app\models\Usuario000101;

/**
 * Esta es la clase controlador para la tabla "peticion_archivo_01_04_01".
 */
class Peticionarchivo010401Controller extends Controller
{
	public function behaviors() {
        $model = new Usuario000101;
        if (Yii::$app->user->getIdentity()) {
			$objLog = Yii::$app->user->getIdentity();
			$nom_login = $objLog->login_usuario;
		} else 
			$nom_login="admin";
		$userQuery = $model->listaAccion($nom_login,'PeticionArchivo010401');
 		$userQuery[] = 'uploadEscaneadopeticionarchivo';
        $userQuery[] = 'downloadEscaneadopeticionarchivo';
        $userQuery[] = 'uploadnombrepeticionarchivo';
        $userQuery[] = 'downloadnombrepeticionarchivo';
		$userQuery[] = 'createPeticionArchivo';
        return [
            'access' => [
                'class' => AccessControl::className(),
                'only' => ['create','index','update','delete','uploadEscaneadopeticionarchivo','downloadEscaneadopeticionarchivo','uploadnombrepeticionarchivo','downloadnombrepeticionarchivo','createPeticionArchivo'],
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
				'class'=>'app\controllers\PeticionArchivo010401\ReadAction'
			],
			'create'=>[
				'class'=>'app\controllers\PeticionArchivo010401\CreateAction'
			],
			'update'=>[
				'class'=>'app\controllers\PeticionArchivo010401\UpdateAction'
			],
			'delete'=>[
				'class'=>'app\controllers\PeticionArchivo010401\DeleteAction'
			],
			'uploadescaneadopeticionarchivo'=>[
				'class'=>'app\controllers\PeticionArchivo010401\UploadEscaneadopeticionarchivoAction'
			],
			'downloadescaneadopeticionarchivo'=>[
				'class'=>'app\controllers\PeticionArchivo010401\DownloadEscaneadopeticionarchivoAction'
			],
			'uploadnombrepeticionarchivo'=>[
				'class'=>'app\controllers\PeticionArchivo010401\UploadNombrepeticionarchivoAction'
			],
			'downloadnombrepeticionarchivo'=>[
				'class'=>'app\controllers\PeticionArchivo010401\DownloadnombrepeticionarchivoAction'
			],
			'createPeticionArchivo'=>[
				'class'=>'app\controllers\PeticionArchivo010401\CreatePeticionArchivoAction'
			],
		];
	}
}
