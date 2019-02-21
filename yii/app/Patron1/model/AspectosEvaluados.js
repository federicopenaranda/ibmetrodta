Ext.define('ibmetrodta.model.formularios;display.AspectosEvaluados', {
    extend: 'ibmetrodta.model.Base',
    idProperty: 'id_aspectos_evaluados',
    fields: [
		{
			name: 'id_aspectos_evaluados',
            type: 'int',
            useNull: true
		},
		{
			name: 'fk_id_eval_tecnica',
            type: 'int',
            useNull: true
		},
		{
			name: 'nombre_aspectos_evaluados',
            type: 'string',
            useNull: true
		},
		{
			name: 'educacion_aspectos_evaluados',
            type: 'string',
            useNull: true
		},
		{
			name: 'formacion_aspectos_evaluados',
            type: 'string',
            useNull: true
		},
		{
			name: 'experiencia_aspectos_evaluados',
            type: 'string',
            useNull: true
		},
		{
			name: 'habilidades_aspectos_evaluados',
            type: 'string',
            useNull: true
		}
	]
});