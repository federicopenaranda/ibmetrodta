Ext.define('ibmetrodta.view.formularios.AnexoConvenio.edit.tab.Info', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.formularios.anexoconvenio.edit.tab.info',
    bodyPadding: 0,
    margin: -5,
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'formularios.anexoconvenio.edit.formulariosform',
                    title: 'Administración de AnexoConvenio',
                    iconCls: 'icon_gear',
                    store: Ext.create( 'ibmetrodta.store.formularios.AnexoConvenio', {
                        pageSize: 10
                    })
                }
            ]
        });
        me.callParent(arguments);
    }
});