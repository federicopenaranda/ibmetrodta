Ext.define('ibmetrodta.view.formularios.InfoEnsayo.edit.tab.Info', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.formularios.infoensayo.edit.tab.info',
    bodyPadding: 0,
    margin: -5,
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'formularios.infoensayo.edit.formulariosform',
                    title: 'Administración de InfoEnsayo',
                    iconCls: 'icon_gear',
                    store: Ext.create( 'ibmetrodta.store.formularios.InfoEnsayo', {
                        pageSize: 10
                    })
                }
            ]
        });
        me.callParent(arguments);
    }
});