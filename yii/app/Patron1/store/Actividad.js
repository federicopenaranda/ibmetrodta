Ext.define('ibmetrodta.store.proceso.Actividad', {
    extend: 'ibmetrodta.store.Base',
    alias: 'store.proceso.actividad',
    requires: [
        'ibmetrodta.model.proceso.Actividad'
    ],
    restPath: 'actividad010501',
    storeId: 'Actividad',
    model: 'ibmetrodta.model.proceso.Actividad'
});