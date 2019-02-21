Ext.define('ibmetrodta.view.programacion.Actividad.edit.tab.ActividadUsuario', {
    extend: 'Ext.form.Panel',
    alias: 'widget.programacion.actividad.edit.tab.actividadusuario',
    bodyPadding: 0,
    margin: -5,
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'programacion.actividadusuario.lista',
                    title: 'Usuarios de Actividad',
                    iconCls: 'icon_status',
                    store: Ext.create( 'ibmetrodta.store.programacion.ActividadUsuario', {
                        pageSize: 10
                    })
                }
            ]
        });
        me.callParent(arguments);
    }
});