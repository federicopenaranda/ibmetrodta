<?php
namespace app\controllers\AnexoConvenio041301;
use yii\base\Action;
use app\models\AnexoConvenio041301;
use yii\db\Connection;
use yii\helpers\Json;

#para upload
use yii\web\UploadedFile;
use Yii;

class UploadNombrepeticionarchivoAction extends Action
{
	public function run()
	{
		$respuesta = new \stdClass();
		$model = new AnexoConvenio041301();
		$name="";

        $model->file = UploadedFile::getInstance($model, 'file');
			
        if ($model->file /*&& $model->validate()*/) { 
			$name = md5($model->file->baseName."_".date("Ymdhms")).'.'.$model->file->extension;              
            if ($model->file->saveAs('AnexoConvenio041301/Escaneadoanexoconvenio/' . $name)){
				$respuesta->registros=$name;
				$respuesta=["success"=>true,"msg"=>$respuesta];
				//return $this->controller->renderPartial('createfile',['model'=>$respuesta,'callback'=>'']);
				#return $this->controller->renderPartial('upload', ['model' => $model,'callback' => '']);
			} else {
				$respuesta->meta=["success"=>"false", "msg"=>"No se pudo guardar"];
				#return $this->controller->render('upload',['model'=>$model,'name'=>$repuesta]);
				return $this->controller->renderPartial('create',['model'=>$respuesta,'callback'=>'']);
			}
			#$model->file->saveAs('uploads/' . $model->file->baseName . '.' . $model->file->extension);
		} else {
			$respuesta->meta=["success"=>"false", "msg"=>"Archivo indefinido"];
			return $this->controller->renderPartial('create',['model'=>$respuesta,'callback'=>'']);
			#return $this->controller->renderPartial('upload',['model'=>$model,'name'=>$respuesta]);
			#return $this->controller->render('upload',['model'=>$model,'name'=>"Archivo no seleccionado!!"]);
		}
        
        #return $this->controller->render('upload', ['model' => $model,'name' => $name]);
	}
}
