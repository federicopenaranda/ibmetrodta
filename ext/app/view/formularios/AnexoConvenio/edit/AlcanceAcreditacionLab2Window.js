Ext.define('ibmetrodta.view.formularios.AnexoConvenio.edit.AlcanceAcreditacionLab2Window', {
    extend: 'Ext.window.Window',
    alias: 'widget.formularios.anexoconvenio.edit.alcanceacreditacionlab2window',
    requires: [
        'ibmetrodta.view.formularios.AnexoConvenio.edit.AlcanceAcreditacionLab2Form'
    ],
    iconCls: 'icon_gear',
    width: 550,
    height: 400,
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
                    xtype: 'formularios.anexoconvenio.edit.alcanceacreditacionlab2form'
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