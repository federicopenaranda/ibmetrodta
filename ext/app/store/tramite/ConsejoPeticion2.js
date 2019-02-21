Ext.define('ibmetrodta.store.tramite.ConsejoPeticion2', {
    extend: 'ibmetrodta.store.Base',
    alias: 'store.tramite.ConsejoPeticion2',
    requires: [
        'ibmetrodta.model.tramite.ConsejoPeticion'
    ],
    restPath: 'obspeticionaccion010303/consejoPeticion',
    storeId: 'ConsejoPeticion2',
    model: 'ibmetrodta.model.tramite.ConsejoPeticion',
    remoteSort: false
});