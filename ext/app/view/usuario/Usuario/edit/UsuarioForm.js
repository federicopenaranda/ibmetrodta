Ext.define('ibmetrodta.view.usuario.Usuario.edit.UsuarioForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.usuario.usuario.edit.usuarioform',
    header: false,
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
                            xtype: 'textfield',
                            name: 'primer_nombre_usuario',
                            fieldLabel: 'Primer Nombre'
                        },
                        {
                            xtype: 'textfield',
                            name: 'segundo_nombre_usuario',
                            fieldLabel: 'Segundo Nombre'
                        },
                        {
                            xtype: 'textfield',
                            name: 'apellido_paterno_usuario',
                            fieldLabel: 'Apellido Paterno'
                        },
                        {
                            xtype: 'textfield',
                            name: 'apellido_materno_usuario',
                            fieldLabel: 'Apellido Materno'
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    items: [
                        {
                            xtype: 'combo',
                            name: 'sexo_usuario',
                            fieldLabel: 'Sexo Usuario:',
                            displayField: 'nombre',
                            valueField: 'valor',
                            store: new Ext.data.SimpleStore({
                                fields: ['nombre', 'valor'],
                                data: [['Femenino', 'f'], ['Masculino', 'm']]
                            }),
                            plugins: [
                                {ptype: 'cleartrigger'}
                            ],
                            editable: false,
                            forceSelection: true,
                            allowBlank: false
                        },
                        {
                            xtype: 'textfield',
                            name: 'telefono_usuario',
                            fieldLabel: 'Teléfono'
                        },
                        {
                            xtype: 'datefield',
                            name: 'fecha_nacimiento_usuario',
                            fieldLabel: 'Fecha de Nacimiento',
                            format: 'Y-m-d',
                            submitFormat: 'Y-m-d'
                        },
                        {
                            xtype: 'textfield',
                            name: 'celular_usuario',
                            fieldLabel: 'Celular'
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    items: [
                        {
                            xtype: 'textfield',
                            name: 'codigo_usuario',
                            fieldLabel: 'Código',
                            allowBlank: true
                        },
                        {
                            xtype: 'combo',
                            name: 'estado_usuario',
                            fieldLabel: 'Estado Usuario:',
                            displayField: 'nombre',
                            valueField: 'valor',
                            store: new Ext.data.SimpleStore({
                                fields: ['nombre', 'valor'],
                                data: [['Habilitado', '1'], ['Deshabilitado', '0']]
                            }),
                            editable: false,
                            forceSelection: true,
                            allowBlank: false
                        },
                        {
                            xtype: 'textfield',
                            name: 'correo_usuario',
                            fieldLabel: 'Correo'
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    items: [
                        {
                            xtype: 'textfield',
                            name: 'empresa_usuario',
                            fieldLabel: 'Empresa',
                            allowBlank: true
                        },
                        {
                            xtype: 'textfield',
                            name: 'direccion_usuario',
                            fieldLabel: 'Dirección',
                            allowBlank: true
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    items: [
                        {
                            xtype: 'textareafield',
                            name: 'observaciones_usuario',
                            fieldLabel: 'Observaciones'
                        }
                    ]
                }
            ]
        });
        me.callParent(arguments);
    }
});