Ext.define('ibmetrodta.view.formularios.Certificado.edit.tab.Info', {
    extend: 'Ext.form.Panel',
    alias: 'widget.formularios.certificado.edit.tab.info',
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
                            name: 'estado_certificado',
                            fieldLabel: 'Estado:',
                            displayField: 'nombre',
                            valueField: 'valor',
                            store: new Ext.data.SimpleStore({
                                fields: ['nombre', 'valor'],
                                data: [['Aprobado', 'aprobado'], ['Observado', 'observado']]
                            }),
                            plugins: [
                                {ptype: 'cleartrigger'}
                            ],
                            editable: false,
                            forceSelection: true,
                            allowBlank: false
                        },
                        {
                            xtype: 'datefield',
                            name: 'fecha_acreditacion_inicial_certificado',
                            fieldLabel: 'Fecha de Acreditación Inicial',
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
                            name: 'fecha_ultima_generacion_certificado',
                            fieldLabel: 'Fecha de Última Generación',
                            readOnly: true
                        },
                        {
                            xtype: 'datefield',
                            name: 'fecha_validez_certificado',
                            fieldLabel: 'Fecha de Validez',
                            format: 'Y-m-d',
                            submitFormat: 'Y-m-d'
                        },
                        {
                            xtype: 'textfield',
                            name: 'codigo_certificado',
                            fieldLabel: 'Código',
                            allowBlank: false
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    items: [
                        {
                            xtype: 'textareafield',
                            name: 'texto1_certificado',
                            fieldLabel: 'Texto de Certificado'
                        }
                    ]
                }
            ]
        });
        me.callParent(arguments);
    }
});