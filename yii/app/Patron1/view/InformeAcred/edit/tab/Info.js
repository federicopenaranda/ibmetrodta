Ext.define('ibmetrodta.view.formularios.InformeAcred.edit.tab.Info', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.formularios.informeacred.edit.tab.info',
    bodyPadding: 0,
    margin: -5,
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'formularios.informeacred.edit.formulariosform',
                    title: 'Administración de InformeAcred',
                    iconCls: 'icon_gear',
                    store: Ext.create( 'ibmetrodta.store.formularios.InformeAcred', {
                        pageSize: 10
                    })
                }
            ]
        });
        me.callParent(arguments);
    }
});