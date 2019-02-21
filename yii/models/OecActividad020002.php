<?php
namespace app\models;

use Yii;

/**
 * This is the model class for table "oec_actividad_02_00_02".
 *
 * @property integer $fk_id_actividad_economica
 * @property integer $fk_id_oec
 *
 * @property ActividadEconomica020004 $fkIdActividadEconomica
 * @property Oec020001 $fkIdOec
 */
class OecActividad020002 extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'oec_actividad_02_00_02';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['fk_id_actividad_economica', 'fk_id_oec'], 'required'],
            [['fk_id_actividad_economica', 'fk_id_oec'], 'integer']
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'fk_id_actividad_economica' => 'Fk Id Actividad Economica',
            'fk_id_oec' => 'Fk Id Oec',
        ];
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getFkIdActividadEconomica()
    {
        return $this->hasOne(ActividadEconomica020004::className(), ['id_actividad_economica' => 'fk_id_actividad_economica']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getFkIdOec()
    {
        return $this->hasOne(Oec020001::className(), ['id_oec' => 'fk_id_oec']);
    }
	
    public function atributes() {
		return [
 		 'fk_id_actividad_economica',
 		 'fk_id_oec',
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
        	'ActividadEconomica020004',
        	'Oec020001',
     	];
    }

    public function getNamePk() {
		return array('fk_id_actividad_economica','fk_id_oec');
    }
    
    public function getModule() {
		return 'main';
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
       return 'fk_id_oec';
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
			'id_actividad_economica'=>array('actividad_economica_02_00_04','fk_id_actividad_economica'),
			'id_oec'=>array('oec_02_00_01','fk_id_oec'),
		);
    }
    
}
