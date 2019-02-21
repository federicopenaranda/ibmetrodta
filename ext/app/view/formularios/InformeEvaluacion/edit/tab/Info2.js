Ext.define('ibmetrodta.view.formularios.InformeEvaluacion.edit.tab.Info2', {
    extend: 'Ext.form.Panel',
    alias: 'widget.formularios.informeevaluacion.edit.tab.info2',
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
                            xtype: 'textareafield',
                            name: 'alcance_acreditacion_informe_evaluacion',
                            fieldLabel: 'Alcance Acreditacion Informe Evaluacion'
                        },
                        {
                            xtype: 'textareafield',
                            name: 'comentario_requisito_informe_evaluacion',
                            fieldLabel: 'Comentario Requisito Informe Evaluacion'
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    items: [
                        {
                            xtype: 'textareafield',
                            name: 'comentario_evaluacion_informe_evaluacion',
                            fieldLabel: 'Evaluación de Desempeño en Ensayos de Aptitud'
                        },
                        {
                            xtype: 'textareafield',
                            name: 'equipo_evaluador_informe_evaluacion',
                            fieldLabel: 'Equipo Evaluador Informe Evaluacion'
                        }
                    ]
                }
            ]
        });
        me.callParent(arguments);
    }
});