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
use app\models\Certificado041401;
use app\models\Oec020001;
/**
 * Esta es la accion "create" para el controlador "Reporte030004Controller".
 */
class PdfFormAction extends  Action
{
    public function run()
    {
        $respuesta = new \stdClass();
			#($mode,$formad,$defaul_font_size,defaul_font,margin_left,margin_right,margin_top,margin_botton,margin_header,margin_footer,orientation)
		$mpdf = new mPDF('utf-8','Legal','11','Arial',20,20,20,20,10/*head*/,10/*foot*/);
	$mpdf->showImageErrors = true;
		if (isset($_GET['id_certificado'])){

			$certificado = Certificado041401::find()
									->distinct(true)
									->with('fkIdPeticion')
									->joinWith('fkIdPeticion')
									->where(['id_certificado'=>$_GET['id_certificado']])
									->one();

			 $oec = Oec020001::find()
			 						->with('fkIdOecTipo')
			 						->joinWith('fkIdOecTipo')
			 						->where(['id_oec'=>$certificado->fkIdPeticion->fk_id_oec])
			 						->one();

			$codPet = CodigoPeticion010404::find()
								->distinct(true)
								->asArray()
								->where(['id_codigo_peticion'=>$certificado->fkIdPeticion->fk_id_codigo_peticion])
								->one();
			
			$meses = array("enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre");
			$fechaIni=strftime((date('d')-1)." de ".$meses[date('n')-1]." de %Y");
			$Y = date('Y')+3;
			$fechaFin= strftime(date('d')." de ".$meses[date('n')-1]." de $Y");
			
			$mpdf->SetWatermarkText("IBMETRO"); //Marca de agua
            		$mpdf->showWatermarkText = true; // activar/Desactiuvar marca de agua (True/false)
            		$mpdf->watermarkTextAlpha = 0.1; // Trasnparencia de la marca de agua (0-1)

			switch ($oec->fkIdOecTipo->codigo_oec_tipo)
			{
				case 'laboratorio-ensayo':
					$oec->fkIdOecTipo->codigo_oec_tipo = 'laboratorio de ensayo';
					$mpdf->WriteHTML($this->controller->renderPartial('pdfFormLab',array('models'=>$models,'codPet'=>$codPet,'certificado'=>$certificado,'oec'=>$oec,'fechaIni'=>$fechaIni,'fechaFin'=>$fechaFin,'correlativo'=>$certificado->codigo_certificado),true));
			
					$mpdf->AddPage();
					$mpdf->showWatermarkText = false; // activar/Desactiuvar marca de agua (True/false)
			
					$mpdf->WriteHTML($this->controller->renderPartial('pdfForm2Lab',array('models'=>$models,'codPet'=>$codPet,'oec'=>$oec,'correlativo'=>$certificado->codigo_certificado),true));
					$mpdf->Output('RepForm.pdf','D');

					break;

				case 'laboratorio-calibracion':
					$oec->fkIdOecTipo->codigo_oec_tipo = 'laboratorio de calibracion';
					$mpdf->WriteHTML($this->controller->renderPartial('pdfFormLab',array('models'=>$models,'codPet'=>$codPet,'oec'=>$oec,'fechaIni'=>$fechaIni,'fechaFin'=>$fechaFin,'correlativo'=>$certificado->codigo_certificado),true));
			
					$mpdf->AddPage();
					$mpdf->showWatermarkText = false; // activar/Desactiuvar marca de agua (True/false)
			
					$mpdf->WriteHTML($this->controller->renderPartial('pdfForm2Lab',array('models'=>$models,'codPet'=>$codPet,'oec'=>$oec,'correlativo'=>$certificado->codigo_certificado),true));
					$mpdf->Output('RepForm.pdf','D');

					break;
				
				case 'organismo-inspeccion':
					$oec->fkIdOecTipo->codigo_oec_tipo = 'Organismo de Inspección';
					$tipoOecM = 'ORGANISMO DE INSPECCIÓN';
					$mpdf->WriteHTML($this->controller->renderPartial('pdfFormInsp',array('models'=>$models,'codPet'=>$codPet,'oec'=>$oec,'fechaIni'=>$fechaIni,'fechaFin'=>$fechaFin,'correlativo'=>$certificado->codigo_certificado,'tipoOecM'=>$tipoOecM),true));
			
					$mpdf->AddPage();
					$mpdf->showWatermarkText = false; // activar/Desactiuvar marca de agua (True/false)
			
					$mpdf->WriteHTML($this->controller->renderPartial('pdfForm2Insp',array('models'=>$models,'codPet'=>$codPet,'oec'=>$oec,'correlativo'=>$certificado->codigo_certificado,'tipoOecM'=>$tipoOecM),true));
					$mpdf->Output('RepForm.pdf','D');

					break;
				
				case 'organismo-certificacion':
					$oec->fkIdOecTipo->codigo_oec_tipo = 'certificacion';
					$tipoOecM = 'ORGANISMO DE CERTIFICACIÓN';
					$mpdf->WriteHTML($this->controller->renderPartial('pdfFormCert',array('models'=>$models,'codPet'=>$codPet,'oec'=>$oec,'fechaIni'=>$fechaIni,'fechaFin'=>$fechaFin,'correlativo'=>$certificado->codigo_certificado,'tipoOecM'=>$tipoOecM),true));
			
					$mpdf->AddPage();
					$mpdf->showWatermarkText = false; // activar/Desactiuvar marca de agua (True/false)
			
					$mpdf->WriteHTML($this->controller->renderPartial('pdfForm2Cert',array('models'=>$models,'codPet'=>$codPet,'oec'=>$oec,'correlativo'=>$certificado->codigo_certificado),true));
					$mpdf->Output('RepForm.pdf','D');

					break;

			}

			exit;
		} else {
			$respuesta->meta=array("success"=>"false","msg"=>"Variable indefinida id_certificacion");
			return $this->controller->renderPartial('read',['model'=>$respuesta,'callback'=>$_GET['callback']]);
		}
		


		
			

			
			
		
			
	
    } 
}
