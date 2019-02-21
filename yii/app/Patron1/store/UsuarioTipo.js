Ext.define('ibmetrodta.store.usuario.UsuarioTipo', {
    extend: 'ibmetrodta.store.Base',
    alias: 'store.usuario.usuariotipo',
    requires: [
        'ibmetrodta.model.usuario.UsuarioTipo'
    ],
    restPath: 'usuariotipo000201',
    storeId: 'UsuarioTipo',
    model: 'ibmetrodta.model.usuario.UsuarioTipo'
});