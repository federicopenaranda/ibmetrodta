Ext.define('ibmetrodta.view.formularios.NoConformidad.edit.tab.Info2', {
    extend: 'Ext.form.Panel',
    alias: 'widget.formularios.noconformidad.edit.tab.info2',
    requires: [
        'Ext.form.FieldContainer',
        'Ext.form.field.Text',
        'Ext.form.field.ComboBox',
        'ibmetrodta.ux.form.field.RemoteComboBox'
    ],
    bodyPadding: 5,
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
            fieldDefaults: {
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
                    xtype: 'fieldcontainer',
                    items: [
                        {
                            xtype: 'textareafield',
                            name: 'no_conformidad',
                            fieldLabel: 'No Conformidad'
                        },
                        {
                            xtype: 'textareafield',
                            name: 'evidencia_no_conformidad',
                            fieldLabel: 'Evidencia No Conformidad'
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    items: [
                        {
                            xtype: 'textareafield',
                            name: 'representate_oec_no_conformidad',
                            fieldLabel: 'Representate Oec No Conformidad'
                        },
                        {
                            xtype: 'textareafield',
                            name: 'representate_oec_cargo_no_conformidad',
                            fieldLabel: 'Representate Oec Cargo No Conformidad'
                        }
                    ]
                }
            ]
        });
        me.callParent(arguments);
    }
});