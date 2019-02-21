Ext.define('ibmetrodta.view.proceso.ObsPeticionAccion.edit.Window', {
    extend: 'Ext.window.Window',
    alias: 'widget.proceso.obspeticionaccion.edit.window',
    iconCls: 'icon_gear',
    accion: '',
    estado: '',
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
                    xtype: 'proceso.obspeticionaccion.lista'
                }
            ]
        });
        me.callParent(arguments);
    }
});