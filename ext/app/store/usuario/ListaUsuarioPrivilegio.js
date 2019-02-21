Ext.define('ibmetrodta.store.usuario.ListaUsuarioPrivilegio', {
    extend: 'ibmetrodta.store.Base',
    alias: 'store.usuario.listausuarioprivilegio',
    requires: [
        'ibmetrodta.model.usuario.ListaUsuarioPrivilegio'
    ],
    restPath: 'permisos2/privilegio',
    storeId: 'ListaUsuarioPrivilegio',
    model: 'ibmetrodta.model.usuario.ListaUsuarioPrivilegio',
    pageSize: 5000
});