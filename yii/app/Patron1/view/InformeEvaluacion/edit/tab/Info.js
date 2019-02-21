Ext.define('ibmetrodta.view.formularios.InformeEvaluacion.edit.tab.Info', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.formularios.informeevaluacion.edit.tab.info',
    bodyPadding: 0,
    margin: -5,
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'formularios.informeevaluacion.edit.formulariosform',
                    title: 'Administración de InformeEvaluacion',
                    iconCls: 'icon_gear',
                    store: Ext.create( 'ibmetrodta.store.formularios.InformeEvaluacion', {
                        pageSize: 10
                    })
                }
            ]
        });
        me.callParent(arguments);
    }
});