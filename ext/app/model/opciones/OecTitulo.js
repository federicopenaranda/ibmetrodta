Ext.define('ibmetrodta.model.opciones.OecTitulo', {
    extend: 'ibmetrodta.model.Base',
    idProperty: 'id_oec_titulo',
    fields: [
		{
			name: 'id_oec_titulo',
			type: 'int',
			useNull: true
        },
		{
			name: 'nombre_oec_titulo',
			type: 'string',
			useNull: true
        }
	]
});