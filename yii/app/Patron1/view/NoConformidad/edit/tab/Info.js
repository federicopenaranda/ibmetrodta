Ext.define('ibmetrodta.view.formularios.NoConformidad.edit.tab.Info', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.formularios.noconformidad.edit.tab.info',
    bodyPadding: 0,
    margin: -5,
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'formularios.noconformidad.edit.formulariosform',
                    title: 'Administración de NoConformidad',
                    iconCls: 'icon_gear',
                    store: Ext.create( 'ibmetrodta.store.formularios.NoConformidad', {
                        pageSize: 10
                    })
                }
            ]
        });
        me.callParent(arguments);
    }
});