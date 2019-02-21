Ext.define('ibmetrodta.model.formularios.SupervisionCriterio', {
    extend: 'ibmetrodta.model.Base',
    idProperty: 'id_supervision_criterio',
    fields: [
		{
			name: 'id_supervision_criterio',
            type: 'int',
            useNull: true
		},
		{
			name: 'fk_id_supervision_evaluador',
            type: 'int',
            useNull: true
		},
		{
			name: 'fk_id_criterio_supervision',
            type: 'int',
            useNull: true
		},
		{
			name: 'puntaje_supervision_criterio',
            type: 'string',
            useNull: true
		}
	]
});