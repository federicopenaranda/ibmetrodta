Ext.define('ibmetrodta.view.formularios.AnexoConvenio.edit.tab.AlcanceAcreditacionCert', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.formularios.anexoconvenio.edit.tab.alcanceacreditacioncert',
    bodyPadding: 0,
    margin: -5,
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'formularios.anexoconvenio.alcanceacreditacioncertlista',
                    title: 'Secundaria 2',
                    iconCls: 'icon',
                    store: Ext.create( 'ibmetrodta.store.formularios.AlcanceAcreditacionCert', {
                        pageSize: 10
                    })
                }
            ]
        });
        me.callParent(arguments);
    }
});