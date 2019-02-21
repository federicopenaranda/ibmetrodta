<?php
namespace app\models;

use Yii;

/**
 * This is the model class for table "gestion_tipo_actividad_05_01_03".
 *
 * @property integer $id_gestion_tipo_actividad
 * @property integer $fk_id_gestion
 * @property integer $fk_id_tipo_actividad
 * @property integer $correlativo_gestion_tipo_actividad
 * @property string $prefijo_gestion_tipo_actividad
 *
 * @property Gestion050104 $fkIdGestion
 * @property TipoActividad050104 $fkIdTipoActividad
 */
class GestionTipoActividad050103 extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'gestion_tipo_actividad_05_01_03';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['fk_id_gestion', 'fk_id_tipo_actividad', 'correlativo_gestion_tipo_actividad', 'prefijo_gestion_tipo_actividad'], 'required'],
            [['fk_id_gestion', 'fk_id_tipo_actividad', 'correlativo_gestion_tipo_actividad'], 'integer'],
            [['prefijo_gestion_tipo_actividad'], 'string', 'max' => 15]
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id_gestion_tipo_actividad' => 'Id Gestion Tipo Actividad',
            'fk_id_gestion' => 'Fk Id Gestion',
            'fk_id_tipo_actividad' => 'Fk Id Tipo Actividad',
            'correlativo_gestion_tipo_actividad' => 'Correlativo Gestion Tipo Actividad',
            'prefijo_gestion_tipo_actividad' => 'Prefijo Gestion Tipo Actividad',
        ];
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getFkIdGestion()
    {
        return $this->hasOne(Gestion050104::className(), ['id_gestion' => 'fk_id_gestion']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getFkIdTipoActividad()
    {
        return $this->hasOne(TipoActividad050104::className(), ['id_tipo_actividad' => 'fk_id_tipo_actividad']);
    }
	
    public function atributes() {
		return [
 		 'id_gestion_tipo_actividad',
 		 'fk_id_gestion',
 		 'fk_id_tipo_actividad',
 		 'correlativo_gestion_tipo_actividad',
 		 'prefijo_gestion_tipo_actividad',
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
        	'Gestion050104',
        	'TipoActividad050104',
     	];
    }

    public function getNamePk() {
		return array('id_gestion_tipo_actividad');
    }
    
    public function getModule() {
		return 'actividad';
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
       return '';
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
			'id_gestion'=>array('gestion_05_01_04','fk_id_gestion'),
			'id_tipo_actividad'=>array('tipo_actividad_05_01_04','fk_id_tipo_actividad'),
		);
    }
    
}
