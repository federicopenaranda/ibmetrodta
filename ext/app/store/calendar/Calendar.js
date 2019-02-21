Ext.define('ibmetrodta.store.calendar.Calendar', {
    extend: 'ibmetrodta.store.Base',
    alias: 'store.calendar.calendar',
    requires: [
        'ibmetrodta.model.evaluacion.AlcanceAcreditacionCert'
    ],
    restPath: 'alcanceacreditacioncert030003',
    storeId: 'Calendar',
    model: 'ibmetrodta.model.evaluacion.AlcanceAcreditacionCert'
});