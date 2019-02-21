Ext.define('ibmetrodta.view.layout.North', {
    extend: 'Ext.panel.Panel',
    // alias allows us to define a custom xtype for this component, which we can use as a shortcut
    // for adding this component as a child of another
    alias: 'widget.layout.north',
    region: 'north',
    bodyPadding: 5,
    html: '<table><tr><td><img id="logo" src="./resources/images/logodta.png" /></td><td><h2 style="margin-left: 20px">Sistema de Acreditaci&oacute;n</h2></td></tr></table>',
    cls: 'header',
    items: [
        {

        }
    ],
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
            
        });
        me.callParent(arguments);
    }
});