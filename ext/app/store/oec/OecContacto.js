Ext.define('ibmetrodta.store.oec.OecContacto', {
    extend: 'ibmetrodta.store.Base',
    alias: 'store.oec.oeccontacto',
    requires: [
        'ibmetrodta.model.oec.OecContacto'
    ],
    restPath: 'oeccontacto020003',
    storeId: 'OecContacto',
    model: 'ibmetrodta.model.oec.OecContacto'
});