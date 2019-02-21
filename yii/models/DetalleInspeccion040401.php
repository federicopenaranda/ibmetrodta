<?php
namespace app\models;

use Yii;

/**
 * This is the model class for table "detalle_inspeccion_04_04_01".
 *
 * @property integer $id_detalle_inspeccion
 * @property integer $fk_id_peticion
 * @property integer $estado_detalle_inspeccion
 * @property string $objetivo_detalle_inspeccion
 * @property string $nombre_detalle_inspeccion
 * @property string $tipo_detalle_inspeccion
 * @property string $matriz_inspeccionada_detalle_inspeccion
 * @property string $documento_normativo_detalle_inspeccion
 * @property string $procedimiento_inspeccion_detalle_inspeccion
 * @property string $inspeccion_se_realiza_detalle_inspeccion
 * @property string $direccion_delegaciones_detalle_inspeccion
 * @property string $inspectores_autorizados_detalle_inspeccion
 * @property string $equipos_utilizados_inspeccion_detalle_inspeccion
 * @property string $ad_patrones_referencia_detalle_inspeccion
 * @property string $ad_material_referencia_cert_detalle_inspeccion
 * @property string $fecha_creacion_detalle_inspeccion
 *
 * @property Peticion010401 $fkIdPeticion
 */
class DetalleInspeccion040401 extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'detalle_inspeccion_04_04_01';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['fk_id_peticion', 'estado_detalle_inspeccion'], 'required'],
            [['fk_id_peticion', 'estado_detalle_inspeccion'], 'integer'],
            [['objetivo_detalle_inspeccion', 'nombre_detalle_inspeccion', 'tipo_detalle_inspeccion', 'matriz_inspeccionada_detalle_inspeccion', 'documento_normativo_detalle_inspeccion', 'procedimiento_inspeccion_detalle_inspeccion', 'inspeccion_se_realiza_detalle_inspeccion', 'direccion_delegaciones_detalle_inspeccion', 'inspectores_autorizados_detalle_inspeccion', 'equipos_utilizados_inspeccion_detalle_inspeccion', 'ad_patrones_referencia_detalle_inspeccion', 'ad_material_referencia_cert_detalle_inspeccion'], 'string'],
            [['fecha_creacion_detalle_inspeccion'], 'safe']
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id_detalle_inspeccion' => 'Id Detalle Inspeccion',
            'fk_id_peticion' => 'Fk Id Peticion',
            'estado_detalle_inspeccion' => 'Estado Detalle Inspeccion',
            'objetivo_detalle_inspeccion' => 'Objetivo Detalle Inspeccion',
            'nombre_detalle_inspeccion' => 'Nombre Detalle Inspeccion',
            'tipo_detalle_inspeccion' => 'Tipo Detalle Inspeccion',
            'matriz_inspeccionada_detalle_inspeccion' => 'Matriz Inspeccionada Detalle Inspeccion',
            'documento_normativo_detalle_inspeccion' => 'Documento Normativo Detalle Inspeccion',
            'procedimiento_inspeccion_detalle_inspeccion' => 'Procedimiento Inspeccion Detalle Inspeccion',
            'inspeccion_se_realiza_detalle_inspeccion' => 'Inspeccion Se Realiza Detalle Inspeccion',
            'direccion_delegaciones_detalle_inspeccion' => 'Direccion Delegaciones Detalle Inspeccion',
            'inspectores_autorizados_detalle_inspeccion' => 'Inspectores Autorizados Detalle Inspeccion',
            'equipos_utilizados_inspeccion_detalle_inspeccion' => 'Equipos Utilizados Inspeccion Detalle Inspeccion',
            'ad_patrones_referencia_detalle_inspeccion' => 'Ad Patrones Referencia Detalle Inspeccion',
            'ad_material_referencia_cert_detalle_inspeccion' => 'Ad Material Referencia Cert Detalle Inspeccion',
            'fecha_creacion_detalle_inspeccion' => 'Fecha Creacion Detalle Inspeccion',
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
 		 'id_detalle_inspeccion',
 		 'fk_id_peticion',
 		 'estado_detalle_inspeccion',
 		 'objetivo_detalle_inspeccion',
 		 'nombre_detalle_inspeccion',
 		 'tipo_detalle_inspeccion',
 		 'matriz_inspeccionada_detalle_inspeccion',
 		 'documento_normativo_detalle_inspeccion',
 		 'procedimiento_inspeccion_detalle_inspeccion',
 		 'inspeccion_se_realiza_detalle_inspeccion',
 		 'direccion_delegaciones_detalle_inspeccion',
 		 'inspectores_autorizados_detalle_inspeccion',
 		 'equipos_utilizados_inspeccion_detalle_inspeccion',
 		 'ad_patrones_referencia_detalle_inspeccion',
 		 'ad_material_referencia_cert_detalle_inspeccion',
 		 'fecha_creacion_detalle_inspeccion',
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
		return array('id_detalle_inspeccion');
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
