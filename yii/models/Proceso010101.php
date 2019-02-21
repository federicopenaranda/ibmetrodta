<?php
namespace app\models;

use Yii;

/**
 * This is the model class for table "proceso_01_01_01".
 *
 * @property integer $id_proceso
 * @property string $nombre_proceso
 * @property string $valor_proceso
 *
 * @property Accion010201[] $accion010201s
 * @property Actividad010501[] $actividad010501s
 * @property Estado010601[] $estado010601s
 * @property Peticion010401[] $peticion010401s
 * @property Transicion010202[] $transicion010202s
 * @property UsuarioProceso000102[] $usuarioProceso000102s
 * @property Usuario000101[] $fkIdUsuarios
 */
class Proceso010101 extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'proceso_01_01_01';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['nombre_proceso', 'valor_proceso'], 'required'],
            [['nombre_proceso'], 'string', 'max' => 145],
            [['valor_proceso'], 'string', 'max' => 45],
            [['nombre_proceso'], 'unique']
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id_proceso' => 'Id Proceso',
            'nombre_proceso' => 'Nombre Proceso',
            'valor_proceso' => 'Valor Proceso',
        ];
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getAccion010201s()
    {
        return $this->hasMany(Accion010201::className(), ['fk_id_proceso' => 'id_proceso']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getActividad010501s()
    {
        return $this->hasMany(Actividad010501::className(), ['fk_id_proceso' => 'id_proceso']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getEstado010601s()
    {
        return $this->hasMany(Estado010601::className(), ['fk_id_proceso' => 'id_proceso']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getPeticion010401s()
    {
        return $this->hasMany(Peticion010401::className(), ['fk_id_proceso' => 'id_proceso']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getTransicion010202s()
    {
        return $this->hasMany(Transicion010202::className(), ['fk_id_proceso' => 'id_proceso']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getUsuarioProceso000102s()
    {
        return $this->hasMany(UsuarioProceso000102::className(), ['fk_id_proceso' => 'id_proceso']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getFkIdUsuarios()
    {
        return $this->hasMany(Usuario000101::className(), ['id_usuario' => 'fk_id_usuario'])->viaTable('usuario_proceso_00_01_02', ['fk_id_proceso' => 'id_proceso']);
    }
	
    public function atributes() {
		return [
 		 'id_proceso',
 		 'nombre_proceso',
 		 'valor_proceso',
		]; 	
    }
	
 
	public function getListHasMany()
    {
    	return [
        	 'Accion010201',
        	 'Actividad010501',
        	 'Estado010601',
        	 'Peticion010401',
        	 'Transicion010202',
        	 'UsuarioProceso000102',
        	 'Usuario000101',
     	];
    }
    
    public function getListHasOne()
    {
    	return [
     	];
    }

    public function getNamePk() {
		return array('id_proceso');
    }
    
    public function getModule() {
		return 'proceso';
    }
    
    public function getDisplay() {
       return 'nombre_proceso';
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
			case 'Accion010201':
        		return new Accion010201();
                break;
			case 'Actividad010501':
        		return new Actividad010501();
                break;
			case 'Estado010601':
        		return new Estado010601();
                break;
			case 'Peticion010401':
        		return new Peticion010401();
                break;
			case 'Transicion010202':
        		return new Transicion010202();
                break;
			case 'UsuarioProceso000102':
        		return new UsuarioProceso000102();
                break;
			case 'Usuario000101':
        		return new Usuario000101();
                break;
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
		);
    }
    
}
