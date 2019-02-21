Ext.define('ibmetrodta.store.tramite.OecPeticion', {
    extend: 'ibmetrodta.store.Base',
    alias: 'store.tramite.oecpeticion',
    requires: [
        'ibmetrodta.model.tramite.OecPeticion'
    ],
    restPath: 'peticion010401', // TODO: pedir a victor la vista especial
    storeId: 'OecPeticion',
    model: 'ibmetrodta.model.tramite.OecPeticion'
});