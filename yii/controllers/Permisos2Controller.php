<?php

namespace app\controllers;

use Yii;
use yii\filters\AccessControl;
use yii\web\Controller;
use app\models\UsuarioPrivilegio000004;
use app\models\Usuario000101;

/**
 * Este es el controlador para el modelo "".
 */
class Permisos2Controller extends Controller {

    public function behaviors() {
        return[
            'access' => [
                'class' => AccessControl::className(),
                'only' => ['privilegio', 'tipousuario'],
                'rules' => [
                    [
                        'actions' => ['login', 'insert'],
                        'allow' => true,
                        'roles' => ['?'],
                    ],
                    [
                        'actions' => ['privilegio', 'tipousuario'],
                        'allow' => true,
                        'roles' => ['@'],
                    ],
                ],
            ],
        ];
    }

    public function actionPrivilegio() {
        $respuesta = new \stdClass();
        $error = "";

        $error.= (!isset($_GET['callback'])) ? "{ Error de Callback } " : "";
        
        if ($error == "") 
        {
            $callback = $_GET['callback'];

            $objusu = new UsuarioPrivilegio000004();

            $id = yii::$app->user->getId();

            if (isset($_GET['filter']))
                $opciones_usuario = $_GET['filter'];
            else
                $opciones_usuario = "controlador";

            if (isset($_GET['sort'])) {
                $sort = Json::decode($_GET['sort']);
                $propertySort = $sort[0]['property'];
                $directionSort = $sort[0]['direction'];
            } else {
                $propertySort = "id_usuario_privilegio";
                $directionSort = "asc";
            }

            $query = (new \yii\db\Query())
                    ->select('nombre_privilegio_usuario_privilegio')
                    ->from('usuario_tipo_usuario_00_01_02')
                    ->innerJoin('usuario_tipo_00_02_01', 'usuario_tipo_00_02_01.id_usuario_tipo = usuario_tipo_usuario_00_01_02.fk_id_usuario_tipo')
                    ->innerJoin('usuario_tipo_privilegio_00_02_02', 'usuario_tipo_00_02_01.id_usuario_tipo = usuario_tipo_privilegio_00_02_02.fk_id_usuario_tipo')
                    ->innerJoin('usuario_privilegio_00_00_04', 'usuario_privilegio_00_00_04.id_usuario_privilegio = usuario_tipo_privilegio_00_02_02.fk_id_usuario_privilegio')
                    ->where('usuario_tipo_usuario_00_01_02.fk_id_usuario =:id_usuario && usuario_privilegio_00_00_04.opciones_usuario_privilegio =:opciones_usuario')
                    ->addParams([':id_usuario' => $id, ':opciones_usuario' => $opciones_usuario])
                    ->orderby($propertySort . " " . $directionSort)
                    ->all();

            $respuesta->registros = $query;

            return $this->renderParTial('read', array('model' => $respuesta, 'callback' => $callback));
        }
        else
        {
            $respuesta->meta = array("success" => "false", "msg" => $error);
            return $this->renderParTial('read', array('model' => $respuesta, 'callback' => ''));
        }
    }

    public function actionTipousuario() {
        $respuesta = new \stdClass();
        $error = "";
        $error.= (!isset($_GET['callback'])) ? "{ Error de Callback } " : "";
        if ($error == "") {
            $callback = $_GET['callback'];
            $id = yii::$app->user->getId();

            $models = Usuario000101::find()
                    ->distinct(true)
                    ->with('fkIdUsuarioTipos')
                    ->asArray()
                    ->joinWith('fkIdUsuarioTipos')
                    ->where('id_usuario =:id_usuario')
                    ->addParams([':id_usuario' => $id])
                    ->all();
            $total = sizeof($models);
            $models = Usuario000101::find()
                    ->distinct(true)
                    #->select('login_usuario, usuario_tipo_00_02_01.nombre_usuario_tipo')
                    ->with('fkIdUsuarioTipos')
                    ->asArray()
                    ->joinWith('fkIdUsuarioTipos')
                    ->where('id_usuario =:id_usuario')
                    ->addParams([':id_usuario' => $id])
                    #->offset($_GET['start'])
                    #->limit($_GET['limit'])
                    ->all();

            $respuesta->registros = $models;
            $respuesta->total = (int) $total;
            return $this->renderParTial('read', array('model' => $respuesta, 'callback' => $callback));
        } else {
            $respuesta->meta = array("success" => "false", "msg" => $error);
            return $this->renderParTial('read', array('model' => $respuesta, 'callback' => ''));
        }
    }

}
