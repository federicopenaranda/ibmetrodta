Ext.define('ibmetrodta.store.opciones.Reporte', {
    extend: 'ibmetrodta.store.Base',
    alias: 'store.opciones.reporte',
    requires: [
        'ibmetrodta.model.opciones.Reporte'
    ],
    restPath: 'reporte030004',
    storeId: 'Reporte',
    model: 'ibmetrodta.model.opciones.Reporte'
});