Ext.define('ibmetrodta.model.opciones.CodigoPeticion', {
    extend: 'ibmetrodta.model.Base',
    idProperty: 'id_codigo_peticion',
    fields: [
        {
            name: 'id_codigo_peticion',
            type: 'int',
            useNull: true
        },
        {
            name: 'fk_id_oec',
            type: 'int',
            useNull: true
        },
        {
            name: 'codigo_peticion',
            type: 'string',
            useNull: true
        },
        {
            name: 'correlativo_codigo_peticion',
            type: 'int',
            useNull: true
        },
        {
            name: 'nombre_oec',
            type: 'auto'
        }
    ]
});