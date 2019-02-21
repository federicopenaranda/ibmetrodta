<?php
namespace app\models;

use Yii;

/**
 * This is the model class for table "peticion_01_04_01".
 *
 * @property integer $id_peticion
 * @property integer $fk_id_proceso
 * @property integer $fk_id_usuario
 * @property integer $fk_id_oec
 * @property integer $fk_id_codigo_peticion
 * @property string $titulo_peticion
 * @property string $fechahora_peticion
 * @property string $descripcion_peticion
 * @property string $codigo_acreditacion_peticion
 * @property string $fecha_creacion_peticion
 * @property integer $necesidad_comite_peticion
 * @property integer $estado_peticion
 * @property string $codigo_temporal
 *
 * @property AnexoConvenio041301[] $anexoConvenio041301s
 * @property Certificado041401[] $certificado041401s
 * @property DesignacionEvaluador041001[] $designacionEvaluador041001s
 * @property DetalleCalibracion040301[] $detalleCalibracion040301s
 * @property DetalleCertificacion040501[] $detalleCertificacion040501s
 * @property DetalleEquipos040201[] $detalleEquipos040201s
 * @property DetalleInspeccion040401[] $detalleInspeccion040401s
 * @property EquipoPeticion010701[] $equipoPeticion010701s
 * @property EvalTecnica040801[] $evalTecnica040801s
 * @property Evaluacion030001[] $evaluacion030001s
 * @property InfoEnsayo040101[] $infoEnsayo040101s
 * @property InformeAcred041301[] $informeAcred041301s
 * @property InformeEvaluacion040601[] $informeEvaluacion040601s
 * @property NoConformidad040701[] $noConformidad040701s
 * @property ObsPeticionAccion010303[] $obsPeticionAccion010303s
 * @property CodigoPeticion010404 $fkIdCodigoPeticion
 * @property Oec020001 $fkIdOec
 * @property Proceso010101 $fkIdProceso
 * @property Usuario000101 $fkIdUsuario
 * @property PeticionAccion010301[] $peticionAccion010301s
 * @property PeticionEstado010403[] $peticionEstado010403s
 * @property PruebaParticipacion040901[] $pruebaParticipacion040901s
 * @property SatisfaccionCliente041201[] $satisfaccionCliente041201s
 * @property SupervisionEvaluador041101[] $supervisionEvaluador041101s
 */
class Peticion010401 extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'peticion_01_04_01';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['fk_id_proceso', 'fk_id_usuario', 'fk_id_oec', 'codigo_temporal', 'estado_peticion'], 'required'],
            [['fk_id_proceso', 'fk_id_usuario', 'fk_id_oec', 'fk_id_codigo_peticion', 'necesidad_comite_peticion', 'estado_peticion'], 'integer'],
            [['fechahora_peticion', 'fecha_creacion_peticion'], 'safe'],
            [['descripcion_peticion'], 'string'],
            [['titulo_peticion'], 'string', 'max' => 45],
            [['codigo_acreditacion_peticion', 'codigo_temporal'], 'string', 'max' => 25]
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id_peticion' => 'Id Peticion',
            'fk_id_proceso' => 'Fk Id Proceso',
            'fk_id_usuario' => 'Fk Id Usuario',
            'fk_id_oec' => 'Fk Id Oec',
            'fk_id_codigo_peticion' => 'Fk Id Codigo Peticion',
            'titulo_peticion' => 'Titulo Peticion',
            'fechahora_peticion' => 'Fechahora Peticion',
            'descripcion_peticion' => 'Descripcion Peticion',
            'codigo_acreditacion_peticion' => 'Codigo Acreditacion Peticion',
            'fecha_creacion_peticion' => 'Fecha Creacion Peticion',
            'necesidad_comite_peticion' => 'Necesidad Comite Peticion',
            'estado_peticion' => 'Estado Peticion',
	     'codigo_temporal' => 'Codigo Temporal',
        ];
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getAnexoConvenio041301s()
    {
        return $this->hasMany(AnexoConvenio041301::className(), ['fk_id_peticion' => 'id_peticion']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getCertificado041401s()
    {
        return $this->hasMany(Certificado041401::className(), ['fk_id_peticion' => 'id_peticion']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getDesignacionEvaluador041001s()
    {
        return $this->hasMany(DesignacionEvaluador041001::className(), ['fk_id_peticion' => 'id_peticion']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getDetalleCalibracion040301s()
    {
        return $this->hasMany(DetalleCalibracion040301::className(), ['fk_id_peticion' => 'id_peticion']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getDetalleCertificacion040501s()
    {
        return $this->hasMany(DetalleCertificacion040501::className(), ['fk_id_peticion' => 'id_peticion']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getDetalleEquipos040201s()
    {
        return $this->hasMany(DetalleEquipos040201::className(), ['fk_id_peticion' => 'id_peticion']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getDetalleInspeccion040401s()
    {
        return $this->hasMany(DetalleInspeccion040401::className(), ['fk_id_peticion' => 'id_peticion']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getEquipoPeticion010701s()
    {
        return $this->hasMany(EquipoPeticion010701::className(), ['fk_id_peticion' => 'id_peticion']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getEvalTecnica040801s()
    {
        return $this->hasMany(EvalTecnica040801::className(), ['fk_id_peticion' => 'id_peticion']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getEvaluacion030001s()
    {
        return $this->hasMany(Evaluacion030001::className(), ['fk_id_peticion' => 'id_peticion']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getInfoEnsayo040101s()
    {
        return $this->hasMany(InfoEnsayo040101::className(), ['fk_id_peticion' => 'id_peticion']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getInformeAcred041301s()
    {
        return $this->hasMany(InformeAcred041301::className(), ['fk_id_peticion' => 'id_peticion']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getInformeEvaluacion040601s()
    {
        return $this->hasMany(InformeEvaluacion040601::className(), ['fk_id_peticion' => 'id_peticion']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getNoConformidad040701s()
    {
        return $this->hasMany(NoConformidad040701::className(), ['fk_id_peticion' => 'id_peticion']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getObsPeticionAccion010303s()
    {
        return $this->hasMany(ObsPeticionAccion010303::className(), ['fk_id_peticion' => 'id_peticion']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getFkIdCodigoPeticion()
    {
        return $this->hasOne(CodigoPeticion010404::className(), ['id_codigo_peticion' => 'fk_id_codigo_peticion']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getFkIdOec()
    {
        return $this->hasOne(Oec020001::className(), ['id_oec' => 'fk_id_oec']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getFkIdProceso()
    {
        return $this->hasOne(Proceso010101::className(), ['id_proceso' => 'fk_id_proceso']);
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
    public function getPeticionAccion010301s()
    {
        return $this->hasMany(PeticionAccion010301::className(), ['fk_id_peticion' => 'id_peticion']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getPeticionEstado010403s()
    {
        return $this->hasMany(PeticionEstado010403::className(), ['fk_id_peticion' => 'id_peticion']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getPruebaParticipacion040901s()
    {
        return $this->hasMany(PruebaParticipacion040901::className(), ['fk_id_peticion' => 'id_peticion']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getSatisfaccionCliente041201s()
    {
        return $this->hasMany(SatisfaccionCliente041201::className(), ['fk_id_peticion' => 'id_peticion']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getSupervisionEvaluador041101s()
    {
        return $this->hasMany(SupervisionEvaluador041101::className(), ['fk_id_peticion' => 'id_peticion']);
    }
	
    public function atributes() {
		return [
 		 'id_peticion',
 		 'fk_id_proceso',
 		 'fk_id_usuario',
 		 'fk_id_oec',
 		 'fk_id_codigo_peticion',
 		 'titulo_peticion',
 		 'fechahora_peticion',
 		 'descripcion_peticion',
 		 'codigo_acreditacion_peticion',
 		 'fecha_creacion_peticion',
 		 'necesidad_comite_peticion',
 		 'estado_peticion',
		 'codigo_temporal',
		]; 	
    }
	
 
	public function getListHasMany()
    {
    	return [
        	 'AnexoConvenio041301',
        	 'Certificado041401',
        	 'DesignacionEvaluador041001',
        	 'DetalleCalibracion040301',
        	 'DetalleCertificacion040501',
        	 'DetalleEquipos040201',
        	 'DetalleInspeccion040401',
        	 'EquipoPeticion010701',
        	 'EvalTecnica040801',
        	 'Evaluacion030001',
        	 'InfoEnsayo040101',
        	 'InformeAcred041301',
        	 'InformeEvaluacion040601',
        	 'NoConformidad040701',
        	 'ObsPeticionAccion010303',
        	 'PeticionAccion010301',
        	 'PeticionEstado010403',
        	 'PruebaParticipacion040901',
        	 'SatisfaccionCliente041201',
        	 'SupervisionEvaluador041101',
     	];
    }
    
    public function getListHasOne()
    {
    	return [
        	'CodigoPeticion010404',
        	'Oec020001',
        	'Proceso010101',
        	'Usuario000101',
     	];
    }

    public function getNamePk() {
		return array('id_peticion');
    }
    
    public function getModule() {
		return 'proceso';
    }
    
    public function getDisplay() {
       return 'titulo_peticion';
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
			'codigo_acreditacion_peticion',
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
			case 'AnexoConvenio041301':
        		return new AnexoConvenio041301();
                break;
			case 'Certificado041401':
        		return new Certificado041401();
                break;
			case 'DesignacionEvaluador041001':
        		return new DesignacionEvaluador041001();
                break;
			case 'DetalleCalibracion040301':
        		return new DetalleCalibracion040301();
                break;
			case 'DetalleCertificacion040501':
        		return new DetalleCertificacion040501();
                break;
			case 'DetalleEquipos040201':
        		return new DetalleEquipos040201();
                break;
			case 'DetalleInspeccion040401':
        		return new DetalleInspeccion040401();
                break;
			case 'EquipoPeticion010701':
        		return new EquipoPeticion010701();
                break;
			case 'EvalTecnica040801':
        		return new EvalTecnica040801();
                break;
			case 'Evaluacion030001':
        		return new Evaluacion030001();
                break;
			case 'InfoEnsayo040101':
        		return new InfoEnsayo040101();
                break;
			case 'InformeAcred041301':
        		return new InformeAcred041301();
                break;
			case 'InformeEvaluacion040601':
        		return new InformeEvaluacion040601();
                break;
			case 'NoConformidad040701':
        		return new NoConformidad040701();
                break;
			case 'ObsPeticionAccion010303':
        		return new ObsPeticionAccion010303();
                break;
			case 'PeticionAccion010301':
        		return new PeticionAccion010301();
                break;
			case 'PeticionEstado010403':
        		return new PeticionEstado010403();
                break;
			case 'PruebaParticipacion040901':
        		return new PruebaParticipacion040901();
                break;
			case 'SatisfaccionCliente041201':
        		return new SatisfaccionCliente041201();
                break;
			case 'SupervisionEvaluador041101':
        		return new SupervisionEvaluador041101();
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
			'id_codigo_peticion'=>array('codigo_peticion_01_04_04','fk_id_codigo_peticion'),
			'id_oec'=>array('oec_02_00_01','fk_id_oec'),
			'id_proceso'=>array('proceso_01_01_01','fk_id_proceso'),
			'id_usuario'=>array('usuario_00_01_01','fk_id_usuario'),
		);
    }
    
}
