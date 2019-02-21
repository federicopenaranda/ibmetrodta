<?php
namespace app\models;

use Yii;

/**
 * This is the model class for table "usuario_tipo_usuario_00_01_02".
 *
 * @property integer $fk_id_usuario_tipo
 * @property integer $fk_id_usuario
 *
 * @property Usuario000101 $fkIdUsuario
 * @property UsuarioTipo000201 $fkIdUsuarioTipo
 */
class UsuarioTipoUsuario000102 extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'usuario_tipo_usuario_00_01_02';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['fk_id_usuario_tipo', 'fk_id_usuario'], 'required'],
            [['fk_id_usuario_tipo', 'fk_id_usuario'], 'integer'],
            [['fk_id_usuario_tipo', 'fk_id_usuario'], 'unique', 'targetAttribute' => ['fk_id_usuario_tipo', 'fk_id_usuario'], 'message' => 'The combination of Fk Id Usuario Tipo and Fk Id Usuario has already been taken.']
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'fk_id_usuario_tipo' => 'Fk Id Usuario Tipo',
            'fk_id_usuario' => 'Fk Id Usuario',
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
    public function getFkIdUsuarioTipo()
    {
        return $this->hasOne(UsuarioTipo000201::className(), ['id_usuario_tipo' => 'fk_id_usuario_tipo']);
    }
	
    public function atributes() {
		return [
 		 'fk_id_usuario_tipo',
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
        	'Usuario000101',
        	'UsuarioTipo000201',
     	];
    }

    public function getNamePk() {
		return array('fk_id_usuario_tipo','fk_id_usuario');
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
			'id_usuario_tipo'=>array('usuario_tipo_00_02_01','fk_id_usuario_tipo'),
		);
    }
    
}
