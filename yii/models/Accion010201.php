<?php
namespace app\models;

use Yii;

/**
 * This is the model class for table "accion_01_02_01".
 *
 * @property integer $id_accion
 * @property integer $fk_id_accion_tipo
 * @property integer $fk_id_proceso
 * @property string $nombre_accion
 * @property string $descripcion_accion
 * @property string $codigo_sub_accion
 *
 * @property AccionTipo010204 $fkIdAccionTipo
 * @property Proceso010101 $fkIdProceso
 * @property AccionNotificacion010203[] $accionNotificacion010203s
 * @property AccionObservacion010203[] $accionObservacion010203s
 * @property AccionTransicion010202[] $accionTransicion010202s
 * @property Transicion010202[] $fkIdTransicions
 * @property ObsPeticionAccion010303[] $obsPeticionAccion010303s
 * @property PeticionAccion010301[] $peticionAccion010301s
 * @property PeticionArchivo010401[] $peticionArchivo010401s
 */
class Accion010201 extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'accion_01_02_01';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['fk_id_accion_tipo', 'fk_id_proceso', 'nombre_accion'], 'required'],
            [['fk_id_accion_tipo', 'fk_id_proceso'], 'integer'],
            [['nombre_accion', 'descripcion_accion'], 'string', 'max' => 145],
            [['codigo_sub_accion'], 'string', 'max' => 45]
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id_accion' => 'Id Accion',
            'fk_id_accion_tipo' => 'Fk Id Accion Tipo',
            'fk_id_proceso' => 'Fk Id Proceso',
            'nombre_accion' => 'Nombre Accion',
            'descripcion_accion' => 'Descripcion Accion',
            'codigo_sub_accion' => 'Codigo Sub Accion',
        ];
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getFkIdAccionTipo()
    {
        return $this->hasOne(AccionTipo010204::className(), ['id_accion_tipo' => 'fk_id_accion_tipo']);
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
    public function getAccionNotificacion010203s()
    {
        return $this->hasMany(AccionNotificacion010203::className(), ['fk_id_accion' => 'id_accion']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getAccionObservacion010203s()
    {
        return $this->hasMany(AccionObservacion010203::className(), ['fk_id_accion' => 'id_accion']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getAccionTransicion010202s()
    {
        return $this->hasMany(AccionTransicion010202::className(), ['fk_id_accion' => 'id_accion']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getFkIdTransicions()
    {
        return $this->hasMany(Transicion010202::className(), ['id_transicion' => 'fk_id_transicion'])->viaTable('accion_transicion_01_02_02', ['fk_id_accion' => 'id_accion']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getObsPeticionAccion010303s()
    {
        return $this->hasMany(ObsPeticionAccion010303::className(), ['fk_id_accion' => 'id_accion']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getPeticionAccion010301s()
    {
        return $this->hasMany(PeticionAccion010301::className(), ['fk_id_accion' => 'id_accion']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getPeticionArchivo010401s()
    {
        return $this->hasMany(PeticionArchivo010401::className(), ['fk_id_accion' => 'id_accion']);
    }
	
    public function atributes() {
		return [
 		 'id_accion',
 		 'fk_id_accion_tipo',
 		 'fk_id_proceso',
 		 'nombre_accion',
 		 'descripcion_accion',
 		 'codigo_sub_accion',
		]; 	
    }
	
 
	public function getListHasMany()
    {
    	return [
        	 'AccionNotificacion010203',
        	 'AccionObservacion010203',
        	 'AccionTransicion010202',
        	 'Transicion010202',
        	 'ObsPeticionAccion010303',
        	 'PeticionAccion010301',
        	 'PeticionArchivo010401',
     	];
    }
    
    public function getListHasOne()
    {
    	return [
        	'AccionTipo010204',
        	'Proceso010101',
     	];
    }

    public function getNamePk() {
		return array('id_accion');
    }
    
    public function getModule() {
		return 'proceso';
    }
    
    public function getDisplay() {
       return 'nombre_accion';
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
			case 'AccionNotificacion010203':
        		return new AccionNotificacion010203();
                break;
			case 'AccionObservacion010203':
        		return new AccionObservacion010203();
                break;
			case 'AccionTransicion010202':
        		return new AccionTransicion010202();
                break;
			case 'Transicion010202':
        		return new Transicion010202();
                break;
			case 'ObsPeticionAccion010303':
        		return new ObsPeticionAccion010303();
                break;
			case 'PeticionAccion010301':
        		return new PeticionAccion010301();
                break;
			case 'PeticionArchivo010401':
        		return new PeticionArchivo010401();
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
			'id_accion_tipo'=>array('accion_tipo_01_02_04','fk_id_accion_tipo'),
			'id_proceso'=>array('proceso_01_01_01','fk_id_proceso'),
		);
    }
    
}
