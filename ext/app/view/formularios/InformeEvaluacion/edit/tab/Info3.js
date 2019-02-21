Ext.define('ibmetrodta.view.formularios.InformeEvaluacion.edit.tab.Info3', {
    extend: 'Ext.form.Panel',
    alias: 'widget.formularios.informeevaluacion.edit.tab.info3',
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
                            name: 'fecha_emision_informe_evaluacion',
                            fieldLabel: 'Fecha Emision Informe Evaluacion',
                            format: 'Y-m-d',
                            submitFormat: 'Y-m-d'
                        },
                        {
                            xtype: 'datefield',
                            name: 'fecha_creacion_informe_evaluacion',
                            fieldLabel: 'Fecha Creacion Informe Evaluacion',
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
                            name: 'conclusion_informe_evaluacion',
                            fieldLabel: 'Conclusion Informe Evaluacion'
                        },
                        {
                            xtype: 'textareafield',
                            name: 'anexos_informe_evaluacion',
                            fieldLabel: 'Anexos Informe Evaluacion'
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    items: [
                        {
                            xtype: 'textareafield',
                            name: 'lugar_emision_informe_evaluacion',
                            fieldLabel: 'Lugar Emision Informe Evaluacion'
                        }
                    ]
                }
            ]
        });
        me.callParent(arguments);
    }
});