Ext.define('ibmetrodta.view.formularios.SupervisionEvaluador.edit.SupervisionEvaluadorWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.formularios.supervisionevaluador.edit.supervisionevaluadorwindow',
    requires: [
        'ibmetrodta.view.formularios.SupervisionEvaluador.edit.SupervisionEvaluadorForm'
    ],
    iconCls: 'icon_user',
    width: 1200,
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
                    xtype: 'formularios.supervisionevaluador.edit.supervisionevaluadorform'
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