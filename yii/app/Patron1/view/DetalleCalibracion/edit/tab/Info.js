Ext.define('ibmetrodta.view.formularios.DetalleCalibracion.edit.tab.Info', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.formularios.detallecalibracion.edit.tab.info',
    bodyPadding: 0,
    margin: -5,
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'formularios.detallecalibracion.edit.formulariosform',
                    title: 'Administración de DetalleCalibracion',
                    iconCls: 'icon_gear',
                    store: Ext.create( 'ibmetrodta.store.formularios.DetalleCalibracion', {
                        pageSize: 10
                    })
                }
            ]
        });
        me.callParent(arguments);
    }
});