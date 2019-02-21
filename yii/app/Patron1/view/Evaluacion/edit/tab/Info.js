Ext.define('ibmetrodta.view.evaluacion.Evaluacion.edit.tab.Info', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.evaluacion.evaluacion.edit.tab.info',
    bodyPadding: 0,
    margin: -5,
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'evaluacion.evaluacion.edit.evaluacionform',
                    title: 'Administración de Evaluacion',
                    iconCls: 'icon_gear',
                    store: Ext.create( 'ibmetrodta.store.evaluacion.Evaluacion', {
                        pageSize: 10
                    })
                }
            ]
        });
        me.callParent(arguments);
    }
});