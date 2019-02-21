Ext.define('ibmetrodta.store.proceso.ObsPeticionAccion', {
    extend: 'ibmetrodta.store.Base',
    alias: 'store.proceso.obspeticionaccion',
    requires: [
        'ibmetrodta.model.proceso.ObsPeticionAccion'
    ],
    restPath: 'obspeticionaccion010303',
    storeId: 'ObsPeticionAccion',
    model: 'ibmetrodta.model.proceso.ObsPeticionAccion'
});