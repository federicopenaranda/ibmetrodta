Ext.define('ibmetrodta.view.formularios.NoConformidad.edit.NoConformidadForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.formularios.noconformidad.edit.noconformidadform',
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
                            xtype: 'formularios.noconformidad.edit.tab.info',
                            title: 'Info (1 de 2)'
                        },
                        {
                            xtype: 'formularios.noconformidad.edit.tab.info2',
                            title: 'Info (2 de 2)'
                        }
                    ]
                }
            ]
        });
        me.callParent(arguments);
    }
});