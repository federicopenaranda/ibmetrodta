Ext.define('ibmetrodta.view.proceso.PeticionArchivo.edit.Window', {
    extend: 'Ext.window.Window',
    alias: 'widget.proceso.peticionarchivo.edit.window',
    iconCls: 'icon_gear',
    width: 850,
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
                    xtype: 'proceso.peticionarchivo.lista'
                }
            ]
        });
        me.callParent(arguments);
    }
});