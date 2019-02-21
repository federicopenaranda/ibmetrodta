Ext.define('ibmetrodta.model.opciones.OecTipo', {
    extend: 'ibmetrodta.model.Base',
    idProperty: 'id_oec_tipo',
    fields: [
		{
			name: 'id_oec_tipo',
			type: 'int',
			useNull: true
        },
		{
			name: 'nombre_oec_tipo',
			type: 'string',
			useNull: true
        },
		{
			name: 'descripcion_oec_tipo',
			type: 'string',
			useNull: true
        }
	]
});