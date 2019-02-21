<?php
namespace app\models;

use Yii;

/**
 * This is the model class for table "designacion_evaluador_04_10_01".
 *
 * @property integer $id_designacion_evaluador
 * @property integer $fk_id_peticion
 * @property string $por_dta_nombre_designacion_evaluador
 * @property string $por_dta_fecha_designacion_evaluador
 * @property string $fecha_creacion_designacion_evaluador
 *
 * @property Peticion010401 $fkIdPeticion
 */
class DesignacionEvaluador041001 extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'designacion_evaluador_04_10_01';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['fk_id_peticion'], 'required'],
            [['fk_id_peticion'], 'integer'],
            [['por_dta_fecha_designacion_evaluador', 'fecha_creacion_designacion_evaluador'], 'safe'],
            [['por_dta_nombre_designacion_evaluador'], 'string', 'max' => 250]
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id_designacion_evaluador' => 'Id Designacion Evaluador',
            'fk_id_peticion' => 'Fk Id Peticion',
            'por_dta_nombre_designacion_evaluador' => 'Por Dta Nombre Designacion Evaluador',
            'por_dta_fecha_designacion_evaluador' => 'Por Dta Fecha Designacion Evaluador',
            'fecha_creacion_designacion_evaluador' => 'Fecha Creacion Designacion Evaluador',
        ];
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
 		 'id_designacion_evaluador',
 		 'fk_id_peticion',
 		 'por_dta_nombre_designacion_evaluador',
 		 'por_dta_fecha_designacion_evaluador',
 		 'fecha_creacion_designacion_evaluador',
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
        	'Peticion010401',
     	];
    }

    public function getNamePk() {
		return array('id_designacion_evaluador');
    }
    
    public function getModule() {
		return 'formularios';
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
			'id_peticion'=>array('peticion_01_04_01','fk_id_peticion'),
		);
    }
    
}
