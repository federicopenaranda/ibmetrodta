Ext.define('ibmetrodta.view.formularios.DetalleEquipos.edit.tab.Info3', {
    extend: 'Ext.form.Panel',
    alias: 'widget.formularios.detalleequipos.edit.tab.info3',
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
                            xtype: 'textareafield',
                            name: 'organismo_realizo_calibracion_detalle_equipos',
                            fieldLabel: 'Organismo que Realizó la Calibración'
                        },
                        {
                            xtype: 'textareafield',
                            name: 'certificado_calibracion_detalle_equipos',
                            fieldLabel: 'Certificado de Calibración'
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    items: [
                        {
                            xtype: 'datefield',
                            name: 'fecha_proxima_calibracion_detalle_equipos',
                            fieldLabel: 'Fecha de la Próxima Calibración',
                            format: 'Y-m-d',
                            submitFormat: 'Y-m-d'
                        },
                        {
                            xtype: 'combo',
                            name: 'criterio_aceptacion_cert_detalle_equipos',
                            fieldLabel: 'Criterio de Aceptación del Certificado de Calibración de Acuerdo a DTA-CRI-012 (si aplica):',
                            displayField: 'nombre',
                            valueField: 'valor',
                            store: new Ext.data.SimpleStore({
                                fields: ['nombre', 'valor'],
                                data: [
                                    ['Laboratorios de IBMETRO', 'lab-ibmetro'], 
                                    ['Lab. Reconocidos por IBMETRO', 'lab-rec-ibmetro'], 
                                    ['Lab. Acreditados por DTA', 'lab-acred-dta'], 
                                    ['Lab. de Otros INMs', 'lab-otros-inm'], 
                                    ['Lab. Acreditados por otros ONA', 'lab-acred-ona'], 
                                    ['Solución conjunta DTA-OEC', 'solucion-dta-oec']
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
                            name: 'procedimientos_uso_detalle_equipos',
                            fieldLabel: 'Procedimientos para el Uso'
                        },
                        {
                            xtype: 'textareafield',
                            name: 'patrones_comprobaciones_detalle_equipos',
                            fieldLabel: 'Patrones para Comprobaciones Intermedias (si aplica)',
                            allowBlank: false
                        }
                    ]
                }
            ]
        });
        me.callParent(arguments);
    }
});