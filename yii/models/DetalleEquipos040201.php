<?php
namespace app\models;

use Yii;

/**
 * This is the model class for table "detalle_equipos_04_02_01".
 *
 * @property integer $id_detalle_equipos
 * @property integer $fk_id_peticion
 * @property integer $estado_detalle_equipos
 * @property string $objetivo_detalle_equipos
 * @property string $nombre_detalle_equipos
 * @property string $norma_detalle_equipos
 * @property string $matriz_detalle_equipos
 * @property string $tipo_equipo_detalle_equipos
 * @property string $personal_responsable_detalle_equipos
 * @property string $codigo_equipo_detalle_equipos
 * @property string $numero_serie_detalle_equipos
 * @property string $nombre_fabricante_detalle_equipos
 * @property string $fecha_puesta_servicio_detalle_equipos
 * @property string $fecha_ultima_calibracion_detalle_equipos
 * @property string $organismo_realizo_calibracion_detalle_equipos
 * @property string $certificado_calibracion_detalle_equipos
 * @property string $fecha_proxima_calibracion_detalle_equipos
 * @property string $criterio_aceptacion_cert_detalle_equipos
 * @property string $procedimientos_uso_detalle_equipos
 * @property string $patrones_comprobaciones_detalle_equipos
 * @property string $fecha_creacion_detalle_equipos
 *
 * @property Peticion010401 $fkIdPeticion
 */
class DetalleEquipos040201 extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'detalle_equipos_04_02_01';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['fk_id_peticion', 'estado_detalle_equipos'], 'required'],
            [['fk_id_peticion', 'estado_detalle_equipos'], 'integer'],
            [['objetivo_detalle_equipos', 'nombre_detalle_equipos', 'norma_detalle_equipos', 'matriz_detalle_equipos', 'tipo_equipo_detalle_equipos', 'personal_responsable_detalle_equipos', 'codigo_equipo_detalle_equipos', 'numero_serie_detalle_equipos', 'nombre_fabricante_detalle_equipos', 'organismo_realizo_calibracion_detalle_equipos', 'certificado_calibracion_detalle_equipos', 'criterio_aceptacion_cert_detalle_equipos', 'procedimientos_uso_detalle_equipos', 'patrones_comprobaciones_detalle_equipos'], 'string'],
            [['fecha_puesta_servicio_detalle_equipos', 'fecha_ultima_calibracion_detalle_equipos', 'fecha_proxima_calibracion_detalle_equipos', 'fecha_creacion_detalle_equipos'], 'safe']
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id_detalle_equipos' => 'Id Detalle Equipos',
            'fk_id_peticion' => 'Fk Id Peticion',
            'estado_detalle_equipos' => 'Estado Detalle Equipos',
            'objetivo_detalle_equipos' => 'Objetivo Detalle Equipos',
            'nombre_detalle_equipos' => 'Nombre Detalle Equipos',
            'norma_detalle_equipos' => 'Norma Detalle Equipos',
            'matriz_detalle_equipos' => 'Matriz Detalle Equipos',
            'tipo_equipo_detalle_equipos' => 'Tipo Equipo Detalle Equipos',
            'personal_responsable_detalle_equipos' => 'Personal Responsable Detalle Equipos',
            'codigo_equipo_detalle_equipos' => 'Codigo Equipo Detalle Equipos',
            'numero_serie_detalle_equipos' => 'Numero Serie Detalle Equipos',
            'nombre_fabricante_detalle_equipos' => 'Nombre Fabricante Detalle Equipos',
            'fecha_puesta_servicio_detalle_equipos' => 'Fecha Puesta Servicio Detalle Equipos',
            'fecha_ultima_calibracion_detalle_equipos' => 'Fecha Ultima Calibracion Detalle Equipos',
            'organismo_realizo_calibracion_detalle_equipos' => 'Organismo Realizo Calibracion Detalle Equipos',
            'certificado_calibracion_detalle_equipos' => 'Certificado Calibracion Detalle Equipos',
            'fecha_proxima_calibracion_detalle_equipos' => 'Fecha Proxima Calibracion Detalle Equipos',
            'criterio_aceptacion_cert_detalle_equipos' => 'Criterio Aceptacion Cert Detalle Equipos',
            'procedimientos_uso_detalle_equipos' => 'Procedimientos Uso Detalle Equipos',
            'patrones_comprobaciones_detalle_equipos' => 'Patrones Comprobaciones Detalle Equipos',
            'fecha_creacion_detalle_equipos' => 'Fecha Creacion Detalle Equipos',
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
 		 'id_detalle_equipos',
 		 'fk_id_peticion',
 		 'estado_detalle_equipos',
 		 'objetivo_detalle_equipos',
 		 'nombre_detalle_equipos',
 		 'norma_detalle_equipos',
 		 'matriz_detalle_equipos',
 		 'tipo_equipo_detalle_equipos',
 		 'personal_responsable_detalle_equipos',
 		 'codigo_equipo_detalle_equipos',
 		 'numero_serie_detalle_equipos',
 		 'nombre_fabricante_detalle_equipos',
 		 'fecha_puesta_servicio_detalle_equipos',
 		 'fecha_ultima_calibracion_detalle_equipos',
 		 'organismo_realizo_calibracion_detalle_equipos',
 		 'certificado_calibracion_detalle_equipos',
 		 'fecha_proxima_calibracion_detalle_equipos',
 		 'criterio_aceptacion_cert_detalle_equipos',
 		 'procedimientos_uso_detalle_equipos',
 		 'patrones_comprobaciones_detalle_equipos',
 		 'fecha_creacion_detalle_equipos',
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
		return array('id_detalle_equipos');
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
