<?php
use app\models\Usuario000101;
$model = new Usuario000101();
$listAtributes = $model->atributes();
?>
<?php
/**
* nombre de la tabla <?php echo $tableName; ?>
*  nombre del Modelo <?php echo $modelClass; ?>
* nombre de la columnas 
* nombre de la acciont <?php echo $action; ?>
*/
?>
<?php echo "<?php\n"; ?>
namespace app\controllers\Usuario000101;

use yii\base\Action;
use app\models\Usuario000101;
use app\models\UsuarioTipoUsuario000102;
use app\models\UsuarioTipo000201;
use app\models\UsuarioTipoPrivilegio000202;
use app\models\UsuarioPrivilegio000004;
use yii\db\Transaction;
use yii\helpers\Json;

use Yii;
/**
 * Esta es la accion para el controlador PrivilegiosUsuario
 */
class InsertAction extends Action
{
	/**
    * Esta accion inserta las 4 acciones (create,read,update,delete) por cada tabla de la base de datos.
    */
	public function run()
	{
		$respuesta=new \stdClass();
        $error = "";
		$error.= (!isset($_GET['callback'])) ? "{ Error de Callback } " : "";
		if ($error == "") {
        	$callback=$_GET['callback'];
            
            $modeUsuario =new Usuario000101();
<?php foreach ($listAtributes as $listAtribute):?>
<?php if(strpos($listAtribute,"fk_")!==FALSE || strpos($listAtribute,"id_")!==FALSE) {?>
			$modeUsuario-><?= $listAtribute?> = 1;
<?php } else {?>
<?php if (strpos($listAtribute,"contrasena")!==FALSE) {?>
			$modeUsuario-><?= $listAtribute?> = sha1("admin");
<?php } else {?>
<?php if (strpos($listAtribute,"fecha")!==FALSE) {?>
			$modeUsuario-><?= $listAtribute?>=date("Y-m-d");
<?php } else { ?>
<?php if (strpos($listAtribute,"sexo")!==FALSE) {?>
			$modeUsuario-><?= $listAtribute?> = "m";
<?php } else { ?>
<?php  if (strpos($listAtribute,"acceso_ip")!==FALSE) {?>
			$modeUsuario-><?= $listAtribute?> = "";
<?php } else { ?>
			$modeUsuario-><?= $listAtribute?> = "admin";
<?php
}}}}}?>              
<?php endforeach;?>

			$modeUsuario->save();
			
			$modeUsuarioTipo = new UsuarioTipo000201();
			$modeUsuarioTipo->nombre_usuario_tipo		="admin";
			$modeUsuarioTipo->descripcion_usuario_tipo	="administrador";
			$modeUsuarioTipo->save();

			$modeUsuarioTipoUsuario=new UsuarioTipoUsuario000102();
			$modeUsuarioTipoUsuario->fk_id_usuario_tipo = $modeUsuarioTipo->getPrimaryKey();
			$modeUsuarioTipoUsuario->fk_id_usuario		= $modeUsuario->getPrimaryKey();
			$modeUsuarioTipoUsuario->save();
            
        	$arreglo = [
			<?php $arreglo=$modelClass;foreach($arreglo as $valor) {?>
				<?= "'{$valor}',\n" ?>
			<?php }?>
            ];
            foreach ($arreglo as $valor) {
                
                for ($i=1;$i<=4;$i++) {
                    $model = new UsuarioPrivilegio000004();
                    switch ($i) {
                        case 1:
                            $model->accion_usuario_privilegio			= "create";
                            $model->nombre_privilegio_usuario_privilegio= "crea ".$valor;
                        break;
                        case 2:
                            $model->accion_usuario_privilegio			= "index";
                            $model->nombre_privilegio_usuario_privilegio= "lee ".$valor;
                        break;
                        case 3:
                            $model->accion_usuario_privilegio			= "update";
                            $model->nombre_privilegio_usuario_privilegio= "actualiza ".$valor;
                        break;
                        case 4:
                            $model->accion_usuario_privilegio			= "delete";
                            $model->nombre_privilegio_usuario_privilegio= "elimina ".$valor;
                        break;
                     }  
					$model->opciones_usuario_privilegio		= "controlador";
                    $model->funcion_usuario_privilegio		= $valor; 
                    $model->descripcion_usuario_privilegio	= "automatico";
					if ($model->validate())
						$model->save(); 
                }
            }
            
            $model = new UsuarioTipoPrivilegio000202();
			$registros=UsuarioPrivilegio000004::find()->all();
			foreach($registros as $registro):
				$model = new UsuarioTipoPrivilegio000202();
				$model->fk_id_usuario_tipo=$modeUsuarioTipo->getPrimaryKey();
				$model->fk_id_usuario_privilegio = $registro->id_usuario_privilegio;
				$model->save();
			endforeach;
            
            $respuesta->meta=array("success"=>"true","msg"=>"Se crearon los registros exitosamente !!!");
			return $this->controller->renderPartial('create',array('model'=>$respuesta,'callback'=>$callback));
		} else {
			$respuesta->meta=["success"=>"false","msg"=>$error];
			return $this->controller->renderPartial('create',['model'=>$respuesta,'callback'=>'']);
		}
	}
}