Ext.define('ibmetrodta.model.proceso.Actividad', {
    extend: 'ibmetrodta.model.Base',
    idProperty: 'id_actividad',
    fields: [
		{
			name: 'id_actividad',
            type: 'int',
            useNull: true
        },
		{
			name: 'fk_id_actividad_tipo',
            type: 'int',
            useNull: true
        },
		{
			name: 'fk_id_proceso',
            type: 'int',
            useNull: true
        },
		{
			name: 'nombre_actividad',
            type: 'string',
            useNull: true
        },
		{
			name: 'descripcion_actividad',
            type: 'string',
            useNull: true
        },
		{
            name: 'nombre_actividad_tipo',
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
            name: 'estado010601s',
            type: 'auto'
        },
        {
            name: 'actividadTransicion010502s',
            type: 'auto'
        },
		{
            name: 'transicion010202s',
            type: 'auto'
        }
	]
});