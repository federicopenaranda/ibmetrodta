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
use app\models\PruebaParticipacion040901;
/**
 * Esta es la accion "create" para el controlador "Reporte030004Controller".
 */
class PdfForm034Action extends  Action
{
    public function run()
    {
        $respuesta = new \stdClass();
			#($mode,$formad,$defaul_font_size,defaul_font,margin_left,margin_right,margin_top,margin_botton,margin_header,margin_footer,orientation)
		$mpdf = new mPDF('utf-8','A4','11','Arial',20,20,43,25,10/*head*/,10/*foot*/);
		$respcot=array();
		$head = ['h1'=>utf8_encode('DIRECCIÓN TÉCNICA DE ACREDITACIÓN'),
				'h2'=>utf8_encode('INSTITUTO BOLIVIANO DE METROLOGÍA'),
				'h3'=>utf8_encode('PRUEBA DE PARTICIPACIÓN EN <br /> EVALUACIÓN'),
				'h4'=>utf8_encode('DTA-FOR-034'),
				'h5'=>utf8_encode('3'),
				'h6'=>utf8_encode('2008-11-20'),
				];
		$foot = "\"La DTA del IBMETRO se reserva el derecho de modificar el formato de este formulario sin previo aviso\"";
    	$mpdf->SetHTMLHeader($this->controller->renderPartial('pdfHeader',array('head'=>$head),true));
		$mpdf->SetHTMLFooter($this->controller->renderPartial('pdfFoot',array('foot'=>$foot),true));
        if (isset($_GET['id_prueba_participacion'])){
    		
    		$prueba = PruebaParticipacion040901::find()
    								->where(['id_prueba_participacion'=>$_GET['id_prueba_participacion']])
								->with('fkIdCriterioEvaluacion')
								->joinWith('fkIdCriterioEvaluacion')
    								->one();

    		$pets = Peticion010401::find()
    							->distinct(true)
								->with('fkIdCodigoPeticion')
								->joinWith('fkIdCodigoPeticion')
								->where(['id_peticion'=>$prueba->fk_id_peticion])
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

		$mpdf->WriteHTML($this->controller->renderPartial('pdfForm034',array('pet'=>$pets,'oec'=>$oec,'eval'=>$eval,'prueba'=>$prueba),true));
        	$mpdf->Output('pdfForm034.pdf','D');
    		#$mpdf->Output();
        	exit;
		} else {
			$respuesta->meta=array("success"=>"false","msg"=>"Variable indefinida id_prueba_participacion");
			return $this->controller->renderPartial('read',['model'=>$respuesta,'callback'=>$_GET['callback']]);
		}
    } 
}
