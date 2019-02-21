Ext.define('ibmetrodta.store.programacion.Actividad', {
    extend: 'ibmetrodta.store.Base',
    alias: 'store.programacion.actividad',
    requires: [
        'ibmetrodta.model.programacion.Actividad'
    ],
    restPath: 'actividad050101',
    storeId: 'Actividad',
    model: 'ibmetrodta.model.programacion.Actividad'
    //model: 'Ext.calendar.data.EventModel'
});