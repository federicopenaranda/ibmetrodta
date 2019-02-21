Ext.define('ibmetrodta.view.formularios.AnexoConvenio.edit.Form', {
    extend: 'Ext.form.Panel',
    alias: 'widget.formularios.anexoconvenio.edit.form',
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
                            xtype: 'formularios.anexoconvenio.edit.tab.info',
                            title: 'Info'
						},

                        {
                            xtype: 'formularios.anexoconvenio.edit.tab.alcanceacreditacioncert',
                            title: 'AlcanceAcreditacionCert'
                        },
                        {
                            xtype: 'formularios.anexoconvenio.edit.tab.alcanceacreditacioninsp',
                            title: 'AlcanceAcreditacionInsp'
                        },
                        {
                            xtype: 'formularios.anexoconvenio.edit.tab.personalautorizado',
                            title: 'PersonalAutorizado'
                        }
                    ]
                }
            ]
        });
        me.callParent(arguments);
    }
});