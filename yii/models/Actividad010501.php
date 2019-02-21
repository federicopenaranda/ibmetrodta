<?php
namespace app\models;

use Yii;

/**
 * This is the model class for table "actividad_01_05_01".
 *
 * @property integer $id_actividad
 * @property integer $fk_id_actividad_tipo
 * @property integer $fk_id_proceso
 * @property string $nombre_actividad
 * @property string $descripcion_actividad
 *
 * @property ActividadTipo010504 $fkIdActividadTipo
 * @property Proceso010101 $fkIdProceso
 * @property ActividadEstado010602[] $actividadEstado010602s
 * @property Estado010601[] $fkIdEstados
 * @property ActividadTransicion010502[] $actividadTransicion010502s
 * @property Transicion010202[] $fkIdTransicions
 */
class Actividad010501 extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'actividad_01_05_01';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['fk_id_actividad_tipo', 'fk_id_proceso', 'nombre_actividad'], 'required'],
            [['fk_id_actividad_tipo', 'fk_id_proceso'], 'integer'],
            [['descripcion_actividad'], 'string'],
            [['nombre_actividad'], 'string', 'max' => 145],
            [['nombre_actividad'], 'unique']
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id_actividad' => 'Id Actividad',
            'fk_id_actividad_tipo' => 'Fk Id Actividad Tipo',
            'fk_id_proceso' => 'Fk Id Proceso',
            'nombre_actividad' => 'Nombre Actividad',
            'descripcion_actividad' => 'Descripcion Actividad',
        ];
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getFkIdActividadTipo()
    {
        return $this->hasOne(ActividadTipo010504::className(), ['id_actividad_tipo' => 'fk_id_actividad_tipo']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getFkIdProceso()
    {
        return $this->hasOne(Proceso010101::className(), ['id_proceso' => 'fk_id_proceso']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getActividadEstado010602s()
    {
        return $this->hasMany(ActividadEstado010602::className(), ['fk_id_actividad' => 'id_actividad']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getFkIdEstados()
    {
        return $this->hasMany(Estado010601::className(), ['id_estado' => 'fk_id_estado'])->viaTable('actividad_estado_01_06_02', ['fk_id_actividad' => 'id_actividad']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getActividadTransicion010502s()
    {
        return $this->hasMany(ActividadTransicion010502::className(), ['fk_id_actividad' => 'id_actividad']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getFkIdTransicions()
    {
        return $this->hasMany(Transicion010202::className(), ['id_transicion' => 'fk_id_transicion'])->viaTable('actividad_transicion_01_05_02', ['fk_id_actividad' => 'id_actividad']);
    }
	
    public function atributes() {
		return [
 		 'id_actividad',
 		 'fk_id_actividad_tipo',
 		 'fk_id_proceso',
 		 'nombre_actividad',
 		 'descripcion_actividad',
		]; 	
    }
	
 
	public function getListHasMany()
    {
    	return [
        	 'ActividadEstado010602',
        	 'Estado010601',
        	 'ActividadTransicion010502',
        	 'Transicion010202',
     	];
    }
    
    public function getListHasOne()
    {
    	return [
        	'ActividadTipo010504',
        	'Proceso010101',
     	];
    }

    public function getNamePk() {
		return array('id_actividad');
    }
    
    public function getModule() {
		return 'proceso';
    }
    
    public function getDisplay() {
       return 'nombre_actividad';
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
			'nombre_actividad',
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
			case 'ActividadEstado010602':
        		return new ActividadEstado010602();
                break;
			case 'Estado010601':
        		return new Estado010601();
                break;
			case 'ActividadTransicion010502':
        		return new ActividadTransicion010502();
                break;
			case 'Transicion010202':
        		return new Transicion010202();
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
			'id_actividad_tipo'=>array('actividad_tipo_01_05_04','fk_id_actividad_tipo'),
			'id_proceso'=>array('proceso_01_01_01','fk_id_proceso'),
		);
    }
    
}
