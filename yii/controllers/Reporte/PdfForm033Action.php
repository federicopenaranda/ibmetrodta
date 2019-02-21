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
use app\models\SupervisionEvaluador041101;
/**
 * Esta es la accion "create" para el controlador "Reporte030004Controller".
 */
class PdfForm033Action extends  Action
{
    public function run()
    {
        $respuesta = new \stdClass();
			#($mode,$formad,$defaul_font_size,defaul_font,margin_left,margin_right,margin_top,margin_botton,margin_header,margin_footer,orientation)
		$mpdf = new mPDF('utf-8','A4','11','Arial',20,20,43,25,10/*head*/,10/*foot*/);
		$respcot=array();
		$head = ['h1'=>utf8_encode('DIRECCIÓN TÉCNICA DE ACREDITACIÓN'),
				'h2'=>utf8_encode('INSTITUTO BOLIVIANO DE METROLOGÍA'),
				'h3'=>utf8_encode('SUPERVISIÓN/VALORACIÓN DE <br /> EVALUADORES Y EXPERTOS'),
				'h4'=>utf8_encode('DTA-FOR-033'),
				'h5'=>utf8_encode('2'),
				'h6'=>utf8_encode('2006-07-18'),
				];
		$foot = "\"La DTA del IBMETRO se reserva el derecho de modificar el formato de este formulario sin previo aviso\"";
    	$mpdf->SetHTMLHeader($this->controller->renderPartial('pdfHeader',array('head'=>$head),true));
		$mpdf->SetHTMLFooter($this->controller->renderPartial('pdfFoot',array('foot'=>$foot),true));
    	if (isset($_GET['id_supervision_evaluador'])){

    		$superEval = SupervisionEvaluador041101::find()
                    					->distinct(true)
                    					->where(['id_supervision_evaluador'=>$_GET['id_supervision_evaluador']])
										->one();
    		
    		$pets = Peticion010401::find()
								->with('fkIdCodigoPeticion')
								->joinWith('fkIdCodigoPeticion')
								->where(['id_peticion'=>$superEval->fk_id_peticion])
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

			$mpdf->WriteHTML($this->controller->renderPartial('pdfForm033',array('pet'=>$pets,'oec'=>$oec,'eval'=>$eval,'superEval'=>$superEval),true));
        	$mpdf->Output('pdfForm033.pdf','D');
    		#$mpdf->Output();
        	exit;
		} else {
			$respuesta->meta=array("success"=>"false","msg"=>"Variable indefinida id_supervision_evaluador");
			return $this->controller->renderPartial('read',['model'=>$respuesta,'callback'=>$_GET['callback']]);
		}
    } 
}
