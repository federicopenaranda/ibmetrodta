Ext.define('ibmetrodta.store.programacion.Actividad2', {
    extend: 'ibmetrodta.store.Base',
    alias: 'store.programacion.actividad2',
    requires: [
        'ibmetrodta.model.programacion.Actividad'
    ],
    restPath: 'actividad050101/eventos',
    storeId: 'Actividad2',
    //model: 'ibmetrodta.model.programacion.Actividad'
    model: 'Ext.calendar.data.EventModel'
});