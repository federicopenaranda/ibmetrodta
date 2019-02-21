<?php
namespace app\models;

use Yii;

/**
 * This is the model class for table "informe_acred_04_13_01".
 *
 * @property integer $id_informe_acred
 * @property integer $fk_id_peticion
 * @property string $observaciones_ra_oec_informe_acred
 * @property string $observaciones_ra_ee_informe_acred
 * @property string $cumplimiento_etapas_informe_acred
 * @property string $recomendacion_ra_informe_acred
 * @property string $recomendacion_fecha_informe_acred
 * @property string $toma_decision_da_informe_acred
 * @property string $toma_decision_da_fecha_informe_acred
 * @property string $fecha_creacion_informe_acred
 *
 * @property Peticion010401 $fkIdPeticion
 */
class InformeAcred041301 extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'informe_acred_04_13_01';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['fk_id_peticion'], 'required'],
            [['fk_id_peticion'], 'integer'],
            [['observaciones_ra_oec_informe_acred', 'observaciones_ra_ee_informe_acred', 'cumplimiento_etapas_informe_acred', 'recomendacion_ra_informe_acred', 'toma_decision_da_informe_acred'], 'string'],
            [['recomendacion_fecha_informe_acred', 'toma_decision_da_fecha_informe_acred', 'fecha_creacion_informe_acred'], 'safe']
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id_informe_acred' => 'Id Informe Acred',
            'fk_id_peticion' => 'Fk Id Peticion',
            'observaciones_ra_oec_informe_acred' => 'Observaciones Ra Oec Informe Acred',
            'observaciones_ra_ee_informe_acred' => 'Observaciones Ra Ee Informe Acred',
            'cumplimiento_etapas_informe_acred' => 'Cumplimiento Etapas Informe Acred',
            'recomendacion_ra_informe_acred' => 'Recomendacion Ra Informe Acred',
            'recomendacion_fecha_informe_acred' => 'Recomendacion Fecha Informe Acred',
            'toma_decision_da_informe_acred' => 'Toma Decision Da Informe Acred',
            'toma_decision_da_fecha_informe_acred' => 'Toma Decision Da Fecha Informe Acred',
            'fecha_creacion_informe_acred' => 'Fecha Creacion Informe Acred',
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
 		 'id_informe_acred',
 		 'fk_id_peticion',
 		 'observaciones_ra_oec_informe_acred',
 		 'observaciones_ra_ee_informe_acred',
 		 'cumplimiento_etapas_informe_acred',
 		 'recomendacion_ra_informe_acred',
 		 'recomendacion_fecha_informe_acred',
 		 'toma_decision_da_informe_acred',
 		 'toma_decision_da_fecha_informe_acred',
 		 'fecha_creacion_informe_acred',
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
		return array('id_informe_acred');
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
