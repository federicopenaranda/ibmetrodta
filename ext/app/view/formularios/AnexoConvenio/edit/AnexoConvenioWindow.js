Ext.define('ibmetrodta.view.formularios.AnexoConvenio.edit.AnexoConvenioWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.formularios.anexoconvenio.edit.anexoconveniowindow',
    requires: [
        'ibmetrodta.view.formularios.AnexoConvenio.edit.AnexoConvenioForm'
    ],
    iconCls: 'icon_user',
    width: 750,
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
                    xtype: 'formularios.anexoconvenio.edit.anexoconvenioform'
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