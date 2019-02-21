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

namespace app\controllers\<?= $className; ?>;
use yii\base\Action;
use app\models\<?= $className; ?>;
use yii\helpers\Json;
use app\models\LogSistema030003;
<?php if(sizeof($model->getFile()) != 0) { ?>
use Yii;
<?php } ?>

class DeleteAction extends Action
{
    public function run()
    {
		$respuesta=new \stdClass();
		$model=new <?= $className; ?>();
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
<?php if(sizeof($model->getFile()) != 0) { ?>
						$model = DocumentoRecibido020001::find()
						 					 ->where([$pk[0]=>$record[$pk[0]]])
                                             ->one();
<?php }?>
						if (<?= $className; ?>::deleteAll($pk[0]." = ".$record[$pk[0]])>0){
	                    	$contValRecords++;
<?php foreach($model->getFile() as $campo):?>
							$filename = $model-><?= $campo ?>;
							$path = Yii::getAlias('@app').'\web\<?= $className; ?>\<?= ucwords(str_replace("_","",$campo))?>\\'.$filename;
							unlink($path);
<?php endforeach;?>
                            $audi->insertAudi("delete",$model->tableName(),$record['<?= $pk[0]; ?>']);
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

