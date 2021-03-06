<?php

namespace app\controllers\OecTipo020004;
use yii\base\Action;
use app\models\OecTipo020004;
use yii\helpers\Json;
use app\models\LogSistema030003;

class DeleteAction extends Action
{
    public function run()
    {
		$respuesta=new \stdClass();
		$model=new OecTipo020004();
        $error="";
		$error.= (!isset($_GET['records'])) ? "{ Error en la variable records } " : "";
		$error.= (!isset($_GET['callback'])) ? "{ Error de Callback } " : "";
		if ($error == "") {
			$callback=$_GET['callback'];
			$query=explode('&', $_SERVER['QUERY_STRING']);
			$listaRecords=$model->divideRecords($query);
			$numeroRecords=sizeof($listaRecords);
			$contValRecords=0;
			
			$transaction=$model->db->beginTransaction();
            try {
				foreach ($listaRecords as $listaRecord) {
                
					$audi = new LogSistema030003();
					$record=Json::decode(urldecode($listaRecord));
                   	$pk = $model->getNamePk();
					if (isset($record[$pk[0]])) {
						if (OecTipo020004::deleteAll($pk[0]." = ".$record[$pk[0]])>0){
	                    	$contValRecords++;
                            $audi->insertAudi("delete",$model->tableName(),$record['id_oec_tipo']);
	                    } else {
							$error="Registro no se pudo eliminar";
						}
					} else {
						$error="Variable indefinida";
					}
                }
	            if ($contValRecords == $numeroRecords) {
	                $transaction->commit();
					$respuesta->meta=["success"=>"true","msg"=>"Registro eliminado !!"];
					return $this->controller->renderPartial('delete',['model'=>$respuesta,'callback'=>$callback]);
	            } else {
	                $transaction->rollback();
					$respuesta->meta=array("success"=>"false","msg"=>$error);
					return $this->controller->renderParTial('delete',['model'=>$respuesta,'callback'=>$callback]);
	            }
	        } catch (\Exception $e) {
				$transaction->rollback();
				throw $e;
			}
        } else {
			$respuesta->meta=["success"=>"false","msg"=>$error];
			return $this->controller->renderParTial('delete',['model'=>$respuesta,'callback'=>'']);
		}
    }
}

