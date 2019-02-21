Ext.define('ibmetrodta.store.tramite.EquipoEvaluadorPeticion', {
    extend: 'ibmetrodta.store.Base',
    alias: 'store.tramite.equipoevaluadorpeticion',
    requires: [
        'ibmetrodta.model.tramite.EquipoEvaluadorPeticion'
    ],
    restPath: 'equipopeticion010701/equipo',
    storeId: 'EquipoEvaluadorPeticion',
    model: 'ibmetrodta.model.tramite.EquipoEvaluadorPeticion',
    remoteSort: false
});