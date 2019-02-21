Ext.define('ibmetrodta.model.proceso;display.PeticionAccion', {
    extend: 'ibmetrodta.model.Base',
    idProperty: 'id_peticion_accion',
    fields: [
		{
			name: 'id_peticion_accion',
            type: 'int',
            useNull: true
        },
		{
			name: 'fk_id_accion',
            type: 'int',
            useNull: true
        },
		{
			name: 'fk_id_transicion',
            type: 'int',
            useNull: true
        },
		{
			name: 'fk_id_usuario',
            type: 'int',
            useNull: true
        },
		{
			name: 'completa_peticion_accion',
            type: 'int',
            useNull: true
        },
		{
			name: 'activa_peticion_accion',
            type: 'int',
            useNull: true
        },
		{
			name: 'observacion_peticion_accion',
            type: 'string',
            useNull: true
        },
		{
            name: 'nombre_accion',
            type: 'auto'
        },
		{
            name: 'id_transicion',
            type: 'auto'
        },
		{
            name: 'codigo_usuario',
            type: 'auto'
        },
		/*
         * Campos de tablas foraneas
         */
	]
});