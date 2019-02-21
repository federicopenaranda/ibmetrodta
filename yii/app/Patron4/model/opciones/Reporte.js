Ext.define('ibmetrodta.model.opciones.Reporte', {
    extend: 'ibmetrodta.model.Base',
    idProperty: 'id_reporte',
    fields: [
		{
			name: 'id_reporte',
			type: 'int',
			useNull: true
        },
		{
			name: 'codigo_reporte',
			type: 'string',
			useNull: true
        },
		{
			name: 'nombre_reporte',
			type: 'string',
			useNull: true
        },
		{
			name: 'descripcion_reporte',
			type: 'string',
			useNull: true
        },
		{
			name: 'estado_reporte',
			type: 'int',
			useNull: true
        },
		{
			name: 'ruta_reporte',
			type: 'string',
			useNull: true
        },
		{
			name: 'tipo_reporte',
			type: 'string',
			useNull: true
        }
	]
});