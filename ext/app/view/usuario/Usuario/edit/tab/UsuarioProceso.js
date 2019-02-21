Ext.define('ibmetrodta.view.usuario.Usuario.edit.tab.UsuarioProceso', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.usuario.usuario.edit.tab.usuarioproceso',
    layout: 'form',
    requires: [
        'Ext.form.Panel',
        'Ext.tip.QuickTipManager',
        'ibmetrodta.store.proceso.Proceso',
        'Ext.ux.form.ItemSelector'
        ],
    bodyPadding: 0,
    margin: 5,
    initComponent: function() {
                
        var storeReferencial1 = Ext.data.StoreManager.lookup('proceso.Proceso');
        storeReferencial1.load();

        var me = this;
        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'itemselector',
                    itemId: 'usuarioProceso000102s',
                    name: 'usuarioProceso000102s',
                    anchor: '100%',
                    store: storeReferencial1,
                    displayField: 'nombre_proceso',
                    valueField: 'id_proceso',
                    allowBlank: true,
                    msgTarget: 'side',
                    fromTitle: 'Tipo de Procesos Disponibles',
                    toTitle: 'Tipo de Procesos Seleccionados',
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