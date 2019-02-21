Ext.define('ibmetrodta.view.formularios.DetalleCertificacion.edit.DetalleCertificacionWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.formularios.detallecertificacion.edit.detallecertificacionwindow',
    requires: [
        'ibmetrodta.view.formularios.DetalleCertificacion.edit.DetalleCertificacionForm'
    ],
    iconCls: 'icon_user',
    width: 600,
    height: 500,
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
                    xtype: 'formularios.detallecertificacion.edit.detallecertificacionform'
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