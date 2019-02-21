Ext.define('ibmetrodta.view.formularios.DetalleInspeccion.edit.tab.Info2', {
    extend: 'Ext.form.Panel',
    alias: 'widget.formularios.detalleinspeccion.edit.tab.info2',
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
                            name: 'tipo_detalle_inspeccion',
                            fieldLabel: 'Tipo:',
                            displayField: 'nombre',
                            valueField: 'valor',
                            store: new Ext.data.SimpleStore({
                                fields: ['nombre', 'valor'],
                                data: [
                                    ['Inspección Tipo A', 'a'], 
                                    ['Inspección Tipo B', 'b'], 
                                    ['Inspección Tipo C', 'c']
                                ]
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
                            name: 'inspeccion_se_realiza_detalle_inspeccion',
                            fieldLabel: 'La Inspección se Realiza:',
                            displayField: 'nombre',
                            valueField: 'valor',
                            store: new Ext.data.SimpleStore({
                                fields: ['nombre', 'valor'],
                                data: [
                                    ['Solo en la oficina principal del OI', 'solo-of-principal-oi'], 
                                    ['Solo en delegaciones del OI', 'solo-delef-oi'], 
                                    ['En la oficina principal y en delegaciones del OI', 'of-principal-deleg-oi'], 
                                    ['Fuera de las instalaciones del OI', 'fuera-inst-oi']
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
                            name: 'documento_normativo_detalle_inspeccion',
                            fieldLabel: 'Documento Normativo'
                        },
                        {
                            xtype: 'textareafield',
                            name: 'procedimiento_inspeccion_detalle_inspeccion',
                            fieldLabel: 'Procedimiento de Inspección'
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    items: [
                        {
                            xtype: 'textareafield',
                            name: 'direccion_delegaciones_detalle_inspeccion',
                            fieldLabel: 'Dirección de las Delegaciones'
                        },
                        {
                            xtype: 'textareafield',
                            name: 'inspectores_autorizados_detalle_inspeccion',
                            fieldLabel: 'Inspectores Autorizados'
                        }
                    ]
                }
            ]
        });
        me.callParent(arguments);
    }
});