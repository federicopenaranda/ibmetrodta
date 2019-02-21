Ext.define('ibmetrodta.view.oec.Oec.edit.OecForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.oec.oec.edit.oecform',
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
                            itemId: 'fk_id_oec_tipo',
                            name: 'fk_id_oec_tipo',
                            fieldLabel: 'Tipo',
                            displayField: 'nombre_oec_tipo',
                            valueField: 'id_oec_tipo',
                            store: {
                                type: 'opciones.oectipo'
                            },
                            editable: false,
                            forceSelection: true,
                            allowBlank: false
                        },
                        {
                            xtype: 'ux.form.field.remotecombobox',
                            name: 'fk_id_pais',
                            fieldLabel: 'País',
                            displayField: 'nombre_pais',
                            valueField: 'id_pais',
                            store: {
                                type: 'opciones.pais'
                            },
                            editable: false,
                            forceSelection: true,
                            allowBlank: false
                        },
                        {
                            xtype: 'ux.form.field.remotecombobox',
                            name: 'fk_id_norma_referencia',
                            fieldLabel: 'Norma de Referencia',
                            displayField: 'nombre_norma_referencia',
                            valueField: 'id_norma_referencia',
                            store: {
                                type: 'opciones.normareferencia'
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
                            xtype: 'textfield',
                            itemId: 'nombre_oec',
                            name: 'nombre_oec',
                            fieldLabel: 'Nombre de la OEC',
                            allowBlank: false
                        },
                        {
                            xtype: 'textfield',
                            itemId: 'nit_oec',
                            name: 'nit_oec',
                            fieldLabel: 'NIT',
                            allowBlank: false
                        },
                        {
                            xtype: 'combo',
                            name: 'empresa_publica_oec',
                            fieldLabel: 'Tipo de Empresa:',
                            displayField: 'nombre',
                            valueField: 'valor',
                            store: new Ext.data.SimpleStore({
                                fields: ['nombre', 'valor'],
                                data: [['Pública', 1], ['Privada', 0]]
                            }),
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
                            xtype: 'textfield',
                            name: 'ciudad_oec',
                            fieldLabel: 'Ciudad',
                            allowBlank: false
                        },
                        {
                            xtype: 'textfield',
                            name: 'departamento_oec',
                            fieldLabel: 'Departamento',
                            allowBlank: false
                        },
                        {
                            xtype: 'combo',
                            name: 'zona_oec',
                            fieldLabel: 'Zona de Empresa:',
                            displayField: 'nombre',
                            valueField: 'valor',
                            store: new Ext.data.SimpleStore({
                                fields: ['nombre', 'valor'],
                                data: [['Urbana', 'urbano'], ['Rural', 'rural']]
                            }),
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
                            xtype: 'textfield',
                            name: 'telefono1_oec',
                            fieldLabel: 'Teléfono 1',
                            allowBlank: false
                        },
                        {
                            xtype: 'textfield',
                            name: 'telefono2_oec',
                            fieldLabel: 'Teléfono 2'
                        },
                        {
                            xtype: 'textfield',
                            name: 'fax_oec',
                            fieldLabel: 'Fax'
                        },
                        {
                            xtype: 'textfield',
                            name: 'celular_oec',
                            fieldLabel: 'Celular'
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    items: [
                        {
                            xtype: 'textfield',
                            name: 'email1_oec',
                            fieldLabel: 'Email 1',
                            allowBlank: false
                        },
                        {
                            xtype: 'textfield',
                            name: 'email2_oec',
                            fieldLabel: 'Email 2'
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    items: [
                        {
                            xtype: 'textareafield',
                            name: 'direccion_oec',
                            fieldLabel: 'Dirección',
                            allowBlank: false
                        }
                    ]
                }
            ]
        });
        me.callParent(arguments);
    }
});