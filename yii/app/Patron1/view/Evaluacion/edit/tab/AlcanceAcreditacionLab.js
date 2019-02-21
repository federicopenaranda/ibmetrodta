Ext.define('ibmetrodta.view.evaluacion.Evaluacion.edit.tab.AlcanceAcreditacionLab', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.evaluacion.evaluacion.edit.tab.alcanceacreditacionlab',
    bodyPadding: 0,
    margin: -5,
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'evaluacion.evaluacion.alcanceacreditacionlablista',
                    title: 'Secundaria 2',
                    iconCls: 'icon',
                    store: Ext.create( 'ibmetrodta.store.evaluacion.AlcanceAcreditacionLab', {
                        pageSize: 10
                    })
                }
            ]
        });
        me.callParent(arguments);
    }
});