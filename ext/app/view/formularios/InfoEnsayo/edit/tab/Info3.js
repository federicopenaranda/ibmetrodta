Ext.define('ibmetrodta.view.formularios.InfoEnsayo.edit.tab.Info3', {
    extend: 'Ext.form.Panel',
    alias: 'widget.formularios.infoensayo.edit.tab.info3',
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
                            name: 'ad_patrones_referencia_info_ensayo',
                            fieldLabel: 'Descripción de Patrones de Referencia'
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    items: [
                        {
                            xtype: 'textareafield',
                            name: 'ad_material_referencia_info_ensayo',
                            fieldLabel: 'Descripción de Material de Referencia Certificado'
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    items: [
                        {
                            xtype: 'textareafield',
                            name: 'ad_comparaciones_interlaboratorios_info_ensayo',
                            fieldLabel: 'Participación en Comparaciones Interlaboratorios'
                        }
                    ]
                }
            ]
        });
        me.callParent(arguments);
    }
});