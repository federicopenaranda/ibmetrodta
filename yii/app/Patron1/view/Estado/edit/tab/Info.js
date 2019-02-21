Ext.define('ibmetrodta.view.proceso.Estado.edit.tab.Info', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.proceso.estado.edit.tab.info',
    bodyPadding: 0,
    margin: -5,
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'proceso.estado.edit.procesoform',
                    title: 'Administración de Estado',
                    iconCls: 'icon_gear',
                    store: Ext.create( 'ibmetrodta.store.proceso.Estado', {
                        pageSize: 10
                    })
                }
            ]
        });
        me.callParent(arguments);
    }
});