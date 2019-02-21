<?php
namespace app\models;

use Yii;

/**
 * This is the model class for table "prueba_participacion_04_09_01".
 *
 * @property integer $id_prueba_participacion
 * @property integer $fk_id_peticion
 * @property integer $fk_id_criterio_evaluacion
 * @property integer $horas_evaluacion_prueba_participacion
 * @property string $dir_nombre_responsable_prueba_participacion
 * @property string $dir_cargo_prueba_participacion
 * @property string $dir_fecha_prueba_participacion
 * @property string $oec_nombre_responsable_prueba_participacion
 * @property string $oec_cargo_prueba_participacion
 * @property string $oec_fecha_prueba_participacion
 * @property string $fecha_creacion_prueba_participacion
 *
 * @property CriterioEvaluacion040004 $fkIdCriterioEvaluacion
 * @property Peticion010401 $fkIdPeticion
 */
class PruebaParticipacion040901 extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'prueba_participacion_04_09_01';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['fk_id_peticion', 'fk_id_criterio_evaluacion'], 'required'],
            [['fk_id_peticion', 'fk_id_criterio_evaluacion', 'horas_evaluacion_prueba_participacion'], 'integer'],
            [['dir_nombre_responsable_prueba_participacion', 'dir_cargo_prueba_participacion', 'oec_nombre_responsable_prueba_participacion', 'oec_cargo_prueba_participacion'], 'string'],
            [['dir_fecha_prueba_participacion', 'oec_fecha_prueba_participacion', 'fecha_creacion_prueba_participacion'], 'safe']
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id_prueba_participacion' => 'Id Prueba Participacion',
            'fk_id_peticion' => 'Fk Id Peticion',
            'fk_id_criterio_evaluacion' => 'Fk Id Criterio Evaluacion',
            'horas_evaluacion_prueba_participacion' => 'Horas Evaluacion Prueba Participacion',
            'dir_nombre_responsable_prueba_participacion' => 'Dir Nombre Responsable Prueba Participacion',
            'dir_cargo_prueba_participacion' => 'Dir Cargo Prueba Participacion',
            'dir_fecha_prueba_participacion' => 'Dir Fecha Prueba Participacion',
            'oec_nombre_responsable_prueba_participacion' => 'Oec Nombre Responsable Prueba Participacion',
            'oec_cargo_prueba_participacion' => 'Oec Cargo Prueba Participacion',
            'oec_fecha_prueba_participacion' => 'Oec Fecha Prueba Participacion',
            'fecha_creacion_prueba_participacion' => 'Fecha Creacion Prueba Participacion',
        ];
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getFkIdCriterioEvaluacion()
    {
        return $this->hasOne(CriterioEvaluacion040004::className(), ['id_criterio_evaluacion' => 'fk_id_criterio_evaluacion']);
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
 		 'id_prueba_participacion',
 		 'fk_id_peticion',
 		 'fk_id_criterio_evaluacion',
 		 'horas_evaluacion_prueba_participacion',
 		 'dir_nombre_responsable_prueba_participacion',
 		 'dir_cargo_prueba_participacion',
 		 'dir_fecha_prueba_participacion',
 		 'oec_nombre_responsable_prueba_participacion',
 		 'oec_cargo_prueba_participacion',
 		 'oec_fecha_prueba_participacion',
 		 'fecha_creacion_prueba_participacion',
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
        	'CriterioEvaluacion040004',
        	'Peticion010401',
     	];
    }

    public function getNamePk() {
		return array('id_prueba_participacion');
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
			'id_criterio_evaluacion'=>array('criterio_evaluacion_04_00_04','fk_id_criterio_evaluacion'),
			'id_peticion'=>array('peticion_01_04_01','fk_id_peticion'),
		);
    }
    
}
