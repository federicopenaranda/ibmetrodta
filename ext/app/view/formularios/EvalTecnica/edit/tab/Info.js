Ext.define('ibmetrodta.view.formularios.EvalTecnica.edit.tab.Info', {
    extend: 'Ext.form.Panel',
    alias: 'widget.formularios.evaltecnica.edit.tab.info',
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
                            name: 'area_ensayo_eval_tecnica',
                            fieldLabel: 'Área de Ensayo'
                        },
                        {
                            xtype: 'textareafield',
                            name: 'metodo_ensayo_eval_tecnica',
                            fieldLabel: 'Método de Ensayo'
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    items: [
                        {
                            xtype: 'textareafield',
                            name: 'lista_signatarios_eval_tecnica',
                            fieldLabel: 'Lista de Signatarios'
                        },
                        {
                            xtype: 'textareafield',
                            name: 'supervision_personal_eval_tecnica',
                            fieldLabel: 'Supervisión de Personal'
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    items: [
                        {
                            xtype: 'textareafield',
                            name: 'autorizacion_eval_tecnica',
                            fieldLabel: 'Autorización'
                        },
                        {
                            xtype: 'textareafield',
                            name: 'adecuacion_eval_tecnica',
                            fieldLabel: 'Adecuación'
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    items: [
                        {
                            xtype: 'textareafield',
                            name: 'seguimiento_eval_tecnica',
                            fieldLabel: 'Seguimiento'
                        },
                        {
                            xtype: 'textareafield',
                            name: 'separacion_areas_eval_tecnica',
                            fieldLabel: 'Separación de Áreas'
                        }
                    ]
                }
            ]
        });
        me.callParent(arguments);
    }
});