Ext.define('ibmetrodta.view.oec.Oec.edit.OecContactoWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.oec.oec.edit.oeccontactowindow',
    requires: [
        'ibmetrodta.view.oec.Oec.edit.OecContactoForm'
    ],
    iconCls: 'icon_entidad',
    width: 550,
    height: 400,
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
                    xtype: 'oec.oec.edit.oeccontactoform'
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