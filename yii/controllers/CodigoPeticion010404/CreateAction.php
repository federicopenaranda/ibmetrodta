<?php

namespace app\controllers\CodigoPeticion010404;

use yii\base\Action;
use app\models\CodigoPeticion010404;
use yii\db\Transaction;
use yii\helpers\Json;
use app\models\LogSistema030003;

use Yii;

/**
 * Esta es la accion "create" para el controlador "CodigoPeticion010404Controller".
 */
class CreateAction extends  Action
{
	public function run()
    {
		$respuesta=new \stdClass();
		$response =new \stdClass();
        $error="";
		$error.= (!isset($_GET['fk_id_oec'])) ? "{ Error en la variable fk_id_oec } " : "";
		$error.= (!isset($_GET['callback'])) ? "{ Error de Callback } " : "";
        
        if ($error == "") {
			$callback=$_GET['callback'];
			$query=explode('&', $_SERVER['QUERY_STRING']);
			$model=new CodigoPeticion010404();
			$listRecords=$model->divideRecords($query);
			$transaction = $model->db->beginTransaction();
			try{
				$error="";
				$model = new CodigoPeticion010404();
                $audi = new LogSistema030003();
    	        try {
						
					$fk_id_oec = $_GET['fk_id_oec'];
					$modCodPet = CodigoPeticion010404::find()
											#->where(['fk_id_oec'=>$fk_id_oec])
											->orderBy(['correlativo_codigo_peticion'=>SORT_DESC])
											->one();
					if ($modCodPet){
						$num = $modCodPet->correlativo_codigo_peticion+1;
					} else {
						$num = 1;
					}
					$cod = "";
					switch(strlen($num)){
						case 1: 
							$cod.="00".$num;
							break;
						case 2:
							$cod.="0".$num;
							break;
						case 3:
							$cod.=$num;	
					}
					$model->fk_id_oec=$fk_id_oec;
					$model->codigo_peticion="DTA-TRAM-".$cod;
					$model->correlativo_codigo_peticion=(int)$cod;
					
					if ($model->validate()){
						$model->save();
						$audi->insertAudi("create",$model->tableName(),$model->getPrimaryKey());
					} else {
						 $error=$model->getErrors();
					}
						
				} catch(\Exception $e) {
					$error=$e->getMessage();
				}
				$respuesta->id_codigo_peticion	= $model->getPrimaryKey();
				$respuesta->codigo_peticion		= $model->codigo_peticion;
				$response->registros=$respuesta;	
				
				if ($error == "") {
					$transaction->commit();
					#$respuesta->meta=array("success"=>"true","msg"=>"Se creo exitosamente !!!");
					return $this->controller->renderPartial('create',array('model'=>$response,'callback'=>$callback));
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
