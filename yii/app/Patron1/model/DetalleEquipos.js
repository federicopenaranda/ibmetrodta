Ext.define('ibmetrodta.model.formularios.DetalleEquipos', {
    extend: 'ibmetrodta.model.Base',
    idProperty: 'id_detalle_equipos',
    fields: [
		{
			name: 'id_detalle_equipos',
            type: 'int',
            useNull: true
        },
		{
			name: 'fk_id_peticion',
            type: 'int',
            useNull: true
        },
		{
			name: 'estado_detalle_equipos',
            type: 'int',
            useNull: true
        },
		{
			name: 'objetivo_detalle_equipos',
            type: 'string',
            useNull: true
        },
		{
			name: 'nombre_detalle_equipos',
            type: 'string',
            useNull: true
        },
		{
			name: 'norma_detalle_equipos',
            type: 'string',
            useNull: true
        },
		{
			name: 'matriz_detalle_equipos',
            type: 'string',
            useNull: true
        },
		{
			name: 'tipo_equipo_detalle_equipos',
            type: 'string',
            useNull: true
        },
		{
			name: 'personal_responsable_detalle_equipos',
            type: 'string',
            useNull: true
        },
		{
			name: 'codigo_equipo_detalle_equipos',
            type: 'string',
            useNull: true
        },
		{
			name: 'numero_serie_detalle_equipos',
            type: 'string',
            useNull: true
        },
		{
			name: 'nombre_fabricante_detalle_equipos',
            type: 'string',
            useNull: true
        },
		{
			name: 'fecha_puesta_servicio_detalle_equipos',
            type: 'date',
            useNull: true
        },
		{
			name: 'fecha_ultima_calibracion_detalle_equipos',
            type: 'date',
            useNull: true
        },
		{
			name: 'organismo_realizo_calibracion_detalle_equipos',
            type: 'string',
            useNull: true
        },
		{
			name: 'certificado_calibracion_detalle_equipos',
            type: 'string',
            useNull: true
        },
		{
			name: 'fecha_proxima_calibracion_detalle_equipos',
            type: 'date',
            useNull: true
        },
		{
			name: 'criterio_aceptacion_cert_detalle_equipos',
            type: 'string',
            useNull: true
        },
		{
			name: 'procedimientos_uso_detalle_equipos',
            type: 'string',
            useNull: true
        },
		{
			name: 'patrones_comprobaciones_detalle_equipos',
            type: 'string',
            useNull: true
        },
		{
			name: 'fecha_creacion_detalle_equipos',
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