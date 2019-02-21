<?php

namespace app\controllers\PeticionArchivo010401;

use yii\base\Action;
use app\models\PeticionArchivo010401;
use yii\db\Transaction;
use yii\helpers\Json;
use app\models\LogSistema030003;
use app\models\PeticionEstado010403;
use app\models\Accion010201;
use app\models\PeticionArchivoTipo010404;

use Yii;

/**
 * Esta es la accion "create" para el controlador "PeticionArchivo010401Controller".
 */
class CreatePeticionArchivoAction extends  Action
{
	public function run()
    {
		$respuesta=new \stdClass();
        $error="";
		$error.= (!isset($_GET['records'])) ? "{ Error en la variable records } " : "";
		$error.= (!isset($_GET['callback'])) ? "{ Error de Callback } " : "";
        
        if ($error == "") {
			
			$callback=$_GET['callback'];
			$query=explode('&', $_SERVER['QUERY_STRING']);
			$model=new PeticionArchivo010401();
			$listRecords=$model->divideRecords($query);
			$transaction = $model->db->beginTransaction();
			try {
				foreach ($listRecords as $listaRecord):
					$record = Json::decode(urldecode($listaRecord));
					 $audi = new LogSistema030003();
					try {
						$petArch = PeticionArchivoTipo010404::find()
												->where(['codigo_peticion_archivo_tipo'=>$record['codigo_peticion_archivo_tipo']])
												->one();

						foreach ($model->atributes() as $atributo) {
							if ($atributo == "fk_id_peticion_archivo_tipo")
								$model->$atributo= isset($petArch)? $petArch->id_peticion_archivo_tipo:$record[$atributo];
							else
								$model->$atributo = $record[$atributo];
						}
						$modPetEstado = PeticionEstado010403::find()
												->distinct(true)
												->with('fkIdPeticion','fkIdEstado')
												->joinWith('fkIdEstado')
												->joinWith('fkIdPeticion')
												->where(['nombre_estado'=>$_GET['nombre_estado'],'fk_id_peticion'=>$_GET['id_peticion']])
												->one();
						
						 $modAccion= Accion010201::find()
												->distinct(true)
												->where(['nombre_accion'=>$_GET['nombre_accion']])
												->one();
						$model->fk_id_peticion_estado= $modPetEstado->id_peticion_estado;
						$model->fk_id_accion= $modAccion->id_accion;
						if ($model->validate()) {
							$model->save();
							$audi->insertAudi("create",$model->tableName(),$model->getPrimaryKey());
						} else {
							$error=$model->getErrors();
						}
						
					} catch(\Exception $e) {
						$error=$e->getMessage();
					}
				endforeach;
				if ($error == "") {
					$transaction->commit();
					$respuesta->meta=array("success"=>"true","msg"=>"Se creo exitosamente !!!");
					return $this->controller->renderPartial('create',array('model'=>$respuesta,'callback'=>$callback));
				} else {
					$respuesta->meta=["success"=>"false","msg"=>$error];
					return $this->controller->renderPartial('create',['model'=>$respuesta,'callback'=>$callback]);
				}
			} catch (Exception $e) {
				$transaction->rollback();
				throw $e;
			}
		} else {
			$respuesta->meta=["success"=>"false","msg"=>$error];
			return $this->controller->renderPartial('read',['model'=>$respuesta,'callback'=>'']);
		}
	} 
}
