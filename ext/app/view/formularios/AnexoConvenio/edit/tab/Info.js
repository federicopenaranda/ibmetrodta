Ext.define('ibmetrodta.view.formularios.AnexoConvenio.edit.tab.Info', {
    extend: 'Ext.form.Panel',
    alias: 'widget.formularios.anexoconvenio.edit.tab.info',
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
                            xtype: 'combo',
                            name: 'estado_anexo_convenio',
                            fieldLabel: 'Estado:',
                            displayField: 'nombre',
                            valueField: 'valor',
                            store: new Ext.data.SimpleStore({
                                fields: ['nombre', 'valor'],
                                data: [['Activo', 1], ['Inactivo', 0]]
                            }),
                            plugins: [
                                {ptype: 'cleartrigger'}
                            ],
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
                            name: 'responsable_anexo_convenio',
                            fieldLabel: 'Responsable Anexo Convenio'
                        },
                        {
                            xtype: 'textfield',
                            name: 'cargo_anexo_convenio',
                            fieldLabel: 'Cargo'
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    items: [
                        {
                            xtype: 'datefield',
                            name: 'fecha_anexo_convenio',
                            fieldLabel: 'Fecha',
                            format: 'Y-m-d',
                            submitFormat: 'Y-m-d'
                        },
                        {
                            xtype: 'textfield',
                            name: 'cips_anexo_convenio',
                            fieldLabel: 'CIPS'
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    items: [
                        {
                            xtype: 'textfield',
                            name: 'numero_anexo_convenio',
                            fieldLabel: 'Número',
                            width: 20
                        },
                        {
                            xtype: 'form',
                            itemId: 'formAnexo',
                            vtype:'fileUpload',
                            border: false,
                            frame: false,
                            bodyPadding: 0,
                            margins: '0 0 -5 0',
                            baseCls: 'x-plain',
                            hasUpload: true,
                            items: [
                                {
                                    xtype: 'filefield',
                                    name: 'AnexoConvenio041301[file]',
                                    itemId: 'fileAnexo',
                                    fieldLabel: 'Escaneado',
                                    labelWidth: 80,
                                    msgTarget: 'side',
                                    labelAlign: 'top',
                                    allowBlank: true,
                                    anchor: '100%',
                                    buttonConfig: {
                                        iconCls: 'icon_picture',
                                        text: ''
                                    }
                                }
                            ]
                        }
                    ]
                }
            ]
        });
        me.callParent(arguments);
    }
});