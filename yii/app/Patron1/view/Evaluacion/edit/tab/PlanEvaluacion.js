Ext.define('ibmetrodta.view.evaluacion.Evaluacion.edit.tab.PlanEvaluacion', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.evaluacion.evaluacion.edit.tab.planevaluacion',
    bodyPadding: 0,
    margin: -5,
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'evaluacion.evaluacion.planevaluacionlista',
                    title: 'Secundaria 2',
                    iconCls: 'icon',
                    store: Ext.create( 'ibmetrodta.store.evaluacion.PlanEvaluacion', {
                        pageSize: 10
                    })
                }
            ]
        });
        me.callParent(arguments);
    }
});