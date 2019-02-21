Ext.define('ibmetrodta.model.opciones.AccionTipo', {
    extend: 'ibmetrodta.model.Base',
    idProperty: 'id_accion_tipo',
    fields: [
		{
			name: 'id_accion_tipo',
			type: 'int',
			useNull: true
        },
		{
			name: 'nombre_accion_tipo',
			type: 'string',
			useNull: true
        }
	]
});