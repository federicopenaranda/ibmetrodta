Ext.define('ibmetrodta.store.opciones.Pais', {
    extend: 'ibmetrodta.store.Base',
    alias: 'store.opciones.pais',
    requires: [
        'ibmetrodta.model.opciones.Pais'
    ],
    restPath: 'pais020004',
    storeId: 'Pais',
    model: 'ibmetrodta.model.opciones.Pais'
});