Ext.define('ibmetrodta.view.formularios.AnexoConvenio.edit.tab.AlcanceAcreditacionInsp', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.formularios.anexoconvenio.edit.tab.alcanceacreditacioninsp',
    bodyPadding: 0,
    margin: -5,
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'formularios.anexoconvenio.alcanceacreditacioninsplista',
                    title: 'Secundaria 2',
                    iconCls: 'icon',
                    store: Ext.create( 'ibmetrodta.store.formularios.AlcanceAcreditacionInsp', {
                        pageSize: 10
                    })
                }
            ]
        });
        me.callParent(arguments);
    }
});