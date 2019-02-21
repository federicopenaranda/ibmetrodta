Ext.define('ibmetrodta.view.formularios.AnexoConvenio.edit.Window', {
    extend: 'Ext.window.Window',
    alias: 'widget.formularios.anexoconvenio.edit.window',
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
                    xtype: 'formularios.anexoconvenio.lista'
                }
            ]
        });
        me.callParent(arguments);
    }
});