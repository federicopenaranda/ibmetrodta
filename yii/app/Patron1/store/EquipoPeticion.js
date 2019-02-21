Ext.define('ibmetrodta.store.proceso;display.EquipoPeticion', {
    extend: 'ibmetrodta.store.Base',
    alias: 'store.proceso;display.equipopeticion',
    requires: [
        'ibmetrodta.model.proceso;display.EquipoPeticion'
    ],
    restPath: 'equipopeticion010701',
    storeId: 'EquipoPeticion',
    model: 'ibmetrodta.model.proceso;display.EquipoPeticion'
});