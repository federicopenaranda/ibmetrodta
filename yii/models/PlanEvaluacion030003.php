<?php
namespace app\models;

use Yii;

/**
 * This is the model class for table "plan_evaluacion_03_00_03".
 *
 * @property integer $id_plan_evaluacion
 * @property integer $fk_id_evaluacion
 * @property integer $fk_id_oec_contacto
 * @property integer $fk_id_usuario
 * @property string $fecha_plan_evaluacion
 * @property string $hora_plan_evaluacion
 * @property string $requisitos_norma_plan_evaluacion
 * @property string $metodologia_plan_evaluacion
 *
 * @property Evaluacion030001 $fkIdEvaluacion
 * @property OecContacto020003 $fkIdOecContacto
 * @property Usuario000101 $fkIdUsuario
 */
class PlanEvaluacion030003 extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'plan_evaluacion_03_00_03';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['fk_id_evaluacion', 'fk_id_oec_contacto', 'fk_id_usuario'], 'required'],
            [['fk_id_evaluacion', 'fk_id_oec_contacto', 'fk_id_usuario'], 'integer'],
            [['fecha_plan_evaluacion', 'hora_plan_evaluacion'], 'safe'],
            [['requisitos_norma_plan_evaluacion', 'metodologia_plan_evaluacion'], 'string']
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id_plan_evaluacion' => 'Id Plan Evaluacion',
            'fk_id_evaluacion' => 'Fk Id Evaluacion',
            'fk_id_oec_contacto' => 'Fk Id Oec Contacto',
            'fk_id_usuario' => 'Fk Id Usuario',
            'fecha_plan_evaluacion' => 'Fecha Plan Evaluacion',
            'hora_plan_evaluacion' => 'Hora Plan Evaluacion',
            'requisitos_norma_plan_evaluacion' => 'Requisitos Norma Plan Evaluacion',
            'metodologia_plan_evaluacion' => 'Metodologia Plan Evaluacion',
        ];
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getFkIdEvaluacion()
    {
        return $this->hasOne(Evaluacion030001::className(), ['id_evaluacion' => 'fk_id_evaluacion']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getFkIdOecContacto()
    {
        return $this->hasOne(OecContacto020003::className(), ['id_oec_contacto' => 'fk_id_oec_contacto']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getFkIdUsuario()
    {
        return $this->hasOne(Usuario000101::className(), ['id_usuario' => 'fk_id_usuario']);
    }
	
    public function atributes() {
		return [
 		 'id_plan_evaluacion',
 		 'fk_id_evaluacion',
 		 'fk_id_oec_contacto',
 		 'fk_id_usuario',
 		 'fecha_plan_evaluacion',
 		 'hora_plan_evaluacion',
 		 'requisitos_norma_plan_evaluacion',
 		 'metodologia_plan_evaluacion',
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
        	'OecContacto020003',
        	'Usuario000101',
     	];
    }

    public function getNamePk() {
		return array('id_plan_evaluacion');
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
		return 'fk_id_usuario';
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
			'id_oec_contacto'=>array('oec_contacto_02_00_03','fk_id_oec_contacto'),
			'id_usuario'=>array('usuario_00_01_01','fk_id_usuario'),
		);
    }
    
}
