Ext.define('ibmetrodta.controller.dashboard.Dashboard', {
    extend: 'ibmetrodta.controller.Base',
    stores: [
        'oec.OecChart'
    ],
    views: [
        'dashboard.Dashboard',
        'dashboard.charts.Chart1'
    ],
    refs: [
        {
            ref: 'Dashboard1',
            selector: '[xtype=dashboard.dashboard]'
        },
        {
            ref: 'Chart1',
            selector: '[xtype=dashboard.charts.chart1]'
        }
    ],
    init: function() {
        this.listen({
            controller: {},
            component: {
                'panel[xtype=dashboard.dashboard]': {
                    beforerender: this.prueba
                }
            },
            global: {},
            store: {},
            proxy: {}
        });
    },
    
    
    prueba: function () {
        var me = this,
                chart = me.getChart1(),
                store= chart.getStore();

        console.log(chart);
        store.load();
    }

});