Ext.define('ibmetrodta.view.formularios.SatisfaccionCliente.edit.tab.Info', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.formularios.satisfaccioncliente.edit.tab.info',
    bodyPadding: 0,
    margin: -5,
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'formularios.satisfaccioncliente.edit.formulariosform',
                    title: 'Administración de SatisfaccionCliente',
                    iconCls: 'icon_gear',
                    store: Ext.create( 'ibmetrodta.store.formularios.SatisfaccionCliente', {
                        pageSize: 10
                    })
                }
            ]
        });
        me.callParent(arguments);
    }
});