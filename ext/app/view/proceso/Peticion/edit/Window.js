Ext.define('ibmetrodta.view.proceso.Peticion.edit.Window', {
    extend: 'Ext.window.Window',
    alias: 'widget.proceso.peticion.edit.window',
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
                    xtype: 'proceso.peticion.lista'
                }
            ]
        });
        me.callParent(arguments);
    }
});