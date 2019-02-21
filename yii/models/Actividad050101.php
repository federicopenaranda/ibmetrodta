<?php
namespace app\models;

use Yii;

/**
 * This is the model class for table "actividad_05_01_01".
 *
 * @property integer $id_actividad
 * @property integer $fk_id_oec
 * @property integer $fk_id_tipo_actividad
 * @property integer $fk_id_tipo_curso
 * @property string $codigo_actividad
 * @property string $fecha_actividad
 * @property string $nombre_actividad
 * @property string $descripcion_actividad
 * @property string $fecha_inicial_actividad
 * @property string $fecha_final_actividad
 * @property integer $prs_actividad
 * @property integer $horas_actividad
 *
 * @property TipoCurso050104 $fkIdTipoCurso
 * @property Oec020001 $fkIdOec
 * @property TipoActividad050104 $fkIdTipoActividad
 * @property ActividadUsuario050103[] $actividadUsuario050103s
 * @property ParticipantesCurso050103[] $participantesCurso050103s
 */
class Actividad050101 extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'actividad_05_01_01';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['fk_id_oec', 'fk_id_tipo_actividad', 'codigo_actividad', 'fecha_actividad', 'nombre_actividad', 'fecha_inicial_actividad', 'fecha_final_actividad'], 'required'],
            [['fk_id_oec', 'fk_id_tipo_actividad', 'fk_id_tipo_curso', 'prs_actividad', 'horas_actividad'], 'integer'],
            [['fecha_actividad', 'fecha_inicial_actividad', 'fecha_final_actividad'], 'safe'],
            [['descripcion_actividad'], 'string'],
            [['codigo_actividad'], 'string', 'max' => 45],
            [['nombre_actividad'], 'string', 'max' => 200],
            [['codigo_actividad'], 'unique']
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id_actividad' => 'Id Actividad',
            'fk_id_oec' => 'Fk Id Oec',
            'fk_id_tipo_actividad' => 'Fk Id Tipo Actividad',
            'fk_id_tipo_curso' => 'Fk Id Tipo Curso',
            'codigo_actividad' => 'Codigo Actividad',
            'fecha_actividad' => 'Fecha Actividad',
            'nombre_actividad' => 'Nombre Actividad',
            'descripcion_actividad' => 'Descripcion Actividad',
            'fecha_inicial_actividad' => 'Fecha Inicial Actividad',
            'fecha_final_actividad' => 'Fecha Final Actividad',
            'prs_actividad' => 'Prs Actividad',
            'horas_actividad' => 'Horas Actividad',
        ];
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getFkIdTipoCurso()
    {
        return $this->hasOne(TipoCurso050104::className(), ['id_tipo_curso' => 'fk_id_tipo_curso']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getFkIdOec()
    {
        return $this->hasOne(Oec020001::className(), ['id_oec' => 'fk_id_oec']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getFkIdTipoActividad()
    {
        return $this->hasOne(TipoActividad050104::className(), ['id_tipo_actividad' => 'fk_id_tipo_actividad']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getActividadUsuario050103s()
    {
        return $this->hasMany(ActividadUsuario050103::className(), ['fk_id_actividad' => 'id_actividad']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getParticipantesCurso050103s()
    {
        return $this->hasMany(ParticipantesCurso050103::className(), ['fk_id_actividad' => 'id_actividad']);
    }
	
    public function atributes() {
		return [
 		 'id_actividad',
 		 'fk_id_oec',
 		 'fk_id_tipo_actividad',
 		 'fk_id_tipo_curso',
 		 'codigo_actividad',
 		 'fecha_actividad',
 		 'nombre_actividad',
 		 'descripcion_actividad',
 		 'fecha_inicial_actividad',
 		 'fecha_final_actividad',
 		 'prs_actividad',
 		 'horas_actividad',
		]; 	
    }
	
 
	public function getListHasMany()
    {
    	return [
        	 'ActividadUsuario050103',
        	 'ParticipantesCurso050103',
     	];
    }
    
    public function getListHasOne()
    {
    	return [
        	'TipoCurso050104',
        	'Oec020001',
        	'TipoActividad050104',
     	];
    }

    public function getNamePk() {
		return array('id_actividad');
    }
    
    public function getModule() {
		return 'actividad';
    }
    
    public function getDisplay() {
       return 'codigo_actividad';
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
			case 'ActividadUsuario050103':
        		return new ActividadUsuario050103();
                break;
			case 'ParticipantesCurso050103':
        		return new ParticipantesCurso050103();
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
			'id_tipo_curso'=>array('tipo_curso_05_01_04','fk_id_tipo_curso'),
			'id_oec'=>array('oec_02_00_01','fk_id_oec'),
			'id_tipo_actividad'=>array('tipo_actividad_05_01_04','fk_id_tipo_actividad'),
		);
    }

    function check_in_range($start_date, $end_date, $evaluame) {
        $start_ts = strtotime($start_date);
        $end_ts = strtotime($end_date);
        $user_ts = strtotime($evaluame);
        return (($user_ts >= $start_ts) && ($user_ts <= $end_ts));
    }
    
}
