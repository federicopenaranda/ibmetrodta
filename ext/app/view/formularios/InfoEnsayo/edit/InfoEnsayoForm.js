Ext.define('ibmetrodta.view.formularios.InfoEnsayo.edit.InfoEnsayoForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.formularios.infoensayo.edit.infoensayoform',
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
                            xtype: 'formularios.infoensayo.edit.tab.info',
                            title: 'Info (1 de 3)'
                        },
                        {
                            xtype: 'formularios.infoensayo.edit.tab.info2',
                            title: 'Info (2 de 3)'
                        },
                        {
                            xtype: 'formularios.infoensayo.edit.tab.info3',
                            title: 'Info (3 de 3)'
                        }
                    ]
                }
            ]
        });
        me.callParent(arguments);
    }
});