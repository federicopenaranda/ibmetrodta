Ext.define('ibmetrodta.view.oec.Oec.edit.tab.OecAcreditacionSolicitada', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.oec.oec.edit.tab.oecacreditacionsolicitada',
    bodyPadding: 0,
    margin: -5,
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'oec.oec.oecacreditacionsolicitadalista',
                    title: 'Acreditación Solicitada',
                    iconCls: 'icon_entidad',
                    store: Ext.create( 'ibmetrodta.store.oec.OecAcreditacionSolicitada', {
                        pageSize: 10
                    })
                }
            ]
        });
        me.callParent(arguments);
    }
});