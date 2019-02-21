<?php
namespace app\models;

use Yii;

/**
 * This is the model class for table "usuario_tipo_privilegio_00_02_02".
 *
 * @property integer $fk_id_usuario_tipo
 * @property integer $fk_id_usuario_privilegio
 *
 * @property UsuarioPrivilegio000004 $fkIdUsuarioPrivilegio
 * @property UsuarioTipo000201 $fkIdUsuarioTipo
 */
class UsuarioTipoPrivilegio000202 extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'usuario_tipo_privilegio_00_02_02';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['fk_id_usuario_tipo', 'fk_id_usuario_privilegio'], 'required'],
            [['fk_id_usuario_tipo', 'fk_id_usuario_privilegio'], 'integer'],
            [['fk_id_usuario_tipo', 'fk_id_usuario_privilegio'], 'unique', 'targetAttribute' => ['fk_id_usuario_tipo', 'fk_id_usuario_privilegio'], 'message' => 'The combination of Fk Id Usuario Tipo and Fk Id Usuario Privilegio has already been taken.']
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'fk_id_usuario_tipo' => 'Fk Id Usuario Tipo',
            'fk_id_usuario_privilegio' => 'Fk Id Usuario Privilegio',
        ];
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getFkIdUsuarioPrivilegio()
    {
        return $this->hasOne(UsuarioPrivilegio000004::className(), ['id_usuario_privilegio' => 'fk_id_usuario_privilegio']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getFkIdUsuarioTipo()
    {
        return $this->hasOne(UsuarioTipo000201::className(), ['id_usuario_tipo' => 'fk_id_usuario_tipo']);
    }
	
    public function atributes() {
		return [
 		 'fk_id_usuario_tipo',
 		 'fk_id_usuario_privilegio',
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
        	'UsuarioPrivilegio000004',
        	'UsuarioTipo000201',
     	];
    }

    public function getNamePk() {
		return array('fk_id_usuario_tipo','fk_id_usuario_privilegio');
    }
    
    public function getModule() {
		return '';
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
       return 'fk_id_usuario_tipo';
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
			'id_usuario_privilegio'=>array('usuario_privilegio_00_00_04','fk_id_usuario_privilegio'),
			'id_usuario_tipo'=>array('usuario_tipo_00_02_01','fk_id_usuario_tipo'),
		);
    }
    
}
