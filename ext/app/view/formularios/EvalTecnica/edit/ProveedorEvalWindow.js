Ext.define('ibmetrodta.view.formularios.EvalTecnica.edit.ProveedorEvalWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.formularios.evaltecnica.edit.proveedorevalwindow',
    requires: [
        'ibmetrodta.view.formularios.EvalTecnica.edit.ProveedorEvalForm'
    ],
    iconCls: 'icon_gear',
    width: 550,
    height: 320,
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
                    xtype: 'formularios.evaltecnica.edit.proveedorevalform'
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