Ext.define('ibmetrodta.view.formularios.DesignacionEvaluador.edit.DesignacionEvaluadorWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.formularios.designacionevaluador.edit.designacionevaluadorwindow',
    requires: [
        'ibmetrodta.view.formularios.DesignacionEvaluador.edit.DesignacionEvaluadorForm'
    ],
    iconCls: 'icon_user',
    width: 600,
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
                    xtype: 'formularios.designacionevaluador.edit.designacionevaluadorform'
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