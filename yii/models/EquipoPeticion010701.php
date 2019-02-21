<?php
namespace app\models;

use Yii;

/**
 * This is the model class for table "equipo_peticion_01_07_01".
 *
 * @property integer $id_equipo_peticion
 * @property integer $fk_id_peticion
 * @property integer $fk_id_usuario
 * @property integer $cantidad_horas_equipo_peticion
 * @property string $observaciones_equipo_peticion
 * @property string $estado_equipo_peticion
 *
 * @property Peticion010401 $fkIdPeticion
 * @property Usuario000101 $fkIdUsuario
 */
class EquipoPeticion010701 extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'equipo_peticion_01_07_01';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['fk_id_peticion', 'fk_id_usuario', 'cantidad_horas_equipo_peticion', 'estado_equipo_peticion'], 'required'],
            [['fk_id_peticion', 'fk_id_usuario', 'cantidad_horas_equipo_peticion'], 'integer'],
            [['observaciones_equipo_peticion', 'estado_equipo_peticion'], 'string']
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id_equipo_peticion' => 'Id Equipo Peticion',
            'fk_id_peticion' => 'Fk Id Peticion',
            'fk_id_usuario' => 'Fk Id Usuario',
            'cantidad_horas_equipo_peticion' => 'Cantidad Horas Equipo Peticion',
            'observaciones_equipo_peticion' => 'Observaciones Equipo Peticion',
            'estado_equipo_peticion' => 'Estado Equipo Peticion',
        ];
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getFkIdPeticion()
    {
        return $this->hasOne(Peticion010401::className(), ['id_peticion' => 'fk_id_peticion']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getFkIdUsuario()
    {
        return $this->hasOne(Usuario000101::className(), ['id_usuario' => 'fk_id_usuario']);
    }
	
    public function atributes() {
		return [
 		 'id_equipo_peticion',
 		 'fk_id_peticion',
 		 'fk_id_usuario',
 		 'cantidad_horas_equipo_peticion',
 		 'observaciones_equipo_peticion',
 		 'estado_equipo_peticion',
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
        	'Peticion010401',
        	'Usuario000101',
     	];
    }

    public function getNamePk() {
		return array('id_equipo_peticion');
    }
    
    public function getModule() {
		return 'proceso;display';
    }
    
    public function getDisplay() {
       return 'id_equipo_peticion';
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
			'id_peticion'=>array('peticion_01_04_01','fk_id_peticion'),
			'id_usuario'=>array('usuario_00_01_01','fk_id_usuario'),
		);
    }
    
}
