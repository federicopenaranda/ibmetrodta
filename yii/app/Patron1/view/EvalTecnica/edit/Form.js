Ext.define('ibmetrodta.view.formularios;display.EvalTecnica.edit.Form', {
    extend: 'Ext.form.Panel',
    alias: 'widget.formularios;display.evaltecnica.edit.form',
    requires: [
        'Ext.form.FieldContainer',
        'Ext.form.field.Text',
        'Ext.form.field.ComboBox',
        'ibmetrodta.ux.form.field.RemoteComboBox',
        'Ext.ux.form.ItemSelector'
    ],
    initComponent: function() {
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
                    bodyPadding: 5,
                    deferredRender: false,
                    items: [
                        {
                            xtype: 'formularios;display.evaltecnica.edit.tab.info',
                            title: 'Info'
						},

                        {
                            xtype: 'formularios;display.evaltecnica.edit.tab.aspectosevaluados',
                            title: 'AspectosEvaluados'
                        },
                        {
                            xtype: 'formularios;display.evaltecnica.edit.tab.equipoeval',
                            title: 'EquipoEval'
                        },
                        {
                            xtype: 'formularios;display.evaltecnica.edit.tab.proveedoreval',
                            title: 'ProveedorEval'
                        }
                    ]
                }
            ]
        });
        me.callParent(arguments);
    }
});