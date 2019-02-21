<?php
namespace app\models;

use Yii;

/**
 * This is the model class for table "usuario_proceso_00_01_02".
 *
 * @property integer $fk_id_proceso
 * @property integer $fk_id_usuario
 *
 * @property Proceso010101 $fkIdProceso
 * @property Usuario000101 $fkIdUsuario
 */
class UsuarioProceso000102 extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'usuario_proceso_00_01_02';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['fk_id_proceso', 'fk_id_usuario'], 'required'],
            [['fk_id_proceso', 'fk_id_usuario'], 'integer']
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'fk_id_proceso' => 'Fk Id Proceso',
            'fk_id_usuario' => 'Fk Id Usuario',
        ];
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
    public function getFkIdUsuario()
    {
        return $this->hasOne(Usuario000101::className(), ['id_usuario' => 'fk_id_usuario']);
    }
	
    public function atributes() {
		return [
 		 'fk_id_proceso',
 		 'fk_id_usuario',
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
        	'Proceso010101',
        	'Usuario000101',
     	];
    }

    public function getNamePk() {
		return array('fk_id_proceso','fk_id_usuario');
    }
    
    public function getModule() {
		return 'main';
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
       return 'fk_id_usuario';
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
			'id_proceso'=>array('proceso_01_01_01','fk_id_proceso'),
			'id_usuario'=>array('usuario_00_01_01','fk_id_usuario'),
		);
    }
    
}
