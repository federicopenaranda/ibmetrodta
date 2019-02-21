Ext.define('ibmetrodta.model.opciones.CriterioSatisfaccion', {
    extend: 'ibmetrodta.model.Base',
    idProperty: 'id_criterio_satisfaccion',
    fields: [
		{
			name: 'id_criterio_satisfaccion',
			type: 'int',
			useNull: true
        },
		{
			name: 'nombre_criterio_satisfaccion',
			type: 'string',
			useNull: true
        },
		{
			name: 'estado_criterio_satisfaccion',
			type: 'int',
			useNull: true
        }
	]
});