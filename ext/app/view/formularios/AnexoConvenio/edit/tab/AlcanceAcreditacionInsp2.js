Ext.define('ibmetrodta.view.formularios.AnexoConvenio.edit.tab.AlcanceAcreditacionInsp2', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.formularios.anexoconvenio.edit.tab.alcanceacreditacioninsp2',
    bodyPadding: 0,
    margin: -5,
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'formularios.anexoconvenio.alcanceacreditacioninsp2lista',
                    title: 'Alcance de Acreditación (Inspección)',
                    iconCls: 'icon',
                    store: Ext.create( 'ibmetrodta.store.formularios.AlcanceAcreditacionInsp2', {
                        pageSize: 10
                    })
                }
            ]
        });
        me.callParent(arguments);
    }
});