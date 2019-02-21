<?php
namespace app\models;

use Yii;

/**
 * This is the model class for table "eval_tecnica_04_08_01".
 *
 * @property integer $id_eval_tecnica
 * @property integer $fk_id_peticion
 * @property string $area_ensayo_eval_tecnica
 * @property string $metodo_ensayo_eval_tecnica
 * @property string $lista_signatarios_eval_tecnica
 * @property string $supervision_personal_eval_tecnica
 * @property string $autorizacion_eval_tecnica
 * @property string $adecuacion_eval_tecnica
 * @property string $seguimiento_eval_tecnica
 * @property string $separacion_areas_eval_tecnica
 * @property string $control_acceso_eval_tecnica
 * @property string $orden_limpieza_eval_tecnica
 * @property string $uso_metodos_apropiados_eval_tecnica
 * @property string $confirmacion_metodos_eval_tecnica
 * @property string $instructivo_uso_eval_tecnica
 * @property string $validacion_desviaciones_eval_tecnica
 * @property string $estimacion_incertidumbre_eval_tecnica
 * @property string $verificacion_calculos_eval_tecnica
 * @property string $procedimientos_calibracion_eval_tecnica
 * @property string $trazabilidad_calibracion_eval_tecnica
 * @property string $disponibilidad_material_eval_tecnica
 * @property string $certificados_calibracion_eval_tecnica
 * @property string $plan_muestreo_eval_tecnica
 * @property string $registros_muestreo_eval_tecnica
 * @property string $tecnicas_estadisticas_eval_tecnica
 * @property string $procedimiento_muestras_eval_tecnica
 * @property string $sistema_identificacion_eval_tecnica
 * @property string $adecuacion_instalaciones_eval_tecnica
 * @property string $procedimiento_aseguramiento_eval_tecnica
 * @property string $uso_regular_material_eval_tecnica
 * @property string $participacion_intercomparaciones_eval_tecnica
 * @property string $repeticion_ensayos_eval_tecnica
 * @property string $correlacion_eval_tecnica
 * @property string $registro_aseguramiento_eval_tecnica
 * @property string $formatos_apropiados_eval_tecnica
 * @property string $cumple_requisitos_norma_eval_tecnica
 * @property string $documentacion_opiniones_eval_tecnica
 * @property string $seguridad_transmision_eval_tecnica
 * @property string $confidencialidad_eval_tecnica
 * @property string $criterios_insertidumbre_eval_tecnica
 * @property string $criterios_trazabilidad_eval_tecnica
 * @property string $numero_requisito_eval_tecnica
 * @property string $comentario_requisito_eval_tecnica
 * @property string $conclusion_eval_tecnica
 * @property string $fecha_inicio_eval_tecnica
 * @property string $fecha_fin_eval_tecnica
 * @property string $hora_inicio_eval_tecnica
 * @property string $hora_fin_eval_tecnica
 * @property string $fecha_creacion_eval_tecnica
 *
 * @property AspectosEvaluados040803[] $aspectosEvaluados040803s
 * @property EquipoEval040803[] $equipoEval040803s
 * @property Peticion010401 $fkIdPeticion
 * @property ProveedorEval040803[] $proveedorEval040803s
 */
class EvalTecnica040801 extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'eval_tecnica_04_08_01';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['fk_id_peticion'], 'required'],
            [['fk_id_peticion'], 'integer'],
            [['area_ensayo_eval_tecnica', 'metodo_ensayo_eval_tecnica', 'lista_signatarios_eval_tecnica', 'supervision_personal_eval_tecnica', 'autorizacion_eval_tecnica', 'adecuacion_eval_tecnica', 'seguimiento_eval_tecnica', 'separacion_areas_eval_tecnica', 'control_acceso_eval_tecnica', 'orden_limpieza_eval_tecnica', 'uso_metodos_apropiados_eval_tecnica', 'confirmacion_metodos_eval_tecnica', 'instructivo_uso_eval_tecnica', 'validacion_desviaciones_eval_tecnica', 'estimacion_incertidumbre_eval_tecnica', 'verificacion_calculos_eval_tecnica', 'procedimientos_calibracion_eval_tecnica', 'trazabilidad_calibracion_eval_tecnica', 'disponibilidad_material_eval_tecnica', 'certificados_calibracion_eval_tecnica', 'plan_muestreo_eval_tecnica', 'registros_muestreo_eval_tecnica', 'tecnicas_estadisticas_eval_tecnica', 'procedimiento_muestras_eval_tecnica', 'sistema_identificacion_eval_tecnica', 'adecuacion_instalaciones_eval_tecnica', 'procedimiento_aseguramiento_eval_tecnica', 'uso_regular_material_eval_tecnica', 'participacion_intercomparaciones_eval_tecnica', 'repeticion_ensayos_eval_tecnica', 'correlacion_eval_tecnica', 'registro_aseguramiento_eval_tecnica', 'formatos_apropiados_eval_tecnica', 'cumple_requisitos_norma_eval_tecnica', 'documentacion_opiniones_eval_tecnica', 'seguridad_transmision_eval_tecnica', 'confidencialidad_eval_tecnica', 'criterios_insertidumbre_eval_tecnica', 'criterios_trazabilidad_eval_tecnica', 'numero_requisito_eval_tecnica', 'comentario_requisito_eval_tecnica', 'conclusion_eval_tecnica'], 'string'],
            [['fecha_inicio_eval_tecnica', 'fecha_fin_eval_tecnica', 'hora_fin_eval_tecnica', 'hora_inicio_eval_tecnica'], 'safe']
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id_eval_tecnica' => 'Id Eval Tecnica',
            'fk_id_peticion' => 'Fk Id Peticion',
            'area_ensayo_eval_tecnica' => 'Area Ensayo Eval Tecnica',
            'metodo_ensayo_eval_tecnica' => 'Metodo Ensayo Eval Tecnica',
            'lista_signatarios_eval_tecnica' => 'Lista Signatarios Eval Tecnica',
            'supervision_personal_eval_tecnica' => 'Supervision Personal Eval Tecnica',
            'autorizacion_eval_tecnica' => 'Autorizacion Eval Tecnica',
            'adecuacion_eval_tecnica' => 'Adecuacion Eval Tecnica',
            'seguimiento_eval_tecnica' => 'Seguimiento Eval Tecnica',
            'separacion_areas_eval_tecnica' => 'Separacion Areas Eval Tecnica',
            'control_acceso_eval_tecnica' => 'Control Acceso Eval Tecnica',
            'orden_limpieza_eval_tecnica' => 'Orden Limpieza Eval Tecnica',
            'uso_metodos_apropiados_eval_tecnica' => 'Uso Metodos Apropiados Eval Tecnica',
            'confirmacion_metodos_eval_tecnica' => 'Confirmacion Metodos Eval Tecnica',
            'instructivo_uso_eval_tecnica' => 'Instructivo Uso Eval Tecnica',
            'validacion_desviaciones_eval_tecnica' => 'Validacion Desviaciones Eval Tecnica',
            'estimacion_incertidumbre_eval_tecnica' => 'Estimacion Incertidumbre Eval Tecnica',
            'verificacion_calculos_eval_tecnica' => 'Verificacion Calculos Eval Tecnica',
            'procedimientos_calibracion_eval_tecnica' => 'Procedimientos Calibracion Eval Tecnica',
            'trazabilidad_calibracion_eval_tecnica' => 'Trazabilidad Calibracion Eval Tecnica',
            'disponibilidad_material_eval_tecnica' => 'Disponibilidad Material Eval Tecnica',
            'certificados_calibracion_eval_tecnica' => 'Certificados Calibracion Eval Tecnica',
            'plan_muestreo_eval_tecnica' => 'Plan Muestreo Eval Tecnica',
            'registros_muestreo_eval_tecnica' => 'Registros Muestreo Eval Tecnica',
            'tecnicas_estadisticas_eval_tecnica' => 'Tecnicas Estadisticas Eval Tecnica',
            'procedimiento_muestras_eval_tecnica' => 'Procedimiento Muestras Eval Tecnica',
            'sistema_identificacion_eval_tecnica' => 'Sistema Identificacion Eval Tecnica',
            'adecuacion_instalaciones_eval_tecnica' => 'Adecuacion Instalaciones Eval Tecnica',
            'procedimiento_aseguramiento_eval_tecnica' => 'Procedimiento Aseguramiento Eval Tecnica',
            'uso_regular_material_eval_tecnica' => 'Uso Regular Material Eval Tecnica',
            'participacion_intercomparaciones_eval_tecnica' => 'Participacion Intercomparaciones Eval Tecnica',
            'repeticion_ensayos_eval_tecnica' => 'Repeticion Ensayos Eval Tecnica',
            'correlacion_eval_tecnica' => 'Correlacion Eval Tecnica',
            'registro_aseguramiento_eval_tecnica' => 'Registro Aseguramiento Eval Tecnica',
            'formatos_apropiados_eval_tecnica' => 'Formatos Apropiados Eval Tecnica',
            'cumple_requisitos_norma_eval_tecnica' => 'Cumple Requisitos Norma Eval Tecnica',
            'documentacion_opiniones_eval_tecnica' => 'Documentacion Opiniones Eval Tecnica',
            'seguridad_transmision_eval_tecnica' => 'Seguridad Transmision Eval Tecnica',
            'confidencialidad_eval_tecnica' => 'Confidencialidad Eval Tecnica',
            'criterios_insertidumbre_eval_tecnica' => 'Criterios Insertidumbre Eval Tecnica',
            'criterios_trazabilidad_eval_tecnica' => 'Criterios Trazabilidad Eval Tecnica',
            'numero_requisito_eval_tecnica' => 'Numero Requisito Eval Tecnica',
            'comentario_requisito_eval_tecnica' => 'Comentario Requisito Eval Tecnica',
            'conclusion_eval_tecnica' => 'Conclusion Eval Tecnica',
            'fecha_inicio_eval_tecnica' => 'Fecha Inicio Eval Tecnica',
            'fecha_fin_eval_tecnica' => 'Fecha Fin Eval Tecnica',
            'hora_inicio_eval_tecnica' => 'Hora Inicio Eval Tecnica',
            'hora_fin_eval_tecnica' => 'Hora Fin Eval Tecnica',
            //'fecha_creacion_eval_tecnica' => 'Fecha Creacion Eval Tecnica',
        ];
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getAspectosEvaluados040803s()
    {
        return $this->hasMany(AspectosEvaluados040803::className(), ['fk_id_eval_tecnica' => 'id_eval_tecnica']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getEquipoEval040803s()
    {
        return $this->hasMany(EquipoEval040803::className(), ['fk_id_eval_tecnica' => 'id_eval_tecnica']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getFkIdPeticion()
    {
        return $this->hasOne(Peticion010401::className(), ['id_peticion' => 'fk_id_peticion']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getProveedorEval040803s()
    {
        return $this->hasMany(ProveedorEval040803::className(), ['fk_id_eval_tecnica' => 'id_eval_tecnica']);
    }
	
    public function atributes() {
		return [
 		 'id_eval_tecnica',
 		 'fk_id_peticion',
 		 'area_ensayo_eval_tecnica',
 		 'metodo_ensayo_eval_tecnica',
 		 'lista_signatarios_eval_tecnica',
 		 'supervision_personal_eval_tecnica',
 		 'autorizacion_eval_tecnica',
 		 'adecuacion_eval_tecnica',
 		 'seguimiento_eval_tecnica',
 		 'separacion_areas_eval_tecnica',
 		 'control_acceso_eval_tecnica',
 		 'orden_limpieza_eval_tecnica',
 		 'uso_metodos_apropiados_eval_tecnica',
 		 'confirmacion_metodos_eval_tecnica',
 		 'instructivo_uso_eval_tecnica',
 		 'validacion_desviaciones_eval_tecnica',
 		 'estimacion_incertidumbre_eval_tecnica',
 		 'verificacion_calculos_eval_tecnica',
 		 'procedimientos_calibracion_eval_tecnica',
 		 'trazabilidad_calibracion_eval_tecnica',
 		 'disponibilidad_material_eval_tecnica',
 		 'certificados_calibracion_eval_tecnica',
 		 'plan_muestreo_eval_tecnica',
 		 'registros_muestreo_eval_tecnica',
 		 'tecnicas_estadisticas_eval_tecnica',
 		 'procedimiento_muestras_eval_tecnica',
 		 'sistema_identificacion_eval_tecnica',
 		 'adecuacion_instalaciones_eval_tecnica',
 		 'procedimiento_aseguramiento_eval_tecnica',
 		 'uso_regular_material_eval_tecnica',
 		 'participacion_intercomparaciones_eval_tecnica',
 		 'repeticion_ensayos_eval_tecnica',
 		 'correlacion_eval_tecnica',
 		 'registro_aseguramiento_eval_tecnica',
 		 'formatos_apropiados_eval_tecnica',
 		 'cumple_requisitos_norma_eval_tecnica',
 		 'documentacion_opiniones_eval_tecnica',
 		 'seguridad_transmision_eval_tecnica',
 		 'confidencialidad_eval_tecnica',
 		 'criterios_insertidumbre_eval_tecnica',
 		 'criterios_trazabilidad_eval_tecnica',
 		 'numero_requisito_eval_tecnica',
 		 'comentario_requisito_eval_tecnica',
 		 'conclusion_eval_tecnica',
 		 'fecha_inicio_eval_tecnica',
 		 'fecha_fin_eval_tecnica',
 		 'hora_inicio_eval_tecnica',
 		 'hora_fin_eval_tecnica',
 		 //'fecha_creacion_eval_tecnica',
		]; 	
    }
	
 
	public function getListHasMany()
    {
    	return [
        	 'AspectosEvaluados040803',
        	 'EquipoEval040803',
        	 'ProveedorEval040803',
     	];
    }
    
    public function getListHasOne()
    {
    	return [
        	'Peticion010401',
     	];
    }

    public function getNamePk() {
		return array('id_eval_tecnica');
    }
    
    public function getModule() {
		return 'formularios;display';
    }
    
    public function getDisplay() {
       return 'id_eval_tecnica';
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
			case 'AspectosEvaluados040803':
        		return new AspectosEvaluados040803();
                break;
			case 'EquipoEval040803':
        		return new EquipoEval040803();
                break;
			case 'ProveedorEval040803':
        		return new ProveedorEval040803();
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
			'id_peticion'=>array('peticion_01_04_01','fk_id_peticion'),
		);
    }
    
}
