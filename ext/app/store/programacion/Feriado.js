Ext.define('ibmetrodta.store.programacion.Feriado', {
    extend: 'ibmetrodta.store.Base',
    alias: 'store.programacion.feriado',
    requires: [
        'ibmetrodta.model.programacion.Feriado'
    ],
    restPath: 'feriado050104',
    storeId: 'Feriado',
    model: 'ibmetrodta.model.programacion.Feriado'
});