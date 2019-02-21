Ext.define('ibmetrodta.view.formularios.SatisfaccionCliente.edit.tab.SatisfaccionEvaluacion', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.formularios.satisfaccioncliente.edit.tab.satisfaccionevaluacion',
    bodyPadding: 0,
    margin: -5,
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'formularios.satisfaccionevaluacionlista',
                    title: 'Secundaria 1',
                    iconCls: 'icon_formularios',
                    store: Ext.create( 'ibmetrodta.store.formularios.satisfaccionevaluacion', {
                        pageSize: 10
                    })
                }
            ]
        });
        me.callParent(arguments);
    }
});