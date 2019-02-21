<?php
use \yii\gii\Generator;
$db = Yii::$app->get($generator->db, false);
$table = $db->getSchema()->getTableSchema($tableName);
$pk=$table->primaryKey;
?>
<?php
echo "<?php\n";
?>
namespace app\controllers\<?= $className;?>;
use yii\base\Action;
use app\models\<?= $className;?>;
use yii\db\Connection;
use yii\helpers\Json;

use Yii;
class Download<?= $nameFile ?>Action extends Action
{
	public function run()
	{
		$respuesta=new \stdClass();

        if(isset($_GET['<?= $pk[0]?>'])) {
			
			$model = new <?= $className;?>();
			$modelo = <?= $className;?>::find()->where(['<?= $pk[0]?>' => $_GET['<?= $pk[0]?>']])->one();
			#$modelo = $model::model()->findByPK($_GET['<?= $pk[0]?>']);
			$path=Yii::getAlias("@webroot")."/<?=$className."/".$nameFile?>/".$modelo->file;
			#$path = Yii::getPathOfAlias("webroot")."/images/".$modelo->file;
			$file=$modelo->file;

			if (is_file($path)) {
				
				header("Content-Type: application/force-download");
				header("Content-Disposition: attachment; filename=$file");
				header('Pragma: no-cache');
				readfile($path);
			} else {
				$respuesta->meta=array('success'=>false,"msg"=>"El archivo no existe");
				return $this->controller->renderParTial('create',array('model'=>$respuesta,'callback'=>''));
				#exit();
			}
		
		} else {
			$respuesta->meta=array('success'=>false,"msg"=>"Variable indefinida, <?= $pk[0] ?>");
			return $this->controller->renderParTial('create',array('model'=>$respuesta,'callback'=>''));
		}
	}
}

