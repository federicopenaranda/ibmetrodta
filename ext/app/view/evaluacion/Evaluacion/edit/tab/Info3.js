Ext.define('ibmetrodta.view.evaluacion.Evaluacion.edit.tab.Info3', {
    extend: 'Ext.form.Panel',
    alias: 'widget.evaluacion.evaluacion.edit.tab.info3',
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
                            name: 'fecha_reunion_ee_evaluacion',
                            fieldLabel: 'Fecha de Reunión (Equipo Ev.)',
                            format: 'Y-m-d',
                            submitFormat: 'Y-m-d'
                        },
                        {
                            xtype: 'timefield',
                            name: 'hora_reunion_ee_evaluacion',
                            increment: 30,
                            minValue: '6:00',
                            maxValue: '8:00',
                            fieldLabel: 'Hora de Reunión (Equipo Ev.)',
                            format: 'H:i:s'
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    items: [
                        {
                            xtype: 'datefield',
                            name: 'fecha_reunion_inicial_evaluacion',
                            fieldLabel: 'Fecha de Reunión Inicial',
                            format: 'Y-m-d',
                            submitFormat: 'Y-m-d'
                        },
                        {
                            xtype: 'timefield',
                            name: 'hora_reunion_inicial_evaluacion',
                            increment: 30,
                            fieldLabel: 'Hora de Reunión Inicial',
                            format: 'H:i:s'
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    items: [
                        {
                            xtype: 'datefield',
                            name: 'fecha_reunion_final_evaluacion',
                            fieldLabel: 'Fecha de Reunión Final',
                            format: 'Y-m-d',
                            submitFormat: 'Y-m-d'
                        },
                        {
                            xtype: 'timefield',
                            name: 'hora_reunion_final_evaluacion',
                            increment: 30,
                            fieldLabel: 'Hora de Reunión Final',
                            format: 'H:i:s'
                        }
                    ]
                }
            ]
        });
        me.callParent(arguments);
    }
});