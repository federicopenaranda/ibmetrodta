Ext.define('ibmetrodta.view.usuario.UsuarioTipo.edit.tab.Info', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.usuario.usuariotipo.edit.tab.info',
    bodyPadding: 0,
    margin: -5,
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'usuario.usuariotipo.edit.usuarioform',
                    title: 'Administración de UsuarioTipo',
                    iconCls: 'icon_gear',
                    store: Ext.create( 'ibmetrodta.store.usuario.UsuarioTipo', {
                        pageSize: 10
                    })
                }
            ]
        });
        me.callParent(arguments);
    }
});