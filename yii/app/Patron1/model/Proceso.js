Ext.define('ibmetrodta.model.proceso.Proceso', {
    extend: 'ibmetrodta.model.Base',
    idProperty: 'id_proceso',
    fields: [
		{
			name: 'id_proceso',
            type: 'int',
            useNull: true
        },
		{
			name: 'nombre_proceso',
            type: 'string',
            useNull: true
        },
		{
			name: 'valor_proceso',
            type: 'string',
            useNull: true
        },
		/*
         * Campos de tablas foraneas
         */
        {
            name: 'accion010201s',
            type: 'auto'
        },
        {
            name: 'actividad010501s',
            type: 'auto'
        },
        {
            name: 'estado010601s',
            type: 'auto'
        },
        {
            name: 'peticion010401s',
            type: 'auto'
        },
        {
            name: 'transicion010202s',
            type: 'auto'
        },
        {
            name: 'usuarioProceso000102s',
            type: 'auto'
        },
		{
            name: 'usuario000101s',
            type: 'auto'
        }
	]
});