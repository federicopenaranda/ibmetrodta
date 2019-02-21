<?php

namespace app\controllers\Reporte;

use yii\base\Action;
use yii\db\Transaction;
use yii\helpers\Json;
use yii\db\Query;
use mPDF;
use Yii;
use app\models\Usuario000101;
use app\models\DetalleEquipos040201;
use app\models\CodigoPeticion010404;
/**
 * Esta es la accion "create" para el controlador "Reporte030004Controller".
 */
class PdfForm053Action extends  Action
{
    public function run()
    {
        $respuesta = new \stdClass();
			#($mode,$formad,$defaul_font_size,defaul_font,margin_left,margin_right,margin_top,margin_botton,margin_header,margin_footer,orientation)
		$mpdf = new mPDF('utf-8','A4','11','Arial',20,20,43,25,10/*head*/,10/*foot*/);
		$respcot=array();
		$head = ['h1'=>utf8_encode('DIRECCIÓN TÉCNICA DE ACREDITACIÓN'),
				'h2'=>utf8_encode('INSTITUTO BOLIVIANO DE METROLOGÍA'),
				'h3'=>utf8_encode('INFORMACIÓN SOBRE EQUIPOS'),
				'h4'=>utf8_encode('DTA-FOR-053'),
				'h5'=>utf8_encode('2'),
				'h6'=>utf8_encode('2009-12-02'),
				];
		$foot = "\"La DTA del IBMETRO se reserva el derecho de modificar el formato de este formulario sin previo aviso\"";
    	$mpdf->SetHTMLHeader($this->controller->renderPartial('pdfHeader',array('head'=>$head),true));
		$mpdf->SetHTMLFooter($this->controller->renderPartial('pdfFoot',array('foot'=>$foot),true));
		if (isset($_GET['id_detalle_equipos'])){
			$models = DetalleEquipos040201::find()
                    			->distinct(true)
								->with('fkIdPeticion')
								->where(['id_detalle_equipos'=>$_GET['id_detalle_equipos']])
								->one();
			$codPet = CodigoPeticion010404::find()
								->distinct(true)
								->asArray()
								->where(['id_codigo_peticion'=>$models['fkIdPeticion']['fk_id_codigo_peticion']])
								->one();

                        
                        switch ( $models['objetivo_detalle_equipos'] )
                        {
                            case 'acreditacion_inicial': $models['objetivo_detalle_equipos'] = 'Acreditaci&oacute;n Inicial';
                                break;

                            case 'reacreditacion': $models['objetivo_detalle_equipos'] = 'Reacreditaci&oacute;n';
                                break;

                            case 'extension_acreditacion': $models['objetivo_detalle_equipos'] = 'Extensi&oacute;n de Acreditaci&oacute;n';
                                break;

                            default: $models['objetivo_detalle_equipos'] = '[ERROR AL FORMATEAR CAMPO]';
                                break;
                        }



                        switch ( $models['criterio_aceptacion_cert_detalle_equipos'] )
                        {
                            case 'lab-ibmetro': $models['criterio_aceptacion_cert_detalle_equipos'] = 'Laboratorios de IBMETRO';
                                break;

                            case 'lab-rec-ibmetro': $models['criterio_aceptacion_cert_detalle_equipos'] = 'Laboratorios reconocidos por IBMETRO';
                                break;

                            case 'lab-acred-dta': $models['criterio_aceptacion_cert_detalle_equipos'] = 'Laboratorios acreditados por la DTA';
                                break;

                            case 'lab-otros-inm': $models['criterio_aceptacion_cert_detalle_equipos'] = 'Laboratorios de otros INMs';
                                break;

                            case 'lab-acred-ona': $models['criterio_aceptacion_cert_detalle_equipos'] = 'Laboratorios acreditados por otro ONA';
                                break;

                            case 'solucion-dta-oec': $models['criterio_aceptacion_cert_detalle_equipos'] = 'Soluci&oacute;n Conjunta DTA-OEC';
                                break;

                            default: $models['criterio_aceptacion_cert_detalle_equipos'] = '[ERROR AL FORMATEAR CAMPO]';
                                break;
                        }



                        $models['personal_responsable_detalle_equipos'] = str_replace("\n", "<p></p>", $models['personal_responsable_detalle_equipos']);
                        
                        
                        
                        
                        
                        
                        
			$mpdf->WriteHTML($this->controller->renderPartial('pdfForm053',array('models'=>$models,'codPet'=>$codPet),true));
			$mpdf->Output('PdfForm053.pdf','D');
			#$mpdf->Output();
			exit;
		} else {
			$respuesta->meta=array("success"=>"false","msg"=>"Variable indefinida id_detalle_equipos");
			return $this->controller->renderPartial('read',['model'=>$respuesta,'callback'=>$_GET['callback']]);
		}
    } 
}
