Ext.define('ibmetrodta.view.oec.Oec.edit.tab.Info', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.oec.oec.edit.tab.info',
    bodyPadding: 0,
    margin: -5,
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'oec.oec.edit.oecform',
                    title: 'Administración de Oec',
                    iconCls: 'icon_gear',
                    store: Ext.create( 'ibmetrodta.store.oec.Oec', {
                        pageSize: 10
                    })
                }
            ]
        });
        me.callParent(arguments);
    }
});