Ext.define('ibmetrodta.view.formularios.EvalTecnica.edit.tab.Info5', {
    extend: 'Ext.form.Panel',
    alias: 'widget.formularios.evaltecnica.edit.tab.info5',
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
                            name: 'cumple_requisitos_norma_eval_tecnica',
                            fieldLabel: 'Cumple de Requisitos Norma'
                        },
                        {
                            xtype: 'textareafield',
                            name: 'documentacion_opiniones_eval_tecnica',
                            fieldLabel: 'Documentación de Opiniones'
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    items: [
                        {
                            xtype: 'textareafield',
                            name: 'seguridad_transmision_eval_tecnica',
                            fieldLabel: 'Seguridad de Transmision'
                        },
                        {
                            xtype: 'textareafield',
                            name: 'confidencialidad_eval_tecnica',
                            fieldLabel: 'Confidencialidad'
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    items: [
                        {
                            xtype: 'textareafield',
                            name: 'criterios_insertidumbre_eval_tecnica',
                            fieldLabel: 'Criterios Incertidumbre'
                        },
                        {
                            xtype: 'textareafield',
                            name: 'criterios_trazabilidad_eval_tecnica',
                            fieldLabel: 'Criterios de Trazabilidad'
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    items: [
                        {
                            xtype: 'textareafield',
                            name: 'numero_requisito_eval_tecnica',
                            fieldLabel: 'Numero de Requisito'
                        },
                        {
                            xtype: 'textareafield',
                            name: 'comentario_requisito_eval_tecnica',
                            fieldLabel: 'Comentario de Requisito'
                        }
                    ]
                }
            ]
        });
        me.callParent(arguments);
    }
});