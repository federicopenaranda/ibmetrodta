Ext.define('ibmetrodta.view.proceso.PeticionArchivoPlanAccion.edit.PeticionArchivoPlanAccionWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.proceso.peticionarchivoplanaccion.edit.peticionarchivoplanaccionwindow',
    requires: [
        'ibmetrodta.view.proceso.PeticionArchivoPlanAccion.edit.PeticionArchivoPlanAccionForm'
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
                    xtype: 'proceso.peticionarchivoplanaccion.edit.peticionarchivoplanaccionform'
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