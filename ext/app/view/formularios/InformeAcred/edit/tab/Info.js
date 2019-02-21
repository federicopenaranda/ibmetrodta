Ext.define('ibmetrodta.view.formularios.InformeAcred.edit.tab.Info', {
    extend: 'Ext.form.Panel',
    alias: 'widget.formularios.informeacred.edit.tab.info',
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
                            name: 'observaciones_ra_oec_informe_acred',
                            fieldLabel: 'Observaciones del RA (OEC)'
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    items: [
                        {
                            xtype: 'textareafield',
                            name: 'observaciones_ra_ee_informe_acred',
                            fieldLabel: 'Observaciones del RA (Equipo Evaluador)'
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    items: [
                        {
                            xtype: 'datefield',
                            name: 'recomendacion_fecha_informe_acred',
                            fieldLabel: 'Recomendación de Fecha',
                            format: 'Y-m-d',
                            submitFormat: 'Y-m-d'
                        },
                        {
                            xtype: 'datefield',
                            name: 'toma_decision_da_fecha_informe_acred',
                            fieldLabel: 'Toma Decisión (DA) Fecha',
                            format: 'Y-m-d',
                            submitFormat: 'Y-m-d'
                        }
                    ]
                }
            ]
        });
        me.callParent(arguments);
    }
});