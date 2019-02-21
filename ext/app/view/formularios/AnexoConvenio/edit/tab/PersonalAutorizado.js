Ext.define('ibmetrodta.view.formularios.AnexoConvenio.edit.tab.PersonalAutorizado', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.formularios.anexoconvenio.edit.tab.personalautorizado',
    bodyPadding: 0,
    margin: -5,
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'formularios.anexoconvenio.personalautorizadolista',
                    title: 'Personal Autorizado',
                    iconCls: 'icon',
                    store: Ext.create( 'ibmetrodta.store.formularios.PersonalAutorizado', {
                        pageSize: 10
                    })
                }
            ]
        });
        me.callParent(arguments);
    }
});