<?php
namespace app\models;

use Yii;

/**
 * This is the model class for table "peticion_estado_01_04_03".
 *
 * @property integer $id_peticion_estado
 * @property integer $fk_id_peticion
 * @property integer $fk_id_estado
 * @property integer $activo_peticion_estado
 * @property string $fecha_creacion_peticion_estado
 *
 * @property PeticionArchivo010401[] $peticionArchivo010401s
 * @property Estado010601 $fkIdEstado
 * @property Peticion010401 $fkIdPeticion
 */
class PeticionEstado010403 extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'peticion_estado_01_04_03';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['fk_id_peticion', 'fk_id_estado'], 'required'],
            [['fk_id_peticion', 'fk_id_estado', 'activo_peticion_estado'], 'integer'],
            [['fecha_creacion_peticion_estado'], 'safe']
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id_peticion_estado' => 'Id Peticion Estado',
            'fk_id_peticion' => 'Fk Id Peticion',
            'fk_id_estado' => 'Fk Id Estado',
            'activo_peticion_estado' => 'Activo Peticion Estado',
            'fecha_creacion_peticion_estado' => 'Fecha Creacion Peticion Estado',
        ];
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getPeticionArchivo010401s()
    {
        return $this->hasMany(PeticionArchivo010401::className(), ['fk_id_peticion_estado' => 'id_peticion_estado']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getFkIdEstado()
    {
        return $this->hasOne(Estado010601::className(), ['id_estado' => 'fk_id_estado']);
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
 		 'id_peticion_estado',
 		 'fk_id_peticion',
 		 'fk_id_estado',
 		 'activo_peticion_estado',
 		 'fecha_creacion_peticion_estado',
		]; 	
    }
	
 
	public function getListHasMany()
    {
    	return [
        	 'PeticionArchivo010401',
     	];
    }
    
    public function getListHasOne()
    {
    	return [
        	'Estado010601',
        	'Peticion010401',
     	];
    }

    public function getNamePk() {
		return array('id_peticion_estado');
    }
    
    public function getModule() {
		return 'proceso;display';
    }
    
    public function getDisplay() {
       return 'id_peticion_estado';
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
			case 'PeticionArchivo010401':
        		return new PeticionArchivo010401();
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
			'id_estado'=>array('estado_01_06_01','fk_id_estado'),
			'id_peticion'=>array('peticion_01_04_01','fk_id_peticion'),
		);
    }
    
}
