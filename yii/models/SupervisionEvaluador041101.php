<?php
namespace app\models;

use Yii;

/**
 * This is the model class for table "supervision_evaluador_04_11_01".
 *
 * @property integer $id_supervision_evaluador
 * @property integer $fk_id_peticion
 * @property string $criterio_evaluacion_supervision_evaluador
 * @property string $comentarios_supervision_evaluador
 * @property string $observaciones_supervision_evaluador
 * @property string $nombre_supervision_evaluador
 * @property string $cargo_supervision_evaluador
 * @property string $fecha_supervision_evaluador
 * @property string $fecha_creacion_supervision_evaluador
 * @property string $pregunta1
 * @property string $pregunta2
 * @property string $pregunta3
 * @property string $pregunta4
 * @property string $pregunta5
 * @property string $pregunta6
 * @property string $pregunta7
 * @property string $pregunta8
 * @property string $pregunta9
 * @property string $pregunta10
 * @property string $pregunta11
 *
 * @property SupervisionCriterio041103[] $supervisionCriterio041103s
 * @property Peticion010401 $fkIdPeticion
 */
class SupervisionEvaluador041101 extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'supervision_evaluador_04_11_01';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['fk_id_peticion', 'criterio_evaluacion_supervision_evaluador'], 'required'],
            [['fk_id_peticion', 'pregunta1', 'pregunta2', 'pregunta3', 'pregunta4', 'pregunta5', 'pregunta6', 'pregunta7', 'pregunta8', 'pregunta9', 'pregunta10', 'pregunta11'], 'integer'],
            [['criterio_evaluacion_supervision_evaluador', 'comentarios_supervision_evaluador', 'observaciones_supervision_evaluador'], 'string'],
            [['fecha_supervision_evaluador', 'fecha_creacion_supervision_evaluador'], 'safe'],
            [['nombre_supervision_evaluador', 'cargo_supervision_evaluador'], 'string', 'max' => 200]
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id_supervision_evaluador' => 'Id Supervision Evaluador',
            'fk_id_peticion' => 'Fk Id Peticion',
            'criterio_evaluacion_supervision_evaluador' => 'Criterio Evaluacion Supervision Evaluador',
            'comentarios_supervision_evaluador' => 'Comentarios Supervision Evaluador',
            'observaciones_supervision_evaluador' => 'Observaciones Supervision Evaluador',
            'nombre_supervision_evaluador' => 'Nombre Supervision Evaluador',
            'cargo_supervision_evaluador' => 'Cargo Supervision Evaluador',
            'fecha_supervision_evaluador' => 'Fecha Supervision Evaluador',
            'fecha_creacion_supervision_evaluador' => 'Fecha Creacion Supervision Evaluador',
	    'pregunta1' => 'Pregunta 1',
	    'pregunta2' => 'Pregunta 2',
	    'pregunta3' => 'Pregunta 3',
	    'pregunta4' => 'Pregunta 4',
	    'pregunta5' => 'Pregunta 5',
	    'pregunta6' => 'Pregunta 6',
	    'pregunta7' => 'Pregunta 7',
	    'pregunta8' => 'Pregunta 8',
	    'pregunta9' => 'Pregunta 9',
	    'pregunta10' => 'Pregunta 10',
	    'pregunta11' => 'Pregunta 11',
        ];
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getSupervisionCriterio041103s()
    {
        return $this->hasMany(SupervisionCriterio041103::className(), ['fk_id_supervision_evaluador' => 'id_supervision_evaluador']);
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
 		 'id_supervision_evaluador',
 		 'fk_id_peticion',
 		 'criterio_evaluacion_supervision_evaluador',
 		 'comentarios_supervision_evaluador',
 		 'observaciones_supervision_evaluador',
 		 'nombre_supervision_evaluador',
 		 'cargo_supervision_evaluador',
 		 'fecha_supervision_evaluador',
 		 'fecha_creacion_supervision_evaluador',
 		 'pregunta1',
 		 'pregunta2',
 		 'pregunta3',
 		 'pregunta4',
 		 'pregunta5',
 		 'pregunta6',
 		 'pregunta7',
 		 'pregunta8',
 		 'pregunta9',
 		 'pregunta10',
 		 'pregunta11',
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
        	'Peticion010401',
     	];
    }

    public function getNamePk() {
		return array('id_supervision_evaluador');
    }
    
    public function getModule() {
		return 'formularios';
    }
    
    public function getDisplay() {
       return 'criterio_evaluacion_supervision_evaluador';
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
			'id_peticion'=>array('peticion_01_04_01','fk_id_peticion'),
		);
    }
    
}
