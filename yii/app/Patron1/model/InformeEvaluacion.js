Ext.define('ibmetrodta.model.formularios.InformeEvaluacion', {
    extend: 'ibmetrodta.model.Base',
    idProperty: 'id_informe_evaluacion',
    fields: [
		{
			name: 'id_informe_evaluacion',
            type: 'int',
            useNull: true
        },
		{
			name: 'fk_id_peticion',
            type: 'int',
            useNull: true
        },
		{
			name: 'fecha_inicio_informe_evaluacion',
            type: 'date',
            useNull: true
        },
		{
			name: 'fecha_fin_informe_evaluacion',
            type: 'date',
            useNull: true
        },
		{
			name: 'lugar_informe_evaluacion',
            type: 'string',
            useNull: true
        },
		{
			name: 'objetivo_informe_evaluacion',
            type: 'string',
            useNull: true
        },
		{
			name: 'documentos_referencia_informe_evaluacion',
            type: 'string',
            useNull: true
        },
		{
			name: 'instalaciones_visitadas_informe_evaluacion',
            type: 'string',
            useNull: true
        },
		{
			name: 'profesionales_visitados_informe_evaluacion',
            type: 'string',
            useNull: true
        },
		{
			name: 'equipo_evaluador_informe_evaluacion',
            type: 'string',
            useNull: true
        },
		{
			name: 'alcance_acreditacion_informe_evaluacion',
            type: 'string',
            useNull: true
        },
		{
			name: 'comentario_requisito_informe_evaluacion',
            type: 'string',
            useNull: true
        },
		{
			name: 'comentario_evaluacion_informe_evaluacion',
            type: 'string',
            useNull: true
        },
		{
			name: 'conclusion_informe_evaluacion',
            type: 'string',
            useNull: true
        },
		{
			name: 'anexos_informe_evaluacion',
            type: 'string',
            useNull: true
        },
		{
			name: 'fecha_emision_informe_evaluacion',
            type: 'string',
            useNull: true
        },
		{
			name: 'lugar_emision_informe_evaluacion',
            type: 'string',
            useNull: true
        },
		{
			name: 'fecha_creacion_informe_evaluacion',
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
	]
});