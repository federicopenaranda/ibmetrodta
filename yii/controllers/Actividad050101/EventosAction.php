<?php

namespace app\controllers;

namespace app\controllers\Actividad050101;

use yii\base\Action;
use app\models\Actividad050101;
use yii\base\Exception;
use yii\helpers\Json;
use app\models\CTQ;
use yii\db\Query;
use yii\db\Expression;

class EventosAction extends Action {

    public function run() {
        $respuesta = new \stdClass();
        $model = new Actividad050101;
        $error = "";
        $error.= (!isset($_GET['callback'])) ? "{ Error de Callback } " : "";
        $error.= (!isset($_GET['start'])) ? "{ Error de start } " : "";
        $error.= (!isset($_GET['limit'])) ? "{ Error de limit } " : "";
        $listManyMany = [
        ];

        if ($error == "") {
            try {
                if (isset($_GET['sort'])) {
                    $sort = Json::decode($_GET['sort']);
                    $propertySort = $sort[0]['property'];
                    $directionSort = $sort[0]['direction'];
                } else {
                    $propertySort = "id_actividad";
                    $directionSort = "asc";
                }
                $condiQuery = "";

                if (isset($_GET['query']) && $_GET['query'] != "") {

                    $filtro = Json::decode($_GET['query']);

                    foreach ($filtro as $fvalues):
                        foreach ($fvalues as $fk => $fv):
                            if ($fv != "")
                                $condiQuery.= $fk . " LIKE '%" . $fv . "%' OR ";
                        endforeach;
                    endforeach;
                    $condiQuery = substr($condiQuery, 0, -3);
                }//query

                if (isset($_GET['query']) && $_GET['query'] != "" && $condiQuery != "") {
                    $models = Actividad050101::find()
                            ->distinct(true)
                            ->with('fkIdTipoCurso', 'fkIdOec', 'fkIdTipoActividad')
                            ->asArray()
                            ->joinWith('fkIdTipoCurso')
                            ->joinWith('fkIdOec')
                            ->joinWith('fkIdTipoActividad')
                            ->joinWith('actividadUsuario050103s')
                            ->joinWith('participantesCurso050103s')
                            ->where($condiQuery)
                            ->all();
                    $total = sizeof($models);
                    $models = Actividad050101::find()
                            ->distinct(true)
                            ->with('fkIdTipoCurso', 'fkIdOec', 'fkIdTipoActividad')
                            ->asArray()
                            ->joinWith('fkIdTipoCurso')
                            ->joinWith('fkIdOec')
                            ->joinWith('fkIdTipoActividad')
                            ->where($condiQuery)
                            ->offset($_GET['start'])
                            ->limit($_GET['limit'])
                            ->all();
                    for ($i = 0; $i < sizeof($models); $i++) {
                        unset($models[$i]['fkIdTipoCurso']);
                        unset($models[$i]['fkIdOec']);
                        unset($models[$i]['fkIdTipoActividad']);
                    }
                } 
                
                else {

                    $filtros = array();
                    if (isset($_GET['filter']) && $_GET['filter'] != '') {

                        $filtros = Json::decode($_GET['filter']);
                        $contFil = 1;
                        $condi = "";
                        $sw = 0;
                        foreach ($filtros as $filtro):

                            if (in_array($filtro['property'], $listManyMany)) {

                                $listSubQuery[] = Actividad050101::find()
                                        ->distinct(true)
                                        ->with('fkIdTipoCurso', 'fkIdOec', 'fkIdTipoActividad')
                                        ->asArray()
                                        ->joinWith('fkIdTipoCurso')
                                        ->joinWith('fkIdOec')
                                        ->joinWith('fkIdTipoActividad')
                                        ->where([$filtro['property'] => $filtro['value']])
                                        ->all();
                                $sw = 1;
                            } else {
                                if (is_numeric($filtro['value']) && strpos($filtro['property'], 'fk_id_') !== FALSE)
                                    $condi.= $contFil != sizeof($filtros) ? $filtro['property'] . " = " . $filtro['value'] . " AND " : $filtro['property'] . " = " . $filtro['value'];
                                else
                                    $condi.= $contFil != sizeof($filtros) ? $filtro['property'] . " LIKE '%" . $filtro['value'] . "%' AND " : $filtro['property'] . " LIKE '%" . $filtro['value'] . "%'";
                                $contFil++;
                            }
                        endforeach;
                        if ($sw == 0) {
                            $models = Actividad050101::find()
                                    ->distinct(true)
                                    ->with('fkIdTipoCurso', 'fkIdOec', 'fkIdTipoActividad')
                                    ->asArray()
                                    ->joinWith('fkIdTipoCurso')
                                    ->joinWith('fkIdOec')
                                    ->joinWith('fkIdTipoActividad')
                                    ->where($condi)
                                    ->all();
                            $total = sizeof($models);
                            $models = Actividad050101::find()
                                    ->distinct(true)
                                    ->select([
                                        'id_actividad AS id',
                                        'fk_id_oec',
                                        'fk_id_tipo_actividad',
                                        'fk_id_tipo_curso',
                                        'codigo_actividad',
                                        'fecha_actividad',
                                        'nombre_actividad AS title',
                                        'nombre_actividad',
                                        'descripcion_actividad AS notes',
                                        'fecha_inicial_actividad AS start',
                                        'fecha_final_actividad AS end',

                                        'descripcion_actividad',
                                        'fecha_inicial_actividad',
                                        'fecha_final_actividad',

                                        'prs_actividad',
                                        'horas_actividad',
                                        'nombre_tipo_curso',
                                        'nombre_oec',
                                        'nombre_tipo_actividad',
					new Expression('1 as cid')
                                    ])
                                    ->with('fkIdTipoCurso', 'fkIdOec', 'fkIdTipoActividad')
                                    ->asArray()
                                    ->joinWith('fkIdTipoCurso')
                                    ->joinWith('fkIdOec')
                                    ->joinWith('fkIdTipoActividad')
                                    ->where($condi)
                                    ->orderby($propertySort . " " . $directionSort)
                                    ->offset($_GET['start'])
                                    ->limit($_GET['limit'])
                                    ->all();
                            for ($i = 0; $i < sizeof($models); $i++) {
                                unset($models[$i]['fkIdTipoCurso']);
                                unset($models[$i]['fkIdOec']);
                                unset($models[$i]['fkIdTipoActividad']);
                            }
                        } else {
                            $models = Actividad050101::find()
                                    ->distinct(true)
                                    ->with('fkIdTipoCurso', 'fkIdOec', 'fkIdTipoActividad')
                                    ->asArray()
                                    ->joinWith('fkIdTipoCurso')
                                    ->joinWith('fkIdOec')
                                    ->joinWith('fkIdTipoActividad')
                                    ->where(['IN', 'id_actividad', $listSubQuery[0]])
                                    ->andWhere(['IN', 'id_actividad', $listSubQuery[sizeof($listSubQuery) - 1]])
                                    ->all();
                            $total = sizeof($models);
                            $models = Actividad050101::find()
                                    ->distinct(true)
                                    ->select([
                                        'id_actividad AS id',
                                        'fk_id_oec',
                                        'fk_id_tipo_actividad',
                                        'fk_id_tipo_curso',
                                        'codigo_actividad',
                                        'fecha_actividad',
                                        'nombre_actividad AS title',
                                        'nombre_actividad',
                                        'descripcion_actividad AS notes',
                                        'fecha_inicial_actividad AS start',
                                        'fecha_final_actividad AS end',

                                        'descripcion_actividad',
                                        'fecha_inicial_actividad',
                                        'fecha_final_actividad',

                                        'prs_actividad',
                                        'horas_actividad',
                                        'nombre_tipo_curso',
                                        'nombre_oec',
                                        'nombre_tipo_actividad',
					new Expression('1 as cid')
                                    ])
                                    ->with('fkIdTipoCurso', 'fkIdOec', 'fkIdTipoActividad')
                                    ->asArray()
                                    ->joinWith('fkIdTipoCurso')
                                    ->joinWith('fkIdOec')
                                    ->joinWith('fkIdTipoActividad')
                                    ->where(['IN', 'id_actividad', $listSubQuery[0]])
                                    ->andWhere(['IN', 'id_actividad', $listSubQuery[sizeof($listSubQuery) - 1]])
                                    ->orderby($propertySort . " " . $directionSort)
                                    ->offset($_GET['start'])
                                    ->limit($_GET['limit'])
                                    ->all();
                            for ($i = 0; $i < sizeof($models); $i++) {
                                unset($models[$i]['fkIdTipoCurso']);
                                unset($models[$i]['fkIdOec']);
                                unset($models[$i]['fkIdTipoActividad']);
                            }
                        }
                    } 
                    
                    else {
                        $models = Actividad050101::find()
                                ->distinct(true)
                                ->with('fkIdTipoCurso', 'fkIdOec', 'fkIdTipoActividad')
                                ->asArray()
                                ->joinWith('fkIdTipoCurso')
                                ->joinWith('fkIdOec')
                                ->joinWith('fkIdTipoActividad')
                                ->all();
                        $total = sizeof($models);
                        $models = Actividad050101::find()
                                ->distinct(true)
                                ->select([
                                    'id_actividad AS id',
                                    'fk_id_oec',
                                    'fk_id_tipo_actividad',
                                    'fk_id_tipo_curso',
                                    'codigo_actividad',
                                    'fecha_actividad',
                                    'nombre_actividad AS title',
                                    'nombre_actividad',
                                    'descripcion_actividad AS notes',
                                    'fecha_inicial_actividad AS start',
                                    'fecha_final_actividad AS end',

                                        'descripcion_actividad',
                                        'fecha_inicial_actividad',
                                        'fecha_final_actividad',

                                    'prs_actividad',
                                    'horas_actividad',
                                    'nombre_tipo_curso',
                                    'nombre_oec',
                                    'nombre_tipo_actividad',
	                            new Expression('1 as cid')
                                ])
                                ->with('fkIdTipoCurso', 'fkIdOec', 'fkIdTipoActividad')
                                ->asArray()
                                ->joinWith('fkIdTipoCurso')
                                ->joinWith('fkIdOec')
                                ->joinWith('fkIdTipoActividad')
                                ->orderby($propertySort . " " . $directionSort)
                                ->offset($_GET['start'])
                                ->limit($_GET['limit'])
                                ->all();
                        for ($i = 0; $i < sizeof($models); $i++) {
                            unset($models[$i]['fkIdTipoCurso']);
                            unset($models[$i]['fkIdOec']);
                            unset($models[$i]['fkIdTipoActividad']);
                        }
                    }
                }//if query	
                $respuesta->registros = $models;
                $respuesta->total = $total;
            } catch (\Exception $e) {
                $error = $e->getMessage();
            }
            if ($error == "")
                return $this->controller->renderPartial('read', ['model' => $respuesta, 'callback' => $_GET['callback']]);
            else {
                $respuesta->meta = array("success" => "false", "msg" => $error);
                return $this->controller->renderPartial('read', ['model' => $respuesta, 'callback' => $_GET['callback']]);
            }
        } else {
            $respuesta->meta = array("success" => "false", "msg" => $error);
            return $this->controller->renderPartial('read', ['model' => $respuesta, 'callback' => '']);
        }
    }

}
