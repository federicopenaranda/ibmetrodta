<?php
namespace app\models;

use Yii;

/**
 * This is the model class for table "feriado_05_01_04".
 *
 * @property integer $id_feriado
 * @property string $fecha_feriado
 * @property string $descripcion_feriado
 * @property string $tipo_feriado
 */
class Feriado050104 extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'feriado_05_01_04';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['fecha_feriado', 'descripcion_feriado', 'tipo_feriado'], 'required'],
            [['fecha_feriado'], 'safe'],
            [['descripcion_feriado', 'tipo_feriado'], 'string'],
            [['fecha_feriado'], 'unique']
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id_feriado' => 'Id Feriado',
            'fecha_feriado' => 'Fecha Feriado',
            'descripcion_feriado' => 'Descripcion Feriado',
            'tipo_feriado' => 'Tipo Feriado',
        ];
    }
	
    public function atributes() {
		return [
 		 'id_feriado',
 		 'fecha_feriado',
 		 'descripcion_feriado',
 		 'tipo_feriado',
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
     	];
    }

    public function getNamePk() {
		return array('id_feriado');
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
		);
    }
    
}
