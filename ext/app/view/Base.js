Ext.define('ibmetrodta.view.Base', {
    extend: 'Ext.grid.Panel',


    privilegio: function( opcion ) {
        var storePrivilegios = Ext.data.StoreManager.lookup('usuario.UsuarioPrivilegio'),
                res = storePrivilegios.findRecord('nombre_privilegio_usuario_privilegio', opcion);

        return ( res !== null ) ? false : true;
    }
});