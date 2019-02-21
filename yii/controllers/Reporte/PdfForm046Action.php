<?php

namespace app\controllers\Reporte;

use yii\base\Action;
use yii\db\Transaction;
use yii\helpers\Json;
use yii\db\Query;
use mPDF;
use Yii;
use app\models\Usuario000101;
use app\models\DetalleCertificacion040501;
use app\models\CodigoPeticion010404;
/**
 * Esta es la accion "create" para el controlador "Reporte030004Controller".
 */
class PdfForm046Action extends  Action
{
    public function run()
    {
        $respuesta = new \stdClass();
			#($mode,$formad,$defaul_font_size,defaul_font,margin_left,margin_right,margin_top,margin_botton,margin_header,margin_footer,orientation)
		$mpdf = new mPDF('utf-8','A4-L','11','Arial',20,20,43,25,10/*head*/,10/*foot*/);
		$respcot=array();
		$head = ['h1'=>utf8_encode('DIRECCIÓN TÉCNICA DE ACREDITACIÓN'),
				'h2'=>utf8_encode('INSTITUTO BOLIVIANO DE METROLOGÍA'),
				'h3'=>utf8_encode('CONTROL DE ASISTENCIA A REUNIONES'),
				'h4'=>utf8_encode('DTA-FOR-046'),
				'h5'=>utf8_encode('2'),
				'h6'=>utf8_encode('2006-01-05'),
				];
		$foot = "\"La DTA del IBMETRO se reserva el derecho de modificar el formato de este formulario sin previo aviso\"";
    	$mpdf->SetHTMLHeader($this->controller->renderPartial('pdfHeader',array('head'=>$head),true));
		$mpdf->SetHTMLFooter($this->controller->renderPartial('pdfFoot',array('foot'=>$foot),true));
		$mpdf->WriteHTML($this->controller->renderPartial('pdfForm046',array('models'=>array(),'codPet'=>array()),true));
		$mpdf->Output('PdfForm046.pdf','D');
		//$mpdf->Output();
		exit;
    } 
}
