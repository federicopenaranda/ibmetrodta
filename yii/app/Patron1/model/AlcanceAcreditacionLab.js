Ext.define('ibmetrodta.model.evaluacion.AlcanceAcreditacionLab', {
    extend: 'ibmetrodta.model.Base',
    idProperty: 'id_alcance_acreditacion_lab',
    fields: [
		{
			name: 'id_alcance_acreditacion_lab',
            type: 'int',
            useNull: true
		},
		{
			name: 'fk_id_evaluacion',
            type: 'int',
            useNull: true
		},
		{
			name: 'descripcion_ensayo_alcance_acreditacion_lab',
            type: 'string',
            useNull: true
		},
		{
			name: 'metodo_ensayo_alcance_acreditacion_lab',
            type: 'string',
            useNull: true
		},
		{
			name: 'rango_medicion_alcance_acreditacion_lab',
            type: 'string',
            useNull: true
		},
		{
			name: 'incertidumbre_alcance_acreditacion_lab',
            type: 'string',
            useNull: true
		}
	]
});