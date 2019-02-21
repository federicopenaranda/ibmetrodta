Ext.define('ibmetrodta.view.oec.Oec.edit.OecAcreditacionSolicitadaWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.oec.oec.edit.oecacreditacionsolicitadawindow',
    requires: [
        'ibmetrodta.view.oec.Oec.edit.OecAcreditacionSolicitadaForm'
    ],
    iconCls: 'icon_entidad',
    width: 450,
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
                    xtype: 'oec.oec.edit.oecacreditacionsolicitadaform'
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