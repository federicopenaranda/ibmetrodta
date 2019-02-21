Ext.define('ibmetrodta.model.opciones.EstadoTipo', {
    extend: 'ibmetrodta.model.Base',
    idProperty: 'id_estado_tipo',
    fields: [
		{
			name: 'id_estado_tipo',
			type: 'int',
			useNull: true
        },
		{
			name: 'nombre_proceso_estado',
			type: 'string',
			useNull: true
        }
	]
});