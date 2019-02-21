Ext.define('ibmetrodta.view.evaluacion.Evaluacion.edit.AlcanceAcreditacionInspWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.evaluacion.evaluacion.edit.alcanceacreditacioninspwindow',
    requires: [
        'ibmetrodta.view.evaluacion.Evaluacion.edit.AlcanceAcreditacionInspForm'
    ],
    iconCls: 'icon_gear',
    width: 650,
    height: 420,
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
                    xtype: 'evaluacion.evaluacion.edit.alcanceacreditacioninspform'
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