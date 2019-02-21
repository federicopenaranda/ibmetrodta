<?php
namespace app\models;
use yii\db\Query;

use Yii;

/**
 * This is the model class for table "usuario_00_01_01".
 *
 * @property integer $id_usuario
 * @property string $primer_nombre_usuario
 * @property string $segundo_nombre_usuario
 * @property string $apellido_paterno_usuario
 * @property string $apellido_materno_usuario
 * @property string $codigo_usuario
 * @property string $login_usuario
 * @property string $contrasena_usuario
 * @property string $fecha_nacimiento_usuario
 * @property string $sexo_usuario
 * @property string $telefono_usuario
 * @property string $celular_usuario
 * @property string $correo_usuario
 * @property string $direccion_usuario
 * @property string $imagen_usuario
 * @property string $observaciones_usuario
 * @property string $acceso_ip_usuario
 * @property string $fecha_creacion_usuario
 * @property string $empresa_usuario
 * @property string $estado_usuario
 *
 * @property ActividadUsuario050103[] $actividadUsuario050103s
 * @property EquipoPeticion010701[] $equipoPeticion010701s
 * @property LogSistema030003[] $logSistema030003s
 * @property ObsPeticionAccion010303[] $obsPeticionAccion010303s
 * @property Peticion010401[] $peticion010401s
 * @property PeticionAccion010301[] $peticionAccion010301s
 * @property PlanEvaluacion030003[] $planEvaluacion030003s
 * @property UsuarioOec000102[] $usuarioOec000102s
 * @property Oec020001[] $fkIdOecs
 * @property UsuarioProceso000102[] $usuarioProceso000102s
 * @property Proceso010101[] $fkIdProcesos
 * @property UsuarioTipoUsuario000102[] $usuarioTipoUsuario000102s
 * @property UsuarioTipo000201[] $fkIdUsuarioTipos
 * @property Vacacion050104[] $vacacion050104s
 */
 use yii\web\IdentityInterface;
class Usuario000101 extends \yii\db\ActiveRecord implements IdentityInterface 
{
    public $authKey;
     /**
     * @inheritdoc
     */
    
    public static function tableName()
    {
        return 'usuario_00_01_01';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['primer_nombre_usuario', 'apellido_paterno_usuario', 'login_usuario', 'contrasena_usuario', 'sexo_usuario', 'correo_usuario'], 'required'],
            [['fecha_nacimiento_usuario', 'fecha_creacion_usuario', 'estado_usuario'], 'safe'],
            [['sexo_usuario', 'imagen_usuario'], 'string'],
            [['primer_nombre_usuario', 'segundo_nombre_usuario', 'apellido_paterno_usuario', 'apellido_materno_usuario'], 'string', 'max' => 145],
            [['codigo_usuario', 'login_usuario', 'contrasena_usuario', 'telefono_usuario', 'celular_usuario', 'direccion_usuario', 'observaciones_usuario'], 'string', 'max' => 45],
            [['correo_usuario', 'empresa_usuario'], 'string', 'max' => 245],
            [['acceso_ip_usuario'], 'string', 'max' => 15],
            [['login_usuario'], 'unique']
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id_usuario' => 'Id Usuario',
            'primer_nombre_usuario' => 'Primer Nombre Usuario',
            'segundo_nombre_usuario' => 'Segundo Nombre Usuario',
            'apellido_paterno_usuario' => 'Apellido Paterno Usuario',
            'apellido_materno_usuario' => 'Apellido Materno Usuario',
            'codigo_usuario' => 'Codigo Usuario',
            'login_usuario' => 'Login Usuario',
            'contrasena_usuario' => 'Contrasena Usuario',
            'fecha_nacimiento_usuario' => 'Fecha Nacimiento Usuario',
            'sexo_usuario' => 'Sexo Usuario',
            'telefono_usuario' => 'Telefono Usuario',
            'celular_usuario' => 'Celular Usuario',
            'correo_usuario' => 'Correo Usuario',
            'direccion_usuario' => 'Direccion Usuario',
            'imagen_usuario' => 'Imagen Usuario',
            'observaciones_usuario' => 'Observaciones Usuario',
            'acceso_ip_usuario' => 'Acceso Ip Usuario',
            'fecha_creacion_usuario' => 'Fecha Creacion Usuario',
	    'empresa_usuario' => 'Empresa Usuario',
	    'estado_usuario' => 'Estado Usuario',
        ];
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getActividadUsuario050103s()
    {
        return $this->hasMany(ActividadUsuario050103::className(), ['fk_id_usuario' => 'id_usuario']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getEquipoPeticion010701s()
    {
        return $this->hasMany(EquipoPeticion010701::className(), ['fk_id_usuario' => 'id_usuario']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getLogSistema030003s()
    {
        return $this->hasMany(LogSistema030003::className(), ['fk_id_usuario' => 'id_usuario']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getObsPeticionAccion010303s()
    {
        return $this->hasMany(ObsPeticionAccion010303::className(), ['fk_id_usuario' => 'id_usuario']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getPeticion010401s()
    {
        return $this->hasMany(Peticion010401::className(), ['fk_id_usuario' => 'id_usuario']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getPeticionAccion010301s()
    {
        return $this->hasMany(PeticionAccion010301::className(), ['fk_id_usuario' => 'id_usuario']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getPlanEvaluacion030003s()
    {
        return $this->hasMany(PlanEvaluacion030003::className(), ['fk_id_usuario' => 'id_usuario']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getUsuarioOec000102s()
    {
        return $this->hasMany(UsuarioOec000102::className(), ['fk_id_usuario' => 'id_usuario']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getFkIdOecs()
    {
        return $this->hasMany(Oec020001::className(), ['id_oec' => 'fk_id_oec'])->viaTable('usuario_oec_00_01_02', ['fk_id_usuario' => 'id_usuario']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getUsuarioProceso000102s()
    {
        return $this->hasMany(UsuarioProceso000102::className(), ['fk_id_usuario' => 'id_usuario']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getFkIdProcesos()
    {
        return $this->hasMany(Proceso010101::className(), ['id_proceso' => 'fk_id_proceso'])->viaTable('usuario_proceso_00_01_02', ['fk_id_usuario' => 'id_usuario']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getUsuarioTipoUsuario000102s()
    {
        return $this->hasMany(UsuarioTipoUsuario000102::className(), ['fk_id_usuario' => 'id_usuario']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getFkIdUsuarioTipos()
    {
        return $this->hasMany(UsuarioTipo000201::className(), ['id_usuario_tipo' => 'fk_id_usuario_tipo'])->viaTable('usuario_tipo_usuario_00_01_02', ['fk_id_usuario' => 'id_usuario']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getVacacion050104s()
    {
        return $this->hasMany(Vacacion050104::className(), ['fk_id_usuario' => 'id_usuario']);
    }
	
    public function atributes() {
		return [
 		 'id_usuario',
 		 'primer_nombre_usuario',
 		 'segundo_nombre_usuario',
 		 'apellido_paterno_usuario',
 		 'apellido_materno_usuario',
 		 'codigo_usuario',
 		 'login_usuario',
 		 'contrasena_usuario',
 		 'fecha_nacimiento_usuario',
 		 'sexo_usuario',
 		 'telefono_usuario',
 		 'celular_usuario',
 		 'correo_usuario',
 		 'direccion_usuario',
 		 'imagen_usuario',
 		 'observaciones_usuario',
 		 'acceso_ip_usuario',
 		 'fecha_creacion_usuario',
		 'empresa_usuario',
		 'estado_usuario',
		]; 	
    }
	
 
	public function getListHasMany()
    {
    	return [
        	 'ActividadUsuario050103',
        	 'EquipoPeticion010701',
        	 'LogSistema030003',
        	 'ObsPeticionAccion010303',
        	 'Peticion010401',
        	 'PeticionAccion010301',
        	 'PlanEvaluacion030003',
        	 'UsuarioOec000102',
        	 'Oec020001',
        	 'UsuarioProceso000102',
        	 'Proceso010101',
        	 'UsuarioTipoUsuario000102',
        	 'UsuarioTipo000201',
        	 'Vacacion050104',
     	];
    }
    
    public function getListHasOne()
    {
    	return [
     	];
    }

    public function getNamePk() {
		return array('id_usuario');
    }
    
    public function getModule() {
		return 'usuario';
    }
    
    public function getDisplay() {
       return 'codigo_usuario';
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
			'primer_nombre_usuario',
			'segundo_nombre_usuario',
			'apellido_paterno_usuario',
			'apellido_materno_usuario',
			'codigo_usuario',
		);
    }
    
    public function getNoRead() {
    	return array(
		);
    }
    
    public function getMain() {
       return '';
    }
    
    public function getInstance($model) {
    	switch ($model) {
			case 'ActividadUsuario050103':
        		return new ActividadUsuario050103();
                break;
			case 'EquipoPeticion010701':
        		return new EquipoPeticion010701();
                break;
			case 'LogSistema030003':
        		return new LogSistema030003();
                break;
			case 'ObsPeticionAccion010303':
        		return new ObsPeticionAccion010303();
                break;
			case 'Peticion010401':
        		return new Peticion010401();
                break;
			case 'PeticionAccion010301':
        		return new PeticionAccion010301();
                break;
			case 'PlanEvaluacion030003':
        		return new PlanEvaluacion030003();
                break;
			case 'UsuarioOec000102':
        		return new UsuarioOec000102();
                break;
			case 'Oec020001':
        		return new Oec020001();
                break;
			case 'UsuarioProceso000102':
        		return new UsuarioProceso000102();
                break;
			case 'Proceso010101':
        		return new Proceso010101();
                break;
			case 'UsuarioTipoUsuario000102':
        		return new UsuarioTipoUsuario000102();
                break;
			case 'UsuarioTipo000201':
        		return new UsuarioTipo000201();
                break;
			case 'Vacacion050104':
        		return new Vacacion050104();
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
    
    public function listaAccion($nom_login,$controlador) {
		
		$Querys = (new Query)
                    ->select(['accion_usuario_privilegio'])
                    ->from('usuario_00_01_01')
                    ->innerJoin('usuario_tipo_usuario_00_01_02','usuario_tipo_usuario_00_01_02.fk_id_usuario = usuario_00_01_01.id_usuario')
                    ->innerJoin('usuario_tipo_00_02_01',' usuario_tipo_usuario_00_01_02.fk_id_usuario_tipo = usuario_tipo_00_02_01.id_usuario_tipo')
					->innerJoin('usuario_tipo_privilegio_00_02_02',' usuario_tipo_privilegio_00_02_02.fk_id_usuario_tipo = usuario_tipo_00_02_01.id_usuario_tipo')
					->innerJoin('usuario_privilegio_00_00_04','usuario_tipo_privilegio_00_02_02.fk_id_usuario_privilegio = usuario_privilegio_00_00_04.id_usuario_privilegio')
					->where(['usuario_privilegio_00_00_04.opciones_usuario_privilegio'=>'controlador','usuario_00_01_01.login_usuario'=>$nom_login])
					->andWhere(['=','usuario_privilegio_00_00_04.funcion_usuario_privilegio',$controlador])
					->all();
		$listAccion[]='logout';
        $listAccion[]='insert';
		foreach ($Querys as $Query):
			foreach($Query as $k => $v):
				$listAccion[]=$v;
			endforeach;
		endforeach;
		return $listAccion;
	}
    
    public static function findIdentity($id)
    {
        return static::findOne($id);
    }
	
	public static function findIdentityByAccessToken($token, $type = null)
    {
        return static::findOne(['access_token' => $token]);
    }
	
	public static function findByUsername($name,$password)
    	{
		return static::findOne(['login_usuario' => $name,'contrasena_usuario' => sha1($password), 'estado_usuario' => '1']);
    	}




	
	public function getId()
    {
        return $this->getPrimaryKey();
    }
	
	public function getAuthKey()
    {
        return $this->authKey;
    }
	
	public function validateAuthKey($authKey)
    {
        return $this->getAuthKey() === $authKey;
    }
    
 	public function getNameFKey() {
    	return array(
		);
    }
}
