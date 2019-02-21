Ext.define('ibmetrodta.view.formularios.DetalleInspeccion.edit.tab.Info3', {
    extend: 'Ext.form.Panel',
    alias: 'widget.formularios.detalleinspeccion.edit.tab.info3',
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
                            name: 'equipos_utilizados_inspeccion_detalle_inspeccion',
                            fieldLabel: 'Equipos Utilizados en Inspección'
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    items: [
                        {
                            xtype: 'textareafield',
                            name: 'ad_patrones_referencia_detalle_inspeccion',
                            fieldLabel: 'Patrones de Referencia'
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    items: [
                        {
                            xtype: 'textareafield',
                            name: 'ad_material_referencia_cert_detalle_inspeccion',
                            fieldLabel: 'Material de Referencia Certificado'
                        }
                    ]
                }
            ]
        });
        me.callParent(arguments);
    }
});