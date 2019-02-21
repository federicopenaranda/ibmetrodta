Ext.define('ibmetrodta.view.proceso.Accion.edit.tab.AccionTransicion', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.proceso.accion.edit.tab.acciontransicion',
    layout: 'form',
    requires: [
        'Ext.form.Panel',
        'Ext.tip.QuickTipManager',
        'ibmetrodta.store.Transicion',
        'Ext.ux.form.ItemSelector'
        ],
    bodyPadding: 0,
    margin: 5,
    initComponent: function() {
                
        var storeReferencial1 = Ext.data.StoreManager.lookup('Transicion');
        storeReferencial1.load();

        var me = this;
        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'itemselector',
                    itemId: 'accionTransicion010202s',
                    name: 'accionTransicion010202s',
                    anchor: '100%',
                    store: storeReferencial1,
                    displayField: '',
                    valueField: 'id_transicion',
                    allowBlank: true,
                    msgTarget: 'side',
                    fromTitle: 'Transicion010202 Disponibles',
                    toTitle: 'Transicion010202 Seleccionados',
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