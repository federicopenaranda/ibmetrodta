Ext.define('ibmetrodta.store.programacion.TipoActividad', {
    extend: 'ibmetrodta.store.Base',
    alias: 'store.programacion.tipoactividad',
    requires: [
        'ibmetrodta.model.programacion.TipoActividad'
    ],
    restPath: 'tipoactividad050104',
    storeId: 'TipoActividad',
    model: 'ibmetrodta.model.programacion.TipoActividad'
});