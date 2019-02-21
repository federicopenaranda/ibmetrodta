Ext.define('ibmetrodta.store.tramite.UsuarioOec', {
    extend: 'ibmetrodta.store.Base',
    alias: 'store.tramite.usuariooec',
    requires: [
        'ibmetrodta.model.tramite.UsuarioOec'
    ],
    restPath: 'usuariooec',
    storeId: 'UsuarioOec',
    model: 'ibmetrodta.model.tramite.UsuarioOec'
});