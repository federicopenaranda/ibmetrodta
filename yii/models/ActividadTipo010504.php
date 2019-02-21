<?php
namespace app\models;

use Yii;

/**
 * This is the model class for table "actividad_tipo_01_05_04".
 *
 * @property integer $id_actividad_tipo
 * @property string $nombre_actividad_tipo
 *
 * @property Actividad010501[] $actividad010501s
 */
class ActividadTipo010504 extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'actividad_tipo_01_05_04';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['nombre_actividad_tipo'], 'required'],
            [['nombre_actividad_tipo'], 'string', 'max' => 145],
            [['nombre_actividad_tipo'], 'unique']
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id_actividad_tipo' => 'Id Actividad Tipo',
            'nombre_actividad_tipo' => 'Nombre Actividad Tipo',
        ];
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getActividad010501s()
    {
        return $this->hasMany(Actividad010501::className(), ['fk_id_actividad_tipo' => 'id_actividad_tipo']);
    }
	
    public function atributes() {
		return [
 		 'id_actividad_tipo',
 		 'nombre_actividad_tipo',
		]; 	
    }
	
 
	public function getListHasMany()
    {
    	return [
        	 'Actividad010501',
     	];
    }
    
    public function getListHasOne()
    {
    	return [
     	];
    }

    public function getNamePk() {
		return array('id_actividad_tipo');
    }
    
    public function getModule() {
		return 'proceso';
    }
    
    public function getDisplay() {
       return 'nombre_actividad_tipo';
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
			case 'Actividad010501':
        		return new Actividad010501();
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
