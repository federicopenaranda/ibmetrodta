Ext.define('ibmetrodta.view.formularios.DetalleEquipos.edit.Window', {
    extend: 'Ext.window.Window',
    alias: 'widget.formularios.detalleequipos.edit.window',
    requires: [
        'ibmetrodta.view.formularios.DetalleEquipos.edit.Form'
    ],
    iconCls: 'icon_gear',
    width: 850,
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
                    xtype: 'formularios.detalleequipos.edit.form'
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