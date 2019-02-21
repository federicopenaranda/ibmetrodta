<?php

namespace app\controllers\Peticion010401;

use yii\base\Action;
use app\models\Peticion010401;
use yii\db\Transaction;
use yii\helpers\Json;
use app\models\LogSistema030003;
use app\models\Estado010601;
use app\models\Transicion010202;
use app\models\PeticionEstado010403;
use app\models\PeticionAccion010301;

use Yii;

/**
 * Esta es la accion "create" para el controlador "Peticion010401Controller".
 */
class admEstadoProcesoAction extends  Action
{
	public function run()
    {
		$respuesta=new \stdClass();
        $error="";
		$error.= (!isset($_GET['fk_id_peticion_estado'])) ? "Parametro indefinido fk_id_peticion_estado" : "";
		$error.= (!isset($_GET['fk_id_peticion'])) ? ", Parametro indefinido fk_id_peticion" : "";
		$error.= (!isset($_GET['callback'])) ? "Error de Callback" : "";
        
        if ($error == "") {
			$callback=$_GET['callback'];
			$model=new Peticion010401();
			$error = "";
			$model = new Peticion010401();
			$transaction = $model->db->beginTransaction();
    	    
    	    try {
    	    	try {
	    	    	PeticionEstado010403::updateAll(['activo_peticion_estado' => 0],'fk_id_peticion = :fk_id_peticion',[':fk_id_peticion'=>$_GET['fk_id_peticion']]);
	    	    	PeticionEstado010403::updateAll(['activo_peticion_estado' => 1],'id_peticion_estado = :fk_id_peticion_estado',[':fk_id_peticion_estado'=>$_GET['fk_id_peticion_estado']]);

	    	    	$petEstQuery = PeticionEstado010403::find()
										->where(['id_peticion_estado'=>$_GET['fk_id_peticion_estado']])
										->one();

					$transQuery = Transicion010202::find()
										->distinct(true)
										->with('peticionAccion010301s')
										->asArray()
										->joinWith('fkIdAccions')
										->where(['fk_id_estado_actual'=>isset($petEstQuery)?$petEstQuery->fk_id_estado:0])
										->all();

					for ($i=0; $i < sizeof($transQuery); $i++) {
							
						for ($j=0; $j < sizeof($transQuery[$i]['peticionAccion010301s']); $j++) {
								
							if ($transQuery[$i]['peticionAccion010301s'][$j]['fk_id_peticion'] == $_GET['fk_id_peticion']){
								PeticionAccion010301::updateAll(['activa_peticion_accion' => 1,'completa_peticion_accion'=>0],'fk_id_transicion = :fk_id_transicion',[':fk_id_transicion'=>$transQuery[$i]['peticionAccion010301s'][$j]['fk_id_transicion']]);
							}
						}	
					}
				} catch(\Exception $e) {
					$error=$e->getMessage();
				}

			} catch(\Exception $e) {
				$transaction->rollback();
				throw $e;
			}
			
			if($error=="") {
				$transaction->commit();
				$respuesta->meta=array("success"=>"true","msg"=>"Cambios realizados exitosamente !!!");
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
