Ext.define('ibmetrodta.store.proceso;display.PeticionAccion', {
    extend: 'ibmetrodta.store.Base',
    alias: 'store.proceso;display.peticionaccion',
    requires: [
        'ibmetrodta.model.proceso;display.PeticionAccion'
    ],
    restPath: 'peticionaccion010301',
    storeId: 'PeticionAccion',
    model: 'ibmetrodta.model.proceso;display.PeticionAccion'
});