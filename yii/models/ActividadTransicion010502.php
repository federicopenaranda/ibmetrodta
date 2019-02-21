<?php
namespace app\models;

use Yii;

/**
 * This is the model class for table "actividad_transicion_01_05_02".
 *
 * @property integer $fk_id_actividad
 * @property integer $fk_id_transicion
 *
 * @property Actividad010501 $fkIdActividad
 * @property Transicion010202 $fkIdTransicion
 */
class ActividadTransicion010502 extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'actividad_transicion_01_05_02';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['fk_id_actividad', 'fk_id_transicion'], 'required'],
            [['fk_id_actividad', 'fk_id_transicion'], 'integer']
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'fk_id_actividad' => 'Fk Id Actividad',
            'fk_id_transicion' => 'Fk Id Transicion',
        ];
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getFkIdActividad()
    {
        return $this->hasOne(Actividad010501::className(), ['id_actividad' => 'fk_id_actividad']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getFkIdTransicion()
    {
        return $this->hasOne(Transicion010202::className(), ['id_transicion' => 'fk_id_transicion']);
    }
	
    public function atributes() {
		return [
 		 'fk_id_actividad',
 		 'fk_id_transicion',
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
        	'Actividad010501',
        	'Transicion010202',
     	];
    }

    public function getNamePk() {
		return array('fk_id_actividad','fk_id_transicion');
    }
    
    public function getModule() {
		return '';
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
       return 'fk_id_actividad';
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
			'id_actividad'=>array('actividad_01_05_01','fk_id_actividad'),
			'id_transicion'=>array('transicion_01_02_02','fk_id_transicion'),
		);
    }
    
}
