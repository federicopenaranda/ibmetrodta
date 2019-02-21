Ext.define('ibmetrodta.view.formularios.DetalleCertificacion.edit.tab.Info', {
    extend: 'Ext.form.Panel',
    alias: 'widget.formularios.detallecertificacion.edit.tab.info',
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
                            xtype: 'combo',
                            name: 'estado_detalle_certificacion',
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
                            xtype: 'combo',
                            name: 'objetivo_detalle_certificacion',
                            fieldLabel: 'Objetivo:',
                            displayField: 'nombre',
                            valueField: 'valor',
                            store: new Ext.data.SimpleStore({
                                fields: ['nombre', 'valor'],
                                data: [
                                    ['Acreditación Inicial', 'acreditacion_inicial'], 
                                    ['Reacreditación', 'reacreditacion'], 
                                    ['Extensión de Acreditación', 'extension_acreditacion']
                                ]
                            }),
                            plugins: [
                                {ptype: 'cleartrigger'}
                            ],
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
                            xtype: 'combo',
                            name: 'tipo_certificacion_detalle_certificacion',
                            fieldLabel: 'Tipo de Certificación:',
                            displayField: 'nombre',
                            valueField: 'valor',
                            store: new Ext.data.SimpleStore({
                                fields: ['nombre', 'valor'],
                                data: [
                                    ['Sistema de Gestión', 'sis-gestion'], 
                                    ['Producto', 'producto'], 
                                    ['Persona', 'persona']
                                ]
                            }),
                            plugins: [
                                {ptype: 'cleartrigger'}
                            ],
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
                            xtype: 'textareafield',
                            name: 'documento_normativo_detalle_certificacion',
                            fieldLabel: 'Documento Normativo'
                        },
                        {
                            xtype: 'textareafield',
                            name: 'procedimiento_certificacion_detalle_certificacion',
                            fieldLabel: 'Procedimiento de Certificación'
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    items: [
                        {
                            xtype: 'textareafield',
                            name: 'producto_certificar_detalle_certificacion',
                            fieldLabel: 'Producto o Proceso a Certificar'
                        },
                        {
                            xtype: 'textareafield',
                            name: 'codigo_nace_detalle_certificacion',
                            fieldLabel: 'Código NACE'
                        }
                    ]
                }
            ]
        });
        me.callParent(arguments);
    }
});