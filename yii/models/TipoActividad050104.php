<?php
namespace app\models;

use Yii;

/**
 * This is the model class for table "tipo_actividad_05_01_04".
 *
 * @property integer $id_tipo_actividad
 * @property string $nombre_tipo_actividad
 * @property string $codigo_tipo_actividad
 *
 * @property Actividad050101[] $actividad050101s
 * @property GestionTipoActividad050103[] $gestionTipoActividad050103s
 */
class TipoActividad050104 extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'tipo_actividad_05_01_04';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['nombre_tipo_actividad', 'codigo_tipo_actividad'], 'required'],
            [['nombre_tipo_actividad'], 'string', 'max' => 145],
            [['codigo_tipo_actividad'], 'string', 'max' => 45],
            [['nombre_tipo_actividad'], 'unique'],
            [['codigo_tipo_actividad'], 'unique']
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id_tipo_actividad' => 'Id Tipo Actividad',
            'nombre_tipo_actividad' => 'Nombre Tipo Actividad',
            'codigo_tipo_actividad' => 'Codigo Tipo Actividad',
        ];
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getActividad050101s()
    {
        return $this->hasMany(Actividad050101::className(), ['fk_id_tipo_actividad' => 'id_tipo_actividad']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getGestionTipoActividad050103s()
    {
        return $this->hasMany(GestionTipoActividad050103::className(), ['fk_id_tipo_actividad' => 'id_tipo_actividad']);
    }
	
    public function atributes() {
		return [
 		 'id_tipo_actividad',
 		 'nombre_tipo_actividad',
 		 'codigo_tipo_actividad',
		]; 	
    }
	
 
	public function getListHasMany()
    {
    	return [
        	 'Actividad050101',
        	 'GestionTipoActividad050103',
     	];
    }
    
    public function getListHasOne()
    {
    	return [
     	];
    }

    public function getNamePk() {
		return array('id_tipo_actividad');
    }
    
    public function getModule() {
		return 'actividad';
    }
    
    public function getDisplay() {
       return 'nombre_tipo_actividad';
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
			case 'Actividad050101':
        		return new Actividad050101();
                break;
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
