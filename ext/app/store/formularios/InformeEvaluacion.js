Ext.define('ibmetrodta.store.formularios.InformeEvaluacion', {
    extend: 'ibmetrodta.store.Base',
    alias: 'store.formularios.informeevaluacion',
    requires: [
        'ibmetrodta.model.formularios.InformeEvaluacion'
    ],
    restPath: 'informeevaluacion040601',
    storeId: 'InformeEvaluacion',
    model: 'ibmetrodta.model.formularios.InformeEvaluacion'
});