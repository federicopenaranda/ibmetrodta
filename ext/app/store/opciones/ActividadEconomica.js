Ext.define('ibmetrodta.store.opciones.ActividadEconomica', {
    extend: 'ibmetrodta.store.Base',
    alias: 'store.opciones.actividadeconomica',
    requires: [
        'ibmetrodta.model.opciones.ActividadEconomica'
    ],
    restPath: 'actividadeconomica020004',
    storeId: 'ActividadEconomica',
    model: 'ibmetrodta.model.opciones.ActividadEconomica'
});