Ext.define('ibmetrodta.view.evaluacion.Evaluacion.edit.Form', {
    extend: 'Ext.form.Panel',
    alias: 'widget.evaluacion.evaluacion.edit.form',
    requires: [
        'Ext.form.FieldContainer',
        'Ext.form.field.Text',
        'Ext.form.field.ComboBox',
        'ibmetrodta.ux.form.field.RemoteComboBox',
        'Ext.ux.form.ItemSelector'
    ],
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
            fieldDefaults: {
                allowBlank: true,
                labelAlign: 'top',
                flex: 1,
                margins: 5
            },
            items: [
                {
                    xtype: 'tabpanel',
                    bodyPadding: 5,
                    deferredRender: false,
                    items: [
                        {
                            xtype: 'evaluacion.evaluacion.edit.tab.info',
                            title: 'Info'
						},

                        {
                            xtype: 'evaluacion.evaluacion.edit.tab.alcanceacreditacioncert',
                            title: 'AlcanceAcreditacionCert'
                        },
                        {
                            xtype: 'evaluacion.evaluacion.edit.tab.alcanceacreditacioninsp',
                            title: 'AlcanceAcreditacionInsp'
                        },
                        {
                            xtype: 'evaluacion.evaluacion.edit.tab.alcanceacreditacionlab',
                            title: 'AlcanceAcreditacionLab'
                        },
                        {
                            xtype: 'evaluacion.evaluacion.edit.tab.planevaluacion',
                            title: 'PlanEvaluacion'
                        }
                    ]
                }
            ]
        });
        me.callParent(arguments);
    }
});