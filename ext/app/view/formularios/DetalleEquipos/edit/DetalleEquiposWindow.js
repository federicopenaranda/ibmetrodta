Ext.define('ibmetrodta.view.formularios.DetalleEquipos.edit.DetalleEquiposWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.formularios.detalleequipos.edit.detalleequiposwindow',
    requires: [
        'ibmetrodta.view.formularios.DetalleEquipos.edit.DetalleEquiposForm'
    ],
    iconCls: 'icon_user',
    width: 650,
    height: 500,
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
                    xtype: 'formularios.detalleequipos.edit.detalleequiposform'
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