Ext.define('ibmetrodta.store.formularios.DetalleInspeccion', {
    extend: 'ibmetrodta.store.Base',
    alias: 'store.formularios.detalleinspeccion',
    requires: [
        'ibmetrodta.model.formularios.DetalleInspeccion'
    ],
    restPath: 'detalleinspeccion040401',
    storeId: 'DetalleInspeccion',
    model: 'ibmetrodta.model.formularios.DetalleInspeccion'
});