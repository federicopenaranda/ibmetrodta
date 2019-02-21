Ext.define('ibmetrodta.view.formularios.AnexoConvenio.edit.AlcanceAcreditacionCert2Form', {
    extend: 'Ext.form.Panel',
    alias: 'widget.formularios.anexoconvenio.edit.alcanceacreditacioncert2form',
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
                allowBlank: true,
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
                            name: 'fecha_acreditacion_alcance_acreditacion_cert',
                            fieldLabel: 'Fecha'
                        },
                        {
                            xtype: 'textfield',
                            name: 'codigo_iaf_alcance_acreditacion_cert',
                            fieldLabel: 'Código IAF'
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    items: [
                        {
                            xtype: 'textareafield',
                            name: 'producto_alcance_acreditacion_cert',
                            fieldLabel: 'Producto'
                        },
                        {
                            xtype: 'textareafield',
                            name: 'norma_referencia_alcance_acreditacion_cert',
                            fieldLabel: 'Norma de Referencia'
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    items: [
                        {
                            xtype: 'textareafield',
                            name: 'sector_economico_alcance_acreditacion_cert',
                            fieldLabel: 'Sector Económico'
                        },
                        {
                            xtype: 'textareafield',
                            name: 'actividad_sector_alcance_acreditacion_cert',
                            fieldLabel: 'Actividad del Sector'
                        }
                    ]
                }
            ]
        });
        me.callParent(arguments);
    }
});