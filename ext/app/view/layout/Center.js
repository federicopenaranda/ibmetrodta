Ext.define('ibmetrodta.view.layout.Center', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.layout.center',
    layout: 'fit',
    region: 'center',
    title: 'Sistema de Acreditación',
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
            
        });
        me.callParent(arguments);
    }
});