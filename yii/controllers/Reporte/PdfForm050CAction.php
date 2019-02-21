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
class PdfForm050CAction extends  Action
{
    public function run()
    {
        $respuesta = new \stdClass();
			#($mode,$formad,$defaul_font_size,defaul_font,margin_left,margin_right,margin_top,margin_botton,margin_header,margin_footer,orientation)
		$mpdf = new mPDF('utf-8','A4','11','Arial',20,20,43,25,10/*head*/,10/*foot*/);
		$respcot=array();
		$head = ['h1'=>utf8_encode('DIRECCIÓN TÉCNICA DE ACREDITACIÓN'),
				'h2'=>utf8_encode('INSTITUTO BOLIVIANO DE METROLOGÍA'),
				'h3'=>utf8_encode('INFORME DEL PROCESO DE <br /> REACREDITACIÓN'),
				'h4'=>utf8_encode('DTA-FOR-050 C'),
				'h5'=>utf8_encode('2'),
				'h6'=>utf8_encode('2011-08-31'),
				];
    	$mpdf->SetHTMLHeader($this->controller->renderPartial('pdfHeader',array('head'=>$head),true));
		$mpdf->SetHTMLFooter($this->controller->renderPartial('pdfFoot',array('respcot'=>$respcot),true));
    	$mpdf->WriteHTML($this->controller->renderPartial('pdfForm050C',array('respcot'=>$respcot),true));
        #$mpdf->Output('RepCotizacion.pdf','D');
    	$mpdf->Output();
        exit;
    } 
}
