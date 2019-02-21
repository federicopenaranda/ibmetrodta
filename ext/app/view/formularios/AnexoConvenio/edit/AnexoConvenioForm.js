Ext.define('ibmetrodta.view.formularios.AnexoConvenio.edit.AnexoConvenioForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.formularios.anexoconvenio.edit.anexoconvenioform',
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
                    itemId: 'tabsAnexoConvenio',
                    bodyPadding: 5,
                    deferredRender: false,
                    items: [
                        {
                            xtype: 'formularios.anexoconvenio.edit.tab.info',
                            title: 'Info'
                        },
                        {
                            xtype: 'formularios.anexoconvenio.edit.tab.alcanceacreditacioncert2',
                            title: 'Alcance de Acreditación (Certificación)'
                        },
                        {
                            xtype: 'formularios.anexoconvenio.edit.tab.alcanceacreditacioninsp2',
                            title: 'Alcance de Acreditación (Inspección)'
                        },
                        {
                            xtype: 'formularios.anexoconvenio.edit.tab.alcanceacreditacionlab2',
                            title: 'Alcance de Acreditación (Laboratorio)'
                        },
                        {
                            xtype: 'formularios.anexoconvenio.edit.tab.personalautorizado',
                            title: 'Personal Autorizado'
                        }
                    ]
                }
            ]
        });
        me.callParent(arguments);
    }
});