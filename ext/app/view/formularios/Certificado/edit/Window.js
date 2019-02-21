Ext.define('ibmetrodta.view.formularios.Certificado.edit.Window', {
    extend: 'Ext.window.Window',
    alias: 'widget.formularios.certificado.edit.window',
    iconCls: 'icon_gear',
    width: 850,
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
                    xtype: 'formularios.certificado.lista'
                }
            ]
        });
        me.callParent(arguments);
    }
});