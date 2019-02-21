<?php

namespace app\controllers;

use yii\web\Controller;

/**
 * Esta es la clase controlador para la tabla "actividad_05_01_01".
 */
class Actividad050101Controller extends Controller
{
    /*public function behaviors()
    {
    $model = new Usuario000101;
    if (Yii::$app->user->getIdentity()) {
    $objLog    = Yii::$app->user->getIdentity();
    $nom_login = $objLog->login_usuario;
    } else {
    $nom_login = "admin";
    }

    $userQuery   = $model->listaAccion($nom_login, 'Actividad050101');
    $userQuery[] = "checkUnique";
    $userQuery[] = "eventos";

    return [
    'access' => [
    'class' => AccessControl::className(),
    'only'  => ['create', 'index', 'update', 'delete', 'checkUnique', 'eventos'],
    'rules' => [
    [
    'allow'   => true,
    'actions' => $userQuery,
    'roles'   => ['@'],
    ],
    ],
    ],
    ];
    }*/

    public function actions()
    {
        return [
            'index'       => [
                'class' => 'app\controllers\Actividad050101\ReadAction',
            ],
            'create'      => [
                'class' => 'app\controllers\Actividad050101\CreateAction',
            ],
            'update'      => [
                'class' => 'app\controllers\Actividad050101\UpdateAction',
            ],
            'delete'      => [
                'class' => 'app\controllers\Actividad050101\DeleteAction',
            ],
            'checkUnique' => [
                'class' => 'app\controllers\Actividad050101\CheckUniqueAction',
            ],
            'eventos'     => [
                'class' => 'app\controllers\Actividad050101\EventosAction',
            ],
            'validarActividad'     => [
                'class' => 'app\controllers\Actividad050101\ValidarActividadAction',
            ],
        ];
    }
}
