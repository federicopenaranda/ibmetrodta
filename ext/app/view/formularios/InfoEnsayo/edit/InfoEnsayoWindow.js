Ext.define('ibmetrodta.view.formularios.InfoEnsayo.edit.InfoEnsayoWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.formularios.infoensayo.edit.infoensayowindow',
    requires: [
        'ibmetrodta.view.formularios.InfoEnsayo.edit.InfoEnsayoForm'
    ],
    iconCls: 'icon_user',
    width: 850,
    height: 550,
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
                    xtype: 'formularios.infoensayo.edit.infoensayoform'
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