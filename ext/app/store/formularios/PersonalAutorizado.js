Ext.define('ibmetrodta.store.formularios.PersonalAutorizado', {
    extend: 'ibmetrodta.store.Base',
    alias: 'store.formularios.personalautorizado',
    requires: [
        'ibmetrodta.model.formularios.PersonalAutorizado'
    ],
    restPath: 'personalautorizado041303',
    storeId: 'PersonalAutorizado',
    model: 'ibmetrodta.model.formularios.PersonalAutorizado'
});