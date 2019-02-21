Ext.define('ibmetrodta.model.evaluacion.AlcanceAcreditacionCert', {
    extend: 'ibmetrodta.model.Base',
    idProperty: 'id_alcance_acreditacion_cert',
    fields: [
		{
			name: 'id_alcance_acreditacion_cert',
            type: 'int',
            useNull: true
		},
		{
			name: 'fk_id_evaluacion',
            type: 'int',
            useNull: true
		},
		{
			name: 'producto_alcance_acreditacion_cert',
            type: 'string',
            useNull: true
		},
		{
			name: 'norma_referencia_alcance_acreditacion_cert',
            type: 'string',
            useNull: true
		},
		{
			name: 'sector_economico_alcance_acreditacion_cert',
            type: 'string',
            useNull: true
		},
		{
			name: 'actividad_alcance_acreditacion_cert',
            type: 'string',
            useNull: true
		},
		{
			name: 'codigo_iaf_alcance_acreditacion_cert',
            type: 'string',
            useNull: true
		}
	]
});