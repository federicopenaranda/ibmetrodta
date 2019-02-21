Ext.define('ibmetrodta.store.formularios.DetalleEquipos', {
    extend: 'ibmetrodta.store.Base',
    alias: 'store.formularios.detalleequipos',
    requires: [
        'ibmetrodta.model.formularios.DetalleEquipos'
    ],
    restPath: 'detalleequipos040201',
    storeId: 'DetalleEquipos',
    model: 'ibmetrodta.model.formularios.DetalleEquipos'
});