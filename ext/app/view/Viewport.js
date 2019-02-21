Ext.define('ibmetrodta.view.Viewport', {
    extend: 'Ext.container.Viewport',
    requires:[
        'Ext.layout.container.Border',
        'ibmetrodta.view.layout.North',
        'ibmetrodta.view.layout.West',
        'ibmetrodta.view.layout.Center'
    ],
    layout: {
        type: 'border'
    },
    items: [
        {xtype: 'layout.north'},
        {xtype: 'layout.west'},
        {xtype: 'layout.center'}
    ]
});
