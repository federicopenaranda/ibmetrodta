Ext.define('ibmetrodta.model.proceso.Estado', {
    extend: 'ibmetrodta.model.Base',
    idProperty: 'id_estado',
    fields: [
		{
			name: 'id_estado',
            type: 'int',
            useNull: true
        },
		{
			name: 'fk_id_estado_tipo',
            type: 'int',
            useNull: true
        },
		{
			name: 'fk_id_proceso',
            type: 'int',
            useNull: true
        },
		{
			name: 'nombre_estado',
            type: 'string',
            useNull: true
        },
		{
			name: 'descripcion_estado',
            type: 'string',
            useNull: true
        },
		{
            name: 'nombre_proceso_estado',
            type: 'auto'
        },
		{
            name: 'nombre_proceso',
            type: 'auto'
        },
		/*
         * Campos de tablas foraneas
         */
        {
            name: 'actividadEstado010602s',
            type: 'auto'
        },
        {
            name: 'actividad010501s',
            type: 'auto'
        },
        {
            name: 'peticionEstado010403s',
            type: 'auto'
        },
		{
            name: 'transicion010202s',
            type: 'auto'
        }
	]
});