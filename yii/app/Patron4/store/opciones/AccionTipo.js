Ext.define('ibmetrodta.store.opciones.AccionTipo', {
    extend: 'ibmetrodta.store.Base',
    alias: 'store.opciones.acciontipo',
    requires: [
        'ibmetrodta.model.opciones.AccionTipo'
    ],
    restPath: 'acciontipo010204',
    storeId: 'AccionTipo',
    model: 'ibmetrodta.model.opciones.AccionTipo'
});