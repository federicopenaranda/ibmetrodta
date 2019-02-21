Ext.define('ibmetrodta.store.programacion.Gestion', {
    extend: 'ibmetrodta.store.Base',
    alias: 'store.programacion.gestion',
    requires: [
        'ibmetrodta.model.programacion.Gestion'
    ],
    restPath: 'gestion050104',
    storeId: 'Gestion',
    model: 'ibmetrodta.model.programacion.Gestion'
});