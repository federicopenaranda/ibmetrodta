Ext.define('ibmetrodta.model.opciones.CriterioEvaluacion', {
    extend: 'ibmetrodta.model.Base',
    idProperty: 'id_criterio_evaluacion',
    fields: [
		{
			name: 'id_criterio_evaluacion',
			type: 'int',
			useNull: true
        },
		{
			name: 'nombre_criterio_evaluacion',
			type: 'string',
			useNull: true
        }
	]
});