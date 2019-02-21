Ext.define('ibmetrodta.store.proceso.PeticionEstado', {
    extend: 'ibmetrodta.store.Base',
    alias: 'store.proceso.peticionestado',
    requires: [
        'ibmetrodta.model.proceso.PeticionEstado'
    ],
    restPath: 'peticionestado010403',
    storeId: 'PeticionEstado',
    model: 'ibmetrodta.model.proceso.PeticionEstado'
});