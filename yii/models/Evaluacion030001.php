<?php
namespace app\models;

use Yii;

/**
 * This is the model class for table "evaluacion_03_00_01".
 *
 * @property integer $id_evaluacion
 * @property integer $fk_id_peticion
 * @property integer $fk_id_oec_contacto_alta_direccion
 * @property integer $fk_id_oec_contacto_gerente_tecnico
 * @property integer $fk_id_oec_contacto_gerente_calidad
 * @property string $codigo_evaluacion
 * @property string $fecha_inicio_evaluacion
 * @property string $fecha_fin_evaluacion
 * @property string $objetivo_evaluacion
 * @property string $documento_referencia_evaluacion
 * @property string $identificacion_manual_evaluacion
 * @property string $fecha_reunion_inicial_evaluacion
 * @property string $hora_reunion_inicial_evaluacion
 * @property string $fecha_reunion_ee_evaluacion
 * @property string $hora_reunion_ee_evaluacion
 * @property string $fecha_reunion_final_evaluacion
 * @property string $hora_reunion_final_evaluacion
 * @property string $idioma_evaluacion
 * @property string $observacion_ra_oec_evaluacion
 * @property string $observacion_ra_ee_evaluacion
 * @property string $cumplimiento_etapas_evaluacion
 * @property string $recomendacion_ra_evaluacion
 * @property string $recomendacion_fecha_evaluacion
 * @property string $decision_da_evaluacion
 * @property string $decision_fecha_da_evaluacion
 * @property string $fecha_creacion_evaluacion
 *
 * @property AlcanceAcreditacionCert030003[] $alcanceAcreditacionCert030003s
 * @property AlcanceAcreditacionInsp030003[] $alcanceAcreditacionInsp030003s
 * @property AlcanceAcreditacionLab030003[] $alcanceAcreditacionLab030003s
 * @property OecContacto020003 $fkIdOecContactoAltaDireccion
 * @property OecContacto020003 $fkIdOecContactoGerenteTecnico
 * @property OecContacto020003 $fkIdOecContactoGerenteCalidad
 * @property Peticion010401 $fkIdPeticion
 * @property PlanEvaluacion030003[] $planEvaluacion030003s
 */
class Evaluacion030001 extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'evaluacion_03_00_01';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['fk_id_peticion', 'fk_id_oec_contacto_alta_direccion', 'fk_id_oec_contacto_gerente_tecnico', 'fk_id_oec_contacto_gerente_calidad', 'codigo_evaluacion'], 'required'],
            [['fk_id_peticion', 'fk_id_oec_contacto_alta_direccion', 'fk_id_oec_contacto_gerente_tecnico', 'fk_id_oec_contacto_gerente_calidad'], 'integer'],
            [['fecha_inicio_evaluacion', 'fecha_fin_evaluacion', 'fecha_reunion_inicial_evaluacion', 'hora_reunion_inicial_evaluacion', 'fecha_reunion_ee_evaluacion', 'hora_reunion_ee_evaluacion', 'fecha_reunion_final_evaluacion', 'hora_reunion_final_evaluacion', 'recomendacion_fecha_evaluacion', 'decision_fecha_da_evaluacion', 'fecha_creacion_evaluacion'], 'safe'],
            [['objetivo_evaluacion', 'documento_referencia_evaluacion', 'identificacion_manual_evaluacion', 'idioma_evaluacion', 'observacion_ra_oec_evaluacion', 'observacion_ra_ee_evaluacion', 'cumplimiento_etapas_evaluacion', 'recomendacion_ra_evaluacion', 'decision_da_evaluacion'], 'string'],
            [['codigo_evaluacion'], 'string', 'max' => 45]
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id_evaluacion' => 'Id Evaluacion',
            'fk_id_peticion' => 'Fk Id Peticion',
            'fk_id_oec_contacto_alta_direccion' => 'Fk Id Oec Contacto Alta Direccion',
            'fk_id_oec_contacto_gerente_tecnico' => 'Fk Id Oec Contacto Gerente Tecnico',
            'fk_id_oec_contacto_gerente_calidad' => 'Fk Id Oec Contacto Gerente Calidad',
            'codigo_evaluacion' => 'Codigo Evaluacion',
            'fecha_inicio_evaluacion' => 'Fecha Inicio Evaluacion',
            'fecha_fin_evaluacion' => 'Fecha Fin Evaluacion',
            'objetivo_evaluacion' => 'Objetivo Evaluacion',
            'documento_referencia_evaluacion' => 'Documento Referencia Evaluacion',
            'identificacion_manual_evaluacion' => 'Identificacion Manual Evaluacion',
            'fecha_reunion_inicial_evaluacion' => 'Fecha Reunion Inicial Evaluacion',
            'hora_reunion_inicial_evaluacion' => 'Hora Reunion Inicial Evaluacion',
            'fecha_reunion_ee_evaluacion' => 'Fecha Reunion Ee Evaluacion',
            'hora_reunion_ee_evaluacion' => 'Hora Reunion Ee Evaluacion',
            'fecha_reunion_final_evaluacion' => 'Fecha Reunion Final Evaluacion',
            'hora_reunion_final_evaluacion' => 'Hora Reunion Final Evaluacion',
            'idioma_evaluacion' => 'Idioma Evaluacion',
            'observacion_ra_oec_evaluacion' => 'Observacion Ra Oec Evaluacion',
            'observacion_ra_ee_evaluacion' => 'Observacion Ra Ee Evaluacion',
            'cumplimiento_etapas_evaluacion' => 'Cumplimiento Etapas Evaluacion',
            'recomendacion_ra_evaluacion' => 'Recomendacion Ra Evaluacion',
            'recomendacion_fecha_evaluacion' => 'Recomendacion Fecha Evaluacion',
            'decision_da_evaluacion' => 'Decision Da Evaluacion',
            'decision_fecha_da_evaluacion' => 'Decision Fecha Da Evaluacion',
            'fecha_creacion_evaluacion' => 'Fecha Creacion Evaluacion',
        ];
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getAlcanceAcreditacionCert030003s()
    {
        return $this->hasMany(AlcanceAcreditacionCert030003::className(), ['fk_id_evaluacion' => 'id_evaluacion']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getAlcanceAcreditacionInsp030003s()
    {
        return $this->hasMany(AlcanceAcreditacionInsp030003::className(), ['fk_id_evaluacion' => 'id_evaluacion']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getAlcanceAcreditacionLab030003s()
    {
        return $this->hasMany(AlcanceAcreditacionLab030003::className(), ['fk_id_evaluacion' => 'id_evaluacion']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getFkIdOecContactoAltaDireccion()
    {
        return $this->hasOne(OecContacto020003::className(), ['id_oec_contacto' => 'fk_id_oec_contacto_alta_direccion'])->from('oec_contacto_02_00_03 cad');
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getFkIdOecContactoGerenteTecnico()
    {
        return $this->hasOne(OecContacto020003::className(), ['id_oec_contacto' => 'fk_id_oec_contacto_gerente_tecnico'])->from('oec_contacto_02_00_03 cgt');
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getFkIdOecContactoGerenteCalidad()
    {
        return $this->hasOne(OecContacto020003::className(), ['id_oec_contacto' => 'fk_id_oec_contacto_gerente_calidad'])->from('oec_contacto_02_00_03 cgc');
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
    public function getPlanEvaluacion030003s()
    {
        return $this->hasMany(PlanEvaluacion030003::className(), ['fk_id_evaluacion' => 'id_evaluacion']);
    }
	
    public function atributes() {
		return [
 		 'id_evaluacion',
 		 'fk_id_peticion',
 		 'fk_id_oec_contacto_alta_direccion',
 		 'fk_id_oec_contacto_gerente_tecnico',
 		 'fk_id_oec_contacto_gerente_calidad',
 		 'codigo_evaluacion',
 		 'fecha_inicio_evaluacion',
 		 'fecha_fin_evaluacion',
 		 'objetivo_evaluacion',
 		 'documento_referencia_evaluacion',
 		 'identificacion_manual_evaluacion',
 		 'fecha_reunion_inicial_evaluacion',
 		 'hora_reunion_inicial_evaluacion',
 		 'fecha_reunion_ee_evaluacion',
 		 'hora_reunion_ee_evaluacion',
 		 'fecha_reunion_final_evaluacion',
 		 'hora_reunion_final_evaluacion',
 		 'idioma_evaluacion',
 		 'observacion_ra_oec_evaluacion',
 		 'observacion_ra_ee_evaluacion',
 		 'cumplimiento_etapas_evaluacion',
 		 'recomendacion_ra_evaluacion',
 		 'recomendacion_fecha_evaluacion',
 		 'decision_da_evaluacion',
 		 'decision_fecha_da_evaluacion',
 		 'fecha_creacion_evaluacion',
		]; 	
    }
	
 
	public function getListHasMany()
    {
    	return [
        	 'AlcanceAcreditacionCert030003',
        	 'AlcanceAcreditacionInsp030003',
        	 'AlcanceAcreditacionLab030003',
        	 'PlanEvaluacion030003',
     	];
    }
    
    public function getListHasOne()
    {
    	return [
        	'OecContacto020003',
        	'OecContacto020003',
        	'OecContacto020003',
        	'Peticion010401',
     	];
    }

    public function getNamePk() {
		return array('id_evaluacion');
    }
    
    public function getModule() {
		return 'evaluacion';
    }
    
    public function getDisplay() {
       return 'codigo_evaluacion';
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
			'codigo_evaluacion',
			'fecha_inicio_evaluacion',
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
			case 'AlcanceAcreditacionCert030003':
        		return new AlcanceAcreditacionCert030003();
                break;
			case 'AlcanceAcreditacionInsp030003':
        		return new AlcanceAcreditacionInsp030003();
                break;
			case 'AlcanceAcreditacionLab030003':
        		return new AlcanceAcreditacionLab030003();
                break;
			case 'PlanEvaluacion030003':
        		return new PlanEvaluacion030003();
                break;
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
			'id_oec_contacto'=>array('oec_contacto_02_00_03','fk_id_oec_contacto_alta_direccion'),
			'id_oec_contacto'=>array('oec_contacto_02_00_03','fk_id_oec_contacto_gerente_tecnico'),
			'id_oec_contacto'=>array('oec_contacto_02_00_03','fk_id_oec_contacto_gerente_calidad'),
			'id_peticion'=>array('peticion_01_04_01','fk_id_peticion'),
		);
    }
    
}
