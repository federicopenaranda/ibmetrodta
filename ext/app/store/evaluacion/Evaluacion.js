Ext.define('ibmetrodta.store.evaluacion.Evaluacion', {
    extend: 'ibmetrodta.store.Base',
    alias: 'store.evaluacion.evaluacion',
    requires: [
        'ibmetrodta.model.evaluacion.Evaluacion'
    ],
    restPath: 'evaluacion030001',
    storeId: 'Evaluacion',
    model: 'ibmetrodta.model.evaluacion.Evaluacion'
});