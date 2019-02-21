<?php

namespace app\controllers\Reporte;

use yii\base\Action;
use yii\db\Transaction;
use yii\helpers\Json;
use yii\db\Query;
use mPDF;
use Yii;
use app\models\Usuario000101;
use app\models\CodigoPeticion010404;
use app\models\Evaluacion030001;
use app\models\Oec020001;
/**
 * Esta es la accion "create" para el controlador "Reporte030004Controller".
 */
class PdfForm024Action extends  Action
{
    public function run()
    {
        $respuesta = new \stdClass();
			#($mode,$formad,$defaul_font_size,defaul_font,margin_left,margin_right,margin_top,margin_botton,margin_header,margin_footer,orientation)
		$mpdf = new mPDF('utf-8','A4','11','Arial',20,20,43,25,10/*head*/,10/*foot*/);
		$respcot=array();
		$head = ['h1'=>utf8_encode('DIRECCIÓN TÉCNICA DE ACREDITACIÓN'),
				'h2'=>utf8_encode('INSTITUTO BOLIVIANO DE METROLOGÍA'),
				'h3'=>utf8_encode('PLAN DE EVALUACIÓN'),
				'h4'=>utf8_encode('DTA-FOR-024'),
				'h5'=>utf8_encode('3'),
				'h6'=>utf8_encode('2010-03-15'),
				];
		$foot = "\"La DTA del IBMETRO se reserva el derecho de modificar el formato de este formulario sin previo aviso\"";
    	$mpdf->SetHTMLHeader($this->controller->renderPartial('pdfHeader',array('head'=>$head),true));
		$mpdf->SetHTMLFooter($this->controller->renderPartial('pdfFoot',array('foot'=>$foot),true));
    	if (isset($_GET['id_evaluacion'])) {

    		$eval = Evaluacion030001::find()
    								->with('fkIdOecContactoAltaDireccion','fkIdOecContactoGerenteTecnico','fkIdOecContactoGerenteCalidad','fkIdPeticion')
    								->where(['id_evaluacion'=>$_GET['id_evaluacion']])	
    								->one();

			$codPet = CodigoPeticion010404::find()
									->distinct(true)
									->asArray()
									->where(['id_codigo_peticion'=>$eval->fkIdPeticion->fk_id_codigo_peticion])
									->one();
			$oec = Oec020001::find()
								->distinct(true)
								->with('fkIdOecTipo','fkIdPais','peticion010401s','fkIdNormaReferencia')
								->joinWith('peticion010401s')
								->where(['peticion_01_04_01.id_peticion'=>$eval->fk_id_peticion])
								->one();
		
	    	$mpdf->WriteHTML($this->controller->renderPartial('pdfForm024',array('codPet'=>$codPet,'eval'=>$eval,'oec'=>$oec),true));
	        $mpdf->Output('RepCotizacion.pdf','D');
	    	#$mpdf->Output();
	        exit;
    	} else{
    		$respuesta->meta=array("success"=>"false","msg"=>"Variable indefinida id_evaluacion");
			return $this->controller->renderPartial('read',['model'=>$respuesta,'callback'=>$_GET['callback']]);
   		}
   	} 
}
