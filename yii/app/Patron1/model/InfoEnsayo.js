Ext.define('ibmetrodta.model.formularios.InfoEnsayo', {
    extend: 'ibmetrodta.model.Base',
    idProperty: 'id_info_ensayo',
    fields: [
		{
			name: 'id_info_ensayo',
            type: 'int',
            useNull: true
        },
		{
			name: 'fk_id_peticion',
            type: 'int',
            useNull: true
        },
		{
			name: 'estado_info_ensayo',
            type: 'int',
            useNull: true
        },
		{
			name: 'objetivo_info_ensayo',
            type: 'string',
            useNull: true
        },
		{
			name: 'nombre_info_ensayo',
            type: 'string',
            useNull: true
        },
		{
			name: 'norma_info_ensayo',
            type: 'string',
            useNull: true
        },
		{
			name: 'matriz_info_ensayo',
            type: 'string',
            useNull: true
        },
		{
			name: 'tipo_servicio_info_ensayo',
            type: 'string',
            useNull: true
        },
		{
			name: 'categoria_info_ensayo',
            type: 'string',
            useNull: true
        },
		{
			name: 'pesonal_autorizado_info_ensayo',
            type: 'string',
            useNull: true
        },
		{
			name: 'rango_medicion_info_ensayo',
            type: 'string',
            useNull: true
        },
		{
			name: 'incertidumbre_medicion_info_ensayo',
            type: 'string',
            useNull: true
        },
		{
			name: 'lista_equipos_utilizados_info_ensayo',
            type: 'string',
            useNull: true
        },
		{
			name: 'ad_calculo_incertidumbre_info_ensayo',
            type: 'string',
            useNull: true
        },
		{
			name: 'ad_confirmacion_aplicacion_info_ensayo',
            type: 'string',
            useNull: true
        },
		{
			name: 'ad_validacion_info_ensayo',
            type: 'string',
            useNull: true
        },
		{
			name: 'ad_patrones_referencia_info_ensayo',
            type: 'string',
            useNull: true
        },
		{
			name: 'ad_material_referencia_info_ensayo',
            type: 'string',
            useNull: true
        },
		{
			name: 'ad_comparaciones_interlaboratorios_info_ensayo',
            type: 'string',
            useNull: true
        },
		{
			name: 'fecha_creacion_info_ensayo',
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