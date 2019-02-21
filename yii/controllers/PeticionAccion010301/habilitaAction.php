<?php

namespace app\controllers;

namespace app\controllers\PeticionAccion010301;

use yii\base\Action;
use app\models\PeticionAccion010301;
use app\models\Accion010201;
use app\models\AccionTransicion010202;
use app\models\CTQ;
use yii\db\Transaction;
use yii\db\Connection;
use yii\helpers\Json;
use app\models\LogSistema030003;


class habilitaAction extends Action {

    public function run()
    {
        $respuesta = new \stdClass();

        $error = "";
		$error.= (!isset($_GET['accion'])) ? "{ Error en la variable accion } " : "";
		$error.= (!isset($_GET['proceso'])) ? "{ Error en la variable proceso } " : "";
		$error.= (!isset($_GET['fk_id_peticion'])) ? "{ Error en la variable fk_id_peticion } " : "";
		$error.= (!isset($_GET['callback'])) ? "{ Error en la variable callback } " : "";

		if ($error == "")
		{
	        $accion = Accion010201::find()
						->where(['nombre_accion' => $_GET['accion']])
						->andWhere(['fk_id_proceso' => $_GET['proceso']])
	                    ->one();

	        $transicion = AccionTransicion010202::find()
						->where(['fk_id_accion' => $accion->id_accion])
	                    ->one();

	        $models = PeticionAccion010301::find()
						->where(['fk_id_peticion' => $_GET['fk_id_peticion']])
						->andWhere(['fk_id_transicion' => $transicion->fk_id_transicion])
						->andWhere(['fk_id_accion' => $accion->id_accion])
	                    ->one();

	        $models->completa_peticion_accion = 0;
	        $models->activa_peticion_accion = 1;
	        $models->update();
	        
	        $respuesta->meta=array("success"=>"true","msg"=>"Se actualizo exitosamente !!!");
			return $this->controller->renderPartial('update',array('model'=>$respuesta,'callback'=>$_GET['callback']));
		}
		else
		{
			$respuesta->meta=["success"=>"false","msg"=>$error];
			return $this->controller->renderPartial('update',['model'=>$respuesta,'callback'=>'']);
		}

    }

}
