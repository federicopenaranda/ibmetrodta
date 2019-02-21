Ext.define('ibmetrodta.store.oec.OecChart', {
    extend: 'ibmetrodta.store.Base',
    alias: 'store.oec.oecchart',
    requires: [
        'ibmetrodta.model.oec.OecChart'
    ],
    restPath: 'oec020001',
    storeId: 'OecChart',
    model: 'ibmetrodta.model.oec.OecChart'
});