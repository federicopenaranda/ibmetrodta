Ext.define('ibmetrodta.store.oec.OecCatalogo', {
    extend: 'ibmetrodta.store.Base',
    alias: 'store.oec.oeccatalogo',
    requires: [
        'ibmetrodta.model.oec.OecCatalogo'
    ],
    restPath: 'oec020001',
    storeId: 'OecCatalogo',
    model: 'ibmetrodta.model.oec.OecCatalogo'
});