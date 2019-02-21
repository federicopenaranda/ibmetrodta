<?php
namespace app\models;

use Yii;

/**
 * This is the model class for table "transicion_01_02_02".
 *
 * @property integer $id_transicion
 * @property integer $fk_id_proceso
 * @property integer $fk_id_estado_actual
 * @property integer $fk_id_estado_siguiente
 *
 * @property AccionTransicion010202[] $accionTransicion010202s
 * @property Accion010201[] $fkIdAccions
 * @property ActividadTransicion010502[] $actividadTransicion010502s
 * @property Actividad010501[] $fkIdActividads
 * @property PeticionAccion010301[] $peticionAccion010301s
 * @property Estado010601 $fkIdEstadoActual
 * @property Estado010601 $fkIdEstadoSiguiente
 * @property Proceso010101 $fkIdProceso
 */
class Transicion010202 extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'transicion_01_02_02';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['fk_id_proceso', 'fk_id_estado_actual', 'fk_id_estado_siguiente'], 'required'],
            [['fk_id_proceso', 'fk_id_estado_actual', 'fk_id_estado_siguiente'], 'integer']
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id_transicion' => 'Id Transicion',
            'fk_id_proceso' => 'Fk Id Proceso',
            'fk_id_estado_actual' => 'Fk Id Estado Actual',
            'fk_id_estado_siguiente' => 'Fk Id Estado Siguiente',
        ];
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getAccionTransicion010202s()
    {
        return $this->hasMany(AccionTransicion010202::className(), ['fk_id_transicion' => 'id_transicion']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getFkIdAccions()
    {
        return $this->hasMany(Accion010201::className(), ['id_accion' => 'fk_id_accion'])->viaTable('accion_transicion_01_02_02', ['fk_id_transicion' => 'id_transicion']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getActividadTransicion010502s()
    {
        return $this->hasMany(ActividadTransicion010502::className(), ['fk_id_transicion' => 'id_transicion']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getFkIdActividads()
    {
        return $this->hasMany(Actividad010501::className(), ['id_actividad' => 'fk_id_actividad'])->viaTable('actividad_transicion_01_05_02', ['fk_id_transicion' => 'id_transicion']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getPeticionAccion010301s()
    {
        return $this->hasMany(PeticionAccion010301::className(), ['fk_id_transicion' => 'id_transicion']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getFkIdEstadoActual()
    {
        return $this->hasOne(Estado010601::className(), ['id_estado' => 'fk_id_estado_actual']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getFkIdEstadoSiguiente()
    {
        return $this->hasOne(Estado010601::className(), ['id_estado' => 'fk_id_estado_siguiente']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getFkIdProceso()
    {
        return $this->hasOne(Proceso010101::className(), ['id_proceso' => 'fk_id_proceso']);
    }
	
    public function atributes() {
		return [
 		 'id_transicion',
 		 'fk_id_proceso',
 		 'fk_id_estado_actual',
 		 'fk_id_estado_siguiente',
		]; 	
    }
	
 
	public function getListHasMany()
    {
    	return [
        	 'AccionTransicion010202',
        	 'Accion010201',
        	 'ActividadTransicion010502',
        	 'Actividad010501',
        	 'PeticionAccion010301',
     	];
    }
    
    public function getListHasOne()
    {
    	return [
        	'Estado010601',
        	'Estado010601',
        	'Proceso010101',
     	];
    }

    public function getNamePk() {
		return array('id_transicion');
    }
    
    public function getModule() {
		return 'display';
    }
    
    public function getDisplay() {
       return 'id_transicion';
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
			case 'AccionTransicion010202':
        		return new AccionTransicion010202();
                break;
			case 'Accion010201':
        		return new Accion010201();
                break;
			case 'ActividadTransicion010502':
        		return new ActividadTransicion010502();
                break;
			case 'Actividad010501':
        		return new Actividad010501();
                break;
			case 'PeticionAccion010301':
        		return new PeticionAccion010301();
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
			'id_estado'=>array('estado_01_06_01','fk_id_estado_actual'),
			'id_estado'=>array('estado_01_06_01','fk_id_estado_siguiente'),
			'id_proceso'=>array('proceso_01_01_01','fk_id_proceso'),
		);
    }
    
}
