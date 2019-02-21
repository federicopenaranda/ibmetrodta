Ext.define('ibmetrodta.view.formularios.AnexoConvenio.edit.tab.AlcanceAcreditacionCert2', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.formularios.anexoconvenio.edit.tab.alcanceacreditacioncert2',
    bodyPadding: 0,
    hidden: true,
    margin: -5,
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'formularios.anexoconvenio.alcanceacreditacioncert2lista',
                    title: 'Alcance de Acreditación',
                    iconCls: 'icon',
                    store: Ext.create( 'ibmetrodta.store.formularios.AlcanceAcreditacionCert2', {
                        pageSize: 10
                    })
                }
            ]
        });
        me.callParent(arguments);
    }
});