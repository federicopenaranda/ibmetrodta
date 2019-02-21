Ext.define('ibmetrodta.view.formularios.DetalleEquipos.edit.tab.Info2', {
    extend: 'Ext.form.Panel',
    alias: 'widget.formularios.detalleequipos.edit.tab.info2',
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
                            name: 'personal_responsable_detalle_equipos',
                            fieldLabel: 'Personal Responsable por el Equipo'
                        },
                        {
                            xtype: 'textareafield',
                            name: 'codigo_equipo_detalle_equipos',
                            fieldLabel: 'Código de Equipo (Interno)'
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    items: [
                        {
                            xtype: 'textareafield',
                            name: 'numero_serie_detalle_equipos',
                            fieldLabel: 'Número de Serie'
                        },
                        {
                            xtype: 'textareafield',
                            name: 'nombre_fabricante_detalle_equipos',
                            fieldLabel: 'Nombre del Fabricante'
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    items: [
                        {
                            xtype: 'datefield',
                            name: 'fecha_puesta_servicio_detalle_equipos',
                            fieldLabel: 'Fecha de Puesta en Servicio',
                            format: 'Y-m-d',
                            submitFormat: 'Y-m-d'
                        },
                        {
                            xtype: 'datefield',
                            name: 'fecha_ultima_calibracion_detalle_equipos',
                            fieldLabel: 'Fecha de la Última Calibración',
                            format: 'Y-m-d',
                            submitFormat: 'Y-m-d'
                        }
                    ]
                }
            ]
        });
        me.callParent(arguments);
    }
});