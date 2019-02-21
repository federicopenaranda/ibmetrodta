Ext.define('ibmetrodta.view.formularios.PruebaParticipacion.edit.PruebaParticipacionWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.formularios.pruebaparticipacion.edit.pruebaparticipacionwindow',
    requires: [
        'ibmetrodta.view.formularios.PruebaParticipacion.edit.PruebaParticipacionForm'
    ],
    iconCls: 'icon_user',
    width: 700,
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
                    xtype: 'formularios.pruebaparticipacion.edit.pruebaparticipacionform'
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