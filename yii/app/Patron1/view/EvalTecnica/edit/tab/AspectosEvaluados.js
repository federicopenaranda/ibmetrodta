Ext.define('ibmetrodta.view.formularios;display.EvalTecnica.edit.tab.AspectosEvaluados', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.formularios;display.evaltecnica.edit.tab.aspectosevaluados',
    bodyPadding: 0,
    margin: -5,
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'formularios;display.evaltecnica.aspectosevaluadoslista',
                    title: 'Secundaria 2',
                    iconCls: 'icon',
                    store: Ext.create( 'ibmetrodta.store.formularios;display.AspectosEvaluados', {
                        pageSize: 10
                    })
                }
            ]
        });
        me.callParent(arguments);
    }
});