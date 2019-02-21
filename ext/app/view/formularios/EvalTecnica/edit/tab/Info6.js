Ext.define('ibmetrodta.view.formularios.EvalTecnica.edit.tab.Info6', {
    extend: 'Ext.form.Panel',
    alias: 'widget.formularios.evaltecnica.edit.tab.info6',
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
                            xtype: 'datefield',
                            name: 'fecha_inicio_eval_tecnica',
                            fieldLabel: 'Fecha de Inicio',
                            format: 'Y-m-d',
                            submitFormat: 'Y-m-d'
                        },
                        {
                            xtype: 'datefield',
                            name: 'fecha_fin_eval_tecnica',
                            fieldLabel: 'Fecha de Fin',
                            format: 'Y-m-d',
                            submitFormat: 'Y-m-d'
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    items: [
                        {
                            xtype: 'timefield',
                            minValue: '6:00:00',
                            maxValue: '9:00:00',
                            increment: 30,
                            name: 'hora_inicio_eval_tecnica',
                            fieldLabel: 'Hora de Inicio'
                        },
                        {
                            xtype: 'timefield',
                            minValue: '6:00:00',
                            maxValue: '9:00:00',
                            increment: 30,
                            name: 'hora_fin_eval_tecnica',
                            fieldLabel: 'Hora de Fin'
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    items: [
                        {
                            xtype: 'textareafield',
                            name: 'conclusion_eval_tecnica',
                            fieldLabel: 'Conclusión'
                        }
                    ]
                }
            ]
        });
        me.callParent(arguments);
    }
});