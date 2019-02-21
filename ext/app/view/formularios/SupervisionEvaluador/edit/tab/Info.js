Ext.define('ibmetrodta.view.formularios.SupervisionEvaluador.edit.tab.Info', {
    extend: 'Ext.form.Panel',
    alias: 'widget.formularios.supervisionevaluador.edit.tab.info',
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
                            xtype: 'textfield',
                            name: 'nombre_supervision_evaluador',
                            fieldLabel: 'Nombre Supervision Evaluador'
                        },
                        {
                            xtype: 'textfield',
                            name: 'cargo_supervision_evaluador',
                            fieldLabel: 'Cargo Supervision Evaluador'
                        },
                        {
                            xtype: 'datefield',
                            name: 'fecha_supervision_evaluador',
                            fieldLabel: 'Fecha Supervision Evaluador',
                            format: 'Y-m-d',
                            submitFormat: 'Y-m-d'
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    items: [
                        {
                            xtype: 'textareafield',
                            name: 'criterio_evaluacion_supervision_evaluador',
                            fieldLabel: 'Criterio Evaluacion Supervision Evaluador'
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    items: [
                        {
                            xtype: 'textareafield',
                            name: 'comentarios_supervision_evaluador',
                            fieldLabel: 'Comentarios Supervision Evaluador'
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    items: [
                        {
                            xtype: 'textareafield',
                            name: 'observaciones_supervision_evaluador',
                            fieldLabel: 'Observaciones Supervision Evaluador'
                        }
                    ]
                }
            ]
        });
        me.callParent(arguments);
    }
});