Ext.define('ibmetrodta.store.proceso.Peticion', {
    extend: 'ibmetrodta.store.Base',
    alias: 'store.proceso.peticion',
    requires: [
        'ibmetrodta.model.proceso.Peticion'
    ],
    restPath: 'peticion010401',
    storeId: 'Peticion',
    model: 'ibmetrodta.model.proceso.Peticion'
});