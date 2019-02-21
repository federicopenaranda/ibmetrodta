Ext.define('ibmetrodta.view.proceso.Actividad.edit.tab.Info', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.proceso.actividad.edit.tab.info',
    bodyPadding: 0,
    margin: -5,
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'proceso.actividad.edit.procesoform',
                    title: 'Administración de Actividad',
                    iconCls: 'icon_gear',
                    store: Ext.create( 'ibmetrodta.store.proceso.Actividad', {
                        pageSize: 10
                    })
                }
            ]
        });
        me.callParent(arguments);
    }
});