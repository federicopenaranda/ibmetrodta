<?php
namespace app\controllers\AnexoConvenio041301;
use yii\base\Action;
use app\models\AnexoConvenio041301;
use yii\db\Connection;
use yii\helpers\Json;

use Yii;
class EscaneadoanexoconvenioAction extends Action
{
	public function run()
	{
		$respuesta=new \stdClass();

        if(isset($_GET['id_oec'])) {

			$anexos=AnexoConvenio041301::find()
						->with('fkIdPeticion')
						->joinWith('fkIdPeticion')
						->where(['fk_id_oec'=>$_GET['id_oec']])
						->orderBy(['id_anexo_convenio'=>SORT_DESC])
						->one();
			
			if (isset($anexos))
			{
				$path=Yii::getAlias("@webroot")."/AnexoConvenio041301/Escaneadoanexoconvenio/".$anexos->escaneado_anexo_convenio;
				$file=$anexos->escaneado_anexo_convenio;
			}
			else
			{
				$path=Yii::getAlias("@webroot")."/AnexoConvenio041301/Escaneadoanexoconvenio/nofile";
				$file='';
			}

			

			if (is_file($path)) {
				$respuesta->meta=array('success'=>true,"msg"=>$file);
				return $this->controller->renderParTial('create',array('model'=>$respuesta,'callback'=>$_GET['callback']));

				
				/*header("Content-Type: application/force-download");
				header("Content-Disposition: attachment; filename=$file");
				header('Pragma: no-cache');
				readfile($path);*/
			} else {
				$respuesta->meta=array('success'=>false,"msg"=>$file);
				return $this->controller->renderParTial('create',array('model'=>$respuesta,'callback'=>$_GET['callback']));
				#exit();
			}
		} else {
			//return $this->controller->renderParTial("download");
			$respuesta->meta=array('success'=>false,"msg"=>"Variable indefinida, id_oec");
			return $this->controller->renderParTial('create',array('model'=>$respuesta,'callback'=>$_GET['callback']));
		}
	}
}

