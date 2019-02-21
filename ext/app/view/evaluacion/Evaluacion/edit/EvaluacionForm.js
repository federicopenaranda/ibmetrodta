Ext.define('ibmetrodta.view.evaluacion.Evaluacion.edit.EvaluacionForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.evaluacion.evaluacion.edit.evaluacionform',
    requires: [
        'Ext.form.FieldContainer',
        'Ext.form.field.Text',
        'Ext.form.field.ComboBox',
        'ibmetrodta.ux.form.field.RemoteComboBox',
        'Ext.ux.form.ItemSelector'
    ],
    initComponent: function () {
        var me = this;
        Ext.applyIf(me, {
            fieldDefaults: {
                allowBlank: true,
                labelAlign: 'top',
                flex: 1,
                margins: 5
            },
            items: [
                {
                    xtype: 'tabpanel',
                    itemId: 'tabsEvaluacion',
                    bodyPadding: 5,
                    deferredRender: false,
                    items: [
                        {
                            xtype: 'evaluacion.evaluacion.edit.tab.info',
                            title: 'Info (Parte 1 de 3)'
                        },
                        {
                            xtype: 'evaluacion.evaluacion.edit.tab.info2',
                            title: 'Info (Parte 2 de 3)'
                        },
                        {
                            xtype: 'evaluacion.evaluacion.edit.tab.info3',
                            title: 'Info (Parte 3 de 3)'
                        },
                        {
                            xtype: 'evaluacion.evaluacion.edit.tab.alcanceacreditacioncert',
                            title: 'Alcance de Acreditación (Certificación)'
                        },
                        {
                            xtype: 'evaluacion.evaluacion.edit.tab.alcanceacreditacioninsp',
                            title: 'Alcance de Acreditación (Inspección)'
                        },
                        {
                            xtype: 'evaluacion.evaluacion.edit.tab.alcanceacreditacionlab',
                            title: 'Alcance de Acreditación (Laboratorio)'
                        }
                    ]
                }
            ]
        });
        me.callParent(arguments);
    }
});