<?php

namespace app\controllers;

namespace app\controllers\ObsPeticionAccion010303;
use yii\base\Action;
use app\models\ObsPeticionAccion010303;
use yii\base\Exception;
use yii\helpers\Json;
use app\models\CTQ;
use yii\db\Query;
use app\models\Usuario000101;

class ConsejoPeticionAction extends Action
{
    public function run()
    {
		$respuesta=new \stdClass();
		$model = new ObsPeticionAccion010303;
		$error="";
		$error.= (!isset($_GET['callback'])) ? "{ Error de Callback } " : "";
        $error.= (!isset($_GET['fk_id_peticion'])) ? " Error de fk_id_peticion, " : "";
        $error.= (!isset($_GET['nombre_accion'])) ? " Error de nombre_accion " : "";
		
		if ($error == "") {
			try {
				$fk_id_pet  = $_GET['fk_id_peticion'];
				$nom_accion = $_GET['nombre_accion'];
				$usuarios = Usuario000101::find()
                    				->distinct(true)
									->with('fkIdUsuarioTipos')
									->joinWith('fkIdUsuarioTipos')
									->where(['nombre_usuario_tipo'=>'Consejo'])
									->all();
			
				$response = [];
				foreach($usuarios as $usuario):
					#echo $fk_id_pet." - ".$nom_accion." - ".$usuario->id_usuario;
					$aux=[];
					$obsPetAc = ObsPeticionAccion010303::find()
                    							->distinct(true)
												->joinWith('fkIdAccion')
												->where(['fk_id_peticion'=>$fk_id_pet,'fk_id_usuario'=>$usuario->id_usuario,'procede_obs_peticion_accion'=>1])
												->andWhere(['like','nombre_accion',$nom_accion])
                                                ->one();
					if($obsPetAc) {
						$aux['procede_obs_peticion_accion']	=$obsPetAc->procede_obs_peticion_accion;
						$aux['fk_id_peticion']				=$obsPetAc->fk_id_peticion;
						$aux['procede_obs_peticion_accion']=$obsPetAc->procede_obs_peticion_accion;
					} else {
						$aux['procede_obs_peticion_accion'] =0;
						$aux['fk_id_peticion']				=$fk_id_pet;
					}
					$aux['id_usuario']=$usuario->id_usuario;
					$aux['primer_nombre_usuario']=$usuario->primer_nombre_usuario;
					$aux['segundo_nombre_usuario']=$usuario->segundo_nombre_usuario;
					$aux['apellido_paterno_usuario']=$usuario->apellido_paterno_usuario;
					$aux['apellido_materno_usuario']=$usuario->apellido_materno_usuario;
					$aux['aprobado']=1;
					
					$response[]=$aux;
				endforeach;
				
									
				
				
				$respuesta->registros=$response;	
				#$respuesta->total=$total;
			} catch (\Exception $e) {
				$error=$e->getMessage();
			}
			if ($error=="")	
				return $this->controller->renderPartial('read',['model'=>$respuesta,'callback'=>$_GET['callback']]);
			else {
				$respuesta->meta=array("success"=>"false","msg"=>$error);
				return $this->controller->renderPartial('read',['model'=>$respuesta,'callback'=>$_GET['callback']]);
			}
		} else {
			$respuesta->meta=array("success"=>"false","msg"=>$error);
			return $this->controller->renderPartial('read',['model'=>$respuesta,'callback'=>$_GET['callback']]);
		}
    }
}