Ext.define('ibmetrodta.view.oec.Oec.edit.tab.OecContacto', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.oec.oec.edit.tab.oeccontacto',
    bodyPadding: 0,
    margin: -5,
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'oec.oec.oeccontactolista',
                    title: 'Contactos de OEC',
                    iconCls: 'icon_entidad',
                    store: Ext.create( 'ibmetrodta.store.oec.OecContacto', {
                        pageSize: 10
                    })
                }
            ]
        });
        me.callParent(arguments);
    }
});