Ext.define('ibmetrodta.view.formularios.AnexoConvenio.edit.AlcanceAcreditacionCertWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.formularios.anexoconvenio.edit.alcanceacreditacioncertwindow',
    requires: [
        'ibmetrodta.view.formularios.AnexoConvenio.edit.AlcanceAcreditacionCertForm'
    ],
    iconCls: 'icon_gear',
    width: 450,
    height: 300,
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
                    xtype: 'formularios.anexoconvenio.edit.AlcanceAcreditacionCertform'
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