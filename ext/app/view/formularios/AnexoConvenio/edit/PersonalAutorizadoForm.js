Ext.define('ibmetrodta.view.formularios.AnexoConvenio.edit.PersonalAutorizadoForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.formularios.anexoconvenio.edit.personalautorizadoform',
    requires: [
        'Ext.form.FieldContainer',
        'Ext.form.field.Text',
        'Ext.form.field.ComboBox',
        'ibmetrodta.ux.form.field.RemoteComboBox'
    ],
    bodyPadding: 5,
    initComponent: function () {
        var me = this;
        Ext.applyIf(me, {
            fieldDefaults: {
                allowBlank: true,
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
                            name: 'ensayo_personal_autorizado',
                            fieldLabel: 'Ensayo'
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    items: [
                        {
                            xtype: 'textareafield',
                            name: 'ensayista_personal_autorizado',
                            fieldLabel: 'Ensayista'
                        }
                    ]
                }
            ]
        });
        me.callParent(arguments);
    }
});