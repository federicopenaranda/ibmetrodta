Ext.define('ibmetrodta.model.formularios;display.EvalTecnica', {
    extend: 'ibmetrodta.model.Base',
    idProperty: 'id_eval_tecnica',
    fields: [
		{
			name: 'id_eval_tecnica',
            type: 'int',
            useNull: true
        },
		{
			name: 'fk_id_peticion',
            type: 'int',
            useNull: true
        },
		{
			name: 'area_ensayo_eval_tecnica',
            type: 'string',
            useNull: true
        },
		{
			name: 'metodo_ensayo_eval_tecnica',
            type: 'string',
            useNull: true
        },
		{
			name: 'lista_signatarios_eval_tecnica',
            type: 'string',
            useNull: true
        },
		{
			name: 'supervision_personal_eval_tecnica',
            type: 'string',
            useNull: true
        },
		{
			name: 'autorizacion_eval_tecnica',
            type: 'string',
            useNull: true
        },
		{
			name: 'adecuacion_eval_tecnica',
            type: 'string',
            useNull: true
        },
		{
			name: 'seguimiento_eval_tecnica',
            type: 'string',
            useNull: true
        },
		{
			name: 'separacion_areas_eval_tecnica',
            type: 'string',
            useNull: true
        },
		{
			name: 'control_acceso_eval_tecnica',
            type: 'string',
            useNull: true
        },
		{
			name: 'orden_limpieza_eval_tecnica',
            type: 'string',
            useNull: true
        },
		{
			name: 'uso_metodos_apropiados_eval_tecnica',
            type: 'string',
            useNull: true
        },
		{
			name: 'confirmacion_metodos_eval_tecnica',
            type: 'string',
            useNull: true
        },
		{
			name: 'instructivo_uso_eval_tecnica',
            type: 'string',
            useNull: true
        },
		{
			name: 'validacion_desviaciones_eval_tecnica',
            type: 'string',
            useNull: true
        },
		{
			name: 'estimacion_incertidumbre_eval_tecnica',
            type: 'string',
            useNull: true
        },
		{
			name: 'verificacion_calculos_eval_tecnica',
            type: 'string',
            useNull: true
        },
		{
			name: 'procedimientos_calibracion_eval_tecnica',
            type: 'string',
            useNull: true
        },
		{
			name: 'trazabilidad_calibracion_eval_tecnica',
            type: 'string',
            useNull: true
        },
		{
			name: 'disponibilidad_mterial_eval_tecnica',
            type: 'string',
            useNull: true
        },
		{
			name: 'certificados_calibracion_eval_tecnica',
            type: 'string',
            useNull: true
        },
		{
			name: 'plan_muestreo_eval_tecnica',
            type: 'string',
            useNull: true
        },
		{
			name: 'registros_muestreo_eval_tecnica',
            type: 'string',
            useNull: true
        },
		{
			name: 'tecnicas_estadisticas_eval_tecnica',
            type: 'string',
            useNull: true
        },
		{
			name: 'procedimiento_muestras_eval_tecnica',
            type: 'string',
            useNull: true
        },
		{
			name: 'sistema_identificacion_eval_tecnica',
            type: 'string',
            useNull: true
        },
		{
			name: 'adecuacion_instalaciones_eval_tecnica',
            type: 'string',
            useNull: true
        },
		{
			name: 'procedimiento_aseguramiento_eval_tecnica',
            type: 'string',
            useNull: true
        },
		{
			name: 'uso_regular_material_eval_tecnica',
            type: 'string',
            useNull: true
        },
		{
			name: 'participacion_intercomparaciones_eval_tecnica',
            type: 'string',
            useNull: true
        },
		{
			name: 'repeticion_ensayos_eval_tecnica',
            type: 'string',
            useNull: true
        },
		{
			name: 'correlacion_eval_tecnica',
            type: 'string',
            useNull: true
        },
		{
			name: 'registro_aseguramiento_eval_tecnica',
            type: 'string',
            useNull: true
        },
		{
			name: 'formatos_apropiados_eval_tecnica',
            type: 'string',
            useNull: true
        },
		{
			name: 'cumple_requisitos_norma_eval_tecnica',
            type: 'string',
            useNull: true
        },
		{
			name: 'documentacion_opiniones_eval_tecnica',
            type: 'string',
            useNull: true
        },
		{
			name: 'seguridad_transmision_eval_tecnica',
            type: 'string',
            useNull: true
        },
		{
			name: 'confidencialidad_eval_tecnica',
            type: 'string',
            useNull: true
        },
		{
			name: 'criterios_insertidumbre_eval_tecnica',
            type: 'string',
            useNull: true
        },
		{
			name: 'criterios_trazabilidad_eval_tecnica',
            type: 'string',
            useNull: true
        },
		{
			name: 'numero_requisito_eval_tecnica',
            type: 'string',
            useNull: true
        },
		{
			name: 'comentario_requisito_eval_tecnica',
            type: 'string',
            useNull: true
        },
		{
			name: 'conclusion_eval_tecnica',
            type: 'string',
            useNull: true
        },
		{
			name: 'fecha_inicio_eval_tecnica',
            type: 'date',
            useNull: true
        },
		{
			name: 'fecha_fin_eval_tecnica',
            type: 'date',
            useNull: true
        },
		{
			name: 'hora_inicio_eval_tecnica',
            type: 'int',
            useNull: true
        },
		{
			name: 'hora_fin_eval_tecnica',
            type: 'int',
            useNull: true
        },
		{
			name: 'fecha_creacion_eval_tecnica',
            type: 'string',
            useNull: true
        },
		{
            name: 'codigo_peticion',
            type: 'auto'
        },
		/*
         * Campos de tablas foraneas
         */
        {
            name: 'aspectosEvaluados040803s',
            type: 'auto'
        },
        {
            name: 'equipoEval040803s',
            type: 'auto'
        },
		{
            name: 'proveedorEval040803s',
            type: 'auto'
        }
	]
});