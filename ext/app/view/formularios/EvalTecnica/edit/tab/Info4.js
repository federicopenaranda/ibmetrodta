Ext.define('ibmetrodta.view.formularios.EvalTecnica.edit.tab.Info4', {
    extend: 'Ext.form.Panel',
    alias: 'widget.formularios.evaltecnica.edit.tab.info4',
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
                            name: 'adecuacion_instalaciones_eval_tecnica',
                            fieldLabel: 'Adecuación de Instalaciones'
                        },
                        {
                            xtype: 'textareafield',
                            name: 'procedimiento_aseguramiento_eval_tecnica',
                            fieldLabel: 'Procedimiento de Aseguramiento'
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    items: [
                        {
                            xtype: 'textareafield',
                            name: 'uso_regular_material_eval_tecnica',
                            fieldLabel: 'Uso Regular de Material'
                        },
                        {
                            xtype: 'textareafield',
                            name: 'participacion_intercomparaciones_eval_tecnica',
                            fieldLabel: 'Participación de Intercomparaciones'
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    items: [
                        {
                            xtype: 'textareafield',
                            name: 'repeticion_ensayos_eval_tecnica',
                            fieldLabel: 'Repetición de Ensayos'
                        },
                        {
                            xtype: 'textareafield',
                            name: 'correlacion_eval_tecnica',
                            fieldLabel: 'Correlación'
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    items: [
                        {
                            xtype: 'textareafield',
                            name: 'registro_aseguramiento_eval_tecnica',
                            fieldLabel: 'Registro de Aseguramiento'
                        },
                        {
                            xtype: 'textareafield',
                            name: 'formatos_apropiados_eval_tecnica',
                            fieldLabel: 'Formatos Apropiados'
                        }
                    ]
                }
            ]
        });
        me.callParent(arguments);
    }
});