Ext.define('ibmetrodta.view.formularios.PruebaParticipacion.edit.tab.Info', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.formularios.pruebaparticipacion.edit.tab.info',
    bodyPadding: 0,
    margin: -5,
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'formularios.pruebaparticipacion.edit.formulariosform',
                    title: 'Administración de PruebaParticipacion',
                    iconCls: 'icon_gear',
                    store: Ext.create( 'ibmetrodta.store.formularios.PruebaParticipacion', {
                        pageSize: 10
                    })
                }
            ]
        });
        me.callParent(arguments);
    }
});