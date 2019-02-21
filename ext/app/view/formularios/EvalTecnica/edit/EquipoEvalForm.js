Ext.define('ibmetrodta.view.formularios.EvalTecnica.edit.EquipoEvalForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.formularios.evaltecnica.edit.equipoevalform',
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
                            name: 'nombre_equipo_eval',
                            fieldLabel: 'Nombre'
                        },
                        {
                            xtype: 'textareafield',
                            name: 'disponibilidad_equipo_eval',
                            fieldLabel: 'Disponibilidad Apropiada y Necesaria'
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    items: [
                        {
                            xtype: 'textareafield',
                            name: 'programa_calibracion_equipo_eval',
                            fieldLabel: 'Programa de Calibración y/o Mantenimiento'
                        },
                        {
                            xtype: 'textareafield',
                            name: 'identificacion_individual_equipo_eval',
                            fieldLabel: 'Identificación Individual'
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    items: [
                        {
                            xtype: 'textareafield',
                            name: 'registros_equipo_eval',
                            fieldLabel: 'Registros'
                        },
                        {
                            xtype: 'textareafield',
                            name: 'verificaciones_intermedias_equipo_eval',
                            fieldLabel: 'Verificaciones Intermedias'
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    items: [
                        {
                            xtype: 'textareafield',
                            name: 'proteccion_equipo_eval',
                            fieldLabel: 'Protección'
                        }
                    ]
                }
            ]
        });
        me.callParent(arguments);
    }
});