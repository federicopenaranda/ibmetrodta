Ext.define('ibmetrodta.view.proceso.Peticion.edit.tab.PeticionEstado', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.proceso.peticion.edit.tab.peticionestado',
    bodyPadding: 0,
    margin: -5,
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'proceso.peticionestadolista',
                    title: 'Secundaria 1',
                    iconCls: 'icon_proceso',
                    store: Ext.create( 'ibmetrodta.store.proceso.peticionestado', {
                        pageSize: 10
                    })
                }
            ]
        });
        me.callParent(arguments);
    }
});