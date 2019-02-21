Ext.define('ibmetrodta.view.formularios.DetalleEquipos.edit.tab.Info', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.formularios.detalleequipos.edit.tab.info',
    bodyPadding: 0,
    margin: -5,
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'formularios.detalleequipos.edit.formulariosform',
                    title: 'Administración de DetalleEquipos',
                    iconCls: 'icon_gear',
                    store: Ext.create( 'ibmetrodta.store.formularios.DetalleEquipos', {
                        pageSize: 10
                    })
                }
            ]
        });
        me.callParent(arguments);
    }
});