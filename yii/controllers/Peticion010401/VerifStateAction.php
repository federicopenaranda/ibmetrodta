<?php

namespace app\controllers\Peticion010401;

use yii\base\Action;
use app\models\Peticion010401;
use yii\db\Transaction;
use yii\helpers\Json;
use app\models\LogSistema030003;
use app\models\Estado010601;
use app\models\Transicion010202;
use app\models\PeticionAccion010301;
use app\models\PeticionEstado010403;
use app\models\Accion010201;
use app\models\PeticionArchivo010401;
use app\models\UsuarioTipo000201;

use Yii;

/**
 * Esta es la accion "create" para el controlador "Peticion010401Controller".
 */
class VerifStateAction extends  Action
{
	public function run()
    {
		$respuesta=new \stdClass();
        $error="";
		$error.= (!isset($_GET['id_peticion'])) ? "Error de id_peticion" : "";
		$error.= (!isset($_GET['nombre_estado'])) ? ", Error de nombre_estado" : "";
		$error.= (!isset($_GET['callback'])) ? "Error de Callback" : "";
        
        if ($error == "") {
			$callback=$_GET['callback'];
			$model=new Peticion010401();
			$error = "";
			$model = new Peticion010401();
			
    	    try {
					$petQuery = Peticion010401::find()
									->where(['id_peticion' => $_GET['id_peticion']])
									->one();
					
					//	echo $petQuery->fk_id_proceso;
					$stateQuery = Estado010601::find()
									->distinct(true)
									->with('actividadEstado010602s','fkIdEstadoTipo','fkIdProceso','transicion010202s')
									->joinWith('fkIdEstadoTipo')
									->joinWith('fkIdProceso')
									->joinWith('peticionEstado010403s')
									->joinWith('transicion010202s')
									->where(['nombre_estado' => $_GET['nombre_estado'],'estado_01_06_01.fk_id_proceso' => isset($petQuery) ? $petQuery->fk_id_proceso:0 ])
									->one();
					//if(!isset($petQuery))
						//$error="Idenfinido Petcion";

					
					$petEstQuery = PeticionEstado010403::find()
									->where(['fk_id_peticion'=>$_GET['id_peticion'],'fk_id_estado'=>$stateQuery->id_estado])
									->one();
					//if(!isset($petEstQuery))
						//$error="Idenfinido PeticionEstado010403";
					
					$transQuery = Transicion010202::find()
										->distinct(true)
										->with('peticionAccion010301s')
										->asArray()
										->joinWith('fkIdAccions')
										->where(['fk_id_estado_actual'=>isset($stateQuery)?$stateQuery->id_estado:0])
										->all();
					$UserTipo = UsuarioTipo000201::find()
                    					->distinct(true)
										->joinWith('usuarioTipoUsuario000102s')
										->where(['fk_id_usuario'=>yii::$app->user->getId()])				
										->all();
					
					
					$aux3=[];
					$aux=[];
					for ($i=0; $i < sizeof($transQuery); $i++) {
						
						$aux=array();		
						for ($j=0; $j < sizeof($transQuery[$i]['peticionAccion010301s']); $j++) {
							
							if($transQuery[$i]['peticionAccion010301s'][$j]['fk_id_peticion'] == $_GET['id_peticion']){
								$actionQuery = Accion010201::find()
											->where(['id_accion' => $transQuery[$i]['peticionAccion010301s'][$j]['fk_id_accion']])
											->one();
								$aux2['completa_peticion_accion'] = $transQuery[$i]['peticionAccion010301s'][$j]['completa_peticion_accion'];
								$aux2['activa_peticion_accion'] = $transQuery[$i]['peticionAccion010301s'][$j]['activa_peticion_accion'];
								$aux2['observacion_peticion_accion'] = $transQuery[$i]['peticionAccion010301s'][$j]['observacion_peticion_accion'];
								$aux2['nombre_accion']	= $actionQuery->nombre_accion;
								#echo $petEstQuery->id_peticion_estado." ".$actionQuery->id_accion;
	
								$petArchivo = PeticionArchivo010401::find()
                    							->distinct(true)
												->where(['fk_id_accion'=>$actionQuery->id_accion,'fk_id_peticion_estado'=>isset($petEstQuery) ? $petEstQuery->id_peticion_estado:0])
												->all();
								$aux2['peticionArchivo010401s']=$petArchivo;
								$aux3[] = $aux2;
							}
						}
						
						$aux['activo_peticion_estado'] 	= isset($petEstQuery)? $petEstQuery->activo_peticion_estado:"";
						$aux['nombre_estado'] 			= $stateQuery->nombre_estado;
						$aux["peticionAccion010301s"]	= $aux3;
						$aux['usuarioTipo000201']		= $UserTipo;
						$aux2=array();
						
						
						#$response["acciones"]=$aux;
					}
					$response=$aux;
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
