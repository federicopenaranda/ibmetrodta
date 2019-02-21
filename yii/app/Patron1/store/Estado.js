Ext.define('ibmetrodta.store.proceso.Estado', {
    extend: 'ibmetrodta.store.Base',
    alias: 'store.proceso.estado',
    requires: [
        'ibmetrodta.model.proceso.Estado'
    ],
    restPath: 'estado010601',
    storeId: 'Estado',
    model: 'ibmetrodta.model.proceso.Estado'
});