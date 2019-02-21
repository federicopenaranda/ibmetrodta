Ext.define('ibmetrodta.store.evaluacion.PlanEvaluacion', {
    extend: 'ibmetrodta.store.Base',
    alias: 'store.evaluacion.planevaluacion',
    requires: [
        'ibmetrodta.model.evaluacion.PlanEvaluacion'
    ],
    restPath: 'planevaluacion030003',
    storeId: 'PlanEvaluacion',
    model: 'ibmetrodta.model.evaluacion.PlanEvaluacion'
});