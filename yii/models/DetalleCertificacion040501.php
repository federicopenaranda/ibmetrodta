<?php
namespace app\models;

use Yii;

/**
 * This is the model class for table "detalle_certificacion_04_05_01".
 *
 * @property integer $id_detalle_certificacion
 * @property integer $fk_id_peticion
 * @property integer $estado_detalle_certificacion
 * @property string $objetivo_detalle_certificacion
 * @property string $tipo_certificacion_detalle_certificacion
 * @property string $documento_normativo_detalle_certificacion
 * @property string $procedimiento_certificacion_detalle_certificacion
 * @property string $producto_certificar_detalle_certificacion
 * @property string $codigo_nace_detalle_certificacion
 * @property string $auditores_calificados_detalle_certificacion
 * @property string $expertos_tecnicos_detalle_certificacion
 * @property string $observaciones_detalle_certificacion
 * @property string $ensayos_en_produccto_detalle_certificacion
 * @property string $laboratorios_ensayos_detalle_certificacion
 * @property string $fecha_creacion_detalle_certificacion
 *
 * @property Peticion010401 $fkIdPeticion
 */
class DetalleCertificacion040501 extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'detalle_certificacion_04_05_01';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['fk_id_peticion', 'estado_detalle_certificacion'], 'required'],
            [['fk_id_peticion', 'estado_detalle_certificacion'], 'integer'],
            [['objetivo_detalle_certificacion', 'tipo_certificacion_detalle_certificacion', 'documento_normativo_detalle_certificacion', 'procedimiento_certificacion_detalle_certificacion', 'producto_certificar_detalle_certificacion', 'codigo_nace_detalle_certificacion', 'auditores_calificados_detalle_certificacion', 'expertos_tecnicos_detalle_certificacion', 'observaciones_detalle_certificacion', 'ensayos_en_produccto_detalle_certificacion', 'laboratorios_ensayos_detalle_certificacion'], 'string'],
            [['fecha_creacion_detalle_certificacion'], 'safe']
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id_detalle_certificacion' => 'Id Detalle Certificacion',
            'fk_id_peticion' => 'Fk Id Peticion',
            'estado_detalle_certificacion' => 'Estado Detalle Certificacion',
            'objetivo_detalle_certificacion' => 'Objetivo Detalle Certificacion',
            'tipo_certificacion_detalle_certificacion' => 'Tipo Certificacion Detalle Certificacion',
            'documento_normativo_detalle_certificacion' => 'Documento Normativo Detalle Certificacion',
            'procedimiento_certificacion_detalle_certificacion' => 'Procedimiento Certificacion Detalle Certificacion',
            'producto_certificar_detalle_certificacion' => 'Producto Certificar Detalle Certificacion',
            'codigo_nace_detalle_certificacion' => 'Codigo Nace Detalle Certificacion',
            'auditores_calificados_detalle_certificacion' => 'Auditores Calificados Detalle Certificacion',
            'expertos_tecnicos_detalle_certificacion' => 'Expertos Tecnicos Detalle Certificacion',
            'observaciones_detalle_certificacion' => 'Observaciones Detalle Certificacion',
            'ensayos_en_produccto_detalle_certificacion' => 'Ensayos En Produccto Detalle Certificacion',
            'laboratorios_ensayos_detalle_certificacion' => 'Laboratorios Ensayos Detalle Certificacion',
            'fecha_creacion_detalle_certificacion' => 'Fecha Creacion Detalle Certificacion',
        ];
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getFkIdPeticion()
    {
        return $this->hasOne(Peticion010401::className(), ['id_peticion' => 'fk_id_peticion']);
    }
	
    public function atributes() {
		return [
 		 'id_detalle_certificacion',
 		 'fk_id_peticion',
 		 'estado_detalle_certificacion',
 		 'objetivo_detalle_certificacion',
 		 'tipo_certificacion_detalle_certificacion',
 		 'documento_normativo_detalle_certificacion',
 		 'procedimiento_certificacion_detalle_certificacion',
 		 'producto_certificar_detalle_certificacion',
 		 'codigo_nace_detalle_certificacion',
 		 'auditores_calificados_detalle_certificacion',
 		 'expertos_tecnicos_detalle_certificacion',
 		 'observaciones_detalle_certificacion',
 		 'ensayos_en_produccto_detalle_certificacion',
 		 'laboratorios_ensayos_detalle_certificacion',
 		 'fecha_creacion_detalle_certificacion',
		]; 	
    }
	
 
	public function getListHasMany()
    {
    	return [
     	];
    }
    
    public function getListHasOne()
    {
    	return [
        	'Peticion010401',
     	];
    }

    public function getNamePk() {
		return array('id_detalle_certificacion');
    }
    
    public function getModule() {
		return 'formularios';
    }
    
    public function getDisplay() {
       return '';
    }
    
    public function getFile() {
		return array(
        );
    }
    
	public function getLogin() {
		return '';
    }
    
    public function getPrivate() {
    	return array(
		);
    }
    
    public function getSearch() {
    	return array(
		);
    }
    
    public function getNoRead() {
    	return array(
		);
    }
    public function getReferential(){
		return '';
   }
   
   public function getMain() {
       return '';
    }
   
    public function getInstance($model) {
    	switch ($model) {
    	}
	}
    
    public function findAtribute($dato) {
    	if (in_array($dato, $this->atributes()))
        	return TRUE;
        else {
        	foreach ($this->getListHasMany() as $modelRel):
            	$objRel=new $modelRel();
                if (in_array($dato,$objRel->atributes()))
                	return TRUE;
            endforeach;
            return FALSE;
        }
    }
    
    public function divideRecords($url) {
		$params=array();
		foreach ($url as $value) {
			if (strpos($value,"records")!==FAlSE){
				$str=str_replace('"[', '[',trim(urldecode($value),"recods="));
				$str=str_replace(']"', ']',$str);
				$str=str_replace('\"', '"', $str);
				$params[]=$str;
			} 
		}
		return $params;
	}
    
    public function getNameFKey() {
    	return array(
			'id_peticion'=>array('peticion_01_04_01','fk_id_peticion'),
		);
    }
    
}
