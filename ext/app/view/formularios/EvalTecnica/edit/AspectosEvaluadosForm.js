Ext.define('ibmetrodta.view.formularios.EvalTecnica.edit.AspectosEvaluadosForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.formularios.evaltecnica.edit.aspectosevaluadosform',
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
                allowBlank: true,
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
                            name: 'nombre_aspectos_evaluados',
                            fieldLabel: 'Nombre'
                        },
                        {
                            xtype: 'textareafield',
                            name: 'educacion_aspectos_evaluados',
                            fieldLabel: 'Educación'
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    items: [
                        {
                            xtype: 'textareafield',
                            name: 'formacion_aspectos_evaluados',
                            fieldLabel: 'Formación'
                        },
                        {
                            xtype: 'textareafield',
                            name: 'experiencia_aspectos_evaluados',
                            fieldLabel: 'Experiencia'
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    items: [
                        {
                            xtype: 'textareafield',
                            name: 'habilidades_aspectos_evaluados',
                            fieldLabel: 'Habilidades'
                        }
                    ]
                }
            ]
        });
        me.callParent(arguments);
    }
});