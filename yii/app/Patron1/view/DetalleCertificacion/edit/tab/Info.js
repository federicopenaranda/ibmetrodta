Ext.define('ibmetrodta.view.formularios.DetalleCertificacion.edit.tab.Info', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.formularios.detallecertificacion.edit.tab.info',
    bodyPadding: 0,
    margin: -5,
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'formularios.detallecertificacion.edit.formulariosform',
                    title: 'Administración de DetalleCertificacion',
                    iconCls: 'icon_gear',
                    store: Ext.create( 'ibmetrodta.store.formularios.DetalleCertificacion', {
                        pageSize: 10
                    })
                }
            ]
        });
        me.callParent(arguments);
    }
});