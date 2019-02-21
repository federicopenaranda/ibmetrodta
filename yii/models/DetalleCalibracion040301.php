<?php
namespace app\models;

use Yii;

/**
 * This is the model class for table "detalle_calibracion_04_03_01".
 *
 * @property integer $id_detalle_calibracion
 * @property integer $fk_id_peticion
 * @property integer $fk_id_campo_calibracion
 * @property integer $estado_detalle_calibracion
 * @property string $objetivo_detalle_calibracion
 * @property string $descripcion_detalle_calibracion
 * @property string $norma_detalle_calibracion
 * @property string $equipo_calibrado_detalle_calibracion
 * @property string $tipo_servicio_detalle_calibracion
 * @property string $personal_autorizado_detalle_calibracion
 * @property string $rango_calibracion_detalle_calibracion
 * @property string $mejor_capacidad_medicion_detalle_calibracion
 * @property string $equipos_utilizados_detalle_calibracion
 * @property string $ad_estimacion_incertidumbre_detalle_calibracion
 * @property string $ad_patrones_referencia_detalle_calibracion
 * @property string $ad_manipulacion_patrones_referencia_detalle_calibracion
 * @property string $ad_fecha_ultima_calibracion_detalle_calibracion
 * @property string $ad_organismo_realizo_calibracion_detalle_calibracion
 * @property string $ad_certificado_calibracion_detalle_calibracion
 * @property string $ad_fecha_proxima_calibracion_detalle_calibracion
 * @property string $ad_declaracion_trazabilidad_detalle_calibracion
 * @property string $ad_criterio_aceptacion_detalle_calibracion
 * @property string $ad_comparaciones_interlaboratorios_detalle_calibracion
 * @property string $fecha_creacion_detalle_calibracion
 *
 * @property Peticion010401 $fkIdPeticion
 * @property CampoCalibracion040004 $fkIdCampoCalibracion
 */
class DetalleCalibracion040301 extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'detalle_calibracion_04_03_01';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['fk_id_peticion', 'fk_id_campo_calibracion', 'estado_detalle_calibracion'], 'required'],
            [['fk_id_peticion', 'fk_id_campo_calibracion', 'estado_detalle_calibracion'], 'integer'],
            [['objetivo_detalle_calibracion', 'descripcion_detalle_calibracion', 'norma_detalle_calibracion', 'equipo_calibrado_detalle_calibracion', 'tipo_servicio_detalle_calibracion', 'personal_autorizado_detalle_calibracion', 'rango_calibracion_detalle_calibracion', 'mejor_capacidad_medicion_detalle_calibracion', 'equipos_utilizados_detalle_calibracion', 'ad_estimacion_incertidumbre_detalle_calibracion', 'ad_patrones_referencia_detalle_calibracion', 'ad_manipulacion_patrones_referencia_detalle_calibracion', 'ad_organismo_realizo_calibracion_detalle_calibracion', 'ad_certificado_calibracion_detalle_calibracion', 'ad_declaracion_trazabilidad_detalle_calibracion', 'ad_criterio_aceptacion_detalle_calibracion', 'ad_comparaciones_interlaboratorios_detalle_calibracion'], 'string'],
            [['ad_fecha_ultima_calibracion_detalle_calibracion', 'ad_fecha_proxima_calibracion_detalle_calibracion', 'fecha_creacion_detalle_calibracion'], 'safe']
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id_detalle_calibracion' => 'Id Detalle Calibracion',
            'fk_id_peticion' => 'Fk Id Peticion',
            'fk_id_campo_calibracion' => 'Fk Id Campo Calibracion',
            'estado_detalle_calibracion' => 'Estado Detalle Calibracion',
            'objetivo_detalle_calibracion' => 'Objetivo Detalle Calibracion',
            'descripcion_detalle_calibracion' => 'Descripcion Detalle Calibracion',
            'norma_detalle_calibracion' => 'Norma Detalle Calibracion',
            'equipo_calibrado_detalle_calibracion' => 'Equipo Calibrado Detalle Calibracion',
            'tipo_servicio_detalle_calibracion' => 'Tipo Servicio Detalle Calibracion',
            'personal_autorizado_detalle_calibracion' => 'Personal Autorizado Detalle Calibracion',
            'rango_calibracion_detalle_calibracion' => 'Rango Calibracion Detalle Calibracion',
            'mejor_capacidad_medicion_detalle_calibracion' => 'Mejor Capacidad Medicion Detalle Calibracion',
            'equipos_utilizados_detalle_calibracion' => 'Equipos Utilizados Detalle Calibracion',
            'ad_estimacion_incertidumbre_detalle_calibracion' => 'Ad Estimacion Incertidumbre Detalle Calibracion',
            'ad_patrones_referencia_detalle_calibracion' => 'Ad Patrones Referencia Detalle Calibracion',
            'ad_manipulacion_patrones_referencia_detalle_calibracion' => 'Ad Manipulacion Patrones Referencia Detalle Calibracion',
            'ad_fecha_ultima_calibracion_detalle_calibracion' => 'Ad Fecha Ultima Calibracion Detalle Calibracion',
            'ad_organismo_realizo_calibracion_detalle_calibracion' => 'Ad Organismo Realizo Calibracion Detalle Calibracion',
            'ad_certificado_calibracion_detalle_calibracion' => 'Ad Certificado Calibracion Detalle Calibracion',
            'ad_fecha_proxima_calibracion_detalle_calibracion' => 'Ad Fecha Proxima Calibracion Detalle Calibracion',
            'ad_declaracion_trazabilidad_detalle_calibracion' => 'Ad Declaracion Trazabilidad Detalle Calibracion',
            'ad_criterio_aceptacion_detalle_calibracion' => 'Ad Criterio Aceptacion Detalle Calibracion',
            'ad_comparaciones_interlaboratorios_detalle_calibracion' => 'Ad Comparaciones Interlaboratorios Detalle Calibracion',
            'fecha_creacion_detalle_calibracion' => 'Fecha Creacion Detalle Calibracion',
        ];
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getFkIdPeticion()
    {
        return $this->hasOne(Peticion010401::className(), ['id_peticion' => 'fk_id_peticion']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getFkIdCampoCalibracion()
    {
        return $this->hasOne(CampoCalibracion040004::className(), ['id_campo_calibracion' => 'fk_id_campo_calibracion']);
    }
	
    public function atributes() {
		return [
 		 'id_detalle_calibracion',
 		 'fk_id_peticion',
 		 'fk_id_campo_calibracion',
 		 'estado_detalle_calibracion',
 		 'objetivo_detalle_calibracion',
 		 'descripcion_detalle_calibracion',
 		 'norma_detalle_calibracion',
 		 'equipo_calibrado_detalle_calibracion',
 		 'tipo_servicio_detalle_calibracion',
 		 'personal_autorizado_detalle_calibracion',
 		 'rango_calibracion_detalle_calibracion',
 		 'mejor_capacidad_medicion_detalle_calibracion',
 		 'equipos_utilizados_detalle_calibracion',
 		 'ad_estimacion_incertidumbre_detalle_calibracion',
 		 'ad_patrones_referencia_detalle_calibracion',
 		 'ad_manipulacion_patrones_referencia_detalle_calibracion',
 		 'ad_fecha_ultima_calibracion_detalle_calibracion',
 		 'ad_organismo_realizo_calibracion_detalle_calibracion',
 		 'ad_certificado_calibracion_detalle_calibracion',
 		 'ad_fecha_proxima_calibracion_detalle_calibracion',
 		 'ad_declaracion_trazabilidad_detalle_calibracion',
 		 'ad_criterio_aceptacion_detalle_calibracion',
 		 'ad_comparaciones_interlaboratorios_detalle_calibracion',
 		 'fecha_creacion_detalle_calibracion',
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
        	'CampoCalibracion040004',
     	];
    }

    public function getNamePk() {
		return array('id_detalle_calibracion');
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
			'id_campo_calibracion'=>array('campo_calibracion_04_00_04','fk_id_campo_calibracion'),
		);
    }
    
}
