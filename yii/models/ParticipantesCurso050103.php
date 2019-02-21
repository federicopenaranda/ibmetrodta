<?php
namespace app\models;

use Yii;

/**
 * This is the model class for table "participantes_curso_05_01_03".
 *
 * @property integer $id_participantes_curso
 * @property integer $fk_id_actividad
 * @property string $primer_nombre_participantes_curso
 * @property string $segundo_nombre_participantes_curso
 * @property string $apellido_paterno_participantes_curso
 * @property string $apellido_materno_participantes_curso
 * @property string $estado_participantes_curso
 *
 * @property Actividad050101 $fkIdActividad
 */
class ParticipantesCurso050103 extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'participantes_curso_05_01_03';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['fk_id_actividad', 'primer_nombre_participantes_curso', 'apellido_paterno_participantes_curso'], 'required'],
            [['fk_id_actividad'], 'integer'],
            [['estado_participantes_curso'], 'string'],
            [['primer_nombre_participantes_curso', 'segundo_nombre_participantes_curso', 'apellido_paterno_participantes_curso', 'apellido_materno_participantes_curso'], 'string', 'max' => 200]
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id_participantes_curso' => 'Id Participantes Curso',
            'fk_id_actividad' => 'Fk Id Actividad',
            'primer_nombre_participantes_curso' => 'Primer Nombre Participantes Curso',
            'segundo_nombre_participantes_curso' => 'Segundo Nombre Participantes Curso',
            'apellido_paterno_participantes_curso' => 'Apellido Paterno Participantes Curso',
            'apellido_materno_participantes_curso' => 'Apellido Materno Participantes Curso',
            'estado_participantes_curso' => 'Estado Participantes Curso',
        ];
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getFkIdActividad()
    {
        return $this->hasOne(Actividad050101::className(), ['id_actividad' => 'fk_id_actividad']);
    }
	
    public function atributes() {
		return [
 		 'id_participantes_curso',
 		 'fk_id_actividad',
 		 'primer_nombre_participantes_curso',
 		 'segundo_nombre_participantes_curso',
 		 'apellido_paterno_participantes_curso',
 		 'apellido_materno_participantes_curso',
 		 'estado_participantes_curso',
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
        	'Actividad050101',
     	];
    }

    public function getNamePk() {
		return array('id_participantes_curso');
    }
    
    public function getModule() {
		return 'actividad';
    }
    
    public function getDisplay() {
       return 'primer_nombre_participantes_curso';
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
			'id_actividad'=>array('actividad_05_01_01','fk_id_actividad'),
		);
    }
    
}
