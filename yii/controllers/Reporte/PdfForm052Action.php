<?php

namespace app\controllers\Reporte;

use yii\base\Action;
use yii\db\Transaction;
use yii\helpers\Json;
use yii\db\Query;
use mPDF;
use Yii;
use app\models\Usuario000101;
use app\models\InfoEnsayo040101;
use app\models\CodigoPeticion010404;

/**
 * Esta es la accion "create" para el controlador "Reporte030004Controller".
 */
class PdfForm052Action extends Action {

    public function run() {
        $respuesta = new \stdClass();
        #($mode,$formad,$defaul_font_size,defaul_font,margin_left,margin_right,margin_top,margin_botton,margin_header,margin_footer,orientation)
        $mpdf = new mPDF('utf-8', 'A4', '11', 'Arial', 20, 20, 43, 25, 10/* head */, 10/* foot */);
        $respcot = array();
        $head = ['h1' => utf8_encode('DIRECCIÓN TÉCNICA DE ACREDITACIÓN'),
            'h2' => utf8_encode('INSTITUTO BOLIVIANO DE METROLOGÍA'),
            'h3' => utf8_encode('INFORMACIÓN SOBRE ENSAYOS'),
            'h4' => utf8_encode('DTA-FOR-052'),
            'h5' => utf8_encode('2'),
            'h6' => utf8_encode('2009-12-02'),
        ];
        $foot = "\"La DTA del IBMETRO se reserva el derecho de modificar el formato de este formulario sin previo aviso\"";
        $mpdf->SetHTMLHeader($this->controller->renderPartial('pdfHeader', array('head' => $head), true));
        $mpdf->SetHTMLFooter($this->controller->renderPartial('pdfFoot', array('foot' => $foot), true));
        if (isset($_GET['id_info_ensayo'])) {
            $models = InfoEnsayo040101::find()
                    ->distinct(true)
                    ->asArray()
                    ->with('fkIdPeticion')
                    ->where(['id_info_ensayo' => $_GET['id_info_ensayo']])
                    ->one();
            $codPet = CodigoPeticion010404::find()
                    ->distinct(true)
                    ->asArray()
                    ->where(['id_codigo_peticion' => $models['fkIdPeticion']['fk_id_codigo_peticion']])
                    ->one();
            
            
            switch ( $models['objetivo_info_ensayo'] )
            {
                case 'acreditacion_inicial': $models['objetivo_info_ensayo'] = 'Acreditaci&oacute;n Inicial';
                    break;
                
                case 'reacreditacion': $models['objetivo_info_ensayo'] = 'Reacreditaci&oacute;n';
                    break;
                
                case 'extension_acreditacion': $models['objetivo_info_ensayo'] = 'Extensi&oacute;n de Acreditaci&oacute;n';
                    break;
                
                default: $models['objetivo_info_ensayo'] = '[ERROR AL FORMATEAR CAMPO]';
                    break;
            }


            
            switch ( $models['tipo_servicio_info_ensayo'] )
            {
                case 'eil': $models['tipo_servicio_info_ensayo'] = 'Realizado en las instalaciones del laboratorio';
                    break;
                
                case 'elm': $models['tipo_servicio_info_ensayo'] = 'Realizado en laboratorio movil';
                    break;
                
                case 'fl': $models['tipo_servicio_info_ensayo'] = 'Realizado fuera de laboratorio';
                    break;
                
                default: $models['tipo_servicio_info_ensayo'] = '[ERROR AL FORMATEAR CAMPO]';
                    break;
            }



            switch ( $models['categoria_info_ensayo'] )
            {
                case 'i': $models['categoria_info_ensayo'] = 'I (Ensayo Cualitativo)';
                    break;
                
                case 'ii': $models['categoria_info_ensayo'] = 'II (Ensayo Normalizado)';
                    break;
                
                case 'iii': $models['categoria_info_ensayo'] = 'III (Ensayo Normalizado)';
                    break;
                
                case 'iv': $models['categoria_info_ensayo'] = 'IV (Ensayo No Normalizado)';
                    break;
                
                case 'na': $models['categoria_info_ensayo'] = 'No Aplica';
                    break;
                
                default: $models['categoria_info_ensayo'] = '[ERROR AL FORMATEAR CAMPO]';
                    break;
            }
            
            
            $models['pesonal_autorizado_info_ensayo'] = str_replace("\n", "<p></p>", $models['pesonal_autorizado_info_ensayo']);



            $mpdf->WriteHTML($this->controller->renderPartial('pdfForm052', array('models' => $models, 'codPet' => $codPet), true));
            $mpdf->Output('PdfForm052.pdf', 'D');
            //$mpdf->Output();
            exit;
        } else {
            $respuesta->meta = array("success" => "false", "msg" => "Variable indefinida id_info_ensayo");
            return $this->controller->renderPartial('read', ['model' => $respuesta, 'callback' => $_GET['callback']]);
        }
    }

}
