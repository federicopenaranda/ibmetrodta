Ext.define('ibmetrodta.model.formularios.SupervisionEvaluador', {
    extend: 'ibmetrodta.model.Base',
    idProperty: 'id_supervision_evaluador',
    fields: [
		{
			name: 'id_supervision_evaluador',
            type: 'int',
            useNull: true
        },
		{
			name: 'fk_id_peticion',
            type: 'int',
            useNull: true
        },
		{
			name: 'criterio_evaluacion_supervision_evaluador',
            type: 'string',
            useNull: true
        },
		{
			name: 'comentarios_supervision_evaluador',
            type: 'string',
            useNull: true
        },
		{
			name: 'observaciones_supervision_evaluador',
            type: 'string',
            useNull: true
        },
		{
			name: 'nombre_supervision_evaluador',
            type: 'string',
            useNull: true
        },
		{
			name: 'cargo_supervision_evaluador',
            type: 'string',
            useNull: true
        },
		{
			name: 'fecha_supervision_evaluador',
            type: 'date',
            useNull: true
        },
		{
			name: 'fecha_creacion_supervision_evaluador',
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
            name: 'supervisionCriterio041103s',
            type: 'auto'
        }
	]
});