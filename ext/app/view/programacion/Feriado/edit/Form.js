Ext.define('ibmetrodta.view.programacion.Feriado.edit.Form', {
    extend: 'Ext.form.Panel',
    alias: 'widget.programacion.feriado.edit.form',
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
                    xtype: 'fieldcontainer',
                    items: [
                        {
                            xtype: 'datefield',
                            name: 'fecha_feriado',
                            fieldLabel: 'Fecha de Feriado',
                            format: 'Y-m-d',
                            submitFormat: 'Y-m-d'
                        },
                        {
                            xtype: 'combo',
                            name: 'tipo_feriado',
                            fieldLabel: 'Tipo de Feriado:',
                            displayField: 'nombre',
                            valueField: 'valor',
                            store: new Ext.data.SimpleStore({
                                fields: ['nombre', 'valor'],
                                data: [
                                    ['Feriado', 'feriado'], 
                                    ['Evento Cívico', 'civico'],
                                    ['Otro','otro']
                                ]
                            }),
                            editable: false,
                            forceSelection: true,
                            allowBlank: false
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    items: [
                        {
                            xtype: 'textareafield',
                            name: 'descripcion_feriado',
                            fieldLabel: 'Descripción de Feriado'
                        }
                    ]
                }
            ]
        });
        me.callParent(arguments);
    }
});