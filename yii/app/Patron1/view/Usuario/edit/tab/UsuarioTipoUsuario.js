Ext.define('ibmetrodta.view.usuario.Usuario.edit.tab.UsuarioTipoUsuario', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.usuario.usuario.edit.tab.usuariotipousuario',
    layout: 'form',
    requires: [
        'Ext.form.Panel',
        'Ext.tip.QuickTipManager',
        'ibmetrodta.store.usuario.UsuarioTipo',
        'Ext.ux.form.ItemSelector'
        ],
    bodyPadding: 0,
    margin: 5,
    initComponent: function() {
                
        var storeReferencial1 = Ext.data.StoreManager.lookup('usuario.UsuarioTipo');
        storeReferencial1.load();

        var me = this;
        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'itemselector',
                    itemId: 'usuarioTipoUsuario000102s',
                    name: 'usuarioTipoUsuario000102s',
                    anchor: '100%',
                    store: storeReferencial1,
                    displayField: 'nombre_usuario_tipo',
                    valueField: 'id_usuario_tipo',
                    allowBlank: true,
                    msgTarget: 'side',
                    fromTitle: 'UsuarioTipo000201 Disponibles',
                    toTitle: 'UsuarioTipo000201 Seleccionados',
                    buttons: [ 'add', 'remove' ],
                    delimiter: null,
                    height: 350,
                   	overflowY: 'scroll'
                }
            ]
        });
        me.callParent(arguments);
    }
});