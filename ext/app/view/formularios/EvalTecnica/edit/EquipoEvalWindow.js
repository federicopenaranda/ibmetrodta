Ext.define('ibmetrodta.view.formularios.EvalTecnica.edit.EquipoEvalWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.formularios.evaltecnica.edit.equipoevalwindow',
    requires: [
        'ibmetrodta.view.formularios.EvalTecnica.edit.EquipoEvalForm'
    ],
    iconCls: 'icon_gear',
    width: 650,
    height: 520,
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
                    xtype: 'formularios.evaltecnica.edit.equipoevalform'
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