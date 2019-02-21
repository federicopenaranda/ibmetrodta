Ext.define('ibmetrodta.view.formularios.SupervisionEvaluador.edit.tab.Info', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.formularios.supervisionevaluador.edit.tab.info',
    bodyPadding: 0,
    margin: -5,
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'formularios.supervisionevaluador.edit.formulariosform',
                    title: 'Administración de SupervisionEvaluador',
                    iconCls: 'icon_gear',
                    store: Ext.create( 'ibmetrodta.store.formularios.SupervisionEvaluador', {
                        pageSize: 10
                    })
                }
            ]
        });
        me.callParent(arguments);
    }
});