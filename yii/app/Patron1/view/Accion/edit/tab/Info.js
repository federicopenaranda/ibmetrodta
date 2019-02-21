Ext.define('ibmetrodta.view.proceso.Accion.edit.tab.Info', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.proceso.accion.edit.tab.info',
    bodyPadding: 0,
    margin: -5,
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'proceso.accion.edit.procesoform',
                    title: 'Administración de Accion',
                    iconCls: 'icon_gear',
                    store: Ext.create( 'ibmetrodta.store.proceso.Accion', {
                        pageSize: 10
                    })
                }
            ]
        });
        me.callParent(arguments);
    }
});