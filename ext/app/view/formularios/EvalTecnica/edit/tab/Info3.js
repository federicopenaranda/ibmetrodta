Ext.define('ibmetrodta.view.formularios.EvalTecnica.edit.tab.Info3', {
    extend: 'Ext.form.Panel',
    alias: 'widget.formularios.evaltecnica.edit.tab.info3',
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
                            xtype: 'textareafield',
                            name: 'trazabilidad_calibracion_eval_tecnica',
                            fieldLabel: 'Trazabilidad de Calibración'
                        },
                        {
                            xtype: 'textareafield',
                            name: 'disponibilidad_material_eval_tecnica',
                            fieldLabel: 'Disponibilidad de Material'
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    items: [
                        {
                            xtype: 'textareafield',
                            name: 'certificados_calibracion_eval_tecnica',
                            fieldLabel: 'Certificados de Calibración'
                        },
                        {
                            xtype: 'textareafield',
                            name: 'plan_muestreo_eval_tecnica',
                            fieldLabel: 'Plan de Muestreo'
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    items: [
                        {
                            xtype: 'textareafield',
                            name: 'registros_muestreo_eval_tecnica',
                            fieldLabel: 'Registros de Muestreo'
                        },
                        {
                            xtype: 'textareafield',
                            name: 'tecnicas_estadisticas_eval_tecnica',
                            fieldLabel: 'Técnicas Estadísticas'
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    items: [
                        {
                            xtype: 'textareafield',
                            name: 'procedimiento_muestras_eval_tecnica',
                            fieldLabel: 'Procedimiento de Muestras'
                        },
                        {
                            xtype: 'textareafield',
                            name: 'sistema_identificacion_eval_tecnica',
                            fieldLabel: 'Sistema de Identificación'
                        }
                    ]
                }
            ]
        });
        me.callParent(arguments);
    }
});