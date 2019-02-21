<?php
namespace app\models;

use Yii;

/**
 * This is the model class for table "estado_notificacion_01_02_03".
 *
 * @property integer $id_estado_notificacion
 * @property integer $fk_id_estado
 * @property integer $fk_id_usuario_tipo
 * @property string $asunto_estado_notificacion
 * @property string $mensaje_estado_notificacion
 *
 * @property Estado010601 $fkIdEstado
 * @property UsuarioTipo000201 $fkIdUsuarioTipo
 */
class EstadoNotificacion010203 extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'estado_notificacion_01_02_03';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['fk_id_estado', 'fk_id_usuario_tipo', 'asunto_estado_notificacion', 'mensaje_estado_notificacion'], 'required'],
            [['fk_id_estado', 'fk_id_usuario_tipo'], 'integer'],
            [['mensaje_estado_notificacion'], 'string'],
            [['asunto_estado_notificacion'], 'string', 'max' => 145]
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id_estado_notificacion' => 'Id Estado Notificacion',
            'fk_id_estado' => 'Fk Id Estado',
            'fk_id_usuario_tipo' => 'Fk Id Usuario Tipo',
            'asunto_estado_notificacion' => 'Asunto Estado Notificacion',
            'mensaje_estado_notificacion' => 'Mensaje Estado Notificacion',
        ];
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getFkIdEstado()
    {
        return $this->hasOne(Estado010601::className(), ['id_estado' => 'fk_id_estado']);
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
 		 'id_estado_notificacion',
 		 'fk_id_estado',
 		 'fk_id_usuario_tipo',
 		 'asunto_estado_notificacion',
 		 'mensaje_estado_notificacion',
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
        	'Estado010601',
        	'UsuarioTipo000201',
     	];
    }

    public function getNamePk() {
		return array('id_estado_notificacion');
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
			'id_estado'=>array('estado_01_06_01','fk_id_estado'),
			'id_usuario_tipo'=>array('usuario_tipo_00_02_01','fk_id_usuario_tipo'),
		);
    }
    
}
