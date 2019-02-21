Ext.define('ibmetrodta.view.formularios.InformeAcred.edit.tab.Info2', {
    extend: 'Ext.form.Panel',
    alias: 'widget.formularios.informeacred.edit.tab.info2',
    requires: [
        'Ext.form.FieldContainer',
        'Ext.form.field.Text',
        'Ext.form.field.ComboBox',
        'ibmetrodta.ux.form.field.RemoteComboBox'
    ],
    bodyPadding: 5,
    initComponent: function () {
        var me = this;
        Ext.applyIf(me, {
            fieldDefaults: {
                labelAlign: 'top',
                flex: 1,
                margins: 5
            },
            defaults: {
                layout: 'hbox',
                margins: '0 10 0 10'
            },
            items: [
                {
                    xtype: 'fieldcontainer',
                    items: [
                        {
                            xtype: 'textareafield',
                            name: 'cumplimiento_etapas_informe_acred',
                            fieldLabel: 'Cumplimiento de Etapas'
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    items: [
                        {
                            xtype: 'textareafield',
                            name: 'recomendacion_ra_informe_acred',
                            fieldLabel: 'Recomendación RA'
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    items: [
                        {
                            xtype: 'textareafield',
                            name: 'toma_decision_da_informe_acred',
                            fieldLabel: 'Toma de Decisión (DA)'
                        }
                    ]
                }
            ]
        });
        me.callParent(arguments);
    }
});