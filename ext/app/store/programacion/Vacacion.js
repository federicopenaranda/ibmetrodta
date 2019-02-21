Ext.define('ibmetrodta.store.programacion.Vacacion', {
    extend: 'ibmetrodta.store.Base',
    alias: 'store.programacion.vacacion',
    requires: [
        'ibmetrodta.model.programacion.Vacacion'
    ],
    restPath: 'vacacion050104',
    storeId: 'Vacacion',
    model: 'ibmetrodta.model.programacion.Vacacion'
});