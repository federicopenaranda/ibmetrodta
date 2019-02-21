Ext.define('ibmetrodta.view.evaluacion.Evaluacion.edit.Window', {
    extend: 'Ext.window.Window',
    alias: 'widget.evaluacion.evaluacion.edit.window',
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
                    xtype: 'evaluacion.evaluacion.lista'
                }
            ]
        });
        me.callParent(arguments);
    }
});