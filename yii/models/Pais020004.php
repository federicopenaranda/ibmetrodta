<?php
namespace app\models;

use Yii;

/**
 * This is the model class for table "pais_02_00_04".
 *
 * @property integer $id_pais
 * @property string $nombre_pais
 *
 * @property Oec020001[] $oec020001s
 */
class Pais020004 extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'pais_02_00_04';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['nombre_pais'], 'required'],
            [['nombre_pais'], 'string', 'max' => 145],
            [['nombre_pais'], 'unique']
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id_pais' => 'Id Pais',
            'nombre_pais' => 'Nombre Pais',
        ];
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getOec020001s()
    {
        return $this->hasMany(Oec020001::className(), ['fk_id_pais' => 'id_pais']);
    }
	
    public function atributes() {
		return [
 		 'id_pais',
 		 'nombre_pais',
		]; 	
    }
	
 
	public function getListHasMany()
    {
    	return [
        	 'Oec020001',
     	];
    }
    
    public function getListHasOne()
    {
    	return [
     	];
    }

    public function getNamePk() {
		return array('id_pais');
    }
    
    public function getModule() {
		return '';
    }
    
    public function getDisplay() {
       return 'nombre_pais';
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
			case 'Oec020001':
        		return new Oec020001();
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
		);
    }
    
}
