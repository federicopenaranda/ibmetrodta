<?php
namespace app\models;

use Yii;

/**
 * This is the model class for table "codigo_peticion_01_04_04".
 *
 * @property integer $id_codigo_peticion
 * @property integer $fk_id_oec
 * @property string $codigo_peticion
 * @property integer $correlativo_codigo_peticion
 *
 * @property Oec020001 $fkIdOec
 * @property Peticion010401[] $peticion010401s
 */
class CodigoPeticion010404 extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'codigo_peticion_01_04_04';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['fk_id_oec', 'codigo_peticion', 'correlativo_codigo_peticion'], 'required'],
            [['fk_id_oec', 'correlativo_codigo_peticion'], 'integer'],
            [['codigo_peticion'], 'string', 'max' => 45],
            [['codigo_peticion'], 'unique'],
            [['correlativo_codigo_peticion'], 'unique']
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id_codigo_peticion' => 'Id Codigo Peticion',
            'fk_id_oec' => 'Fk Id Oec',
            'codigo_peticion' => 'Codigo Peticion',
            'correlativo_codigo_peticion' => 'Correlativo Codigo Peticion',
        ];
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getFkIdOec()
    {
        return $this->hasOne(Oec020001::className(), ['id_oec' => 'fk_id_oec']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getPeticion010401s()
    {
        return $this->hasMany(Peticion010401::className(), ['fk_id_codigo_peticion' => 'id_codigo_peticion']);
    }
	
    public function atributes() {
		return [
 		 'id_codigo_peticion',
 		 'fk_id_oec',
 		 'codigo_peticion',
 		 'correlativo_codigo_peticion',
		]; 	
    }
	
 
	public function getListHasMany()
    {
    	return [
        	 'Peticion010401',
     	];
    }
    
    public function getListHasOne()
    {
    	return [
        	'Oec020001',
     	];
    }

    public function getNamePk() {
		return array('id_codigo_peticion');
    }
    
    public function getModule() {
		return '';
    }
    
    public function getDisplay() {
       return 'codigo_peticion';
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
			case 'Peticion010401':
        		return new Peticion010401();
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
			'id_oec'=>array('oec_02_00_01','fk_id_oec'),
		);
    }
    
}
