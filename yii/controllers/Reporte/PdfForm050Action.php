<?php

namespace app\controllers\Reporte;

use yii\base\Action;
use yii\db\Transaction;
use yii\helpers\Json;
use yii\db\Query;
use mPDF;
use Yii;
use app\models\Usuario000101;
/**
 * Esta es la accion "create" para el controlador "Reporte030004Controller".
 */
class PdfForm050Action extends  Action
{
    public function run()
    {
        $respuesta = new \stdClass();
			#($mode,$formad,$defaul_font_size,defaul_font,margin_left,margin_right,margin_top,margin_botton,margin_header,margin_footer,orientation)
		$mpdf = new mPDF('utf-8','A4','11','Arial',20,20,43,25,10/*head*/,10/*foot*/);
		$respcot=array();
		$head = ['h1'=>utf8_encode('DIRECCI�N T�CNICA DE ACREDITACI�N'),
				'h2'=>utf8_encode('INSTITUTO BOLIVIANO DE METROLOG�A'),
				'h3'=>utf8_encode('INFORME DEL PROCESO INICIAL DE <br /> ACREDITACI�N'),
				'h4'=>utf8_encode('DTA-FOR-050 E'),
				'h5'=>utf8_encode('0'),
				'h6'=>utf8_encode('2015-07-21'),
				];
		$foot = "\"La DTA del IBMETRO se reserva el derecho de modificar el formato de este formulario sin previo aviso\"";
    	$mpdf->SetHTMLHeader($this->controller->renderPartial('pdfHeader',array('head'=>$head),true));
		$mpdf->SetHTMLFooter($this->controller->renderPartial('pdfFoot',array('foot'=>$foot),true));
    	$mpdf->WriteHTML($this->controller->renderPartial('pdfForm050E',array('respcot'=>$respcot),true));
        $mpdf->Output('pdfForm050E.pdf','D');
    	#$mpdf->Output();
        exit;
    } 
}
