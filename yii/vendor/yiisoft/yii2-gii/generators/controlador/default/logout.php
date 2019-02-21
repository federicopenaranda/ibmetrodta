<?php
namespace app;
require_once("instancia.php");
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

use Yii;

/**
 * Esta es la accion "create" para el controlador "<?= $className."Controller" ?>".
 */
class LogoutAction extends Action
{
    public function run()
    {
		$respuesta=new \stdClass();
		$error="";
		$error.= (!isset($_GET['callback'])) ? "{ Error de Callback } " : "";
		if ($error == "") {
			Yii::$app->user->logout();

			$respuesta->meta=["success"=>"true","msg"=>"Congratulation this Deslogueado!!...!!"];
				return $this->controller->renderPartial('logout', [
					'model' => $respuesta,'callback'=>$_GET['callback'],
				]);
		} else {
			$respuesta->meta=["success"=>"false","msg"=>$error];
			return $this->controller->renderPartial('read',['model'=>$respuesta,'callback'=>'']);
		}
    }
}
