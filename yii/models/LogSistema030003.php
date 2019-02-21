<?php
namespace app\models;

use Yii;

/**
 * This is the model class for table "log_sistema_03_00_03".
 *
 * @property integer $id_log_sistema
 * @property integer $fk_id_usuario
 * @property string $fecha_hora_log_sistema
 * @property string $accion_log_sistema
 * @property string $tabla_log_sistema
 * @property string $ip_registro_log_sistema
 *
 * @property Usuario000101 $fkIdUsuario
 */
class LogSistema030003 extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'log_sistema_03_00_03';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['fk_id_usuario'], 'integer'],
            [['fecha_hora_log_sistema', 'accion_log_sistema', 'tabla_log_sistema', 'ip_registro_log_sistema'], 'required'],
            [['fecha_hora_log_sistema'], 'safe'],
            [['accion_log_sistema', 'tabla_log_sistema'], 'string', 'max' => 145],
            [['ip_registro_log_sistema'], 'string', 'max' => 15]
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id_log_sistema' => 'Id Log Sistema',
            'fk_id_usuario' => 'Fk Id Usuario',
            'fecha_hora_log_sistema' => 'Fecha Hora Log Sistema',
            'accion_log_sistema' => 'Accion Log Sistema',
            'tabla_log_sistema' => 'Tabla Log Sistema',
            'ip_registro_log_sistema' => 'Ip Registro Log Sistema',
        ];
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
 		 'id_log_sistema',
 		 'fk_id_usuario',
 		 'fecha_hora_log_sistema',
 		 'accion_log_sistema',
 		 'tabla_log_sistema',
 		 'ip_registro_log_sistema',
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
     	];
    }

    public function getNamePk() {
		return array('id_log_sistema');
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
			'id_usuario'=>array('usuario_00_01_01','fk_id_usuario'),
		);
    }
    
	public function insertAudi($accion,$nomTab,$id){
		$this->fk_id_usuario 			= yii::$app->user->getId();
		$this->fecha_hora_log_sistema	= date('Y-m-d H:i:s');
		$this->accion_log_sistema 		= $accion;
		$this->tabla_log_sistema 		= $nomTab;
        $this->ip_registro_log_sistema	= $_SERVER['REMOTE_ADDR'];
		if($this->validate())
			$this->save();
	}
}
