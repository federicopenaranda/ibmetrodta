Ext.define('ibmetrodta.view.formularios;display.EvalTecnica.edit.tab.Info', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.formularios;display.evaltecnica.edit.tab.info',
    bodyPadding: 0,
    margin: -5,
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'formularios;display.evaltecnica.edit.formularios;displayform',
                    title: 'Administración de EvalTecnica',
                    iconCls: 'icon_gear',
                    store: Ext.create( 'ibmetrodta.store.formularios;display.EvalTecnica', {
                        pageSize: 10
                    })
                }
            ]
        });
        me.callParent(arguments);
    }
});