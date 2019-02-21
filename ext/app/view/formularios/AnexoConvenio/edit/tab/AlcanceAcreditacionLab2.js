Ext.define('ibmetrodta.view.formularios.AnexoConvenio.edit.tab.AlcanceAcreditacionLab2', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.formularios.anexoconvenio.edit.tab.alcanceacreditacionlab2',
    bodyPadding: 0,
    margin: -5,
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'formularios.anexoconvenio.alcanceacreditacionlab2lista',
                    title: 'Alcance de Acreditación (Laboratorio)',
                    iconCls: 'icon',
                    store: Ext.create( 'ibmetrodta.store.formularios.AlcanceAcreditacionLab2', {
                        pageSize: 10
                    })
                }
            ]
        });
        me.callParent(arguments);
    }
});