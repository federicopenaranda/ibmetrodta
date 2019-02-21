Ext.define('ibmetrodta.view.proceso.Estado.edit.tab.ActividadEstado', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.proceso.estado.edit.tab.actividadestado',
    layout: 'form',
    requires: [
        'Ext.form.Panel',
        'Ext.tip.QuickTipManager',
        'ibmetrodta.store.proceso.Actividad',
        'Ext.ux.form.ItemSelector'
        ],
    bodyPadding: 0,
    margin: 5,
    initComponent: function() {
                
        var storeReferencial1 = Ext.data.StoreManager.lookup('proceso.Actividad');
        storeReferencial1.load();

        var me = this;
        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'itemselector',
                    itemId: 'actividadEstado010602s',
                    name: 'actividadEstado010602s',
                    anchor: '100%',
                    store: storeReferencial1,
                    displayField: 'nombre_actividad',
                    valueField: 'id_actividad',
                    allowBlank: true,
                    msgTarget: 'side',
                    fromTitle: 'Actividad010501 Disponibles',
                    toTitle: 'Actividad010501 Seleccionados',
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