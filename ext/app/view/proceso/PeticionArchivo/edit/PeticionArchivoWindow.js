Ext.define('ibmetrodta.view.proceso.PeticionArchivo.edit.PeticionArchivoWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.proceso.peticionarchivo.edit.peticionarchivowindow',
    requires: [
        'ibmetrodta.view.proceso.PeticionArchivo.edit.PeticionArchivoForm'
    ],
    iconCls: 'icon_user',
    width: 550,
    height: 250,
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
                    xtype: 'proceso.peticionarchivo.edit.peticionarchivoform'
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