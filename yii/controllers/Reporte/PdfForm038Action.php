<?php

namespace app\controllers\Reporte;

use yii\base\Action;
use yii\db\Transaction;
use yii\helpers\Json;
use yii\db\Query;
use mPDF;
use Yii;
use app\models\Usuario000101;
use app\models\Peticion010401;
use app\models\Oec020001;
use app\models\Evaluacion030001;
use app\models\EvalTecnica040801;
use app\models\EquipoPeticion010701;

/**
 * Esta es la accion "create" para el controlador "Reporte030004Controller".
 */
class PdfForm038Action extends  Action
{
    public function run()
    {
        $respuesta = new \stdClass();
			#($mode,$formad,$defaul_font_size,defaul_font,margin_left,margin_right,margin_top,margin_botton,margin_header,margin_footer,orientation)
		$mpdf = new mPDF('utf-8','A4','11','Arial',20,20,43,25,10/*head*/,10/*foot*/);
		$respcot=array();
		$head = ['h1'=>utf8_encode('DIRECCIÓN TÉCNICA DE ACREDITACIÓN'),
				'h2'=>utf8_encode('INSTITUTO BOLIVIANO DE METROLOGÍA'),
				'h3'=>utf8_encode('INFORME DE EVALUACIÓN TÉCNICA A <br /> LABORATORIOS'),
				'h4'=>utf8_encode('DTA-FOR-038'),
				'h5'=>utf8_encode('4'),
				'h6'=>utf8_encode('2013-07-22'),
				];
		$foot = "\"La DTA del IBMETRO se reserva el derecho de modificar el formato de este formulario sin previo aviso\"";
    	$mpdf->SetHTMLHeader($this->controller->renderPartial('pdfHeader',array('head'=>$head),true));
		$mpdf->SetHTMLFooter($this->controller->renderPartial('pdfFoot',array('foot'=>$foot),true));
    	if (isset($_GET['id_eval_tecnica'])){
    		
    		$evalTec = EvalTecnica040801::find()
    							->where(['id_eval_tecnica'=>$_GET['id_eval_tecnica']])	
    							->one();
    		$pets = Peticion010401::find()
								->with('fkIdCodigoPeticion')
								->joinWith('fkIdCodigoPeticion')
								->where(['id_peticion'=>$evalTec->fk_id_peticion])
								->one();

    		$oec = Oec020001::find()
								->distinct(true)
								->with('fkIdOecTipo','fkIdPais','peticion010401s','fkIdNormaReferencia')
								->joinWith('peticion010401s')
								->where(['peticion_01_04_01.id_peticion'=>$pets->id_peticion])
								->one();

			$eval = Evaluacion030001::find()
								->distinct(true)
			 					->where(['fk_id_peticion'=>$pets->id_peticion])
			 					->one();

			

$connection = Yii::$app->getDb();

$command = $connection->createCommand("
    SELECT
equipo_peticion_01_07_01.fk_id_usuario,
usuario_00_01_01.primer_nombre_usuario,
usuario_00_01_01.apellido_paterno_usuario,
usuario_tipo_usuario_00_01_02.fk_id_usuario_tipo,
usuario_tipo_00_02_01.nombre_usuario_tipo
FROM
equipo_peticion_01_07_01
JOIN usuario_00_01_01 ON equipo_peticion_01_07_01.fk_id_usuario = usuario_00_01_01.id_usuario
JOIN usuario_tipo_usuario_00_01_02 ON usuario_tipo_usuario_00_01_02.fk_id_usuario = usuario_00_01_01.id_usuario
INNER JOIN usuario_tipo_00_02_01 ON usuario_tipo_usuario_00_01_02.fk_id_usuario_tipo = usuario_tipo_00_02_01.id_usuario_tipo
WHERE
equipo_peticion_01_07_01.fk_id_peticion = :id_peticion AND
usuario_tipo_00_02_01.nombre_usuario_tipo = 'ext'", [':id_peticion' => $pets->id_peticion]);

$equipo = $command->queryOne();

if (sizeof($equipo) == 0)
{
$command = $connection->createCommand("
    SELECT
equipo_peticion_01_07_01.fk_id_usuario,
usuario_00_01_01.primer_nombre_usuario,
usuario_00_01_01.apellido_paterno_usuario,
usuario_tipo_usuario_00_01_02.fk_id_usuario_tipo,
usuario_tipo_00_02_01.nombre_usuario_tipo
FROM
equipo_peticion_01_07_01
JOIN usuario_00_01_01 ON equipo_peticion_01_07_01.fk_id_usuario = usuario_00_01_01.id_usuario
JOIN usuario_tipo_usuario_00_01_02 ON usuario_tipo_usuario_00_01_02.fk_id_usuario = usuario_00_01_01.id_usuario
INNER JOIN usuario_tipo_00_02_01 ON usuario_tipo_usuario_00_01_02.fk_id_usuario_tipo = usuario_tipo_00_02_01.id_usuario_tipo
WHERE
equipo_peticion_01_07_01.fk_id_peticion = :id_peticion AND
usuario_tipo_00_02_01.nombre_usuario_tipo = 'et'", [':id_peticion' => $pets->id_peticion]);

$equipo = $command->queryOne();

if (sizeof($equipo) == 0)
	$equipo = '';

}





			$mpdf->WriteHTML($this->controller->renderPartial('pdfForm038',array('pet'=>$pets,'oec'=>$oec,'eval'=>$eval,'evalTec'=>$evalTec,'equipo'=>$equipo),true));
        	$mpdf->Output('pdfForm038.pdf','D');
    		#$mpdf->Output();
        	exit;
		} else {
			$respuesta->meta=array("success"=>"false","msg"=>"Variable indefinida id_eval_tecnica");
			return $this->controller->renderPartial('read',['model'=>$respuesta,'callback'=>$_GET['callback']]);
		}
    } 
}
