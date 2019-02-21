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
        }
    ]
});