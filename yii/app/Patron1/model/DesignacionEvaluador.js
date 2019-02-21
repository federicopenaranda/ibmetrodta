Ext.define('ibmetrodta.model.formularios.DesignacionEvaluador', {
    extend: 'ibmetrodta.model.Base',
    idProperty: 'id_designacion_evaluador',
    fields: [
		{
			name: 'id_designacion_evaluador',
            type: 'int',
            useNull: true
        },
		{
			name: 'fk_id_peticion',
            type: 'int',
            useNull: true
        },
		{
			name: 'por_dta_nombre_designacion_evaluador',
            type: 'string',
            useNull: true
        },
		{
			name: 'por_dta_fecha_designacion_evaluador',
            type: 'date',
            useNull: true
        },
		{
			name: 'fecha_creacion_designacion_evaluador',
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