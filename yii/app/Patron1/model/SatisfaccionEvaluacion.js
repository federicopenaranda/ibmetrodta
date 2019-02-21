Ext.define('ibmetrodta.model.formularios.SatisfaccionEvaluacion', {
    extend: 'ibmetrodta.model.Base',
    idProperty: 'id_satisfaccion_evaluacion',
    fields: [
		{
			name: 'id_satisfaccion_evaluacion',
            type: 'int',
            useNull: true
		},
		{
			name: 'fk_id_criterio_satisfaccion',
            type: 'int',
            useNull: true
		},
		{
			name: 'fk_id_satisfaccion_cliente',
            type: 'int',
            useNull: true
		},
		{
			name: 'puntaje_satisfaccion_evaluacion',
            type: 'int',
            useNull: true
		},
		{
			name: 'etiqueta_satisfaccion_evaluacion',
            type: 'string',
            useNull: true
		}
	]
});