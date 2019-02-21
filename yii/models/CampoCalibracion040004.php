<?php
namespace app\models;

use Yii;

/**
 * This is the model class for table "campo_calibracion_04_00_04".
 *
 * @property integer $id_campo_calibracion
 * @property string $nombre_campo_calibracion
 *
 * @property DetalleCalibracion040301[] $detalleCalibracion040301s
 */
class CampoCalibracion040004 extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'campo_calibracion_04_00_04';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['nombre_campo_calibracion'], 'required'],
            [['nombre_campo_calibracion'], 'string', 'max' => 245],
            [['nombre_campo_calibracion'], 'unique']
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id_campo_calibracion' => 'Id Campo Calibracion',
            'nombre_campo_calibracion' => 'Nombre Campo Calibracion',
        ];
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getDetalleCalibracion040301s()
    {
        return $this->hasMany(DetalleCalibracion040301::className(), ['fk_id_campo_calibracion' => 'id_campo_calibracion']);
    }
	
    public function atributes() {
		return [
 		 'id_campo_calibracion',
 		 'nombre_campo_calibracion',
		]; 	
    }
	
 
	public function getListHasMany()
    {
    	return [
        	 'DetalleCalibracion040301',
     	];
    }
    
    public function getListHasOne()
    {
    	return [
     	];
    }

    public function getNamePk() {
		return array('id_campo_calibracion');
    }
    
    public function getModule() {
		return '';
    }
    
    public function getDisplay() {
       return 'nombre_campo_calibracion';
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
			case 'DetalleCalibracion040301':
        		return new DetalleCalibracion040301();
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
