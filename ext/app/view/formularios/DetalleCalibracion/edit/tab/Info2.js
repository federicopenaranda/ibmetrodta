Ext.define('ibmetrodta.view.formularios.DetalleCalibracion.edit.tab.Info2', {
    extend: 'Ext.form.Panel',
    alias: 'widget.formularios.detallecalibracion.edit.tab.info2',
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
                            name: 'equipo_calibrado_detalle_calibracion',
                            fieldLabel: 'Equipo o Patrón Calibrado'
                        },
                        {
                            xtype: 'textareafield',
                            name: 'personal_autorizado_detalle_calibracion',
                            fieldLabel: 'Personal Autorizado'
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    items: [
                        {
                            xtype: 'textareafield',
                            name: 'rango_calibracion_detalle_calibracion',
                            fieldLabel: 'Rango de Calibración'
                        },
                        {
                            xtype: 'textareafield',
                            name: 'mejor_capacidad_medicion_detalle_calibracion',
                            fieldLabel: 'Mejor Capacidad de Medición'
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    items: [
                        {
                            xtype: 'textareafield',
                            name: 'equipos_utilizados_detalle_calibracion',
                            fieldLabel: 'Lista de Equipos Utilizados'
                        }
                    ]
                }
            ]
        });
        me.callParent(arguments);
    }
});