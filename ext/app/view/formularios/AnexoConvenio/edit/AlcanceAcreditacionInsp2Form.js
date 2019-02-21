Ext.define('ibmetrodta.view.formularios.AnexoConvenio.edit.AlcanceAcreditacionInsp2Form', {
    extend: 'Ext.form.Panel',
    alias: 'widget.formularios.anexoconvenio.edit.alcanceacreditacioninsp2form',
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
                            xtype: 'datefield',
                            name: 'fecha_acreditacion_alcance_acreditacion_insp',
                            fieldLabel: 'Fecha de Acreditación',
                            format: 'Y-m-d',
                            submitFormat: 'Y-m-d'
                        },
                        {
                            xtype: 'textfield',
                            name: 'norma_ref_alcance_acreditacion_insp',
                            fieldLabel: 'Norma de Referencia'
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    items: [
                        {
                            xtype: 'textareafield',
                            name: 'items_inspeccionados_alcance_acreditacion_insp',
                            fieldLabel: 'Items Inspeccionados'
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    items: [
                        {
                            xtype: 'textareafield',
                            name: 'items_referencia_alcance_acreditacion_insp',
                            fieldLabel: 'Items de Referencia'
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    items: [
                        {
                            xtype: 'textareafield',
                            name: 'signatario_alcance_acreditacion_insp',
                            fieldLabel: 'Signatario de Alcance'
                        }
                    ]
                }
            ]
        });
        me.callParent(arguments);
    }
});