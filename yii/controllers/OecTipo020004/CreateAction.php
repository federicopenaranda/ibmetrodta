<?php

namespace app\controllers\OecTipo020004;

use yii\base\Action;
use app\models\OecTipo020004;
use yii\db\Transaction;
use yii\helpers\Json;
use app\models\LogSistema030003;

use Yii;

/**
 * Esta es la accion "create" para el controlador "OecTipo020004Controller".
 */
class CreateAction extends  Action
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
			$model=new OecTipo020004();
			$listRecords=$model->divideRecords($query);
			$transaction = $model->db->beginTransaction();
			try{
				foreach ($listRecords as $listaRecord):
					$error="";
					$model = new OecTipo020004();
                    $audi = new LogSistema030003();
    	        	try {
						$record = Json::decode(urldecode($listaRecord));
						$listDifAtriP = array_diff($model->atributes(),array_keys($record));

						if (sizeof($listDifAtriP) == 0) {
							$listObjRels = array_diff(array_keys($record),$model->atributes());
							$listDiffRel = array_diff($listObjRels,$model->getListHasMany());
							foreach ($model->atributes() as $atributo) {
								if ($atributo == "fk_id_usuario")
									$model->$atributo = yii::$app->user->getId();
								else
									$model->$atributo = $record[$atributo];
							}
							if ($model->validate()) {
								$model->save();
								$audi->insertAudi("create",$model->tableName(),$model->getPrimaryKey());
                                
								foreach ($listObjRels as $listObjRel):
									
                                    $listObjRel2 = ucfirst(rtrim($listObjRel,"s"));
                                    
									if (in_array($listObjRel2,$model->getListHasMany())){

										if ($record[$listObjRel]){
                                            
                                            foreach ($record[$listObjRel] as $subCampo):
                                                
                                                $objRel = $model->getInstance($listObjRel2);
                                                $audi=new LogSistema030003();
                                                foreach($objRel->atributes() as $campo):	
                                                    if ($campo!='fk_id_oec_tipo') {
                                                        $objRel->$campo=$subCampo[$campo];
                                                    } else {
                                                        if($campo == "fk_id_usuario")
                                                        	if ($objRel->getLogin() != "") 
                                                            	$objRel->$campo= yii::$app->user->getId();
                                                             else
                                                             	$objRel->$campo=$model->getPrimaryKey();
                                                        else
                                                            $objRel->$campo=$model->getPrimaryKey();
                                                    }
                                                endforeach;
                                                if ($objRel->validate()){
                                                    $objRel->save();
                                                    if(!is_array($objRel->getPrimaryKey()))
                                                        $audi->insertAudi("create",$objRel->tableName(),$objRel->getPrimaryKey());
                                                    else {
                                                        $pkComp = $objRel->getPrimaryKey();
                                                        $audi->insertAudi("create",$objRel->tableName(),current($pkComp)/*."-".next($pkComp)*/);
                                                    }
                                                } else {
                                                    $error=$objRel->getErrors();
                                                }
                                            endforeach;
                                        }
									}
								endforeach;
							} else {
								$error=$model->getErrors();
							}
						} else {
							foreach ($listDifAtriP as $atrib):
								$error.="No esta definido {".$atrib."}, ";
							endforeach;
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
