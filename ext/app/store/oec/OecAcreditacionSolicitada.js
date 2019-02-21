Ext.define('ibmetrodta.store.oec.OecAcreditacionSolicitada', {
    extend: 'ibmetrodta.store.Base',
    alias: 'store.oec.oecacreditacionsolicitada',
    requires: [
        'ibmetrodta.model.oec.OecAcreditacionSolicitada'
    ],
    restPath: 'oecacreditacionsolicitada020003',
    storeId: 'OecAcreditacionSolicitada',
    model: 'ibmetrodta.model.oec.OecAcreditacionSolicitada'
});