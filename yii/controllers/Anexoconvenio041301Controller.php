<?php

namespace app\controllers;

use Yii;

use yii\filters\AccessControl;
use yii\web\Controller;
use app\models\AnexoConvenio041301;
use app\models\Usuario000101;

/**
 * Esta es la clase controlador para la tabla "anexo_convenio_04_13_01".
 */
class Anexoconvenio041301Controller extends Controller
{
	public function behaviors() {
        $model = new Usuario000101;
        if (Yii::$app->user->getIdentity()) {
			$objLog = Yii::$app->user->getIdentity();
			$nom_login = $objLog->login_usuario;
		} else 
			$nom_login="admin";
		$userQuery = $model->listaAccion($nom_login,'AnexoConvenio041301');
        $userQuery[]="checkUnique";
 		$userQuery[] = 'uploadEscaneadoanexoconvenio';
        $userQuery[] = 'downloadEscaneadoanexoconvenio';
	$userQuery[] = 'escaneadoanexoconvenio';
	$userQuery[] = 'uploadnombrepeticionarchivo';
        return [
            'access' => [
                'class' => AccessControl::className(),
                'only' => ['create','index','update','delete','checkUnique','uploadEscaneadoanexoconvenio','downloadEscaneadoanexoconvenio','escaneadoanexoconvenio','uploadnombrepeticionarchivo'],
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
				'class'=>'app\controllers\AnexoConvenio041301\ReadAction'
			],
			'create'=>[
				'class'=>'app\controllers\AnexoConvenio041301\CreateAction'
			],
			'update'=>[
				'class'=>'app\controllers\AnexoConvenio041301\UpdateAction'
			],
			'delete'=>[
				'class'=>'app\controllers\AnexoConvenio041301\DeleteAction'
			],
            'checkUnique'=>[
				'class'=>'app\controllers\AnexoConvenio041301\CheckUniqueAction'
			],
			'uploadescaneadoanexoconvenio'=>[
				'class'=>'app\controllers\AnexoConvenio041301\UploadEscaneadoanexoconvenioAction'
			],
            'uploadescaneadoanexoconvenio'=>[
				'class'=>'app\controllers\AnexoConvenio041301\UploadEscaneadoanexoconvenioAction'
			],
			'downloadescaneadoanexoconvenio'=>[
				'class'=>'app\controllers\AnexoConvenio041301\DownloadEscaneadoanexoconvenioAction'
			],
            'downloadescaneadoanexoconvenio'=>[
				'class'=>'app\controllers\AnexoConvenio041301\DownloadEscaneadoanexoconvenioAction'
			],
            'escaneadoanexoconvenio'=>[
				'class'=>'app\controllers\AnexoConvenio041301\EscaneadoanexoconvenioAction'
			],
			'uploadnombrepeticionarchivo'=>[
				'class'=>'app\controllers\AnexoConvenio041301\UploadNombrepeticionarchivoAction'
			],

		];
	}
}
