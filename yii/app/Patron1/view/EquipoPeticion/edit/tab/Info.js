Ext.define('ibmetrodta.view.proceso;display.EquipoPeticion.edit.tab.Info', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.proceso;display.equipopeticion.edit.tab.info',
    bodyPadding: 0,
    margin: -5,
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'proceso;display.equipopeticion.edit.proceso;displayform',
                    title: 'Administración de EquipoPeticion',
                    iconCls: 'icon_gear',
                    store: Ext.create( 'ibmetrodta.store.proceso;display.EquipoPeticion', {
                        pageSize: 10
                    })
                }
            ]
        });
        me.callParent(arguments);
    }
});