Ext.define('ibmetrodta.store.tramite.ConsejoPeticion', {
    extend: 'ibmetrodta.store.Base',
    alias: 'store.tramite.ConsejoPeticion',
    requires: [
        'ibmetrodta.model.tramite.ConsejoPeticion'
    ],
    restPath: 'obspeticionaccion010303/consejoPeticion',
    storeId: 'ConsejoPeticion',
    model: 'ibmetrodta.model.tramite.ConsejoPeticion',
    remoteSort: false
});