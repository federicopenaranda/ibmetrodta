Ext.define('ibmetrodta.model.proceso.Accion', {
    extend: 'ibmetrodta.model.Base',
    idProperty: 'id_accion',
    fields: [
		{
			name: 'id_accion',
            type: 'int',
            useNull: true
        },
		{
			name: 'fk_id_accion_tipo',
            type: 'int',
            useNull: true
        },
		{
			name: 'fk_id_proceso',
            type: 'int',
            useNull: true
        },
		{
			name: 'nombre_accion',
            type: 'string',
            useNull: true
        },
		{
			name: 'descripcion_accion',
            type: 'string',
            useNull: true
        },
		{
            name: 'nombre_accion_tipo',
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
            name: 'accionTransicion010202s',
            type: 'auto'
        },
        {
            name: 'transicion010202s',
            type: 'auto'
        },
		{
            name: 'peticionAccion010301s',
            type: 'auto'
        }
	]
});