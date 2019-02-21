Ext.define('ibmetrodta.view.proceso;display.PeticionAccion.edit.Form', {
    extend: 'Ext.form.Panel',
    alias: 'widget.proceso;display.peticionaccion.edit.form',
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
                            xtype: 'proceso;display.peticionaccion.edit.tab.info',
                            title: 'Info'
                        }

                    ]
                }
            ]
        });
        me.callParent(arguments);
    }
});