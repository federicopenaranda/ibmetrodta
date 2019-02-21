Ext.define('ibmetrodta.view.layout.Landing', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.layout.landing',
    region: 'center',
    title: 'Pantalla Inicial',
    html: '<h1>Sistema de Acreditación</h1>',
    initComponent: function(){
        var me = this;
        Ext.applyIf(me,{

        });
        me.callParent( arguments );
    } 
});