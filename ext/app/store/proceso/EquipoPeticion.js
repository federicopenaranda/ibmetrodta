Ext.define('ibmetrodta.store.proceso.EquipoPeticion', {
    extend: 'ibmetrodta.store.Base',
    alias: 'store.proceso.equipopeticion',
    requires: [
        'ibmetrodta.model.proceso.EquipoPeticion'
    ],
    restPath: 'equipopeticion010701',
    storeId: 'EquipoPeticion',
    model: 'ibmetrodta.model.proceso.EquipoPeticion',
    autoLoad: false
});