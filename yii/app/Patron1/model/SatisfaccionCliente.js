Ext.define('ibmetrodta.model.formularios.SatisfaccionCliente', {
    extend: 'ibmetrodta.model.Base',
    idProperty: 'id_satisfaccion_cliente',
    fields: [
		{
			name: 'id_satisfaccion_cliente',
            type: 'int',
            useNull: true
        },
		{
			name: 'fk_id_peticion',
            type: 'int',
            useNull: true
        },
		{
			name: 'reclamos_satisfaccion_cliente',
            type: 'string',
            useNull: true
        },
		{
			name: 'empresa_satisfaccion_cliente',
            type: 'string',
            useNull: true
        },
		{
			name: 'contacto_satisfaccion_cliente',
            type: 'string',
            useNull: true
        },
		{
			name: 'lugar_satisfaccion_cliente',
            type: 'string',
            useNull: true
        },
		{
			name: 'fecha_satisfaccion_cliente',
            type: 'date',
            useNull: true
        },
		{
			name: 'fecha_creacion_satisfaccion_cliente',
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
            name: 'satisfaccionEvaluacion041203s',
            type: 'auto'
        }
	]
});