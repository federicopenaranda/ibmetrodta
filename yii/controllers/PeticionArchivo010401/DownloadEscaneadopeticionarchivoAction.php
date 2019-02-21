<?php
namespace app\controllers\PeticionArchivo010401;
use yii\base\Action;
use app\models\PeticionArchivo010401;
use yii\db\Connection;
use yii\helpers\Json;

use Yii;
class DownloadEscaneadopeticionarchivoAction extends Action
{
	public function run()
	{
		$respuesta=new \stdClass();

        if(isset($_GET['id_peticion_archivo'])) {
			
			$model = new PeticionArchivo010401();
			$modelo = PeticionArchivo010401::find()->where(['id_peticion_archivo' => $_GET['id_peticion_archivo']])->one();
			#$modelo = $model::model()->findByPK($_GET['id_peticion_archivo']);
			$path=Yii::getAlias("@webroot")."/PeticionArchivo010401/Escaneadopeticionarchivo/".$modelo->file;
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
			$respuesta->meta=array('success'=>false,"msg"=>"Variable indefinida, id_peticion_archivo");
			return $this->controller->renderParTial('create',array('model'=>$respuesta,'callback'=>''));
		}
	}
}

