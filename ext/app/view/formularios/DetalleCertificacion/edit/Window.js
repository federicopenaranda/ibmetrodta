Ext.define('ibmetrodta.view.formularios.DetalleCertificacion.edit.Window', {
    extend: 'Ext.window.Window',
    alias: 'widget.formularios.detallecertificacion.edit.window',
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
                    xtype: 'formularios.detallecertificacion.lista'
                }
            ]
        });
        me.callParent(arguments);
    }
});