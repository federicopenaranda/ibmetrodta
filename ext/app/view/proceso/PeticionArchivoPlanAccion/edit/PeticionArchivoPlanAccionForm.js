Ext.define('ibmetrodta.view.proceso.PeticionArchivoPlanAccion.edit.PeticionArchivoPlanAccionForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.proceso.peticionarchivoplanaccion.edit.peticionarchivoplanaccionform',
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
                            xtype: 'proceso.peticionarchivoplanaccion.edit.tab.info',
                            title: 'Info'
                        }
                    ]
                }
            ]
        });
        me.callParent(arguments);
    }
});