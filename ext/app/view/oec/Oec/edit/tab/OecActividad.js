Ext.define('ibmetrodta.view.oec.Oec.edit.tab.OecActividad', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.oec.oec.edit.tab.oecactividad',
    layout: 'form',
    requires: [
        'Ext.form.Panel',
        'Ext.tip.QuickTipManager',
        'ibmetrodta.store.opciones.ActividadEconomica',
        'Ext.ux.form.ItemSelector'
        ],
    bodyPadding: 0,
    margin: 5,
    initComponent: function() {
                
        var storeReferencial1 = Ext.data.StoreManager.lookup('opciones.ActividadEconomica');
        storeReferencial1.load();

        var me = this;
        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'itemselector',
                    itemId: 'oecActividad020002s',
                    name: 'oecActividad020002s',
                    anchor: '100%',
                    store: storeReferencial1,
                    displayField: 'nombre_actividad_economica',
                    valueField: 'id_actividad_economica',
                    allowBlank: true,
                    msgTarget: 'side',
                    fromTitle: 'Actividades Económicas Disponibles',
                    toTitle: 'Actividades Económicas Seleccionadas',
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