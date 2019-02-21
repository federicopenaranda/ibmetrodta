<?php
echo "<?php\n";
?>
namespace app\controllers;

use Yii;

use yii\filters\AccessControl;
use yii\web\Controller;
use app\models\UsuarioPrivilegio000004;
use app\models\Usuario000101;

/**
 * Este es el controlador para el modelo "".
 */
class PermisosController extends Controller
{
	public function behaviors() {
    	return[
			'access'=>[
				'class' => AccessControl::className(),
				'only' => ['privilegio','tipousuario'],
				'rules'=>[
					[
					'actions'=>['login','insert'],
					'allow'=>true,
					'roles'=>['?'],
					],
					[
					'actions'=>['privilegio','tipousuario'],
					'allow'=>true,
					'roles'=>['@'],
					],
				],
			],
		];
    }
	
	public function actionPrivilegio()
	{
		$respuesta=new \stdClass();
		$error="";
		$error.= (!isset($_GET['limit'])) ? "{ Error variable indefinida limit } " : "";
		$error.= (!isset($_GET['start'])) ? "{ Error variable indefinida start } " : "";
		$error.= (!isset($_GET['callback'])) ? "{ Error de Callback } " : "";
    	if ($error == "") {
			$callback=$_GET['callback'];
			$objusu=new UsuarioPrivilegio000004();
			$id = yii::$app->user->getId();
			
			if (isset($_GET['sort'])) {
				$sort=Json::decode($_GET['sort']);
				$propertySort	= $sort[0]['property'];
				$directionSort	= $sort[0]['direction'];
			} else {
				$propertySort	= "id_usuario_privilegio";
				$directionSort	= "asc";
			}
			
			$query = (new \yii\db\Query())
    			->select('nombre_privilegio_usuario_privilegio, accion_usuario_privilegio')
    			->from('usuario_privilegio_00_00_04')
				->leftJoin('usuario_tipo_privilegio_00_02_02', 'usuario_tipo_privilegio_00_02_02.fk_id_usuario_privilegio = usuario_privilegio_00_00_04.id_usuario_privilegio')
				->innerJoin('usuario_tipo_00_02_01','usuario_tipo_00_02_01.id_usuario_tipo = usuario_tipo_privilegio_00_02_02.fk_id_usuario_tipo')
				->innerJoin('usuario_tipo_usuario_00_01_02','usuario_tipo_usuario_00_01_02.fk_id_usuario_tipo = usuario_tipo_00_02_01.id_usuario_tipo')
				->innerJoin('usuario_00_01_01','usuario_00_01_01.id_usuario = usuario_tipo_usuario_00_01_02.fk_id_usuario_tipo')
				->where('usuario_00_01_01.id_usuario =:id_usuario')
				->addParams([':id_usuario' => $id])
				->all();
			$total = sizeof($query);
			$query = (new \yii\db\Query())
    			->select('nombre_privilegio_usuario_privilegio, accion_usuario_privilegio')
    			->from('usuario_privilegio_00_00_04')
				->innerJoin('usuario_tipo_privilegio_00_02_02', 'usuario_tipo_privilegio_00_02_02.fk_id_usuario_privilegio = usuario_privilegio_00_00_04.id_usuario_privilegio')
				->innerJoin('usuario_tipo_00_02_01','usuario_tipo_00_02_01.id_usuario_tipo = usuario_tipo_privilegio_00_02_02.fk_id_usuario_tipo')
				->innerJoin('usuario_tipo_usuario_00_01_02','usuario_tipo_usuario_00_01_02.fk_id_usuario_tipo = usuario_tipo_00_02_01.id_usuario_tipo')
				->innerJoin('usuario_00_01_01','usuario_00_01_01.id_usuario = usuario_tipo_usuario_00_01_02.fk_id_usuario_tipo')
				->where('usuario_00_01_01.id_usuario =:id_usuario')
				->addParams([':id_usuario' => $id])
				->orderby($propertySort." ".$directionSort)
				->offset($_GET['start'])
                ->limit($_GET['limit'])
				->all();
			
			$respuesta->registros=$query;	
			$respuesta->total=(int)$total;	
			return $this->renderParTial('read',array('model'=>$respuesta,'callback'=>$callback));

		} else {
			$respuesta->meta=array("success"=>"false","msg"=>$error);
			return $this->renderParTial('read',array('model'=>$respuesta,'callback'=>''));
		}
	}
	
	public function actionTipousuario()
	{
		$respuesta=new \stdClass();
		$error="";
		$error.= (!isset($_GET['callback'])) ? "{ Error de Callback } " : "";
		if ($error == "") {
			$callback=$_GET['callback'];
			$id = yii::$app->user->getId();
			
			$models = Usuario000101::find()
                        	->distinct(true)
                            ->with('fkIdUsuarioTipos')
                            ->asArray()
							->joinWith('fkIdUsuarioTipos')
							->where('id_usuario =:id_usuario')
							->addParams([':id_usuario' => $id])
							->all();
			$total = sizeof($models);
            $models = Usuario000101::find()
                        	->distinct(true)
							#->select('login_usuario, usuario_tipo_00_02_01.nombre_usuario_tipo')
                            ->with('fkIdUsuarioTipos')
                            ->asArray()
							->joinWith('fkIdUsuarioTipos')
							->where('id_usuario =:id_usuario')
							->addParams([':id_usuario' => $id])
                            #->offset($_GET['start'])
                            #->limit($_GET['limit'])
                            ->all();
			
			$respuesta->registros = $models;	
			$respuesta->total=(int)$total;
			return $this->renderParTial('read',array('model'=>$respuesta,'callback'=>$callback));
				
		} else {
			$respuesta->meta=array("success"=>"false","msg"=>$error);
			return $this->renderParTial('read',array('model'=>$respuesta,'callback'=>''));
		}
	}		
}
