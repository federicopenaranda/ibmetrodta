Ext.define('ibmetrodta.view.formularios.DetalleCalibracion.edit.DetalleCalibracionWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.formularios.detallecalibracion.edit.detallecalibracionwindow',
    requires: [
        'ibmetrodta.view.formularios.DetalleCalibracion.edit.DetalleCalibracionForm'
    ],
    iconCls: 'icon_user',
    width: 700,
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
                    xtype: 'formularios.detallecalibracion.edit.detallecalibracionform'
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