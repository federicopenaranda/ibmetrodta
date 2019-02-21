Ext.define('ibmetrodta.view.usuario.Usuario.edit.tab.Info', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.usuario.usuario.edit.tab.info',
    bodyPadding: 0,
    margin: -5,
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'usuario.usuario.edit.usuarioform',
                    title: 'Administración de Usuario',
                    iconCls: 'icon_gear',
                    store: Ext.create( 'ibmetrodta.store.usuario.Usuario', {
                        pageSize: 10
                    })
                }
            ]
        });
        me.callParent(arguments);
    }
});