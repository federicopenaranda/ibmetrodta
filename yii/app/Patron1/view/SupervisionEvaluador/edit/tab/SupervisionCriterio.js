Ext.define('ibmetrodta.view.formularios.SupervisionEvaluador.edit.tab.SupervisionCriterio', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.formularios.supervisionevaluador.edit.tab.supervisioncriterio',
    bodyPadding: 0,
    margin: -5,
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'formularios.supervisioncriteriolista',
                    title: 'Secundaria 1',
                    iconCls: 'icon_formularios',
                    store: Ext.create( 'ibmetrodta.store.formularios.supervisioncriterio', {
                        pageSize: 10
                    })
                }
            ]
        });
        me.callParent(arguments);
    }
});