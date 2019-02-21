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
class PdfForm012Action extends  Action
{
    public function run()
    {
        $respuesta = new \stdClass();
			#($mode,$formad,$defaul_font_size,defaul_font,margin_left,margin_right,margin_top,margin_botton,margin_header,margin_footer,orientation)
		$mpdf = new mPDF('utf-8','A4','11','Arial',20,20,43,25,10/*head*/,10/*foot*/);
		$respcot=array();
		$head = ['h1'=>utf8_encode('DIRECCIÓN TÉCNICA DE ACREDITACIÓN'),
				'h2'=>utf8_encode('INSTITUTO BOLIVIANO DE METROLOGÍA'),
				'h3'=>utf8_encode('REGISTRO DE NO CONFORMIDADES EN <br /> ACREDITACIÓN'),
				'h4'=>utf8_encode('DTA-FOR-012 A'),
				'h5'=>utf8_encode('4'),
				'h6'=>utf8_encode('2008-09-12'),
				];
		$foot =utf8_encode("NOTA 1: El original de este documento queda en poder de la DTA para fines de archivo en el expediente de acreditación. El organismo evaluado conserva copias para plantear acciones correctivas.

NOTA 2 El PLAN de acciones correctivas debe ser enviado al evaluador líder para su aprobación, dentro del plazo acordado durante la reunión de cierre de la evaluación y usando el formato definido para tal fin por el organismo evaluado.
<br>\"La DTA del IBMETRO se reserva el derecho de modificar el formato de este formulario sin previo aviso\"");
    	$mpdf->SetHTMLHeader($this->controller->renderPartial('pdfHeader',array('head'=>$head),true));
		$mpdf->SetHTMLFooter($this->controller->renderPartial('pdfFoot',array('foot'=>$foot),true));
    	$mpdf->WriteHTML($this->controller->renderPartial('pdfForm012',array('respcot'=>$respcot),true));
        #$mpdf->Output('RepCotizacion.pdf','D');
    	$mpdf->Output();
        exit;
    } 
}
