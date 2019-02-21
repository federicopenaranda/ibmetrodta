Ext.define('ibmetrodta.view.tramite.Tramite.edit.Form', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.tramite.tramite.edit.form',
    buttonAlign: 'center',
    requires: [
        'Ext.form.FieldContainer',
        'Ext.form.field.Text',
        'Ext.form.field.ComboBox',
        'ibmetrodta.ux.form.field.RemoteComboBox',
        'Ext.ux.form.ItemSelector'
    ],
    bbar: [
        {
            itemId: 'anteriorPaso',
            text: '< Anterior Paso'
        },
        '->',
        {
            itemId: 'actualizarPaso',
            text: 'Actualizar Paso'
        },
        '->',
        {
            itemId: 'siguientePaso',
            text: 'Siguente Paso >'
        }
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
                    xtype: 'panel',
                    layout: 'card',
                    bodyPadding: 5,
                    deferredRender: true,
                    items: [
                        {
                            xtype: 'tramite.tramite.edit.tab.paso1',
                            title: 'Paso 1 de 20'
                        },
                        {
                            xtype: 'tramite.tramite.edit.tab.paso2',
                            title: 'Paso 2 de 20'
                        },
                        {
                            xtype: 'tramite.tramite.edit.tab.paso3',
                            title: 'Paso 3 de 20'
                        },
                        {
                            xtype: 'tramite.tramite.edit.tab.paso4',
                            title: 'Paso 4 de 20'
                        },
                        {
                            xtype: 'tramite.tramite.edit.tab.paso5',
                            title: 'Paso 5 de 20'
                        },
                        {
                            xtype: 'tramite.tramite.edit.tab.paso6',
                            title: 'Paso 6 de 20'
                        },
                        {
                            xtype: 'tramite.tramite.edit.tab.paso7',
                            title: 'Paso 7 de 20'
                        },
                        {
                            xtype: 'tramite.tramite.edit.tab.paso8',
                            title: 'Paso 8 de 20'
                        },
                        {
                            xtype: 'tramite.tramite.edit.tab.paso9',
                            title: 'Paso 9 de 20'
                        },
                        {
                            xtype: 'tramite.tramite.edit.tab.paso10',
                            title: 'Paso 10 de 20'
                        },
                        {
                            xtype: 'tramite.tramite.edit.tab.paso11',
                            title: 'Paso 11 de 20'
                        },
                        {
                            xtype: 'tramite.tramite.edit.tab.paso12',
                            title: 'Paso 12 de 20'
                        },
                        {
                            xtype: 'tramite.tramite.edit.tab.paso13',
                            title: 'Paso 13 de 20'
                        },
                        {
                            xtype: 'tramite.tramite.edit.tab.paso14',
                            title: 'Paso 14 de 20'
                        },
                        {
                            xtype: 'tramite.tramite.edit.tab.paso15',
                            title: 'Paso 15 de 20'
                        },
                        {
                            xtype: 'tramite.tramite.edit.tab.paso16',
                            title: 'Paso 16 de 20'
                        },
                        {
                            xtype: 'tramite.tramite.edit.tab.paso17',
                            title: 'Paso 17 de 20'
                        },
                        {
                            xtype: 'tramite.tramite.edit.tab.paso18',
                            title: 'Paso 18 de 20'
                        },
                        {
                            xtype: 'tramite.tramite.edit.tab.paso19',
                            title: 'Paso 19 de 20'
                        },
                        {
                            xtype: 'tramite.tramite.edit.tab.paso20',
                            title: 'Paso 20 de 20'
                        }
                    ]
                }
            ]
        });
        me.callParent(arguments);
    }
});