<?php
echo "<?php\n";
?>
namespace app\controllers\Usuario000101;

use yii\base\Action;
use app\models\Usuario000101;
use yii\db\Transaction;
use yii\helpers\Json;
use yii\db\Query;
use yii\base\Exception;

use Yii;

/**
* Esta clase es llamado por su controlador repectivo y en aqui se definen todas las acciones del controlador
* Es una clase que hereda de CAction
*/ 
class ListaPrivilegiosUsuarioAction extends Action
{
/**
* La funcion run ejecuta la logica de la accion
* Su funcion es la de listar todos los registros de una tabla en la base de datos
* @param array $callback se introduce el nombre de una funcion
*/
	public function run()
	{
		$respuesta=new \stdClass();
		
		$error="";
		$error.= (!isset($_GET['callback'])) ? "{ Error de Callback } " : "";
		
		if ($error == "") {
			try {
				if (isset($_GET['sort'])) {
					$sort=Json::decode($_GET['sort']);
					$propertySort	= $sort[0]['property'];
					$directionSort = $sort[0]['direction'] == "asc" ? SORT_ASC : SORT_DESC;
				} else {
					$propertySort	= "id_usuario_privilegio";
					$directionSort	= SORT_ASC;
				}
				
				$callback=$_GET['callback'];
				
				$Querys = (new Query)
						->select(['nombre_privilegio_usuario_privilegio'])
						->from('usuario_privilegio_00_00_04 AS up')
						->innerJoin('usuario_tipo_privilegio_00_02_02 AS utp','utp.fk_id_usuario_privilegio = up.id_usuario_privilegio')
						->innerJoin('usuario_tipo_00_02_01 AS ut','utp.fk_id_usuario_tipo = ut.id_usuario_tipo')
						->innerJoin('usuario_tipo_usuario_00_01_02 AS utu','utu.fk_id_usuario_tipo = ut.id_usuario_tipo')
						->innerJoin('usuario_00_01_01 AS u','utu.fk_id_usuario = u.id_usuario')
						->where(['u.id_usuario'=>Yii::$app->user->getId()])
						->orderBy([$propertySort => $directionSort])
						->all();
				$total=sizeof($Querys);
				$respuesta->registros=$Querys;
				$respuesta->total=$total;
			} catch (\Exception $e) {
				$error=$e->getMessage();
			}
			if ($error == "")	
				return $this->controller->renderPartial('read',['model'=>$respuesta,'callback'=>$_GET['callback']]);
			else {
				$respuesta->meta=array("success"=>"false","msg"=>$error);
				return $this->controller->renderPartial('read',['model'=>$respuesta,'callback'=>$_GET['callback']]);
			}
		} else {
			$respuesta->meta=array("success"=>"false","msg"=>$error);
			return $this->controller->renderPartial('read',['model'=>$respuesta,'callback'=>'']);
		}
	}
}