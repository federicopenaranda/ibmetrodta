Ext.define('ibmetrodta.view.formularios;display.EvalTecnica.edit.ProveedorEvalWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.formularios;display.evaltecnica.edit.proveedorevalwindow',
    requires: [
        'ibmetrodta.view.formularios;display.EvalTecnica.edit.ProveedorEvalForm'
    ],
    iconCls: 'icon_gear',
    width: 450,
    height: 300,
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
                    xtype: 'formularios;display.evaltecnica.edit.ProveedorEvalform'
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