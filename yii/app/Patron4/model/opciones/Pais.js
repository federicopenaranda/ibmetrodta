Ext.define('ibmetrodta.model.opciones.Pais', {
    extend: 'ibmetrodta.model.Base',
    idProperty: 'id_pais',
    fields: [
		{
			name: 'id_pais',
			type: 'int',
			useNull: true
        },
		{
			name: 'nombre_pais',
			type: 'string',
			useNull: true
        }
	]
});