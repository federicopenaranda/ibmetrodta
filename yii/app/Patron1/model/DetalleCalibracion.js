Ext.define('ibmetrodta.model.formularios.DetalleCalibracion', {
    extend: 'ibmetrodta.model.Base',
    idProperty: 'id_detalle_calibracion',
    fields: [
		{
			name: 'id_detalle_calibracion',
            type: 'int',
            useNull: true
        },
		{
			name: 'fk_id_peticion',
            type: 'int',
            useNull: true
        },
		{
			name: 'fk_id_campo_calibracion',
            type: 'int',
            useNull: true
        },
		{
			name: 'estado_detalle_calibracion',
            type: 'int',
            useNull: true
        },
		{
			name: 'objetivo_detalle_calibracion',
            type: 'string',
            useNull: true
        },
		{
			name: 'descripcion_detalle_calibracion',
            type: 'string',
            useNull: true
        },
		{
			name: 'norma_detalle_calibracion',
            type: 'string',
            useNull: true
        },
		{
			name: 'equipo_calibrado_detalle_calibracion',
            type: 'string',
            useNull: true
        },
		{
			name: 'tipo_servicio_detalle_calibracion',
            type: 'string',
            useNull: true
        },
		{
			name: 'personal_autorizado_detalle_calibracion',
            type: 'string',
            useNull: true
        },
		{
			name: 'rango_calibracion_detalle_calibracion',
            type: 'string',
            useNull: true
        },
		{
			name: 'mejor_capacidad_medicion_detalle_calibracion',
            type: 'string',
            useNull: true
        },
		{
			name: 'equipos_utilizados_detalle_calibracion',
            type: 'string',
            useNull: true
        },
		{
			name: 'ad_estimacion_incertidumbre_detalle_calibracion',
            type: 'string',
            useNull: true
        },
		{
			name: 'ad_patrones_referencia_detalle_calibracion',
            type: 'string',
            useNull: true
        },
		{
			name: 'ad_manipulacion_patrones_referencia_detalle_calibracion',
            type: 'string',
            useNull: true
        },
		{
			name: 'ad_fecha_ultima_calibracion_detalle_calibracion',
            type: 'date',
            useNull: true
        },
		{
			name: 'ad_organismo_realizo_calibracion_detalle_calibracion',
            type: 'string',
            useNull: true
        },
		{
			name: 'ad_certificado_calibracion_detalle_calibracion',
            type: 'string',
            useNull: true
        },
		{
			name: 'ad_fecha_proxima_calibracion_detalle_calibracion',
            type: 'date',
            useNull: true
        },
		{
			name: 'ad_declaracion_trazabilidad_detalle_calibracion',
            type: 'string',
            useNull: true
        },
		{
			name: 'ad_criterio_aceptacion_detalle_calibracion',
            type: 'string',
            useNull: true
        },
		{
			name: 'ad_comparaciones_interlaboratorios_detalle_calibracion',
            type: 'string',
            useNull: true
        },
		{
			name: 'fecha_creacion_detalle_calibracion',
            type: 'string',
            useNull: true
        },
		{
            name: 'codigo_peticion',
            type: 'auto'
        },
		{
            name: 'nombre_campo_calibracion',
            type: 'auto'
        },
		/*
         * Campos de tablas foraneas
         */
	]
});