<?php
namespace app\controllers\AnexoConvenio041301;
use yii\base\Action;
use app\models\AnexoConvenio041301;
use yii\db\Connection;
use yii\helpers\Json;

use Yii;
class DownloadEscaneadoanexoconvenioAction extends Action
{
	public function run()
	{
		$respuesta=new \stdClass();

        if(isset($_GET['id_anexo_convenio'])) {
			
			$model = new AnexoConvenio041301();
			$modelo = AnexoConvenio041301::find()->where(['id_anexo_convenio' => $_GET['id_anexo_convenio']])->one();
			#$modelo = $model::model()->findByPK($_GET['id_anexo_convenio']);
			$path=Yii::getAlias("@webroot")."/AnexoConvenio041301/Escaneadoanexoconvenio/".$modelo->file;
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
			$respuesta->meta=array('success'=>false,"msg"=>"Variable indefinida, id_anexo_convenio");
			return $this->controller->renderParTial('create',array('model'=>$respuesta,'callback'=>''));
		}
	}
}

