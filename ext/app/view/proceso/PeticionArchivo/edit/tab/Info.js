Ext.define('ibmetrodta.view.proceso.PeticionArchivo.edit.tab.Info', {
    extend: 'Ext.form.Panel',
    alias: 'widget.proceso.peticionarchivo.edit.tab.info',
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
                            itemId: 'formPeticionArchivo',
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
                                    itemId: 'filePeticionArchivo',
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
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    items: [
                        {
                            xtype: 'textfield',
                            itemId: 'descripcion_peticion_archivo',
                            name: 'descripcion_peticion_archivo',
                            fieldLabel: 'Nombre de Archivo'
                        }
                    ]
                }
            ]
        });
        me.callParent(arguments);
    }
});