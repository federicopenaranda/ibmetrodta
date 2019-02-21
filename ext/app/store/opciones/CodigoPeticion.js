Ext.define('ibmetrodta.store.opciones.CodigoPeticion', {
    extend: 'ibmetrodta.store.Base',
    alias: 'store.opciones.codigopeticion',
    requires: [
        'ibmetrodta.model.opciones.CodigoPeticion'
    ],
    restPath: 'codigopeticion010404',
    storeId: 'CodigoPeticion',
    model: 'ibmetrodta.model.opciones.CodigoPeticion'
});