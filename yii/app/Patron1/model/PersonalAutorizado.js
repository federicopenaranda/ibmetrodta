Ext.define('ibmetrodta.model.formularios.PersonalAutorizado', {
    extend: 'ibmetrodta.model.Base',
    idProperty: 'id_personal_autorizado',
    fields: [
		{
			name: 'id_personal_autorizado',
            type: 'int',
            useNull: true
		},
		{
			name: 'fk_id_anexo_convenio',
            type: 'int',
            useNull: true
		},
		{
			name: 'ensayista_personal_autorizado',
            type: 'string',
            useNull: true
		},
		{
			name: 'ensayo_personal_autorizado',
            type: 'string',
            useNull: true
		}
	]
});