	Ext.define('ibmetrodta.view.oec.OecAcreditacionSolicitada.edit.OecAcreditacionSolicitadaWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.oec.oecacreditacionsolicitada.edit.oecacreditacionsolicitadawindow',
    requires: [
        'ibmetrodta.view.oec.OecAcreditacionSolicitada.edit.Form'
    ],
    iconCls: 'icon_user',
    width: 600,
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
                    xtype: 'oec.oecacreditacionsolicitada.edit.form'
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