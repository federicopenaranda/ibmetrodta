Ext.define('ibmetrodta.view.formularios.EvalTecnica.edit.tab.Info2', {
    extend: 'Ext.form.Panel',
    alias: 'widget.formularios.evaltecnica.edit.tab.info2',
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
                            name: 'control_acceso_eval_tecnica',
                            fieldLabel: 'Control de Acceso'
                        },
                        {
                            xtype: 'textareafield',
                            name: 'orden_limpieza_eval_tecnica',
                            fieldLabel: 'Orden y Limpieza'
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    items: [
                        {
                            xtype: 'textareafield',
                            name: 'uso_metodos_apropiados_eval_tecnica',
                            fieldLabel: 'Uso Métodos Apropiados'
                        },
                        {
                            xtype: 'textareafield',
                            name: 'confirmacion_metodos_eval_tecnica',
                            fieldLabel: 'Confirmación de Métodos'
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    items: [,
                        {
                            xtype: 'textareafield',
                            name: 'instructivo_uso_eval_tecnica',
                            fieldLabel: 'Instructivo de Uso'
                        },
                        {
                            xtype: 'textareafield',
                            name: 'validacion_desviaciones_eval_tecnica',
                            fieldLabel: 'Validación de Desviaciones'
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    items: [
                        {
                            xtype: 'textareafield',
                            name: 'estimacion_incertidumbre_eval_tecnica',
                            fieldLabel: 'Estimación de Incertidumbre'
                        },
                        {
                            xtype: 'textareafield',
                            name: 'verificacion_calculos_eval_tecnica',
                            fieldLabel: 'Verificación de Cálculos'
                        }
                    ]
                }
            ]
        });
        me.callParent(arguments);
    }
});