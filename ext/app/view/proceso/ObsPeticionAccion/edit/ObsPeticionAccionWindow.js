Ext.define('ibmetrodta.view.proceso.ObsPeticionAccion.edit.ObsPeticionAccionWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.proceso.obspeticionaccion.edit.obspeticionaccionwindow',
    requires: [
        'ibmetrodta.view.proceso.ObsPeticionAccion.edit.ObsPeticionAccionForm'
    ],
    iconCls: 'icon_user',
    width: 650,
    height: 460,
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
                    xtype: 'proceso.obspeticionaccion.edit.obspeticionaccionform'
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