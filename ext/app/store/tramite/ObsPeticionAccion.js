Ext.define('ibmetrodta.store.tramite.ObsPeticionAccion', {
    extend: 'ibmetrodta.store.Base',
    alias: 'store.tramite.obspeticionaccion',
    requires: [
        'ibmetrodta.model.tramite.ObsPeticionAccion'
    ],
    restPath: 'obspeticionaccion010303',
    storeId: 'ObsPeticionAccion',
    model: 'ibmetrodta.model.tramite.ObsPeticionAccion'
});