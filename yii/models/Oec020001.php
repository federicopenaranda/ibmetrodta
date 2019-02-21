<?php
namespace app\models;

use Yii;

/**
 * This is the model class for table "oec_02_00_01".
 *
 * @property integer $id_oec
 * @property integer $fk_id_oec_tipo
 * @property integer $fk_id_pais
 * @property integer $fk_id_norma_referencia
 * @property string $nombre_oec
 * @property string $nit_oec
 * @property string $direccion_oec
 * @property string $ciudad_oec
 * @property string $departamento_oec
 * @property string $telefono1_oec
 * @property string $telefono2_oec
 * @property string $celular_oec
 * @property string $fax_oec
 * @property string $email1_oec
 * @property string $email2_oec
 * @property integer $empresa_publica_oec
 * @property string $fecha_creacion_oec
 * @property string $zona_oec
 * @property string $fecha_actualizacion_oec
 *
 * @property Actividad050101[] $actividad050101s
 * @property CodigoPeticion010404[] $codigoPeticion010404s
 * @property NormaReferencia020004 $fkIdNormaReferencia
 * @property OecTipo020004 $fkIdOecTipo
 * @property Pais020004 $fkIdPais
 * @property OecAcreditacionSolicitada020003[] $oecAcreditacionSolicitada020003s
 * @property OecActividad020002[] $oecActividad020002s
 * @property ActividadEconomica020004[] $fkIdActividadEconomicas
 * @property OecContacto020003[] $oecContacto020003s
 * @property Peticion010401[] $peticion010401s
 * @property UsuarioOec000102[] $usuarioOec000102s
 * @property Usuario000101[] $fkIdUsuarios
 */
class Oec020001 extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'oec_02_00_01';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['fk_id_oec_tipo', 'fk_id_pais', 'fk_id_norma_referencia', 'nombre_oec', 'nit_oec', 'direccion_oec', 'email1_oec', 'empresa_publica_oec', 'zona_oec'], 'required'],
            [['fk_id_oec_tipo', 'fk_id_pais', 'fk_id_norma_referencia', 'empresa_publica_oec'], 'integer'],
            [['direccion_oec', 'zona_oec'], 'string'],
            [['fecha_creacion_oec', 'fecha_actualizacion_oec'], 'safe'],
            [['nombre_oec', 'nit_oec', 'ciudad_oec', 'departamento_oec'], 'string', 'max' => 145],
            [['telefono1_oec', 'telefono2_oec', 'celular_oec', 'fax_oec', 'email1_oec', 'email2_oec'], 'string', 'max' => 45],
            [['nombre_oec'], 'unique'],
            [['nit_oec'], 'unique']
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id_oec' => 'Id Oec',
            'fk_id_oec_tipo' => 'Fk Id Oec Tipo',
            'fk_id_pais' => 'Fk Id Pais',
            'fk_id_norma_referencia' => 'Fk Id Norma Referencia',
            'nombre_oec' => 'Nombre Oec',
            'nit_oec' => 'Nit Oec',
            'direccion_oec' => 'Direccion Oec',
            'ciudad_oec' => 'Ciudad Oec',
            'departamento_oec' => 'Departamento Oec',
            'telefono1_oec' => 'Telefono1 Oec',
            'telefono2_oec' => 'Telefono2 Oec',
            'celular_oec' => 'Celular Oec',
            'fax_oec' => 'Fax Oec',
            'email1_oec' => 'Email1 Oec',
            'email2_oec' => 'Email2 Oec',
            'empresa_publica_oec' => 'Empresa Publica Oec',
            'fecha_creacion_oec' => 'Fecha Creacion Oec',
            'zona_oec' => 'Zona Oec',
            'fecha_actualizacion_oec' => 'Fecha Actualizacion Oec',
        ];
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getActividad050101s()
    {
        return $this->hasMany(Actividad050101::className(), ['fk_id_oec' => 'id_oec']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getCodigoPeticion010404s()
    {
        return $this->hasMany(CodigoPeticion010404::className(), ['fk_id_oec' => 'id_oec']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getFkIdNormaReferencia()
    {
        return $this->hasOne(NormaReferencia020004::className(), ['id_norma_referencia' => 'fk_id_norma_referencia']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getFkIdOecTipo()
    {
        return $this->hasOne(OecTipo020004::className(), ['id_oec_tipo' => 'fk_id_oec_tipo']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getFkIdPais()
    {
        return $this->hasOne(Pais020004::className(), ['id_pais' => 'fk_id_pais']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getOecAcreditacionSolicitada020003s()
    {
        return $this->hasMany(OecAcreditacionSolicitada020003::className(), ['fk_id_oec' => 'id_oec']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getOecActividad020002s()
    {
        return $this->hasMany(OecActividad020002::className(), ['fk_id_oec' => 'id_oec']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getFkIdActividadEconomicas()
    {
        return $this->hasMany(ActividadEconomica020004::className(), ['id_actividad_economica' => 'fk_id_actividad_economica'])->viaTable('oec_actividad_02_00_02', ['fk_id_oec' => 'id_oec']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getOecContacto020003s()
    {
        return $this->hasMany(OecContacto020003::className(), ['fk_id_oec' => 'id_oec']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getPeticion010401s()
    {
        return $this->hasMany(Peticion010401::className(), ['fk_id_oec' => 'id_oec']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getUsuarioOec000102s()
    {
        return $this->hasMany(UsuarioOec000102::className(), ['fk_id_oec' => 'id_oec']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getFkIdUsuarios()
    {
        return $this->hasMany(Usuario000101::className(), ['id_usuario' => 'fk_id_usuario'])->viaTable('usuario_oec_00_01_02', ['fk_id_oec' => 'id_oec']);
    }
	
    public function atributes() {
		return [
 		 'id_oec',
 		 'fk_id_oec_tipo',
 		 'fk_id_pais',
 		 'fk_id_norma_referencia',
 		 'nombre_oec',
 		 'nit_oec',
 		 'direccion_oec',
 		 'ciudad_oec',
 		 'departamento_oec',
 		 'telefono1_oec',
 		 'telefono2_oec',
 		 'celular_oec',
 		 'fax_oec',
 		 'email1_oec',
 		 'email2_oec',
 		 'empresa_publica_oec',
 		 'fecha_creacion_oec',
 		 'zona_oec',
 		 'fecha_actualizacion_oec',
		]; 	
    }
	
 
	public function getListHasMany()
    {
    	return [
        	 'Actividad050101',
        	 'CodigoPeticion010404',
        	 'OecAcreditacionSolicitada020003',
        	 'OecActividad020002',
        	 'ActividadEconomica020004',
        	 'OecContacto020003',
        	 'Peticion010401',
        	 'UsuarioOec000102',
        	 'Usuario000101',
     	];
    }
    
    public function getListHasOne()
    {
    	return [
        	'NormaReferencia020004',
        	'OecTipo020004',
        	'Pais020004',
     	];
    }

    public function getNamePk() {
		return array('id_oec');
    }
    
    public function getModule() {
		return 'oec';
    }
    
    public function getDisplay() {
       return 'nombre_oec';
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
			'nombre_oec',
			'nit_oec',
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
			case 'Actividad050101':
        		return new Actividad050101();
                break;
			case 'CodigoPeticion010404':
        		return new CodigoPeticion010404();
                break;
			case 'OecAcreditacionSolicitada020003':
        		return new OecAcreditacionSolicitada020003();
                break;
			case 'OecActividad020002':
        		return new OecActividad020002();
                break;
			case 'ActividadEconomica020004':
        		return new ActividadEconomica020004();
                break;
			case 'OecContacto020003':
        		return new OecContacto020003();
                break;
			case 'Peticion010401':
        		return new Peticion010401();
                break;
			case 'UsuarioOec000102':
        		return new UsuarioOec000102();
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
			'id_norma_referencia'=>array('norma_referencia_02_00_04','fk_id_norma_referencia'),
			'id_oec_tipo'=>array('oec_tipo_02_00_04','fk_id_oec_tipo'),
			'id_pais'=>array('pais_02_00_04','fk_id_pais'),
		);
    }
    
}
