<?php
namespace app\models;

use Yii;

/**
 * This is the model class for table "criterio_supervision_04_11_04".
 *
 * @property integer $id_criterio_supervision
 * @property string $tipo_criterio_supervision
 * @property string $pregunta_criterio_supervision
 * @property integer $estado_criterio_supervision
 *
 * @property SupervisionCriterio041103[] $supervisionCriterio041103s
 */
class CriterioSupervision041104 extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'criterio_supervision_04_11_04';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['tipo_criterio_supervision', 'pregunta_criterio_supervision', 'estado_criterio_supervision'], 'required'],
            [['tipo_criterio_supervision'], 'string'],
            [['estado_criterio_supervision'], 'integer'],
            [['pregunta_criterio_supervision'], 'string', 'max' => 200]
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id_criterio_supervision' => 'Id Criterio Supervision',
            'tipo_criterio_supervision' => 'Tipo Criterio Supervision',
            'pregunta_criterio_supervision' => 'Pregunta Criterio Supervision',
            'estado_criterio_supervision' => 'Estado Criterio Supervision',
        ];
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getSupervisionCriterio041103s()
    {
        return $this->hasMany(SupervisionCriterio041103::className(), ['fk_id_criterio_supervision' => 'id_criterio_supervision']);
    }
	
    public function atributes() {
		return [
 		 'id_criterio_supervision',
 		 'tipo_criterio_supervision',
 		 'pregunta_criterio_supervision',
 		 'estado_criterio_supervision',
		]; 	
    }
	
 
	public function getListHasMany()
    {
    	return [
        	 'SupervisionCriterio041103',
     	];
    }
    
    public function getListHasOne()
    {
    	return [
     	];
    }

    public function getNamePk() {
		return array('id_criterio_supervision');
    }
    
    public function getModule() {
		return 'formularios';
    }
    
    public function getDisplay() {
       return 'tipo_criterio_supervision';
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
			case 'SupervisionCriterio041103':
        		return new SupervisionCriterio041103();
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
