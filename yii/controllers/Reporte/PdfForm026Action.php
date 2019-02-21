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
use app\models\AlcanceAcreditacionCert041303;
use app\models\AlcanceAcreditacionInsp041303;
use app\models\PersonalAutorizado041303;
use app\models\AnexoConvenio041301;
use app\models\AlcanceAcreditacionLab041303;
/**
 * Esta es la accion "create" para el controlador "Reporte030004Controller".
 */
class PdfForm026Action extends  Action
{
    public function run()
    {
        $respuesta = new \stdClass();
			#($mode,$formad,$defaul_font_size,defaul_font,margin_left,margin_right,margin_top,margin_botton,margin_header,margin_footer,orientation)
		$mpdf = new mPDF('utf-8','A4','11','Arial',20,20,43,25,10/*head*/,10/*foot*/);
		$respcot=array();
		$head = ['h1'=>utf8_encode('DIRECCIÓN TÉCNICA DE ACREDITACIÓN'),
				'h2'=>utf8_encode('INSTITUTO BOLIVIANO DE METROLOGÍA'),
				'h3'=>utf8_encode('ANEXO 2 AL CONVENIO Y CERTIFICADO <br /> DE ACREDITACIÓN'),
				'h4'=>utf8_encode('DTA-FOR-026'),
				'h5'=>utf8_encode('7'),
				'h6'=>utf8_encode('2011-09-16'),
				];
		$foot = "\"La DTA del IBMETRO se reserva el derecho de modificar el formato de este formulario sin previo aviso\"";
    	//$mpdf->SetHTMLHeader($this->controller->renderPartial('pdfHeader',array('head'=>$head),true));
		//$mpdf->SetHTMLFooter($this->controller->renderPartial('pdfFoot',array('foot'=>$foot),true));
		
		if (isset($_GET['codigo_peticion'])){

			$pets = Peticion010401::find()
								->with('fkIdCodigoPeticion')
								->joinWith('fkIdCodigoPeticion')
								->where(['codigo_peticion'=>$_GET['codigo_peticion']])
								->one();

			#$respcot = $pets->fkIdCodigoPeticion->codigo_peticion;
			$oec = Oec020001::find()
								->distinct(true)
								->with('fkIdOecTipo','fkIdPais','peticion010401s','fkIdNormaReferencia')
								->joinWith('peticion010401s')
								->where(['peticion_01_04_01.id_peticion'=>$pets->id_peticion])
								->one();
			$anCon = AnexoConvenio041301::find()
								->asArray()
								->with('alcanceAcreditacionLab041303s','alcanceAcreditacionInsp041303s','alcanceAcreditacionCert041303s','personalAutorizado041303s')
								->joinWith('alcanceAcreditacionLab041303s')
								->where(['fk_id_peticion'=>$pets->id_peticion])
								->all();

			$anCon2 = AnexoConvenio041301::find()
								//->asArray()
								->where(['fk_id_peticion'=>$pets->id_peticion])
								->all();

			
			$alAc=[];
			$sw=0;
			if (strcmp(trim($oec->fkIdOecTipo->codigo_oec_tipo),"laboratorio-ensayo") == 0 || strcmp(trim($oec->fkIdOecTipo->codigo_oec_tipo),"laboratorio-calibracion") == 0) {

				$alcance = AlcanceAcreditacionLab041303::find()
						->asArray()
						->where(['fk_id_anexo_convenio'=>$anCon2[0]->id_anexo_convenio])
						->all();

				$mpdf->SetHTMLHeader($this->controller->renderPartial('pdfHeader',array('head'=>$head),true));
				$mpdf->SetHTMLFooter($this->controller->renderPartial('pdfFoot',array('foot'=>$foot),true));
				$mpdf->WriteHTML($this->controller->renderPartial('pdfForm026lab',array('pet'=>$pets,'oec'=>$oec,'alAcs'=>$alAc,'tipo'=>$tipo,'perAut'=>$perAut,'anCon'=>$anCon,'alcance'=>$alcance,true)));
				
				$sw=1;
			}
			
			if (strcmp(trim($oec->fkIdOecTipo->codigo_oec_tipo),"organismo-inspeccion") == 0) {

				$alcance = AlcanceAcreditacionInsp041303::find()
						->asArray()
						->where(['fk_id_anexo_convenio'=>$anCon2[0]->id_anexo_convenio])
						->all();

				if($sw == 1)
					$mpdf->AddPage();
				$mpdf->SetHTMLHeader($this->controller->renderPartial('pdfHeader',array('head'=>$head),true));
				$mpdf->SetHTMLFooter($this->controller->renderPartial('pdfFoot',array('foot'=>$foot),true));
				$mpdf->WriteHTML($this->controller->renderPartial('pdfForm026ins',array('pet'=>$pets,'oec'=>$oec,'alAcs'=>$alAc,'tipo'=>$tipo,'perAut'=>$perAut,'anCon'=>$anCon,'alcance'=>$alcance,true)));
				$sw=1;
			}
	
			if (strcmp(trim($oec->fkIdOecTipo->codigo_oec_tipo),"organismo-certificacion") == 0) {

				$alcance = AlcanceAcreditacionCert041303::find()
						->asArray()
						->where(['fk_id_anexo_convenio'=>$anCon2[0]->id_anexo_convenio])
						->all();

				if($sw == 1)
					$mpdf->AddPage();
				$mpdf->SetHTMLHeader($this->controller->renderPartial('pdfHeader',array('head'=>$head),true));
				$mpdf->SetHTMLFooter($this->controller->renderPartial('pdfFoot',array('foot'=>$foot),true));
				$mpdf->WriteHTML($this->controller->renderPartial('pdfForm026cert',array('pet'=>$pets,'oec'=>$oec,'alAcs'=>$alAc,'tipo'=>$tipo,'perAut'=>$perAut,'anCon'=>$anCon,true)));
			}
			
			//$mpdf->WriteHTML($this->controller->renderPartial('pdfForm026',array('pet'=>$pets,'oec'=>$oec,'alAcs'=>$alAc,'tipo'=>$tipo,'perAut'=>$perAut,'anCon'=>$anCon,'tipo1'=>$tipo1,'tipo2'=>$tipo2,'tipo3'=>$tipo3,'alcance'=>$alcance,true)));
		    $mpdf->Output('PdfForm026.pdf','D');
		    //$mpdf->Output();
			exit;
		} else {
			$respuesta->meta=array("success"=>"false","msg"=>"Variable indefinida codigo_peticion");
			return $this->controller->renderPartial('read',['model'=>$respuesta,'callback'=>$_GET['callback']]);
		}
    } 
}
