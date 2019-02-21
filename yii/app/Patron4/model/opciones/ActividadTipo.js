Ext.define('ibmetrodta.model.opciones.ActividadTipo', {
    extend: 'ibmetrodta.model.Base',
    idProperty: 'id_actividad_tipo',
    fields: [
		{
			name: 'id_actividad_tipo',
			type: 'int',
			useNull: true
        },
		{
			name: 'nombre_actividad_tipo',
			type: 'string',
			useNull: true
        }
	]
});