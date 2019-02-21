Ext.define('ibmetrodta.store.proceso.Accion', {
    extend: 'ibmetrodta.store.Base',
    alias: 'store.proceso.accion',
    requires: [
        'ibmetrodta.model.proceso.Accion'
    ],
    restPath: 'accion010201',
    storeId: 'Accion',
    model: 'ibmetrodta.model.proceso.Accion'
});