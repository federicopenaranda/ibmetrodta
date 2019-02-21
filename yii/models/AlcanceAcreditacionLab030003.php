<?php
namespace app\models;

use Yii;

/**
 * This is the model class for table "alcance_acreditacion_lab_03_00_03".
 *
 * @property integer $id_alcance_acreditacion_lab
 * @property integer $fk_id_evaluacion
 * @property string $descripcion_ensayo_alcance_acreditacion_lab
 * @property string $metodo_ensayo_alcance_acreditacion_lab
 * @property string $rango_medicion_alcance_acreditacion_lab
 * @property string $incertidumbre_alcance_acreditacion_lab
 *
 * @property Evaluacion030001 $fkIdEvaluacion
 */
class AlcanceAcreditacionLab030003 extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'alcance_acreditacion_lab_03_00_03';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['fk_id_evaluacion'], 'required'],
            [['fk_id_evaluacion'], 'integer'],
            [['descripcion_ensayo_alcance_acreditacion_lab', 'metodo_ensayo_alcance_acreditacion_lab', 'rango_medicion_alcance_acreditacion_lab', 'incertidumbre_alcance_acreditacion_lab'], 'string']
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id_alcance_acreditacion_lab' => 'Id Alcance Acreditacion Lab',
            'fk_id_evaluacion' => 'Fk Id Evaluacion',
            'descripcion_ensayo_alcance_acreditacion_lab' => 'Descripcion Ensayo Alcance Acreditacion Lab',
            'metodo_ensayo_alcance_acreditacion_lab' => 'Metodo Ensayo Alcance Acreditacion Lab',
            'rango_medicion_alcance_acreditacion_lab' => 'Rango Medicion Alcance Acreditacion Lab',
            'incertidumbre_alcance_acreditacion_lab' => 'Incertidumbre Alcance Acreditacion Lab',
        ];
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getFkIdEvaluacion()
    {
        return $this->hasOne(Evaluacion030001::className(), ['id_evaluacion' => 'fk_id_evaluacion']);
    }
	
    public function atributes() {
		return [
 		 'id_alcance_acreditacion_lab',
 		 'fk_id_evaluacion',
 		 'descripcion_ensayo_alcance_acreditacion_lab',
 		 'metodo_ensayo_alcance_acreditacion_lab',
 		 'rango_medicion_alcance_acreditacion_lab',
 		 'incertidumbre_alcance_acreditacion_lab',
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
        	'Evaluacion030001',
     	];
    }

    public function getNamePk() {
		return array('id_alcance_acreditacion_lab');
    }
    
    public function getModule() {
		return 'evaluacion';
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
			'id_evaluacion'=>array('evaluacion_03_00_01','fk_id_evaluacion'),
		);
    }
    
}
