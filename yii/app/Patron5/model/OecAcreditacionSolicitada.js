Ext.define('ibmetrodta.model.oec.OecAcreditacionSolicitada', {
    extend: 'ibmetrodta.model.Base',
    idProperty: 'id_oec_acreditacion_solicitada',
    fields: [
		{
			name: 'id_oec_acreditacion_solicitada',
            type: 'int',
            useNull: true
		},
		{
			name: 'fk_id_oec',
            type: 'int',
            useNull: true
		},
		{
			name: 'inspeccion_oec_acreditacion_solicitada',
            type: 'string',
            useNull: true
		},
		{
			name: 'especificaciones_oec_acreditacion_solicitada',
            type: 'string',
            useNull: true
		}
	]
});