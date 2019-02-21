Ext.define('ibmetrodta.view.proceso.PeticionArchivoAdicional.edit.PeticionArchivoAdicionalWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.proceso.peticionarchivoadicional.edit.peticionarchivoadicionalwindow',
    requires: [
        'ibmetrodta.view.proceso.PeticionArchivoAdicional.edit.PeticionArchivoAdicionalForm'
    ],
    iconCls: 'icon_user',
    width: 680,
    height: 450,
    modal: true,
    resizable: true,
    draggable: true,
    constrainHeader: true,
    layout: 'fit',
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
            items: [
                {
                    // include form
                    xtype: 'proceso.peticionarchivoadicional.edit.peticionarchivoadicionalform'
                }
            ],
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'bottom',
                    ui: 'footer',
                    items: [
                        {
                            xtype: 'button',
                            itemId: 'cancel',
                            text: 'Cancelar',
                            iconCls: 'icon_delete'
                        },
                        '->',
                        {
                            xtype: 'button',
                            itemId: 'save',
                            text: 'Guardar',
                            iconCls: 'icon_save'
                        }
                    ]
                }
            ]
        });
        me.callParent(arguments);
    }
});