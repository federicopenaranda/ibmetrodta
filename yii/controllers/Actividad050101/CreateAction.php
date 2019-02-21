<?php

namespace app\controllers\Actividad050101;

use app\models\Actividad050101;
use app\models\Feriado050104;
use app\models\GestionTipoActividad050103;
use app\models\LogSistema030003;
use app\models\Vacacion050104;
use yii\base\Action;
use yii\helpers\Json;

/**
 * Esta es la accion "create" para el controlador "Actividad050101Controller".
 */
class CreateAction extends Action
{

    public function run()
    {
        $respuesta = new \stdClass();
        $error     = "";
        $message   = "";
        $error .= (!isset($_GET['records'])) ? "{ Error en la variable records } " : "";
        $error .= (!isset($_GET['callback'])) ? "{ Error de Callback } " : "";

        if ($error == "") {
            $callback    = $_GET['callback'];
            $query       = explode('&', $_SERVER['QUERY_STRING']);
            $model       = new Actividad050101();
            $listRecords = $model->divideRecords($query);
            $transaction = $model->db->beginTransaction();

            try {
                foreach ($listRecords as $listaRecord):
                    $error = "";
                    $model = new Actividad050101();
                    $audi  = new LogSistema030003();
                    try {
                        $record       = Json::decode(urldecode($listaRecord));
                        $listDifAtriP = array_diff($model->atributes(), array_keys($record));

                        if (sizeof($listDifAtriP) == 0) {
                            $listObjRels = array_diff(array_keys($record), $model->atributes());
                            $listDiffRel = array_diff($listObjRels, $model->getListHasMany());

                            $gesTipoAc = GestionTipoActividad050103::find()
                                ->with('fkIdGestion', 'fkIdTipoActividad')
                                ->joinWith('fkIdGestion')
                                ->joinWith('fkIdTipoActividad')
                                ->where(['estado_gestion' => 1, 'fk_id_tipo_actividad' => $record['fk_id_tipo_actividad']])
                                ->one();

                            $correlativo   = $gesTipoAc->correlativo_gestion_tipo_actividad;
                            $cod_actividad = $gesTipoAc->fkIdTipoActividad->codigo_tipo_actividad . '-' . $correlativo . '/' . $gesTipoAc['fkIdGestion']['nombre_gestion'];

                            $gesTipoAc->correlativo_gestion_tipo_actividad = $correlativo + 1;
                            if ($gesTipoAc->validate()) {
                                $gesTipoAc->update();
                            }

                            foreach ($model->atributes() as $atributo) {
                                if ($atributo == "codigo_actividad") {
                                    $model->$atributo = $cod_actividad;
                                } else {
                                    $model->$atributo = $record[$atributo];
                                }

                            }
                            if ($model->validate()) {

                                $date_start = $record['fecha_inicial_actividad'];
                                $date_end   = $record['fecha_final_actividad'];
                                $feriados   = Feriado050104::find()
                                    ->all();
                                $sw        = 0;
                                $sw2       = 0;
                                $fecha_fer = "";
                                foreach ($feriados as $feriado) {
                                    $date = $feriado->fecha_feriado;
                                    if ($model->check_in_range($date_start, $date_end, $date)) {
                                        $sw = 1;
                                        $fecha_fer .= $date . " ; ";
                                    }
                                }
                                /*$vacacions = Vacacion050104::find()
                                    ->with('fkIdUsuario')
                                    ->asArray()
                                    ->all();
                                foreach ($vacacions as $vacacion) {

                                    if ($model->check_in_range($vacacion['fecha_inicio_vacacion'], $vacacion['fecha_fin_vacacion'], $record['fecha_inicial_actividad']) ||
                                    $model->check_in_range($vacacion['fecha_inicio_vacacion'], $vacacion['fecha_fin_vacacion'], $record['fecha_final_actividad']) ||
                                    $model->check_in_range($record['fecha_inicial_actividad'], $record['fecha_final_actividad'], $vacacion['fecha_inicio_vacacion']) ||
                                    $model->check_in_range($record['fecha_inicial_actividad'], $record['fecha_final_actividad'], $vacacion['fecha_fin_vacacion']) ||
                                    $model->check_in_range($record['fecha_inicial_actividad'], $record['fecha_final_actividad'], $vacacion['fkIdUsuario']['fecha_nacimiento_usuario'])
                                	) {
                                        $error = "No se pudo crear la actividad debido a que un usuario tiene vaciones o cumplea&ntilde;os un usuario";
                                        $sw    = 1;
                                        $sw2   = 1;
                                    }
                                }*/
                                
                                if ($sw == 0) {

                                    $model->save();
                                    $audi->insertAudi("create", $model->tableName(), $model->getPrimaryKey());

                                    foreach ($listObjRels as $listObjRel):

                                        $listObjRel2 = ucfirst(rtrim($listObjRel, "s"));

                                        if (in_array($listObjRel2, $model->getListHasMany())) {

                                            if ($record[$listObjRel]) {

                                                foreach ($record[$listObjRel] as $subCampo):

                                                    $objRel = $model->getInstance($listObjRel2);
                                                    $audi   = new LogSistema030003();
                                                    foreach ($objRel->atributes() as $campo):

                                                        if ($campo != 'fk_id_actividad') {
                                                            $objRel->$campo = $subCampo[$campo];
                                                        } else {
                                                            $objRel->$campo = $model->getPrimaryKey();
                                                        }
                                                    endforeach;

                                                    if ($objRel->validate()) {

                                                        if ($listObjRel == "actividadUsuario050103s") {

                                                      		//*********************************************
                                                        	$actividadAnts =  Actividad050101::find()
                                    											->with('actividadUsuario050103s')
                                    											->joinWith('actividadUsuario050103s')
                                    											->where(['fk_id_usuario'=>$subCampo['fk_id_usuario']])
                                    											->asArray()
                                    											->all();
                                    						foreach ($actividadAnts as $actividadAnt) {
                                    							$fini 	= $actividadAnt['fecha_inicial_actividad'];
                                    							$ffin 	= $actividadAnt['fecha_final_actividad'];
                                    							$timeini= date('Y-m-d',strtotime($record['fecha_inicial_actividad']));
                                    							$timefin= date('Y-m-d',strtotime($record['fecha_final_actividad']));
                                    							
                                    							if (($timeini>=$fini) && ($timeini<=$ffin)
                                    								|| ($timefin>=$fini) && ($timefin<=$ffin) 
                                    								|| ($fini>=$timeini) && ($fini<=$timefin)
                                    								|| ($timefin>=$fini) && ($timefin<=$ffin)  
                                    								){
                                    								$error = "No se puede crear la actividad porque existe una actividad anterior en esas fechas";
                                    							}
                                    						}
                                    						
                                                      		//*************************

                                                            $vacacions = Vacacion050104::find()
                                                                ->with('fkIdUsuario')
                                                                ->asArray()
                                                                ->where(['fk_id_usuario' => $subCampo['fk_id_usuario']])
                                                                ->all();
                                                            $sw = 0;

                                                            foreach ($vacacions as $vacacion) {

                                                                $fi = $vacacion['fecha_inicio_vacacion'];
                                                                $ff = $vacacion['fecha_fin_vacacion'];
                                                                if ($model->check_in_range($date_start, $date_end, $fi) ||
                                                        $model->check_in_range($date_start, $date_end, $ff) ||
                                                        $model->check_in_range($fi, $ff, $date_start) ||
                                                        $model->check_in_range($fi, $ff, $date_end)
                                                    ) {
                                                                    $sw = 1;
                                                                }
                                                            }
                                                            if ($sw == 0) {
                                                                $objRel->save();
                                                                if (!is_array($objRel->getPrimaryKey())) {
                                                                    $audi->insertAudi("create", $objRel->tableName(), $objRel->getPrimaryKey());
                                                                } else {
                                                                    $pkComp = $objRel->getPrimaryKey();
                                                                    $audi->insertAudi("create", $objRel->tableName(), current($pkComp) /* ."-".next($pkComp) */);
                                                                }
                                                            } else {
                                                                $message .= " No se pudo asignar el usuario " . $vacacion['fkIdUsuario']['primer_nombre_usuario'] . " porque tiene vacaciones ";
                                                            }
                                                        } else {
                                                            $objRel->save();
                                                            if (!is_array($objRel->getPrimaryKey())) {
                                                                $audi->insertAudi("create", $objRel->tableName(), $objRel->getPrimaryKey());
                                                            } else {
                                                                $pkComp = $objRel->getPrimaryKey();
                                                                $audi->insertAudi("create", $objRel->tableName(), current($pkComp) /* ."-".next($pkComp) */);
                                                            }
                                                        } //if(actividadUsuario)
                                                    } else {
                                                        $error = $objRel->getErrors();
                                                    }
                                                endforeach;
                                            }
                                        }
                                    endforeach;
                                } else {
                                    if ($sw2 == 0) {
                                        $error = "No se pudo crear la actividad por que existe un feriado en: " . $fecha_fer;
                                    }
                                } //if($sw==0)
                            } else {
                                $error = $model->getErrors();
                            }
                        } else {
                            foreach ($listDifAtriP as $atrib):
                                $error .= "No esta definido {" . $atrib . "}, ";
                            endforeach;
                        }
                    } catch (\Exception $e) {
                        $error = $e->getMessage();
                    }
                endforeach;
                if ($error == "") {
                    $transaction->commit();
                    $respuesta->meta = array("success" => "true", "msg" => "Se creo exitosamente la Actividad!!!" . $message);
                    return $this->controller->renderPartial('create', array('model' => $respuesta, 'callback' => $callback));
                } else {
                    $respuesta->meta = ["success" => "false", "msg" => $error];
                    return $this->controller->renderPartial('create', ['model' => $respuesta, 'callback' => $callback]);
                }
            } catch (Exception $e) {
                $transaction->rollback();
                throw $e;
            }
        } else {
            $respuesta->meta = ["success" => "false", "msg" => $error];
            return $this->controller->renderPartial('read', ['model' => $respuesta, 'callback' => '']);
        }
    }

}
