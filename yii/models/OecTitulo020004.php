<?php
namespace app\models;

use Yii;

/**
 * This is the model class for table "oec_titulo_02_00_04".
 *
 * @property integer $id_oec_titulo
 * @property string $nombre_oec_titulo
 *
 * @property OecContacto020003[] $oecContacto020003s
 */
class OecTitulo020004 extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'oec_titulo_02_00_04';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['nombre_oec_titulo'], 'required'],
            [['nombre_oec_titulo'], 'string', 'max' => 145],
            [['nombre_oec_titulo'], 'unique']
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id_oec_titulo' => 'Id Oec Titulo',
            'nombre_oec_titulo' => 'Nombre Oec Titulo',
        ];
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getOecContacto020003s()
    {
        return $this->hasMany(OecContacto020003::className(), ['fk_id_oec_titulo' => 'id_oec_titulo']);
    }
	
    public function atributes() {
		return [
 		 'id_oec_titulo',
 		 'nombre_oec_titulo',
		]; 	
    }
	
 
	public function getListHasMany()
    {
    	return [
        	 'OecContacto020003',
     	];
    }
    
    public function getListHasOne()
    {
    	return [
     	];
    }

    public function getNamePk() {
		return array('id_oec_titulo');
    }
    
    public function getModule() {
		return '';
    }
    
    public function getDisplay() {
       return 'nombre_oec_titulo';
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
			case 'OecContacto020003':
        		return new OecContacto020003();
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
