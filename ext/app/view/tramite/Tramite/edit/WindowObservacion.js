Ext.define('ibmetrodta.view.tramite.Tramite.edit.WindowObservacion', {
    extend: 'Ext.window.Window',
    alias: 'widget.tramite.tramite.edit.windowobservacion',
    requires: [
        'ibmetrodta.view.tramite.Tramite.edit.FormObservacion'
    ],
    iconCls: 'icon_entidad',
    width: 650,
    height: 460,
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
                    xtype: 'tramite.tramite.edit.formobservacion'
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