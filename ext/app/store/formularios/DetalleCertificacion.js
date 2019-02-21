Ext.define('ibmetrodta.store.formularios.DetalleCertificacion', {
    extend: 'ibmetrodta.store.Base',
    alias: 'store.formularios.detallecertificacion',
    requires: [
        'ibmetrodta.model.formularios.DetalleCertificacion'
    ],
    restPath: 'detallecertificacion040501',
    storeId: 'DetalleCertificacion',
    model: 'ibmetrodta.model.formularios.DetalleCertificacion'
});