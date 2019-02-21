Ext.define('ibmetrodta.model.oec.OecChart', {
    extend: 'ibmetrodta.model.Base',
    idProperty: 'id_oec',
    fields: [
        {
            name: 'id_oec',
            type: 'int',
            useNull: true
        },
        {
            name: 'nombre_oec_tipo',
            type: 'auto'
        }
    ]
});