Ext.define('ibmetrodta.view.proceso.EquipoPeticion.edit.Window', {
    extend: 'Ext.window.Window',
    alias: 'widget.proceso.equipopeticion.edit.window',
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
                    xtype: 'proceso.equipopeticion.lista'
                }
            ]
        });
        me.callParent(arguments);
    }
});