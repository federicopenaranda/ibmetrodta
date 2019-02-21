Ext.define('ibmetrodta.view.oec.OecAcreditacionSolicitada.edit.Window', {
    extend: 'Ext.window.Window',
    alias: 'widget.oec.oecacreditacionsolicitada.edit.window',
    iconCls: 'icon_user',
    width: 800,
    height: 400,
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
                    xtype: 'oec.oecacreditacionsolicitada.lista'
                }
            ]
        });
        me.callParent(arguments);
    }
});