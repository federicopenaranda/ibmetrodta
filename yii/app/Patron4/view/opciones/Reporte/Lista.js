Ext.define('ibmetrodta.view.opciones.Reporte.Lista', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.opciones.reporte.lista',
    title: 'Administrar Reporte',
    iconCls: 'icon_user',
    store: 'Reporte',
    minHeight: 250,
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
            columns: {
                defaults: {
                	flex: .2
                },
                items: [
					{
                        text: 'Codigo Reporte',
                        dataIndex: 'codigo_reporte'
                    },
					{
                        text: 'Nombre Reporte',
                        dataIndex: 'nombre_reporte'
                    },
					{
                        text: 'Descripcion Reporte',
                        dataIndex: 'descripcion_reporte'
                    },
					{
                        text: 'Estado Reporte',
                        dataIndex: 'estado_reporte',
                        renderer: function (valor) {
                           if ( valor === 1 )
                               return 'Activo';
                           
                           if ( valor === 0 )
                               return 'Inactivo';
                           
                           return '';
                       	}
                    },
					{
                        text: 'Ruta Reporte',
                        dataIndex: 'ruta_reporte'
                    },
					 {
                        text: 'Tipo Reporte',
                        dataIndex: 'tipo_reporte'
                     }
                ]
            },
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    ui: 'footer',
                    items: [
                        {
                            xtype: 'button',
                            //hidden: me.privilegio('opciones.reporte.add'),
                            itemId: 'add',
                            iconCls: 'icon_add',
                            text: 'Añadir'
                        },
                        {
                            xtype: 'button',
                            //hidden: me.privilegio('opciones.reporte.edit'),
                            itemId: 'edit',
                            iconCls: 'icon_edit',
                            text: 'Editar'
                        },
                        {
                            xtype: 'button',
                            //hidden: me.privilegio('opciones.reporte.delete'),
                            itemId: 'delete',
                            iconCls: 'icon_delete',
                            text: 'Eliminar'
                        }
                    ]
                },
                {
                    xtype: 'pagingtoolbar',
                    ui: 'footer',
                    defaultButtonUI: 'default',
                    dock: 'bottom',
                    displayInfo: true,
                    store: me.getStore()
                }
            ]
        });
        me.callParent(arguments);
    },


    privilegio: function( opcion ) {
        var storePrivilegios = Ext.data.StoreManager.lookup('usuario.UsuarioPrivilegio');
        var res = storePrivilegios.findRecord('nombre_privilegio_usuario', opcion);
        return ( res !== null ) ? false : true;
    }
});