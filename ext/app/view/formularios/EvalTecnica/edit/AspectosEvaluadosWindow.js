Ext.define('ibmetrodta.view.formularios.EvalTecnica.edit.AspectosEvaluadosWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.formularios.evaltecnica.edit.aspectosevaluadoswindow',
    requires: [
        'ibmetrodta.view.formularios.EvalTecnica.edit.AspectosEvaluadosForm'
    ],
    iconCls: 'icon_gear',
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
                    xtype: 'formularios.evaltecnica.edit.aspectosevaluadosform'
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