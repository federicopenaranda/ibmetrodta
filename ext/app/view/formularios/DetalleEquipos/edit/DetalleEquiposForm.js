Ext.define('ibmetrodta.view.formularios.DetalleEquipos.edit.DetalleEquiposForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.formularios.detalleequipos.edit.detalleequiposform',
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
                            xtype: 'formularios.detalleequipos.edit.tab.info',
                            title: 'Info (1 de 3)'
                        },
                        {
                            xtype: 'formularios.detalleequipos.edit.tab.info2',
                            title: 'Info (2 de 3)'
                        },
                        {
                            xtype: 'formularios.detalleequipos.edit.tab.info3',
                            title: 'Info (3 de 3)'
                        }
                    ]
                }
            ]
        });
        me.callParent(arguments);
    }
});