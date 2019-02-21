Ext.define('ibmetrodta.view.proceso.Proceso.edit.tab.Info', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.proceso.proceso.edit.tab.info',
    bodyPadding: 0,
    margin: -5,
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'proceso.proceso.edit.procesoform',
                    title: 'Administración de Proceso',
                    iconCls: 'icon_gear',
                    store: Ext.create( 'ibmetrodta.store.proceso.Proceso', {
                        pageSize: 10
                    })
                }
            ]
        });
        me.callParent(arguments);
    }
});