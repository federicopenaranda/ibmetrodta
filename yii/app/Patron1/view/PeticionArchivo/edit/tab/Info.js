Ext.define('ibmetrodta.view.proceso.PeticionArchivo.edit.tab.Info', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.proceso.peticionarchivo.edit.tab.info',
    bodyPadding: 0,
    margin: -5,
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'proceso.peticionarchivo.edit.procesoform',
                    title: 'Administración de PeticionArchivo',
                    iconCls: 'icon_gear',
                    store: Ext.create( 'ibmetrodta.store.proceso.PeticionArchivo', {
                        pageSize: 10
                    })
                }
            ]
        });
        me.callParent(arguments);
    }
});