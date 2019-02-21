Ext.define('ibmetrodta.view.proceso.Actividad.edit.tab.ActividadTransicion', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.proceso.actividad.edit.tab.actividadtransicion',
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
                    itemId: 'actividadTransicion010502s',
                    name: 'actividadTransicion010502s',
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