Ext.define('ibmetrodta.model.programacion.Gestion', {
    extend: 'ibmetrodta.model.Base',
    idProperty: 'id_gestion',
    fields: [
        {
            name: 'id_gestion',
            type: 'int',
            useNull: true
        },
        {
            name: 'nombre_gestion',
            type: 'string',
            useNull: true
        },
        {
            name: 'estado_gestion',
            type: 'int',
            useNull: true
        }
    ]
});