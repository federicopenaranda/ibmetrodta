Ext.define('ibmetrodta.store.proceso.Proceso', {
    extend: 'ibmetrodta.store.Base',
    alias: 'store.proceso.proceso',
    requires: [
        'ibmetrodta.model.proceso.Proceso'
    ],
    restPath: 'proceso010101',
    storeId: 'Proceso',
    model: 'ibmetrodta.model.proceso.Proceso'
});