<?php
namespace app\models;

use Yii;

/**
 * This is the model class for table "aspectos_evaluados_04_08_03".
 *
 * @property integer $id_aspectos_evaluados
 * @property integer $fk_id_eval_tecnica
 * @property string $nombre_aspectos_evaluados
 * @property string $educacion_aspectos_evaluados
 * @property string $formacion_aspectos_evaluados
 * @property string $experiencia_aspectos_evaluados
 * @property string $habilidades_aspectos_evaluados
 *
 * @property EvalTecnica040801 $fkIdEvalTecnica
 */
class AspectosEvaluados040803 extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'aspectos_evaluados_04_08_03';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['fk_id_eval_tecnica'], 'required'],
            [['fk_id_eval_tecnica'], 'integer'],
            [['nombre_aspectos_evaluados', 'educacion_aspectos_evaluados', 'formacion_aspectos_evaluados', 'experiencia_aspectos_evaluados', 'habilidades_aspectos_evaluados'], 'string']
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id_aspectos_evaluados' => 'Id Aspectos Evaluados',
            'fk_id_eval_tecnica' => 'Fk Id Eval Tecnica',
            'nombre_aspectos_evaluados' => 'Nombre Aspectos Evaluados',
            'educacion_aspectos_evaluados' => 'Educacion Aspectos Evaluados',
            'formacion_aspectos_evaluados' => 'Formacion Aspectos Evaluados',
            'experiencia_aspectos_evaluados' => 'Experiencia Aspectos Evaluados',
            'habilidades_aspectos_evaluados' => 'Habilidades Aspectos Evaluados',
        ];
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getFkIdEvalTecnica()
    {
        return $this->hasOne(EvalTecnica040801::className(), ['id_eval_tecnica' => 'fk_id_eval_tecnica']);
    }
	
    public function atributes() {
		return [
 		 'id_aspectos_evaluados',
 		 'fk_id_eval_tecnica',
 		 'nombre_aspectos_evaluados',
 		 'educacion_aspectos_evaluados',
 		 'formacion_aspectos_evaluados',
 		 'experiencia_aspectos_evaluados',
 		 'habilidades_aspectos_evaluados',
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
        	'EvalTecnica040801',
     	];
    }

    public function getNamePk() {
		return array('id_aspectos_evaluados');
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
			'id_eval_tecnica'=>array('eval_tecnica_04_08_01','fk_id_eval_tecnica'),
		);
    }
    
}
