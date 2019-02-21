Ext.define('ibmetrodta.view.oec.OecAcreditacionSolicitada.edit.Form', {
    extend: 'Ext.form.Panel',
    alias: 'widget.oec.oecacreditacionsolicitada.edit.form',
    requires: [
        'Ext.form.FieldContainer',
        'Ext.form.field.Text',
        'Ext.form.field.ComboBox',
        'ibmetrodta.ux.form.field.RemoteComboBox',
        'ibmetrodta.view.oec.OecAcreditacionSolicitada.Lista'
    ],
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
            fieldDefaults: {
                allowBlank: false,
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
                    xtype: 'tabpanel',
                    bodyPadding: 5,
                    // set to false to disable lazy render of non-active tabs...IMPORTANT!!!
                    deferredRender: false,
                    items: [
                        {
                            xtype: 'oec.oecacreditacionsolicitada.edit.tab.oecacreditacionsolicitada',
                            title: 'OecAcreditacionSolicitada'
                        }
                    ]
                }
            ]
        });
        me.callParent(arguments);
    }
});