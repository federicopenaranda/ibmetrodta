Ext.define('ibmetrodta.view.programacion.ActividadUsuario.edit.Window', {
    extend: 'Ext.window.Window',
    alias: 'widget.programacion.actividadusuario.edit.window',
    requires: [
        'ibmetrodta.view.programacion.ActividadUsuario.edit.ActividadUsuarioForm'
    ],
    iconCls: 'icon_entidad',
    width: 450,
    height: 260,
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
                    xtype: 'programacion.actividadusuario.edit.actividadusuarioform'
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