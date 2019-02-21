<?php
namespace app\models;

use Yii;

/**
 * This is the model class for table "info_ensayo_04_01_01".
 *
 * @property integer $id_info_ensayo
 * @property integer $fk_id_peticion
 * @property integer $estado_info_ensayo
 * @property string $objetivo_info_ensayo
 * @property string $nombre_info_ensayo
 * @property string $norma_info_ensayo
 * @property string $matriz_info_ensayo
 * @property string $tipo_servicio_info_ensayo
 * @property string $categoria_info_ensayo
 * @property string $pesonal_autorizado_info_ensayo
 * @property string $rango_medicion_info_ensayo
 * @property string $incertidumbre_medicion_info_ensayo
 * @property string $lista_equipos_utilizados_info_ensayo
 * @property string $ad_calculo_incertidumbre_info_ensayo
 * @property string $ad_confirmacion_aplicacion_info_ensayo
 * @property string $ad_validacion_info_ensayo
 * @property string $ad_patrones_referencia_info_ensayo
 * @property string $ad_material_referencia_info_ensayo
 * @property string $ad_comparaciones_interlaboratorios_info_ensayo
 * @property string $fecha_creacion_info_ensayo
 *
 * @property Peticion010401 $fkIdPeticion
 */
class InfoEnsayo040101 extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'info_ensayo_04_01_01';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['fk_id_peticion', 'estado_info_ensayo'], 'required'],
            [['fk_id_peticion', 'estado_info_ensayo'], 'integer'],
            [['objetivo_info_ensayo', 'nombre_info_ensayo', 'norma_info_ensayo', 'matriz_info_ensayo', 'tipo_servicio_info_ensayo', 'categoria_info_ensayo', 'pesonal_autorizado_info_ensayo', 'rango_medicion_info_ensayo', 'incertidumbre_medicion_info_ensayo', 'lista_equipos_utilizados_info_ensayo', 'ad_calculo_incertidumbre_info_ensayo', 'ad_confirmacion_aplicacion_info_ensayo', 'ad_validacion_info_ensayo', 'ad_patrones_referencia_info_ensayo', 'ad_material_referencia_info_ensayo', 'ad_comparaciones_interlaboratorios_info_ensayo'], 'string'],
            [['fecha_creacion_info_ensayo'], 'safe']
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id_info_ensayo' => 'Id Info Ensayo',
            'fk_id_peticion' => 'Fk Id Peticion',
            'estado_info_ensayo' => 'Estado Info Ensayo',
            'objetivo_info_ensayo' => 'Objetivo Info Ensayo',
            'nombre_info_ensayo' => 'Nombre Info Ensayo',
            'norma_info_ensayo' => 'Norma Info Ensayo',
            'matriz_info_ensayo' => 'Matriz Info Ensayo',
            'tipo_servicio_info_ensayo' => 'Tipo Servicio Info Ensayo',
            'categoria_info_ensayo' => 'Categoria Info Ensayo',
            'pesonal_autorizado_info_ensayo' => 'Pesonal Autorizado Info Ensayo',
            'rango_medicion_info_ensayo' => 'Rango Medicion Info Ensayo',
            'incertidumbre_medicion_info_ensayo' => 'Incertidumbre Medicion Info Ensayo',
            'lista_equipos_utilizados_info_ensayo' => 'Lista Equipos Utilizados Info Ensayo',
            'ad_calculo_incertidumbre_info_ensayo' => 'Ad Calculo Incertidumbre Info Ensayo',
            'ad_confirmacion_aplicacion_info_ensayo' => 'Ad Confirmacion Aplicacion Info Ensayo',
            'ad_validacion_info_ensayo' => 'Ad Validacion Info Ensayo',
            'ad_patrones_referencia_info_ensayo' => 'Ad Patrones Referencia Info Ensayo',
            'ad_material_referencia_info_ensayo' => 'Ad Material Referencia Info Ensayo',
            'ad_comparaciones_interlaboratorios_info_ensayo' => 'Ad Comparaciones Interlaboratorios Info Ensayo',
            'fecha_creacion_info_ensayo' => 'Fecha Creacion Info Ensayo',
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
 		 'id_info_ensayo',
 		 'fk_id_peticion',
 		 'estado_info_ensayo',
 		 'objetivo_info_ensayo',
 		 'nombre_info_ensayo',
 		 'norma_info_ensayo',
 		 'matriz_info_ensayo',
 		 'tipo_servicio_info_ensayo',
 		 'categoria_info_ensayo',
 		 'pesonal_autorizado_info_ensayo',
 		 'rango_medicion_info_ensayo',
 		 'incertidumbre_medicion_info_ensayo',
 		 'lista_equipos_utilizados_info_ensayo',
 		 'ad_calculo_incertidumbre_info_ensayo',
 		 'ad_confirmacion_aplicacion_info_ensayo',
 		 'ad_validacion_info_ensayo',
 		 'ad_patrones_referencia_info_ensayo',
 		 'ad_material_referencia_info_ensayo',
 		 'ad_comparaciones_interlaboratorios_info_ensayo',
 		 'fecha_creacion_info_ensayo',
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
		return array('id_info_ensayo');
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
