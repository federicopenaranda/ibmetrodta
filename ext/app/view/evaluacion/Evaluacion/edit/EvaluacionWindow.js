Ext.define('ibmetrodta.view.evaluacion.Evaluacion.edit.EvaluacionWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.evaluacion.evaluacion.edit.evaluacionwindow',
    requires: [
        'ibmetrodta.view.evaluacion.Evaluacion.edit.EvaluacionForm'
    ],
    iconCls: 'icon_user',
    width: 800,
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
                    xtype: 'evaluacion.evaluacion.edit.evaluacionform'
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