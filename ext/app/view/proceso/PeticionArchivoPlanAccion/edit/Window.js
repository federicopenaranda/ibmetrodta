Ext.define('ibmetrodta.view.proceso.PeticionArchivoPlanAccion.edit.Window', {
    extend: 'Ext.window.Window',
    alias: 'widget.proceso.peticionarchivoplanaccion.edit.window',
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
                    xtype: 'proceso.peticionarchivoplanaccion.lista'
                }
            ]
        });
        me.callParent(arguments);
    }
});