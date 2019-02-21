<?php
namespace app\models;

use Yii;

/**
 * This is the model class for table "usuario_tipo_00_02_01".
 *
 * @property integer $id_usuario_tipo
 * @property string $nombre_usuario_tipo
 * @property string $descripcion_usuario_tipo
 *
 * @property AccionNotificacion010203[] $accionNotificacion010203s
 * @property AccionObservacion010203[] $accionObservacion010203s
 * @property EstadoNotificacion010203[] $estadoNotificacion010203s
 * @property UsuarioTipoPrivilegio000202[] $usuarioTipoPrivilegio000202s
 * @property UsuarioPrivilegio000004[] $fkIdUsuarioPrivilegios
 * @property UsuarioTipoUsuario000102[] $usuarioTipoUsuario000102s
 * @property Usuario000101[] $fkIdUsuarios
 */
class UsuarioTipo000201 extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'usuario_tipo_00_02_01';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['nombre_usuario_tipo'], 'required'],
            [['descripcion_usuario_tipo'], 'string'],
            [['nombre_usuario_tipo'], 'string', 'max' => 145],
            [['nombre_usuario_tipo'], 'unique']
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id_usuario_tipo' => 'Id Usuario Tipo',
            'nombre_usuario_tipo' => 'Nombre Usuario Tipo',
            'descripcion_usuario_tipo' => 'Descripcion Usuario Tipo',
        ];
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getAccionNotificacion010203s()
    {
        return $this->hasMany(AccionNotificacion010203::className(), ['fk_id_usuario_tipo' => 'id_usuario_tipo']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getAccionObservacion010203s()
    {
        return $this->hasMany(AccionObservacion010203::className(), ['fk_id_usuario_tipo' => 'id_usuario_tipo']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getEstadoNotificacion010203s()
    {
        return $this->hasMany(EstadoNotificacion010203::className(), ['fk_id_usuario_tipo' => 'id_usuario_tipo']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getUsuarioTipoPrivilegio000202s()
    {
        return $this->hasMany(UsuarioTipoPrivilegio000202::className(), ['fk_id_usuario_tipo' => 'id_usuario_tipo']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getFkIdUsuarioPrivilegios()
    {
        return $this->hasMany(UsuarioPrivilegio000004::className(), ['id_usuario_privilegio' => 'fk_id_usuario_privilegio'])->viaTable('usuario_tipo_privilegio_00_02_02', ['fk_id_usuario_tipo' => 'id_usuario_tipo']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getUsuarioTipoUsuario000102s()
    {
        return $this->hasMany(UsuarioTipoUsuario000102::className(), ['fk_id_usuario_tipo' => 'id_usuario_tipo']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getFkIdUsuarios()
    {
        return $this->hasMany(Usuario000101::className(), ['id_usuario' => 'fk_id_usuario'])->viaTable('usuario_tipo_usuario_00_01_02', ['fk_id_usuario_tipo' => 'id_usuario_tipo']);
    }
	
    public function atributes() {
		return [
 		 'id_usuario_tipo',
 		 'nombre_usuario_tipo',
 		 'descripcion_usuario_tipo',
		]; 	
    }
	
 
	public function getListHasMany()
    {
    	return [
        	 'AccionNotificacion010203',
        	 'AccionObservacion010203',
        	 'EstadoNotificacion010203',
        	 'UsuarioTipoPrivilegio000202',
        	 'UsuarioPrivilegio000004',
        	 'UsuarioTipoUsuario000102',
        	 'Usuario000101',
     	];
    }
    
    public function getListHasOne()
    {
    	return [
     	];
    }

    public function getNamePk() {
		return array('id_usuario_tipo');
    }
    
    public function getModule() {
		return 'usuario';
    }
    
    public function getDisplay() {
       return 'nombre_usuario_tipo';
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
			case 'AccionNotificacion010203':
        		return new AccionNotificacion010203();
                break;
			case 'AccionObservacion010203':
        		return new AccionObservacion010203();
                break;
			case 'EstadoNotificacion010203':
        		return new EstadoNotificacion010203();
                break;
			case 'UsuarioTipoPrivilegio000202':
        		return new UsuarioTipoPrivilegio000202();
                break;
			case 'UsuarioPrivilegio000004':
        		return new UsuarioPrivilegio000004();
                break;
			case 'UsuarioTipoUsuario000102':
        		return new UsuarioTipoUsuario000102();
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
