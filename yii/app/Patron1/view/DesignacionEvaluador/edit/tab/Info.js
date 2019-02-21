Ext.define('ibmetrodta.view.formularios.DesignacionEvaluador.edit.tab.Info', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.formularios.designacionevaluador.edit.tab.info',
    bodyPadding: 0,
    margin: -5,
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'formularios.designacionevaluador.edit.formulariosform',
                    title: 'Administración de DesignacionEvaluador',
                    iconCls: 'icon_gear',
                    store: Ext.create( 'ibmetrodta.store.formularios.DesignacionEvaluador', {
                        pageSize: 10
                    })
                }
            ]
        });
        me.callParent(arguments);
    }
});