<?php

namespace app\controllers;

use Yii;
use yii\filters\AccessControl;
use yii\web\Controller;
use app\models\ActividadUsuario050103;
use app\models\Usuario000101;

/**
 * Esta es la clase controlador para la tabla "actividad_01_05_01".
 */
class Actividadusuario050103Controller extends Controller {

    public function behaviors() {
        $model = new Usuario000101;
        if (Yii::$app->user->getIdentity()) {
            $objLog = Yii::$app->user->getIdentity();
            $nom_login = $objLog->login_usuario;
        } else
            $nom_login = "admin";
        $userQuery = $model->listaAccion($nom_login, 'ActividadUsuario050103');
        $userQuery[] = "checkUnique";
        return [
            'access' => [
                'class' => AccessControl::className(),
                'only' => ['create', 'index', 'update', 'delete', 'checkUnique',],
                'rules' => [
                    [
                        'allow' => true,
                        'actions' => $userQuery,
                        'roles' => ['@'],
                    ],
                ],
            ],
        ];
    }

    public function actions() {
        return [
            'index' => [
                'class' => 'app\controllers\ActividadUsuario050103\ReadAction'
            ],
            'create' => [
                'class' => 'app\controllers\ActividadUsuario050103\CreateAction'
            ],
            'update' => [
                'class' => 'app\controllers\ActividadUsuario050103\UpdateAction'
            ],
            'delete' => [
                'class' => 'app\controllers\ActividadUsuario050103\DeleteAction'
            ],
            'checkUnique' => [
                'class' => 'app\controllers\ActividadUsuario050103\CheckUniqueAction'
            ],
        ];
    }

}
