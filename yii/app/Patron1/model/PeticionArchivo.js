Ext.define('ibmetrodta.model.proceso.PeticionArchivo', {
    extend: 'ibmetrodta.model.Base',
    idProperty: 'id_peticion_archivo',
    fields: [
		{
			name: 'id_peticion_archivo',
            type: 'int',
            useNull: true
        },
		{
			name: 'fk_id_peticion_estado',
            type: 'int',
            useNull: true
        },
		{
			name: 'nombre_peticion_archivo',
            type: 'string',
            useNull: true
        },
		{
			name: 'version_peticion_archivo',
            type: 'string',
            useNull: true
        },
		{
			name: 'activo_peticion_archivo',
            type: 'int',
            useNull: true
        },
		{
			name: 'descripcion_peticion_archivo',
            type: 'string',
            useNull: true
        },
		{
			name: 'tipo_peticion_archivo',
            type: 'string',
            useNull: true
        },
		{
			name: 'estado_peticion_archivo',
            type: 'string',
            useNull: true
        },
		{
			name: 'adicional_peticion_archivo',
            type: 'int',
            useNull: true
        },
		{
			name: 'escaneado_peticion_archivo',
            type: 'string',
            useNull: true
        },
		{
			name: 'fecha_creacion_peticion_archivo',
            type: 'string',
            useNull: true
        },
		{
            name: 'id_peticion_estado',
            type: 'auto'
        },
		/*
         * Campos de tablas foraneas
         */
	]
});