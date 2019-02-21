<?php
namespace app\models;

use Yii;

/**
 * This is the model class for table "obs_peticion_accion_01_03_03".
 *
 * @property integer $id_obs_peticion_accion
 * @property integer $fk_id_accion
 * @property integer $fk_id_peticion
 * @property integer $fk_id_usuario
 * @property string $obs_peticion_accion
 * @property integer $procede_obs_peticion_accion
 * @property string $fecha_hora_obs_peticion_accion
 *
 * @property Usuario000101 $fkIdUsuario
 * @property Accion010201 $fkIdAccion
 * @property Peticion010401 $fkIdPeticion
 */
class ObsPeticionAccion010303 extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'obs_peticion_accion_01_03_03';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['fk_id_accion', 'fk_id_peticion', 'fk_id_usuario', 'obs_peticion_accion', 'procede_obs_peticion_accion'], 'required'],
            [['fk_id_accion', 'fk_id_peticion', 'fk_id_usuario', 'procede_obs_peticion_accion'], 'integer'],
            [['obs_peticion_accion'], 'string'],
            [['fecha_hora_obs_peticion_accion'], 'safe']
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id_obs_peticion_accion' => 'Id Obs Peticion Accion',
            'fk_id_accion' => 'Fk Id Accion',
            'fk_id_peticion' => 'Fk Id Peticion',
            'fk_id_usuario' => 'Fk Id Usuario',
            'obs_peticion_accion' => 'Obs Peticion Accion',
            'procede_obs_peticion_accion' => 'Procede Obs Peticion Accion',
            'fecha_hora_obs_peticion_accion' => 'Fecha Hora Obs Peticion Accion',
        ];
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
    public function getFkIdAccion()
    {
        return $this->hasOne(Accion010201::className(), ['id_accion' => 'fk_id_accion']);
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
 		 'id_obs_peticion_accion',
 		 'fk_id_accion',
 		 'fk_id_peticion',
 		 'fk_id_usuario',
 		 'obs_peticion_accion',
 		 'procede_obs_peticion_accion',
 		 'fecha_hora_obs_peticion_accion',
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
        	'Usuario000101',
        	'Accion010201',
        	'Peticion010401',
     	];
    }

    public function getNamePk() {
		return array('id_obs_peticion_accion');
    }
    
    public function getModule() {
		return 'proceso';
    }
    
    public function getDisplay() {
       return 'obs_peticion_accion';
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
			'id_usuario'=>array('usuario_00_01_01','fk_id_usuario'),
			'id_accion'=>array('accion_01_02_01','fk_id_accion'),
			'id_peticion'=>array('peticion_01_04_01','fk_id_peticion'),
		);
    }
    
}
