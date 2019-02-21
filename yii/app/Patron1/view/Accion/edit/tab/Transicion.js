Ext.define('ibmetrodta.view.proceso.Accion.edit.tab.Transicion', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.proceso.accion.edit.tab.transicion',
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
                    itemId: 'transicion010202s',
                    name: 'transicion010202s',
                    anchor: '100%',
                    store: storeReferencial1,
                    displayField: 'nombre_proceso',
                    valueField: 'id_proceso',
                    allowBlank: true,
                    msgTarget: 'side',
                    fromTitle: 'Proceso010101 Disponibles',
                    toTitle: 'Proceso010101 Seleccionados',
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