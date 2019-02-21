Ext.define('ibmetrodta.store.proceso.PeticionArchivo', {
    extend: 'ibmetrodta.store.Base',
    alias: 'store.proceso.peticionarchivo',
    requires: [
        'ibmetrodta.model.proceso.PeticionArchivo'
    ],
    restPath: 'peticionarchivo010401',
    storeId: 'PeticionArchivo',
    model: 'ibmetrodta.model.proceso.PeticionArchivo'
});