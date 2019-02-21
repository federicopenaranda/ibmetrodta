Ext.define('ibmetrodta.view.formularios;display.EvalTecnica.edit.tab.EquipoEval', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.formularios;display.evaltecnica.edit.tab.equipoeval',
    bodyPadding: 0,
    margin: -5,
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'formularios;display.evaltecnica.equipoevallista',
                    title: 'Secundaria 2',
                    iconCls: 'icon',
                    store: Ext.create( 'ibmetrodta.store.formularios;display.EquipoEval', {
                        pageSize: 10
                    })
                }
            ]
        });
        me.callParent(arguments);
    }
});