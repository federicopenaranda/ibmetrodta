Ext.define('ibmetrodta.view.formularios.DetalleCalibracion.edit.tab.Info4', {
    extend: 'Ext.form.Panel',
    alias: 'widget.formularios.detallecalibracion.edit.tab.info4',
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
                            name: 'ad_certificado_calibracion_detalle_calibracion',
                            fieldLabel: 'Certificado de Calibración'
                        },
                        {
                            xtype: 'textareafield',
                            name: 'ad_declaracion_trazabilidad_detalle_calibracion',
                            fieldLabel: 'Declaración de Trazabilidad'
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    items: [
                        {
                            xtype: 'textareafield',
                            name: 'ad_criterio_aceptacion_detalle_calibracion',
                            fieldLabel: 'Criterio de Aceptación'
                        },
                        {
                            xtype: 'textareafield',
                            name: 'ad_comparaciones_interlaboratorios_detalle_calibracion',
                            fieldLabel: 'Comparaciones Interlaboratorios'
                        }
                    ]
                }
            ]
        });
        me.callParent(arguments);
    }
});