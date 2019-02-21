Ext.define('ibmetrodta.view.tramite.Tramite.edit.Window', {
    extend: 'Ext.window.Window',
    alias: 'widget.tramite.tramite.edit.window',
    requires: [
        'ibmetrodta.view.tramite.Tramite.edit.Form'
    ],
    iconCls: 'icon_entidad',
    width: 880,
    height: 560,
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
                    xtype: 'tramite.tramite.edit.form'
                }
            ]
        });
        me.callParent(arguments);
    }
});