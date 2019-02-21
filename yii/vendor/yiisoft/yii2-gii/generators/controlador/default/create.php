<?php
namespace app;
require_once (__DIR__."/instancia.php");
$model = getPath($className);
$pk = $model->getNamePk();
?>
<?php
/**
 * This is the template for generating the model class of a specified table.
 */

/* @var $this yii\web\View */
/* @var $generator yii\gii\generators\model\Generator */
/* @var $tableName string full table name */
/* @var $className string class name */
/* @var $tableSchema yii\db\TableSchema */
/* @var $labels string[] list of attribute labels (name => label) */
/* @var $rules string[] list of validation rules */
/* @var $relations array list of relations (name => relation declaration) */

echo "<?php\n";
?>

namespace <?= $generator->ns."\\".$className ?>;

use yii\base\Action;
use app\models\<?= $className ?>;
use yii\db\Transaction;
use yii\helpers\Json;
use app\models\LogSistema030003;

use Yii;

/**
 * Esta es la accion "create" para el controlador "<?= $className."Controller" ?>".
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
			$model=new <?= $className; ?>();
			$listRecords=$model->divideRecords($query);
			$transaction = $model->db->beginTransaction();
			try{
				foreach ($listRecords as $listaRecord):
					$error="";
					$model = new <?= $className; ?>();
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
<?php if($className == "Usuario000101"){?>
									if($atributo == "contrasena_usuario")
										$model->$atributo = sha1($record[$atributo]);
									else	
										$model->$atributo = $record[$atributo];
<?php } else {?>
									$model->$atributo = $record[$atributo];
<?php } ?>
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
                                                    if ($campo!='fk_<?= $pk[0] ?>') {
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
