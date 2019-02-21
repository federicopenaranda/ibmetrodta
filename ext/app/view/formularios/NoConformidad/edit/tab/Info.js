Ext.define('ibmetrodta.view.formularios.NoConformidad.edit.tab.Info', {
    extend: 'Ext.form.Panel',
    alias: 'widget.formularios.noconformidad.edit.tab.info',
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
                            xtype: 'combo',
                            name: 'objetivo_no_conformidad',
                            fieldLabel: 'Objetivo:',
                            displayField: 'nombre',
                            valueField: 'valor',
                            store: new Ext.data.SimpleStore({
                                fields: ['nombre', 'valor'],
                                data: [['acreditacion_inicial', 'acreditacion_inicial'], ['reacreditacion', 'reacreditacion'], ['extension_acreditacion', 'extension_acreditacion']]
                            }),
                            plugins: [
                                {ptype: 'cleartrigger'}
                            ],
                            editable: false,
                            forceSelection: true,
                            allowBlank: false
                        },
                        {
                            xtype: 'datefield',
                            name: 'fecha_no_conformidad',
                            fieldLabel: 'Fecha de No Conformidad',
                            format: 'Y-m-d',
                            submitFormat: 'Y-m-d'
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    items: [
                        {
                            xtype: 'textareafield',
                            name: 'numero_no_conformidad',
                            fieldLabel: 'Numero No Conformidad'
                        },
                        {
                            xtype: 'textfield',
                            name: 'nombre_persona_no_conformidad',
                            fieldLabel: 'Nombre Persona No Conformidad'
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    items: [
                        {
                            xtype: 'textareafield',
                            name: 'ref_norma_no_conformidad',
                            fieldLabel: 'Ref Norma No Conformidad'
                        },
                        {
                            xtype: 'textareafield',
                            name: 'ref_requisito_no_conformidad',
                            fieldLabel: 'Ref Requisito No Conformidad'
                        }
                    ]
                }
            ]
        });
        me.callParent(arguments);
    }
});