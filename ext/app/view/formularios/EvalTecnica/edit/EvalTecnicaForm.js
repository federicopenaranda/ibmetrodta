Ext.define('ibmetrodta.view.formularios.EvalTecnica.edit.EvalTecnicaForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.formularios.evaltecnica.edit.evaltecnicaform',
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
                    bodyPadding: 5,
                    deferredRender: false,
                    items: [
                        {
                            xtype: 'formularios.evaltecnica.edit.tab.info',
                            title: 'Info (1 de 6)'
                        },
                        {
                            xtype: 'formularios.evaltecnica.edit.tab.info2',
                            title: 'Info (2 de 6)'
                        },
                        {
                            xtype: 'formularios.evaltecnica.edit.tab.info3',
                            title: 'Info (3 de 6)'
                        },
                        {
                            xtype: 'formularios.evaltecnica.edit.tab.info4',
                            title: 'Info (4 de 6)'
                        },
                        {
                            xtype: 'formularios.evaltecnica.edit.tab.info5',
                            title: 'Info (5 de 6)'
                        },
                        {
                            xtype: 'formularios.evaltecnica.edit.tab.info6',
                            title: 'Info (6 de 6)'
                        },
                        {
                            xtype: 'formularios.evaltecnica.edit.tab.aspectosevaluados',
                            title: 'Aspectos Evaluados'
                        },
                        {
                            xtype: 'formularios.evaltecnica.edit.tab.equipoeval',
                            title: 'Equipos'
                        },
                        {
                            xtype: 'formularios.evaltecnica.edit.tab.proveedoreval',
                            title: 'Proveedores'
                        }
                    ]
                }
            ]
        });
        me.callParent(arguments);
    }
});