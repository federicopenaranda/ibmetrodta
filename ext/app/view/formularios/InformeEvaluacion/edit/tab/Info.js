Ext.define('ibmetrodta.view.formularios.InformeEvaluacion.edit.tab.Info', {
    extend: 'Ext.form.Panel',
    alias: 'widget.formularios.informeevaluacion.edit.tab.info',
    requires: [
        'Ext.form.FieldContainer',
        'Ext.form.field.Text',
        'Ext.form.field.ComboBox',
        'ibmetrodta.ux.form.field.RemoteComboBox'
    ],
    bodyPadding: 5,
    initComponent: function() {
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
                            xtype: 'datefield',
                            name: 'fecha_inicio_informe_evaluacion',
                            fieldLabel: 'Fecha de Inicio',
                            format: 'Y-m-d',
                            submitFormat: 'Y-m-d'
                        },
                        {
                            xtype: 'datefield',
                            name: 'fecha_fin_informe_evaluacion',
                            fieldLabel: 'Fecha de Fin',
                            format: 'Y-m-d',
                            submitFormat: 'Y-m-d'
                        },
                        {
                            xtype: 'combo',
                            name: 'objetivo_informe_evaluacion',
                            fieldLabel: 'Objetivo Informe Evaluacion:',
                            displayField: 'nombre',
                            valueField: 'valor',
                            store: new Ext.data.SimpleStore({
                                fields: ['nombre', 'valor'],
                                data: [['acreditacion_inicial', 'acreditacion_inicial'], ['reacreditacion', 'reacreditacion'], ['extension_acreditacion', 'extension_acreditacion']]
                            }),
                            plugins: [
                                {ptype: 'cleartrigger'}
                            ],
                            editable: false,
                            forceSelection: true,
                            allowBlank: false
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    items: [
                        {
                            xtype: 'textareafield',
                            name: 'lugar_informe_evaluacion',
                            fieldLabel: 'Lugar Informe Evaluacion'
                        },
                        {
                            xtype: 'textareafield',
                            name: 'documentos_referencia_informe_evaluacion',
                            fieldLabel: 'Documentos Referencia Informe Evaluacion'
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    items: [
                        {
                            xtype: 'textareafield',
                            name: 'instalaciones_visitadas_informe_evaluacion',
                            fieldLabel: 'Instalaciones Visitadas Informe Evaluacion'
                        },
                        {
                            xtype: 'textareafield',
                            name: 'profesionales_visitados_informe_evaluacion',
                            fieldLabel: 'Profesionales Visitados Informe Evaluacion'
                        }
                    ]
                }
            ]
        });
        me.callParent(arguments);
    }
});