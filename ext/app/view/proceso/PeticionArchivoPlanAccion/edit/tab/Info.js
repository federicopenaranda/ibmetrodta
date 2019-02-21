Ext.define('ibmetrodta.view.proceso.PeticionArchivoPlanAccion.edit.tab.Info', {
    extend: 'Ext.form.Panel',
    alias: 'widget.proceso.peticionarchivoplanaccion.edit.tab.info',
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
                    layout: 'column',
                    items: [
                        {
                            xtype: 'form',
                            itemId: 'formPlanAccion',
                            vtype: 'fileUpload',
                            border: false,
                            frame: false,
                            bodyPadding: 0,
                            margins: '0 0 -5 0',
                            baseCls: 'x-plain',
                            hasUpload: true,
                            items: [
                                {
                                    xtype: 'filefield',
                                    name: 'PeticionArchivo010401[file]',
                                    itemId: 'fileArchivoPlanAccion',
                                    fieldLabel: 'Cargar Archivo',
                                    labelWidth: 120,
                                    margin: 5,
                                    msgTarget: 'side',
                                    labelAlign: 'left',
                                    allowBlank: false,
                                    buttonConfig: {
                                        iconCls: 'icon_picture',
                                        text: ''
                                    },
                                    columnWidth: 0.25
                                }
                            ]
                        },
                        {
                            xtype: 'button',
                            itemId: 'btnCargaPlanAccion',
                            text: 'Cargar Archivo',
                            margin: 5,
                            columnWidth: 1
                        }
                    ]
                }
            ]
        });
        me.callParent(arguments);
    }
});