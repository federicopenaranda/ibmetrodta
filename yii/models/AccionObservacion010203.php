<?php
namespace app\models;

use Yii;

/**
 * This is the model class for table "accion_observacion_01_02_03".
 *
 * @property integer $id_accion_observacion
 * @property integer $fk_id_accion
 * @property integer $fk_id_usuario_tipo
 * @property string $asunto_accion_observacion
 *
 * @property Accion010201 $fkIdAccion
 * @property UsuarioTipo000201 $fkIdUsuarioTipo
 */
class AccionObservacion010203 extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'accion_observacion_01_02_03';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['fk_id_accion', 'fk_id_usuario_tipo', 'asunto_accion_observacion'], 'required'],
            [['fk_id_accion', 'fk_id_usuario_tipo'], 'integer'],
            [['asunto_accion_observacion'], 'string'],
            [['fk_id_accion', 'fk_id_usuario_tipo'], 'unique', 'targetAttribute' => ['fk_id_accion', 'fk_id_usuario_tipo'], 'message' => 'The combination of Fk Id Accion and Fk Id Usuario Tipo has already been taken.']
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id_accion_observacion' => 'Id Accion Observacion',
            'fk_id_accion' => 'Fk Id Accion',
            'fk_id_usuario_tipo' => 'Fk Id Usuario Tipo',
            'asunto_accion_observacion' => 'Asunto Accion Observacion',
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
    public function getFkIdUsuarioTipo()
    {
        return $this->hasOne(UsuarioTipo000201::className(), ['id_usuario_tipo' => 'fk_id_usuario_tipo']);
    }
	
    public function atributes() {
		return [
 		 'id_accion_observacion',
 		 'fk_id_accion',
 		 'fk_id_usuario_tipo',
 		 'asunto_accion_observacion',
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
        	'UsuarioTipo000201',
     	];
    }

    public function getNamePk() {
		return array('id_accion_observacion');
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
			'id_accion'=>array('accion_01_02_01','fk_id_accion'),
			'id_usuario_tipo'=>array('usuario_tipo_00_02_01','fk_id_usuario_tipo'),
		);
    }
    
}
