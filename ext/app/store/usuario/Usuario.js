Ext.define('ibmetrodta.store.usuario.Usuario', {
    extend: 'ibmetrodta.store.Base',
    alias: 'store.usuario.usuario',
    requires: [
        'ibmetrodta.model.usuario.Usuario'
    ],
    restPath: 'usuario000101',
    storeId: 'Usuario',
    model: 'ibmetrodta.model.usuario.Usuario'
});