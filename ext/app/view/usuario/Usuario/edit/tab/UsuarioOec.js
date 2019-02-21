Ext.define('ibmetrodta.view.usuario.Usuario.edit.tab.UsuarioOec', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.usuario.usuario.edit.tab.usuariooec',
    layout: 'form',
    requires: [
        'Ext.form.Panel',
        'Ext.tip.QuickTipManager',
        'ibmetrodta.store.oec.Oec',
        'Ext.ux.form.ItemSelector'
        ],
    bodyPadding: 0,
    margin: 5,
    initComponent: function() {
                
        var storeReferencial1 = Ext.data.StoreManager.lookup('oec.Oec');
        storeReferencial1.load();

        var me = this;
        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'itemselector',
                    itemId: 'usuarioOec000102s',
                    name: 'usuarioOec000102s',
                    anchor: '100%',
                    store: storeReferencial1,
                    displayField: 'nombre_oec',
                    valueField: 'id_oec',
                    allowBlank: true,
                    msgTarget: 'side',
                    fromTitle: 'OECs Disponibles',
                    toTitle: 'OECs Seleccionados',
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