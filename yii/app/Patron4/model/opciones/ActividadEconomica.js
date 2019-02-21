Ext.define('ibmetrodta.model.opciones.ActividadEconomica', {
    extend: 'ibmetrodta.model.Base',
    idProperty: 'id_actividad_economica',
    fields: [
		{
			name: 'id_actividad_economica',
			type: 'int',
			useNull: true
        },
		{
			name: 'nombre_actividad_economica',
			type: 'string',
			useNull: true
        }
	]
});