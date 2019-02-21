Ext.define('ibmetrodta.view.formularios.EvalTecnica.edit.EvalTecnicaWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.formularios.evaltecnica.edit.evaltecnicawindow',
    requires: [
        'ibmetrodta.view.formularios.EvalTecnica.edit.EvalTecnicaForm'
    ],
    iconCls: 'icon_user',
    width: 760,
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
                    xtype: 'formularios.evaltecnica.edit.evaltecnicaform'
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