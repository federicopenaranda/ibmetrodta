Ext.define('ibmetrodta.view.formularios.InformeAcred.edit.InformeAcredForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.formularios.informeacred.edit.informeacredform',
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
                            xtype: 'formularios.informeacred.edit.tab.info',
                            title: 'Info'
                        },
                        {
                            xtype: 'formularios.informeacred.edit.tab.info2',
                            title: 'Otros Datos'
                        }
                    ]
                }
            ]
        });
        me.callParent(arguments);
    }
});