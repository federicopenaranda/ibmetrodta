<?php
namespace app\models;

use Yii;

/**
 * This is the model class for table "gestion_05_01_04".
 *
 * @property integer $id_gestion
 * @property string $nombre_gestion
 * @property integer $estado_gestion
 *
 * @property GestionTipoActividad050103[] $gestionTipoActividad050103s
 */
class Gestion050104 extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'gestion_05_01_04';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['nombre_gestion', 'estado_gestion'], 'required'],
            [['estado_gestion'], 'integer'],
            [['nombre_gestion'], 'string', 'max' => 10],
            [['nombre_gestion'], 'unique']
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id_gestion' => 'Id Gestion',
            'nombre_gestion' => 'Nombre Gestion',
            'estado_gestion' => 'Estado Gestion',
        ];
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getGestionTipoActividad050103s()
    {
        return $this->hasMany(GestionTipoActividad050103::className(), ['fk_id_gestion' => 'id_gestion']);
    }
	
    public function atributes() {
		return [
 		 'id_gestion',
 		 'nombre_gestion',
 		 'estado_gestion',
		]; 	
    }
	
 
	public function getListHasMany()
    {
    	return [
        	 'GestionTipoActividad050103',
     	];
    }
    
    public function getListHasOne()
    {
    	return [
     	];
    }

    public function getNamePk() {
		return array('id_gestion');
    }
    
    public function getModule() {
		return 'actividad';
    }
    
    public function getDisplay() {
       return 'nombre_gestion';
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
			case 'GestionTipoActividad050103':
        		return new GestionTipoActividad050103();
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
