Ext.define('ibmetrodta.view.formularios.EvalTecnica.edit.tab.AspectosEvaluados', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.formularios.evaltecnica.edit.tab.aspectosevaluados',
    bodyPadding: 0,
    margin: -5,
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'formularios.evaltecnica.aspectosevaluadoslista',
                    title: 'Aspectos Evaluados',
                    iconCls: 'icon',
                    store: Ext.create( 'ibmetrodta.store.formularios.AspectosEvaluados', {
                        pageSize: 10
                    })
                }
            ]
        });
        me.callParent(arguments);
    }
});