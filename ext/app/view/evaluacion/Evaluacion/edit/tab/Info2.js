Ext.define('ibmetrodta.view.evaluacion.Evaluacion.edit.tab.Info2', {
    extend: 'Ext.form.Panel',
    alias: 'widget.evaluacion.evaluacion.edit.tab.info2',
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
                            xtype: 'combo',
                            name: 'idioma_evaluacion',
                            fieldLabel: 'Idioma de Evaluación:',
                            displayField: 'nombre',
                            valueField: 'valor',
                            store: new Ext.data.SimpleStore({
                                fields: ['nombre', 'valor'],
                                data: [['Español', 'es'], ['Inglés', 'en']]
                            }),
                            editable: false,
                            forceSelection: true,
                            allowBlank: false
                        }/*,
                        {
                            xtype: 'datefield',
                            name: 'recomendacion_fecha_evaluacion',
                            fieldLabel: 'Recomendación de Fecha de Evaluación',
                            format: 'Y-m-d',
                            submitFormat: 'Y-m-d'
                        },
                        {
                            xtype: 'datefield',
                            name: 'decision_fecha_da_evaluacion',
                            fieldLabel: 'Decisión de Fecha Evaluación (por DA)',
                            format: 'Y-m-d',
                            submitFormat: 'Y-m-d'
                        }*/
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    items: [
                        {
                            xtype: 'textareafield',
                            name: 'identificacion_manual_evaluacion',
                            fieldLabel: 'Identificación de Manual de Evaluación'
                        }/*,
                        {
                            xtype: 'textareafield',
                            name: 'observacion_ra_oec_evaluacion',
                            fieldLabel: 'Observación de OEC (RA)'
                        }*/
                    ]
                }/*,
                {
                    xtype: 'fieldcontainer',
                    items: [
                        {
                            xtype: 'textareafield',
                            name: 'observacion_ra_ee_evaluacion',
                            fieldLabel: 'Observacion de Equipo Ev. (RA)'
                        },
                        {
                            xtype: 'textareafield',
                            name: 'cumplimiento_etapas_evaluacion',
                            fieldLabel: 'Cumplimiento de Etapas'
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    items: [
                        {
                            xtype: 'textareafield',
                            name: 'decision_da_evaluacion',
                            fieldLabel: 'Decisión (DA)'
                        },
                        {
                            xtype: 'textareafield',
                            name: 'recomendacion_ra_evaluacion',
                            fieldLabel: 'Recomendación de RA'
                        }
                    ]
                }*/
            ]
        });
        me.callParent(arguments);
    }
});