Ext.define('ibmetrodta.view.programacion.Actividad.edit.tab.Info', {
    extend: 'Ext.form.Panel',
    alias: 'widget.programacion.actividad.edit.tab.info',
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
                            xtype: 'ux.form.field.remotecombobox',
                            name: 'fk_id_oec',
                            fieldLabel: 'OEC',
                            displayField: 'nombre_oec',
                            valueField: 'id_oec',
                            store: {
                                type: 'oec.oec'
                            },
                            editable: false,
                            forceSelection: true,
                            allowBlank: false
                        },
                        {
                            xtype: 'ux.form.field.remotecombobox',
                            name: 'fk_id_tipo_actividad',
                            fieldLabel: 'Tipo de Actividad',
                            displayField: 'nombre_tipo_actividad',
                            valueField: 'id_tipo_actividad',
                            store: {
                                type: 'programacion.tipoactividad'
                            },
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
                            xtype: 'datefield',
                            name: 'fecha_inicial_actividad',
                            fieldLabel: 'Fecha Inicial',
                            format: 'Y-m-d',
                            submitFormat: 'Y-m-d'
                        },
                        {
                            xtype: 'datefield',
                            name: 'fecha_final_actividad',
                            fieldLabel: 'Fecha Final',
                            format: 'Y-m-d',
                            submitFormat: 'Y-m-d'
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    items: [
                        {
                            xtype: 'textfield',
                            name: 'nombre_actividad',
                            fieldLabel: 'Título de Actividad'
                        },
                        {
                            xtype: 'numberfield',
                            name: 'horas_actividad',
                            fieldLabel: 'Horas de Actividad'
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    items: [
                        {
                            xtype: 'textareafield',
                            name: 'descripcion_actividad',
                            fieldLabel: 'Descripción de Actividad'
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    items: [
                        {
                            xtype: 'numberfield',
                            name: 'prs_actividad',
                            itemId: 'prs_actividad',
                            fieldLabel: 'PRS',
                            hidden: false
                        },
                        {
                            xtype: 'ux.form.field.remotecombobox',
                            itemId: 'fk_id_tipo_curso',
                            name: 'fk_id_tipo_curso',
                            fieldLabel: 'Tipo de Curso',
                            displayField: 'nombre_tipo_curso',
                            valueField: 'id_tipo_curso',
                            store: {
                                type: 'programacion.tipocurso'
                            },
                            editable: false,
                            forceSelection: true,
                            allowBlank: true,
                            hidden: false
                        }
                    ]
                }
            ]
        });
        me.callParent(arguments);
    }
});