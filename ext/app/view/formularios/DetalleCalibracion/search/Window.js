Ext.define('ibmetrodta.view.formularios.DetalleCalibracion.search.Window', {
    extend: 'Ext.window.Window',
    alias: 'widget.formularios.detallecalibracion.search.window',
    requires: [
        'ibmetrodta.view.formularios.DetalleCalibracion.search.Form'
    ],
    iconCls: 'icon_search',
    width: 600,
    modal: true,
    resizable: true,
    draggable: true,
    constrainHeader: true,
    bodyPadding: 10, 
    layout: 'fit',
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'formularios.detallecalibracion.search.form'
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
                            itemId: 'search',
                            text: 'Buscar',
                            iconCls: 'icon_search'
                        }
                    ]
                }
            ]
        });
        me.callParent( arguments );
    }
});