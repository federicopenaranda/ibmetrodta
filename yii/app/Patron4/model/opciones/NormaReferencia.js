Ext.define('ibmetrodta.model.opciones.NormaReferencia', {
    extend: 'ibmetrodta.model.Base',
    idProperty: 'id_norma_referencia',
    fields: [
		{
			name: 'id_norma_referencia',
			type: 'int',
			useNull: true
        },
		{
			name: 'nombre_norma_referencia',
			type: 'string',
			useNull: true
        },
		{
			name: 'descripcion_norma_referencia',
			type: 'string',
			useNull: true
        }
	]
});