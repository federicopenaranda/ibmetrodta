<?php

namespace app\controllers\Peticion010401;

use yii\base\Action;
use app\models\Peticion010401;
use yii\db\Transaction;
use yii\helpers\Json;
use app\models\LogSistema030003;

use app\models\InfoEnsayo040101;
use app\models\DetalleEquipos040201;
use app\models\DetalleCalibracion040301;
use app\models\DetalleInspeccion040401;
use app\models\DetalleCertificacion040501;

use Yii;

/**
 * Esta es la accion "create" para el controlador "Peticion010401Controller".
 */
class VerifForm50Action extends  Action
{
	public function run()
    {
		$respuesta=new \stdClass();
        $error="";
		$error.= (!isset($_GET['fk_id_peticion'])) ? "Parametro indefinido fk_id_peticion" : "";
		$error.= (!isset($_GET['callback'])) ? "Error de Callback" : "";
        
        if ($error == "") {
			$callback=$_GET['callback'];
			
    	    try {
				$infoEn = InfoEnsayo040101::find()
                    			->distinct(true)
                    			->where(['fk_id_peticion'=>$_GET['fk_id_peticion'],'estado_info_ensayo'=>1])
                    			->count();
                
                $detEqui = DetalleEquipos040201::find()
                    			->distinct(true)
                    			->where(['fk_id_peticion'=>$_GET['fk_id_peticion'],'estado_detalle_equipos'=>1])
                    			->count();
                  
                $detCali = DetalleCalibracion040301::find()
                    			->distinct(true)
                    			->where(['fk_id_peticion'=>$_GET['fk_id_peticion'],'estado_detalle_calibracion'=>1])
                    			->count();
                
                $detIns = DetalleInspeccion040401::find()
                    			->distinct(true)
                    			->where(['fk_id_peticion'=>$_GET['fk_id_peticion'],'estado_detalle_inspeccion'=>1])
                    			->count();
                
                $detCet = DetalleCertificacion040501::find()
                    			->distinct(true)
                    			->where(['fk_id_peticion'=>$_GET['fk_id_peticion'],'estado_detalle_certificacion'=>1])
                    			->count();
                
               	$response = ['form52'=>(int)$infoEn,
               				'form53'=>(int)$detEqui,
               				'form54'=>(int)$detCali,
               				'form56'=>(int)$detIns,
               				'form57'=>(int)$detCet
               				];
			} catch(\Exception $e) {
				$error = $e->getMessage();
			}
			if($error=="") {
				$respuesta->registros = $response;
				return $this->controller->renderPartial('read',['model'=>$respuesta,'callback'=>$_GET['callback']]);
			} else {
				$respuesta->meta=["success"=>"false","msg"=>$error];
				return $this->controller->renderPartial('read',['model'=>$respuesta,'callback'=>$_GET['callback']]);
			}
			
		} else {
			$respuesta->meta=["success"=>"false","msg"=>$error];
			return $this->controller->renderPartial('read',['model'=>$respuesta,'callback'=>'']);
		}
	} 
}
