<?php
namespace app\models;

use Yii;

/**
 * This is the model class for table "criterio_satisfaccion_04_12_04".
 *
 * @property integer $id_criterio_satisfaccion
 * @property string $nombre_criterio_satisfaccion
 * @property integer $estado_criterio_satisfaccion
 *
 * @property SatisfaccionEvaluacion041203[] $satisfaccionEvaluacion041203s
 */
class CriterioSatisfaccion041204 extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'criterio_satisfaccion_04_12_04';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['nombre_criterio_satisfaccion', 'estado_criterio_satisfaccion'], 'required'],
            [['estado_criterio_satisfaccion'], 'integer'],
            [['nombre_criterio_satisfaccion'], 'string', 'max' => 200],
            [['nombre_criterio_satisfaccion'], 'unique']
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id_criterio_satisfaccion' => 'Id Criterio Satisfaccion',
            'nombre_criterio_satisfaccion' => 'Nombre Criterio Satisfaccion',
            'estado_criterio_satisfaccion' => 'Estado Criterio Satisfaccion',
        ];
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getSatisfaccionEvaluacion041203s()
    {
        return $this->hasMany(SatisfaccionEvaluacion041203::className(), ['fk_id_criterio_satisfaccion' => 'id_criterio_satisfaccion']);
    }
	
    public function atributes() {
		return [
 		 'id_criterio_satisfaccion',
 		 'nombre_criterio_satisfaccion',
 		 'estado_criterio_satisfaccion',
		]; 	
    }
	
 
	public function getListHasMany()
    {
    	return [
        	 'SatisfaccionEvaluacion041203',
     	];
    }
    
    public function getListHasOne()
    {
    	return [
     	];
    }

    public function getNamePk() {
		return array('id_criterio_satisfaccion');
    }
    
    public function getModule() {
		return 'formularios';
    }
    
    public function getDisplay() {
       return 'nombre_criterio_satisfaccion';
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
			case 'SatisfaccionEvaluacion041203':
        		return new SatisfaccionEvaluacion041203();
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
