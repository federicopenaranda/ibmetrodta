Ext.define('ibmetrodta.view.formularios.DetalleCertificacion.edit.tab.Info2', {
    extend: 'Ext.form.Panel',
    alias: 'widget.formularios.detallecertificacion.edit.tab.info2',
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
                            name: 'auditores_calificados_detalle_certificacion',
                            fieldLabel: 'Auditores Calificados'
                        },
                        {
                            xtype: 'textareafield',
                            name: 'expertos_tecnicos_detalle_certificacion',
                            fieldLabel: 'Expertos Técnicos'
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    items: [
                        {
                            xtype: 'textareafield',
                            name: 'observaciones_detalle_certificacion',
                            fieldLabel: 'Observaciones'
                        },
                        {
                            xtype: 'textareafield',
                            name: 'ensayos_en_produccto_detalle_certificacion',
                            fieldLabel: 'Ensayos Realizados en el Produccto'
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    items: [
                        {
                            xtype: 'textareafield',
                            name: 'laboratorios_ensayos_detalle_certificacion',
                            fieldLabel: 'Laboratorios que Realizan los Ensayos'
                        }
                    ]
                }
            ]
        });
        me.callParent(arguments);
    }
});