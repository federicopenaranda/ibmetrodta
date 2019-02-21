Ext.define('ibmetrodta.model.evaluacion.PlanEvaluacion', {
    extend: 'ibmetrodta.model.Base',
    idProperty: 'id_plan_evaluacion',
    fields: [
		{
			name: 'id_plan_evaluacion',
            type: 'int',
            useNull: true
		},
		{
			name: 'fk_id_evaluacion',
            type: 'int',
            useNull: true
		},
		{
			name: 'fk_id_oec_contacto',
            type: 'int',
            useNull: true
		},
		{
			name: 'fecha_plan_evaluacion',
            type: 'datetime',
            useNull: true
		},
		{
			name: 'hora_plan_evaluacion',
            type: '',
            useNull: true
		},
		{
			name: 'requisitos_norma_plan_evaluacion',
            type: 'string',
            useNull: true
		}
		{
			name: 'metodologia_plan_evaluacion',
            type: 'string',
            useNull: true
		},
	]
});