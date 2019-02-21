<?php
namespace app\models;

use Yii;

/**
 * This is the model class for table "actividad_economica_02_00_04".
 *
 * @property integer $id_actividad_economica
 * @property string $nombre_actividad_economica
 *
 * @property OecActividad020002[] $oecActividad020002s
 * @property Oec020001[] $fkIdOecs
 */
class ActividadEconomica020004 extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'actividad_economica_02_00_04';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['nombre_actividad_economica'], 'required'],
            [['nombre_actividad_economica'], 'string', 'max' => 245],
            [['nombre_actividad_economica'], 'unique']
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id_actividad_economica' => 'Id Actividad Economica',
            'nombre_actividad_economica' => 'Nombre Actividad Economica',
        ];
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getOecActividad020002s()
    {
        return $this->hasMany(OecActividad020002::className(), ['fk_id_actividad_economica' => 'id_actividad_economica']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getFkIdOecs()
    {
        return $this->hasMany(Oec020001::className(), ['id_oec' => 'fk_id_oec'])->viaTable('oec_actividad_02_00_02', ['fk_id_actividad_economica' => 'id_actividad_economica']);
    }
	
    public function atributes() {
		return [
 		 'id_actividad_economica',
 		 'nombre_actividad_economica',
		]; 	
    }
	
 
	public function getListHasMany()
    {
    	return [
        	 'OecActividad020002',
        	 'Oec020001',
     	];
    }
    
    public function getListHasOne()
    {
    	return [
     	];
    }

    public function getNamePk() {
		return array('id_actividad_economica');
    }
    
    public function getModule() {
		return '';
    }
    
    public function getDisplay() {
       return 'nombre_actividad_economica';
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
			case 'OecActividad020002':
        		return new OecActividad020002();
                break;
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
