<?php
namespace app\models;

use Yii;

/**
 * This is the model class for table "estado_01_06_01".
 *
 * @property integer $id_estado
 * @property integer $fk_id_estado_tipo
 * @property integer $fk_id_proceso
 * @property string $nombre_estado
 * @property string $descripcion_estado
 *
 * @property ActividadEstado010602[] $actividadEstado010602s
 * @property Actividad010501[] $fkIdActividads
 * @property EstadoTipo010604 $fkIdEstadoTipo
 * @property Proceso010101 $fkIdProceso
 * @property EstadoNotificacion010203[] $estadoNotificacion010203s
 * @property PeticionEstado010403[] $peticionEstado010403s
 * @property Transicion010202[] $transicion010202s
 */
class Estado010601 extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'estado_01_06_01';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['fk_id_estado_tipo', 'fk_id_proceso', 'nombre_estado'], 'required'],
            [['fk_id_estado_tipo', 'fk_id_proceso'], 'integer'],
            [['descripcion_estado'], 'string'],
            [['nombre_estado'], 'string', 'max' => 145],
            [['nombre_estado'], 'unique']
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id_estado' => 'Id Estado',
            'fk_id_estado_tipo' => 'Fk Id Estado Tipo',
            'fk_id_proceso' => 'Fk Id Proceso',
            'nombre_estado' => 'Nombre Estado',
            'descripcion_estado' => 'Descripcion Estado',
        ];
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getActividadEstado010602s()
    {
        return $this->hasMany(ActividadEstado010602::className(), ['fk_id_estado' => 'id_estado']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getFkIdActividads()
    {
        return $this->hasMany(Actividad010501::className(), ['id_actividad' => 'fk_id_actividad'])->viaTable('actividad_estado_01_06_02', ['fk_id_estado' => 'id_estado']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getFkIdEstadoTipo()
    {
        return $this->hasOne(EstadoTipo010604::className(), ['id_estado_tipo' => 'fk_id_estado_tipo']);
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
    public function getEstadoNotificacion010203s()
    {
        return $this->hasMany(EstadoNotificacion010203::className(), ['fk_id_estado' => 'id_estado']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getPeticionEstado010403s()
    {
        return $this->hasMany(PeticionEstado010403::className(), ['fk_id_estado' => 'id_estado']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getTransicion010202s()
    {
        return $this->hasMany(Transicion010202::className(), ['fk_id_estado_siguiente' => 'id_estado']);
    }
	
    public function atributes() {
		return [
 		 'id_estado',
 		 'fk_id_estado_tipo',
 		 'fk_id_proceso',
 		 'nombre_estado',
 		 'descripcion_estado',
		]; 	
    }
	
 
	public function getListHasMany()
    {
    	return [
        	 'ActividadEstado010602',
        	 'Actividad010501',
        	 'EstadoNotificacion010203',
        	 'PeticionEstado010403',
        	 'Transicion010202',
     	];
    }
    
    public function getListHasOne()
    {
    	return [
        	'EstadoTipo010604',
        	'Proceso010101',
     	];
    }

    public function getNamePk() {
		return array('id_estado');
    }
    
    public function getModule() {
		return 'proceso';
    }
    
    public function getDisplay() {
       return 'nombre_estado';
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
			'nombre_estado',
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
			case 'Actividad010501':
        		return new Actividad010501();
                break;
			case 'EstadoNotificacion010203':
        		return new EstadoNotificacion010203();
                break;
			case 'PeticionEstado010403':
        		return new PeticionEstado010403();
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
			'id_estado_tipo'=>array('estado_tipo_01_06_04','fk_id_estado_tipo'),
			'id_proceso'=>array('proceso_01_01_01','fk_id_proceso'),
		);
    }
    
}
