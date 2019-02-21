Ext.define('ibmetrodta.store.usuario.UsuarioPrivilegio', {
    extend: 'ibmetrodta.store.Base',
    alias: 'store.usuario.usuarioprivilegio',
    requires: [
        'ibmetrodta.model.usuario.UsuarioPrivilegio'
    ],
    restPath: 'usuarioprivilegio000004',
    storeId: 'UsuarioPrivilegio',
    model: 'ibmetrodta.model.usuario.UsuarioPrivilegio'
});