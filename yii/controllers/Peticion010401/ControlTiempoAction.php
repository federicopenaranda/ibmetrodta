<?php

namespace app\controllers;

namespace app\controllers\Peticion010401;
use yii\base\Action;
use app\models\Peticion010401;
use yii\base\Exception;
use yii\helpers\Json;
use app\models\CTQ;
use yii\db\Query;
use app\models\Estado010601;

class ControlTiempoAction extends Action
{
    public function run()
    {
		$respuesta=new \stdClass();
		$model = new Peticion010401;
		$error="";
		$estado_inicial = (!isset($_GET['estado_inicial'])) ? "{ Error de Callback } " : 5;
        $estado_final 	= (!isset($_GET['estado_final'])) ? "{ Error de start } " : 7;
      
		try {
			/*for ($i=$estado_inicial; $i <$estado_final ; $i++) { 
				$peticion = Peticion010401::find()
                    		->distinct(true)
							->select ([
									'id_peticion',
									'fk_id_proceso',
									'fk_id_usuario',
									'peticion_01_04_01.fk_id_oec',
									'fk_id_codigo_peticion',
									])
                            ->with('peticionEstado010403s')
                            ->asArray()
							->joinWith('peticionEstado010403s')
							->where(['fk_id_estado'=>$i,'estado_peticion'=>1])
                            ->all();


			}*/
			date_default_timezone_set('America/Los_Angeles');
			echo phpinfo();
			/*try {
    $date = new DateTime('2000-01-01');
} catch (Exception $e) {
    echo $e->getMessage();
    exit(1);
}*/
			//$fecha1 = new DateTime('2009-10-11');
			//$fecha2 = new DateTime("2012-11-30 02:33:45");
			//$fecha = $fecha1->diff($fecha2);
            
			/*for ($i=0; $i < sizeof($models); $i++) {
						$estado = Estado010601::find()
                    						->distinct(true)
											->with('peticionEstado010403s')
											->joinWith('peticionEstado010403s')
											->where(['fk_id_peticion'=>$models[$i]['id_peticion'],'activo_peticion_estado'=>1])
											->one();
					$models[$i]['nombre_estado'] = $estado->nombre_estado;
                    unset($models[$i]['fkIdProceso']);
                    unset($models[$i]['fkIdUsuario']);
                    unset($models[$i]['fkIdOec']);
				}
			}*/

			$respuesta->registros = array();
		} catch (\Exception $e) {
			$error=$e->getMessage();
		}
		if ($error !== "") {
			$respuesta->meta=array("success"=>"false","msg"=>$error);
			return $this->controller->renderPartial('read',['model'=>$respuesta,'callback'=>""]);
		}
    }
}