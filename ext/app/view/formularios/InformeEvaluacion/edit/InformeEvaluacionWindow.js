Ext.define('ibmetrodta.view.formularios.InformeEvaluacion.edit.InformeEvaluacionWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.formularios.informeevaluacion.edit.informeevaluacionwindow',
    requires: [
        'ibmetrodta.view.formularios.InformeEvaluacion.edit.InformeEvaluacionForm'
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
                    xtype: 'formularios.informeevaluacion.edit.informeevaluacionform'
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