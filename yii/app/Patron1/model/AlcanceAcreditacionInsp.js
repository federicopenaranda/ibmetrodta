Ext.define('ibmetrodta.model.evaluacion.AlcanceAcreditacionInsp', {
    extend: 'ibmetrodta.model.Base',
    idProperty: 'id_alcance_acreditacion_insp',
    fields: [
		{
			name: 'id_alcance_acreditacion_insp',
            type: 'int',
            useNull: true
		},
		{
			name: 'fk_id_evaluacion',
            type: 'int',
            useNull: true
		},
		{
			name: 'procedimiento_inspeccion_alcance_acreditacion_insp',
            type: 'string',
            useNull: true
		},
		{
			name: 'norma_referencia_alcance_acreditacion_insp',
            type: 'string',
            useNull: true
		},
		{
			name: 'items_inspeccionados_alcance_acreditacion_insp',
            type: 'string',
            useNull: true
		},
		{
			name: 'items_referencia_alcance_acreditacion_insp',
            type: 'string',
            useNull: true
		},
		{
			name: 'signatario_alcance_acreditacion_insp',
            type: 'string',
            useNull: true
		}
	]
});