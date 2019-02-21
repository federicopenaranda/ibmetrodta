<?php
namespace app\models;

use Yii;

/**
 * This is the model class for table "usuario_privilegio_00_00_04".
 *
 * @property integer $id_usuario_privilegio
 * @property string $nombre_privilegio_usuario_privilegio
 * @property string $accion_usuario_privilegio
 * @property string $opciones_usuario_privilegio
 * @property string $funcion_usuario_privilegio
 * @property string $descripcion_usuario_privilegio
 *
 * @property UsuarioTipoPrivilegio000202[] $usuarioTipoPrivilegio000202s
 * @property UsuarioTipo000201[] $fkIdUsuarioTipos
 */
class UsuarioPrivilegio000004 extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'usuario_privilegio_00_00_04';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['nombre_privilegio_usuario_privilegio', 'accion_usuario_privilegio'], 'required'],
            [['nombre_privilegio_usuario_privilegio', 'accion_usuario_privilegio', 'opciones_usuario_privilegio', 'funcion_usuario_privilegio', 'descripcion_usuario_privilegio'], 'string', 'max' => 145],
            [['nombre_privilegio_usuario_privilegio'], 'unique']
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id_usuario_privilegio' => 'Id Usuario Privilegio',
            'nombre_privilegio_usuario_privilegio' => 'Nombre Privilegio Usuario Privilegio',
            'accion_usuario_privilegio' => 'Accion Usuario Privilegio',
            'opciones_usuario_privilegio' => 'Opciones Usuario Privilegio',
            'funcion_usuario_privilegio' => 'Funcion Usuario Privilegio',
            'descripcion_usuario_privilegio' => 'Descripcion Usuario Privilegio',
        ];
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getUsuarioTipoPrivilegio000202s()
    {
        return $this->hasMany(UsuarioTipoPrivilegio000202::className(), ['fk_id_usuario_privilegio' => 'id_usuario_privilegio']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getFkIdUsuarioTipos()
    {
        return $this->hasMany(UsuarioTipo000201::className(), ['id_usuario_tipo' => 'fk_id_usuario_tipo'])->viaTable('usuario_tipo_privilegio_00_02_02', ['fk_id_usuario_privilegio' => 'id_usuario_privilegio']);
    }
	
    public function atributes() {
		return [
 		 'id_usuario_privilegio',
 		 'nombre_privilegio_usuario_privilegio',
 		 'accion_usuario_privilegio',
 		 'opciones_usuario_privilegio',
 		 'funcion_usuario_privilegio',
 		 'descripcion_usuario_privilegio',
		]; 	
    }
	
 
	public function getListHasMany()
    {
    	return [
        	 'UsuarioTipoPrivilegio000202',
        	 'UsuarioTipo000201',
     	];
    }
    
    public function getListHasOne()
    {
    	return [
     	];
    }

    public function getNamePk() {
		return array('id_usuario_privilegio');
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
			case 'UsuarioTipoPrivilegio000202':
        		return new UsuarioTipoPrivilegio000202();
                break;
			case 'UsuarioTipo000201':
        		return new UsuarioTipo000201();
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
