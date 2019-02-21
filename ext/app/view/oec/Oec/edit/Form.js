Ext.define('ibmetrodta.view.oec.Oec.edit.Form', {
    extend: 'Ext.form.Panel',
    alias: 'widget.oec.oec.edit.form',
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
                            xtype: 'oec.oec.edit.tab.info',
                            title: 'Info OEC'
                        },
                        {
                            xtype: 'oec.oec.edit.tab.oecactividad',
                            title: 'Actividad Económica'
                        },
                        {
                            xtype: 'oec.oec.edit.tab.oecacreditacionsolicitada',
                            title: 'Acreditación Solicitada'
                        },
                        {
                            xtype: 'oec.oec.edit.tab.oeccontacto',
                            title: 'Contactos'
                        }
                    ]
                }
            ]
        });
        me.callParent(arguments);
    }
});