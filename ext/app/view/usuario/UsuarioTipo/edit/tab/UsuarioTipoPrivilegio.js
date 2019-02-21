Ext.define('ibmetrodta.view.usuario.UsuarioTipo.edit.tab.UsuarioTipoPrivilegio', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.usuario.usuariotipo.edit.tab.usuariotipoprivilegio',
    layout: 'form',
    requires: [
        'Ext.form.Panel',
        'Ext.tip.QuickTipManager',
        'ibmetrodta.store.usuario.UsuarioPrivilegio',
        'Ext.ux.form.ItemSelector'
        ],
    bodyPadding: 0,
    margin: 5,
    initComponent: function() {
                
        var storeReferencial1 = Ext.data.StoreManager.lookup('usuario.UsuarioPrivilegio');
        storeReferencial1.load();

        var me = this;
        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'itemselector',
                    itemId: 'UsuarioTipoPrivilegio000202',
                    name: 'UsuarioTipoPrivilegio000202',
                    anchor: '100%',
                    store: storeReferencial1,
                    displayField: 'nombre_privilegio_usuario_privilegio',
                    valueField: 'id_usuario_privilegio',
                    allowBlank: true,
                    msgTarget: 'side',
                    fromTitle: 'UsuarioPrivilegio000004 Disponibles',
                    toTitle: 'UsuarioPrivilegio000004 Seleccionados',
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