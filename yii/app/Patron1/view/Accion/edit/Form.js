Ext.define('ibmetrodta.view.proceso.Accion.edit.Form', {
    extend: 'Ext.form.Panel',
    alias: 'widget.proceso.accion.edit.form',
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
                            xtype: 'proceso.accion.edit.tab.info',
                            title: 'Info'
						},

                        {
                            xtype: 'proceso.accion.edit.tab.acciontransicion',
                            title: 'AccionTransicion'
                        },
                        {
                            xtype: 'proceso.accion.edit.tab.transicion',
                            title: 'Transicion'
                        }
                    ]
                }
            ]
        });
        me.callParent(arguments);
    }
});