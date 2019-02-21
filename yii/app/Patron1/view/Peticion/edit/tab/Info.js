Ext.define('ibmetrodta.view.proceso.Peticion.edit.tab.Info', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.proceso.peticion.edit.tab.info',
    bodyPadding: 0,
    margin: -5,
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'proceso.peticion.edit.procesoform',
                    title: 'Administración de Peticion',
                    iconCls: 'icon_gear',
                    store: Ext.create( 'ibmetrodta.store.proceso.Peticion', {
                        pageSize: 10
                    })
                }
            ]
        });
        me.callParent(arguments);
    }
});