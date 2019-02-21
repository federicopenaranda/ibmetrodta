Ext.define('ibmetrodta.model.opciones.CriterioSupervision', {
    extend: 'ibmetrodta.model.Base',
    idProperty: 'id_criterio_supervision',
    fields: [
		{
			name: 'id_criterio_supervision',
			type: 'int',
			useNull: true
        },
		{
			name: 'tipo_criterio_supervision',
			type: 'string',
			useNull: true
        },
		{
			name: 'pregunta_criterio_supervision',
			type: 'string',
			useNull: true
        },
		{
			name: 'estado_criterio_supervision',
			type: 'int',
			useNull: true
        }
	]
});