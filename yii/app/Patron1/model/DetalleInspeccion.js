Ext.define('ibmetrodta.model.formularios.DetalleInspeccion', {
    extend: 'ibmetrodta.model.Base',
    idProperty: 'id_detalle_inspeccion',
    fields: [
		{
			name: 'id_detalle_inspeccion',
            type: 'int',
            useNull: true
        },
		{
			name: 'fk_id_peticion',
            type: 'int',
            useNull: true
        },
		{
			name: 'estado_detalle_inspeccion',
            type: 'int',
            useNull: true
        },
		{
			name: 'objetivo_detalle_inspeccion',
            type: 'string',
            useNull: true
        },
		{
			name: 'nombre_detalle_inspeccion',
            type: 'string',
            useNull: true
        },
		{
			name: 'tipo_detalle_inspeccion',
            type: 'string',
            useNull: true
        },
		{
			name: 'matriz_inspeccionada_detalle_inspeccion',
            type: 'string',
            useNull: true
        },
		{
			name: 'documento_normativo_detalle_inspeccion',
            type: 'string',
            useNull: true
        },
		{
			name: 'procedimiento_inspeccion_detalle_inspeccion',
            type: 'string',
            useNull: true
        },
		{
			name: 'inspeccion_se_realiza_detalle_inspeccion',
            type: 'string',
            useNull: true
        },
		{
			name: 'direccion_delegaciones_detalle_inspeccion',
            type: 'string',
            useNull: true
        },
		{
			name: 'inspectores_autorizados_detalle_inspeccion',
            type: 'string',
            useNull: true
        },
		{
			name: 'equipos_utilizados_inspeccion_detalle_inspeccion',
            type: 'string',
            useNull: true
        },
		{
			name: 'ad_patrones_referencia_detalle_inspeccion',
            type: 'string',
            useNull: true
        },
		{
			name: 'ad_material_referencia_cert_detalle_inspeccion',
            type: 'string',
            useNull: true
        },
		{
			name: 'fecha_creacion_detalle_inspeccion',
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