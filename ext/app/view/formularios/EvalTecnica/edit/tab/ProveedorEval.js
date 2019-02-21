Ext.define('ibmetrodta.view.formularios.EvalTecnica.edit.tab.ProveedorEval', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.formularios.evaltecnica.edit.tab.proveedoreval',
    bodyPadding: 0,
    margin: -5,
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'formularios.evaltecnica.proveedorevallista',
                    title: 'Proveedores',
                    iconCls: 'icon',
                    store: Ext.create( 'ibmetrodta.store.formularios.ProveedorEval', {
                        pageSize: 10
                    })
                }
            ]
        });
        me.callParent(arguments);
    }
});