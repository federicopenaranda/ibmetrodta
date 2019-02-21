<?php
namespace app\models;

use Yii;

/**
 * This is the model class for table "supervision_criterio_04_11_03".
 *
 * @property integer $id_supervision_criterio
 * @property integer $fk_id_supervision_evaluador
 * @property integer $fk_id_criterio_supervision
 * @property string $puntaje_supervision_criterio
 *
 * @property CriterioSupervision041104 $fkIdCriterioSupervision
 * @property SupervisionEvaluador041101 $fkIdSupervisionEvaluador
 */
class SupervisionCriterio041103 extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'supervision_criterio_04_11_03';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['fk_id_supervision_evaluador', 'fk_id_criterio_supervision'], 'required'],
            [['fk_id_supervision_evaluador', 'fk_id_criterio_supervision'], 'integer'],
            [['puntaje_supervision_criterio'], 'string']
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id_supervision_criterio' => 'Id Supervision Criterio',
            'fk_id_supervision_evaluador' => 'Fk Id Supervision Evaluador',
            'fk_id_criterio_supervision' => 'Fk Id Criterio Supervision',
            'puntaje_supervision_criterio' => 'Puntaje Supervision Criterio',
        ];
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getFkIdCriterioSupervision()
    {
        return $this->hasOne(CriterioSupervision041104::className(), ['id_criterio_supervision' => 'fk_id_criterio_supervision']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getFkIdSupervisionEvaluador()
    {
        return $this->hasOne(SupervisionEvaluador041101::className(), ['id_supervision_evaluador' => 'fk_id_supervision_evaluador']);
    }
	
    public function atributes() {
		return [
 		 'id_supervision_criterio',
 		 'fk_id_supervision_evaluador',
 		 'fk_id_criterio_supervision',
 		 'puntaje_supervision_criterio',
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
        	'CriterioSupervision041104',
        	'SupervisionEvaluador041101',
     	];
    }

    public function getNamePk() {
		return array('id_supervision_criterio');
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
			'id_criterio_supervision'=>array('criterio_supervision_04_11_04','fk_id_criterio_supervision'),
			'id_supervision_evaluador'=>array('supervision_evaluador_04_11_01','fk_id_supervision_evaluador'),
		);
    }
    
}
