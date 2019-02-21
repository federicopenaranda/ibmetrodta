<?php
namespace app\models;

use Yii;

/**
 * This is the model class for table "oec_tipo_02_00_04".
 *
 * @property integer $id_oec_tipo
 * @property string $nombre_oec_tipo
 * @property string $codigo_oec_tipo
 * @property string $descripcion_oec_tipo
 *
 * @property Oec020001[] $oec020001s
 */
class OecTipo020004 extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'oec_tipo_02_00_04';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['nombre_oec_tipo', 'codigo_oec_tipo'], 'required'],
            [['descripcion_oec_tipo'], 'string'],
            [['nombre_oec_tipo'], 'string', 'max' => 145],
            [['codigo_oec_tipo'], 'string', 'max' => 45],
            [['nombre_oec_tipo'], 'unique'],
            [['codigo_oec_tipo'], 'unique']
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id_oec_tipo' => 'Id Oec Tipo',
            'nombre_oec_tipo' => 'Nombre Oec Tipo',
            'codigo_oec_tipo' => 'Codigo Oec Tipo',
            'descripcion_oec_tipo' => 'Descripcion Oec Tipo',
        ];
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getOec020001s()
    {
        return $this->hasMany(Oec020001::className(), ['fk_id_oec_tipo' => 'id_oec_tipo']);
    }
	
    public function atributes() {
		return [
 		 'id_oec_tipo',
 		 'nombre_oec_tipo',
 		 'codigo_oec_tipo',
 		 'descripcion_oec_tipo',
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
		return array('id_oec_tipo');
    }
    
    public function getModule() {
		return '';
    }
    
    public function getDisplay() {
       return 'nombre_oec_tipo';
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
