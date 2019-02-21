Ext.define('ibmetrodta.view.formularios.Certificado.edit.tab.Info', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.formularios.certificado.edit.tab.info',
    bodyPadding: 0,
    margin: -5,
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'formularios.certificado.edit.formulariosform',
                    title: 'Administración de Certificado',
                    iconCls: 'icon_gear',
                    store: Ext.create( 'ibmetrodta.store.formularios.Certificado', {
                        pageSize: 10
                    })
                }
            ]
        });
        me.callParent(arguments);
    }
});