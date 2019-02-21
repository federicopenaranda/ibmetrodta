Ext.define('ibmetrodta.view.formularios.DetalleInspeccion.edit.tab.Info', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.formularios.detalleinspeccion.edit.tab.info',
    bodyPadding: 0,
    margin: -5,
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'formularios.detalleinspeccion.edit.formulariosform',
                    title: 'Administración de DetalleInspeccion',
                    iconCls: 'icon_gear',
                    store: Ext.create( 'ibmetrodta.store.formularios.DetalleInspeccion', {
                        pageSize: 10
                    })
                }
            ]
        });
        me.callParent(arguments);
    }
});