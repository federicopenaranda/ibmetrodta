Ext.define('ibmetrodta.view.formularios;display.EvalTecnica.edit.tab.ProveedorEval', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.formularios;display.evaltecnica.edit.tab.proveedoreval',
    bodyPadding: 0,
    margin: -5,
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'formularios;display.evaltecnica.proveedorevallista',
                    title: 'Secundaria 2',
                    iconCls: 'icon',
                    store: Ext.create( 'ibmetrodta.store.formularios;display.ProveedorEval', {
                        pageSize: 10
                    })
                }
            ]
        });
        me.callParent(arguments);
    }
});