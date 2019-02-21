Ext.define('ibmetrodta.view.dashboard.Panel1', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.dashboard.panel1',
    bodyPadding: 0,
    margin: 5,
    layout: 'auto',
    initComponent: function () {
        console.log('initComponent');
        var me = this;
        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'dashboard.charts.chart1'/*,
                    store: Ext.create( 'ibmetrodta.store.oec.OecChart')*/
                }
            ]
        });
        me.callParent(arguments);
    }
});