Ext.define('ibmetrodta.view.proceso;display.PeticionAccion.edit.tab.Info', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.proceso;display.peticionaccion.edit.tab.info',
    bodyPadding: 0,
    margin: -5,
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'proceso;display.peticionaccion.edit.proceso;displayform',
                    title: 'Administración de PeticionAccion',
                    iconCls: 'icon_gear',
                    store: Ext.create( 'ibmetrodta.store.proceso;display.PeticionAccion', {
                        pageSize: 10
                    })
                }
            ]
        });
        me.callParent(arguments);
    }
});