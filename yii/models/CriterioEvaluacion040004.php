<?php
namespace app\models;

use Yii;

/**
 * This is the model class for table "criterio_evaluacion_04_00_04".
 *
 * @property integer $id_criterio_evaluacion
 * @property string $nombre_criterio_evaluacion
 *
 * @property PruebaParticipacion040901[] $pruebaParticipacion040901s
 */
class CriterioEvaluacion040004 extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'criterio_evaluacion_04_00_04';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['nombre_criterio_evaluacion'], 'required'],
            [['nombre_criterio_evaluacion'], 'string', 'max' => 145],
            [['nombre_criterio_evaluacion'], 'unique']
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id_criterio_evaluacion' => 'Id Criterio Evaluacion',
            'nombre_criterio_evaluacion' => 'Nombre Criterio Evaluacion',
        ];
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getPruebaParticipacion040901s()
    {
        return $this->hasMany(PruebaParticipacion040901::className(), ['fk_id_criterio_evaluacion' => 'id_criterio_evaluacion']);
    }
	
    public function atributes() {
		return [
 		 'id_criterio_evaluacion',
 		 'nombre_criterio_evaluacion',
		]; 	
    }
	
 
	public function getListHasMany()
    {
    	return [
        	 'PruebaParticipacion040901',
     	];
    }
    
    public function getListHasOne()
    {
    	return [
     	];
    }

    public function getNamePk() {
		return array('id_criterio_evaluacion');
    }
    
    public function getModule() {
		return 'formularios';
    }
    
    public function getDisplay() {
       return 'nombre_criterio_evaluacion';
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
			case 'PruebaParticipacion040901':
        		return new PruebaParticipacion040901();
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
