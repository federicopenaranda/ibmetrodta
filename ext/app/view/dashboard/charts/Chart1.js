Ext.define('ibmetrodta.view.dashboard.charts.Chart1', {
    extend: 'Ext.chart.Chart',
    alias: 'widget.dashboard.charts.chart1',
    margin: 10,
    width: 500,
    height: 200,
    store: {type: 'oec.oecchart'},
    axes: [
        {
            title: 'Tipo de OEC',
            type: 'Category',
            position: 'left',
            fields: ['nombre_oec_tipo'],
            minimum: 0,
            maximum: 100
        },
        {
            title: 'Tipo ID',
            type: 'Numeric',
            position: 'bottom',
            fields: ['id_oec']
        }
    ],
    series: [
        {
            type: 'line',
            xField: 'id_oec',
            yField: 'nombre_oec_tipo'
        }
    ]
});