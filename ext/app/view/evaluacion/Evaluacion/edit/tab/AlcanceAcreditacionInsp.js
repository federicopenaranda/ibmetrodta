Ext.define('ibmetrodta.view.evaluacion.Evaluacion.edit.tab.AlcanceAcreditacionInsp', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.evaluacion.evaluacion.edit.tab.alcanceacreditacioninsp',
    bodyPadding: 0,
    margin: -5,
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'evaluacion.evaluacion.alcanceacreditacioninsplista',
                    title: 'Secundaria 2',
                    iconCls: 'icon',
                    store: Ext.create( 'ibmetrodta.store.evaluacion.AlcanceAcreditacionInsp', {
                        pageSize: 10
                    })
                }
            ]
        });
        me.callParent(arguments);
    }
});