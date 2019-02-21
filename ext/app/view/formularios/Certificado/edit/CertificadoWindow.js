Ext.define('ibmetrodta.view.formularios.Certificado.edit.CertificadoWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.formularios.certificado.edit.certificadowindow',
    requires: [
        'ibmetrodta.view.formularios.Certificado.edit.CertificadoForm'
    ],
    iconCls: 'icon_user',
    width: 600,
    height: 450,
    modal: true,
    resizable: true,
    draggable: true,
    constrainHeader: true,
    layout: 'fit',
    initComponent: function() {
        var me = this;
        console.log('certificadowindow');
        Ext.applyIf(me, {
            items: [
                {
                    // include form
                    xtype: 'formularios.certificado.edit.certificadoform'
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