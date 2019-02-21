<?php

namespace app\controllers\Reporte;

use yii\base\Action;
use yii\db\Transaction;
use yii\helpers\Json;
use yii\db\Query;
use mPDF;
use Yii;
use app\models\Usuario000101;
use app\models\Oec020001;
/**
 * Esta es la accion "create" para el controlador "Reporte030004Controller".
 */
class PdfForm002Action extends  Action
{
    public function run()
    {
        $respuesta = new \stdClass();
			#($mode,$formad,$defaul_font_size,defaul_font,margin_left,margin_right,margin_top,margin_botton,margin_header,margin_footer,orientation)
		$mpdf = new mPDF('utf-8','A4','11','Arial',20,20,43,25,10/*head*/,10/*foot*/);
		$respcot=array();
		$head = ['h1'=>utf8_encode('DIRECCIÓN TÉCTICA DE ACREDITACIÓN'),
				'h2'=>utf8_encode('INSTITUTO BOLIVIANO DE METROLOGÍA'),
				'h3'=>utf8_encode('MANIFIESTO DE INTENCION DE <br /> ACREDITACIÓN'),
				'h4'=>utf8_encode('DTA-FOR-002'),
				'h5'=>utf8_encode('8'),
				'h6'=>utf8_encode('2014-09-29'),
				];
    	$mpdf->SetHTMLHeader($this->controller->renderPartial('pdfHeader',array('head'=>$head),true));
		$mpdf->SetHTMLFooter($this->controller->renderPartial('pdfFoot',array('respcot'=>$respcot),true));
    	if (isset($_GET['id_oec'])){
			$models = Oec020001::find()
								->distinct(true)
								->with('fkIdActividadEconomicas','oecAcreditacionSolicitada020003s','oecContacto020003s','fkIdOecTipo','fkIdNormaReferencia','fkIdPais')
								->asArray()
								->joinWith('fkIdActividadEconomicas')
								->joinWith('oecAcreditacionSolicitada020003s')
								->joinWith('oecContacto020003s')
								->where(['id_oec'=>$_GET['id_oec']])
								->all();
			
			$mpdf->WriteHTML($this->controller->renderPartial('pdfForm002',array('models'=>$models),true));
			$mpdf->Output('RepForm002.pdf','D');
			//$mpdf->Output();
			exit;
		} else {
			$respuesta->meta=array("success"=>"false","msg"=>"Variable indefinida id_oec");
			return $this->controller->renderPartial('read',['model'=>$respuesta,'callback'=>$_GET['callback']]);
		}
    } 
}
