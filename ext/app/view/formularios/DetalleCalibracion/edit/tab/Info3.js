Ext.define('ibmetrodta.view.formularios.DetalleCalibracion.edit.tab.Info3', {
    extend: 'Ext.form.Panel',
    alias: 'widget.formularios.detallecalibracion.edit.tab.info3',
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
                            xtype: 'datefield',
                            name: 'ad_fecha_ultima_calibracion_detalle_calibracion',
                            fieldLabel: 'Fecha de Última Calibración',
                            format: 'Y-m-d',
                            submitFormat: 'Y-m-d'
                        },
                        {
                            xtype: 'datefield',
                            name: 'ad_fecha_proxima_calibracion_detalle_calibracion',
                            fieldLabel: 'Fecha de Próxima Calibración',
                            format: 'Y-m-d',
                            submitFormat: 'Y-m-d'
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    items: [
                        {
                            xtype: 'textareafield',
                            name: 'ad_estimacion_incertidumbre_detalle_calibracion',
                            fieldLabel: 'Estimación de Incertidumbre'
                        },
                        {
                            xtype: 'textareafield',
                            name: 'ad_patrones_referencia_detalle_calibracion',
                            fieldLabel: 'Patrones de Referencia'
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    items: [
                        {
                            xtype: 'textareafield',
                            name: 'ad_manipulacion_patrones_referencia_detalle_calibracion',
                            fieldLabel: 'Manipulación de los Patrones de Referencia'
                        },
                        {
                            xtype: 'textareafield',
                            name: 'ad_organismo_realizo_calibracion_detalle_calibracion',
                            fieldLabel: 'Organismo que Realizó Calibración'
                        }
                    ]
                }
            ]
        });
        me.callParent(arguments);
    }
});