Ext.define('ibmetrodta.store.programacion.TipoCurso', {
    extend: 'ibmetrodta.store.Base',
    alias: 'store.programacion.tipocurso',
    requires: [
        'ibmetrodta.model.programacion.TipoCurso'
    ],
    restPath: 'tipocurso050104',
    storeId: 'TipoCurso',
    model: 'ibmetrodta.model.programacion.TipoCurso'
});