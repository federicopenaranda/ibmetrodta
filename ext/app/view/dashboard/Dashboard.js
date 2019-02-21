Ext.define('ibmetrodta.view.dashboard.Dashboard', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.dashboard.dashboard',
    bodyPadding: 0,
    margin: -5,
    layout: 'auto',
    initComponent: function () {
        var me = this;
        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'dashboard.panel1',
                    title: 'Panel 1',
                    minHeight: 250
                }
            ]
        });
        me.callParent(arguments);
    }
});