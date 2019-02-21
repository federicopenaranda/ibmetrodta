<?php
namespace app\models;

use Yii;

/**
 * This is the model class for table "peticion_accion_01_03_01".
 *
 * @property integer $id_peticion_accion
 * @property integer $fk_id_peticion
 * @property integer $fk_id_accion
 * @property integer $fk_id_transicion
 * @property integer $fk_id_usuario
 * @property integer $completa_peticion_accion
 * @property integer $activa_peticion_accion
 * @property string $observacion_peticion_accion
 * @property string $fecha_creacion_peticion_accion
 *
 * @property Accion010201 $fkIdAccion
 * @property Transicion010202 $fkIdTransicion
 * @property Usuario000101 $fkIdUsuario
 * @property Peticion010401 $fkIdPeticion
 */
class PeticionAccion010301 extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'peticion_accion_01_03_01';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['fk_id_peticion', 'fk_id_accion', 'fk_id_transicion'], 'required'],
            [['fk_id_peticion', 'fk_id_accion', 'fk_id_transicion', 'fk_id_usuario', 'completa_peticion_accion', 'activa_peticion_accion'], 'integer'],
            [['observacion_peticion_accion'], 'string'],
            [['fecha_creacion_peticion_accion'], 'safe']
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id_peticion_accion' => 'Id Peticion Accion',
            'fk_id_peticion' => 'Fk Id Peticion',
            'fk_id_accion' => 'Fk Id Accion',
            'fk_id_transicion' => 'Fk Id Transicion',
            'fk_id_usuario' => 'Fk Id Usuario',
            'completa_peticion_accion' => 'Completa Peticion Accion',
            'activa_peticion_accion' => 'Activa Peticion Accion',
            'observacion_peticion_accion' => 'Observacion Peticion Accion',
            'fecha_creacion_peticion_accion' => 'Fecha Creacion Peticion Accion',
        ];
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getFkIdAccion()
    {
        return $this->hasOne(Accion010201::className(), ['id_accion' => 'fk_id_accion']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getFkIdTransicion()
    {
        return $this->hasOne(Transicion010202::className(), ['id_transicion' => 'fk_id_transicion']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getFkIdUsuario()
    {
        return $this->hasOne(Usuario000101::className(), ['id_usuario' => 'fk_id_usuario']);
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
 		 'id_peticion_accion',
 		 'fk_id_peticion',
 		 'fk_id_accion',
 		 'fk_id_transicion',
 		 'fk_id_usuario',
 		 'completa_peticion_accion',
 		 'activa_peticion_accion',
 		 'observacion_peticion_accion',
 		 'fecha_creacion_peticion_accion',
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
        	'Accion010201',
        	'Transicion010202',
        	'Usuario000101',
        	'Peticion010401',
     	];
    }

    public function getNamePk() {
		return array('id_peticion_accion');
    }
    
    public function getModule() {
		return 'proceso;display';
    }
    
    public function getDisplay() {
       return 'id_peticion_accion';
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
			'id_accion'=>array('accion_01_02_01','fk_id_accion'),
			'id_transicion'=>array('transicion_01_02_02','fk_id_transicion'),
			'id_usuario'=>array('usuario_00_01_01','fk_id_usuario'),
			'id_peticion'=>array('peticion_01_04_01','fk_id_peticion'),
		);
    }
    
}
