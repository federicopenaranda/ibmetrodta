Ext.define('ibmetrodta.model.proceso;display.EquipoPeticion', {
    extend: 'ibmetrodta.model.Base',
    idProperty: 'id_equipo_peticion',
    fields: [
		{
			name: 'id_equipo_peticion',
            type: 'int',
            useNull: true
        },
		{
			name: 'fk_id_peticion',
            type: 'int',
            useNull: true
        },
		{
			name: 'fk_id_usuario',
            type: 'int',
            useNull: true
        },
		{
			name: 'cantidad_horas_equipo_peticion',
            type: 'int',
            useNull: true
        },
		{
			name: 'observaciones_equipo_peticion',
            type: 'string',
            useNull: true
        },
		{
			name: 'estado_equipo_peticion',
            type: 'string',
            useNull: true
        },
		{
            name: 'codigo_peticion',
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