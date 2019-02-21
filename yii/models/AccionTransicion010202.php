<?php
namespace app\models;

use Yii;

/**
 * This is the model class for table "accion_transicion_01_02_02".
 *
 * @property integer $fk_id_transicion
 * @property integer $fk_id_accion
 *
 * @property Transicion010202 $fkIdTransicion
 * @property Accion010201 $fkIdAccion
 */
class AccionTransicion010202 extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'accion_transicion_01_02_02';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['fk_id_transicion', 'fk_id_accion'], 'required'],
            [['fk_id_transicion', 'fk_id_accion'], 'integer']
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'fk_id_transicion' => 'Fk Id Transicion',
            'fk_id_accion' => 'Fk Id Accion',
        ];
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getFkIdTransicion()
    {
        return $this->hasOne(Transicion010202::className(), ['id_transicion' => 'fk_id_transicion']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getFkIdAccion()
    {
        return $this->hasOne(Accion010201::className(), ['id_accion' => 'fk_id_accion']);
    }
	
    public function atributes() {
		return [
 		 'fk_id_transicion',
 		 'fk_id_accion',
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
        	'Transicion010202',
        	'Accion010201',
     	];
    }

    public function getNamePk() {
		return array('fk_id_transicion','fk_id_accion');
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
       return 'fk_id_transicion';
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
			'id_transicion'=>array('transicion_01_02_02','fk_id_transicion'),
			'id_accion'=>array('accion_01_02_01','fk_id_accion'),
		);
    }
    
}
