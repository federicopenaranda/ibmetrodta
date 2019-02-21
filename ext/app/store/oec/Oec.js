Ext.define('ibmetrodta.store.oec.Oec', {
    extend: 'ibmetrodta.store.Base',
    alias: 'store.oec.oec',
    requires: [
        'ibmetrodta.model.oec.Oec'
    ],
    restPath: 'oec020001',
    storeId: 'Oec',
    model: 'ibmetrodta.model.oec.Oec'
});