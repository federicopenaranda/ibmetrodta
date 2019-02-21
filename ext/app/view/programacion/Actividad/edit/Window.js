Ext.define('ibmetrodta.view.programacion.Actividad.edit.Window', {
    extend: 'Ext.window.Window',
    alias: 'widget.programacion.actividad.edit.window',
    requires: [
        'ibmetrodta.view.programacion.Actividad.edit.ActividadForm'
    ],
    iconCls: 'icon_entidad',
    width: 880,
    height: 560,
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
                    xtype: 'programacion.actividad.edit.actividadform'
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