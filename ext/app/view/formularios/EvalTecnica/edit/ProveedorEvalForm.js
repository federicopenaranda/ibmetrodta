Ext.define('ibmetrodta.view.formularios.EvalTecnica.edit.ProveedorEvalForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.formularios.evaltecnica.edit.proveedorevalform',
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
                            xtype: 'textareafield',
                            name: 'nombre_proveedor_eval',
                            fieldLabel: 'Proveedor'
                        },
                        {
                            xtype: 'textareafield',
                            name: 'resultados_proveedor_eval',
                            fieldLabel: 'Resultados'
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    items: [
                        {
                            xtype: 'textareafield',
                            name: 'indicador_desempeno_proveedor_eval',
                            fieldLabel: 'Indicador de Desempeño'
                        },
                        {
                            xtype: 'textareafield',
                            name: 'conclusion_desempeno_proveedor_eval',
                            fieldLabel: 'Conclusión de Desempeño'
                        }
                    ]
                }
            ]
        });
        me.callParent(arguments);
    }
});