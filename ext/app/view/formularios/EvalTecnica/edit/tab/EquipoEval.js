Ext.define('ibmetrodta.view.formularios.EvalTecnica.edit.tab.EquipoEval', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.formularios.evaltecnica.edit.tab.equipoeval',
    bodyPadding: 0,
    margin: -5,
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'formularios.evaltecnica.equipoevallista',
                    title: 'Evaluación de Equipo',
                    iconCls: 'icon',
                    store: Ext.create( 'ibmetrodta.store.formularios.EquipoEval', {
                        pageSize: 10
                    })
                }
            ]
        });
        me.callParent(arguments);
    }
});