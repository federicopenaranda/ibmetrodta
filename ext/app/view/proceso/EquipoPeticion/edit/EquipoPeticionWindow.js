Ext.define('ibmetrodta.view.proceso.EquipoPeticion.edit.EquipoPeticionWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.proceso.equipopeticion.edit.equipopeticionwindow',
    requires: [
        'ibmetrodta.view.proceso.EquipoPeticion.edit.EquipoPeticionForm'
    ],
    iconCls: 'icon_user',
    width: 600,
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
                    xtype: 'proceso.equipopeticion.edit.equipopeticionform'
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