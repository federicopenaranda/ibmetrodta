<?php
namespace app\models;

use Yii;

/**
 * This is the model class for table "actividad_usuario_05_01_03".
 *
 * @property integer $id_actividad_usuario
 * @property integer $fk_id_actividad
 * @property integer $fk_id_usuario
 * @property string $rol_actividad_usuario
 *
 * @property Actividad050101 $fkIdActividad
 * @property Usuario000101 $fkIdUsuario
 */
class ActividadUsuario050103 extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'actividad_usuario_05_01_03';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['fk_id_actividad', 'fk_id_usuario', 'rol_actividad_usuario'], 'required'],
            [['fk_id_actividad', 'fk_id_usuario'], 'integer'],
            [['rol_actividad_usuario'], 'string'],
            [['fk_id_actividad', 'fk_id_usuario'], 'unique', 'targetAttribute' => ['fk_id_actividad', 'fk_id_usuario'], 'message' => 'The combination of Fk Id Actividad and Fk Id Usuario has already been taken.']
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id_actividad_usuario' => 'Id Actividad Usuario',
            'fk_id_actividad' => 'Fk Id Actividad',
            'fk_id_usuario' => 'Fk Id Usuario',
            'rol_actividad_usuario' => 'Rol Actividad Usuario',
        ];
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getFkIdActividad()
    {
        return $this->hasOne(Actividad050101::className(), ['id_actividad' => 'fk_id_actividad']);
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
 		 'id_actividad_usuario',
 		 'fk_id_actividad',
 		 'fk_id_usuario',
 		 'rol_actividad_usuario',
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
        	'Usuario000101',
     	];
    }

    public function getNamePk() {
		return array('id_actividad_usuario');
    }
    
    public function getModule() {
		return 'actividad';
    }
    
    public function getDisplay() {
       return '';
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
			'id_usuario'=>array('usuario_00_01_01','fk_id_usuario'),
		);
    }
    
}
