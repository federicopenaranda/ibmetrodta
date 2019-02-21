Ext.define('ibmetrodta.view.evaluacion.Evaluacion.edit.tab.AlcanceAcreditacionCert', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.evaluacion.evaluacion.edit.tab.alcanceacreditacioncert',
    bodyPadding: 0,
    margin: -5,
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'evaluacion.evaluacion.alcanceacreditacioncertlista',
                    title: 'Secundaria 2',
                    iconCls: 'icon',
                    store: Ext.create( 'ibmetrodta.store.evaluacion.AlcanceAcreditacionCert', {
                        pageSize: 10
                    })
                }
            ]
        });
        me.callParent(arguments);
    }
});