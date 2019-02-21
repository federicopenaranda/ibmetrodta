Ext.define('ibmetrodta.view.usuario.Usuario.Lista', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.usuario.usuario.lista',
    title: 'Administrar Usuario',
    iconCls: 'icon_gear',
    store: 'Usuario',
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
                        text: 'Primer Nombre Usuario',
                        dataIndex: 'primer_nombre_usuario'
                    },
					{
                        text: 'Segundo Nombre Usuario',
                        dataIndex: 'segundo_nombre_usuario'
                    },
					{
                        text: 'Apellido Paterno Usuario',
                        dataIndex: 'apellido_paterno_usuario'
                    },
					{
                        text: 'Apellido Materno Usuario',
                        dataIndex: 'apellido_materno_usuario'
                    },
					{
                        text: 'Codigo Usuario',
                        dataIndex: 'codigo_usuario'
                    },
					{
                        text: 'Login Usuario',
                        dataIndex: 'login_usuario'
                    },
					{
                        text: 'Contrasena Usuario',
                        dataIndex: 'contrasena_usuario'
                    },
					{
                        text: 'Sexo Usuario',
                        dataIndex: 'sexo_usuario'
                    },
					{
                        text: 'Telefono Usuario',
                        dataIndex: 'telefono_usuario'
                    },
					{
                        text: 'Celular Usuario',
                        dataIndex: 'celular_usuario'
                    },
					{
                        text: 'Correo Usuario',
                        dataIndex: 'correo_usuario'
                    },
					{
                        text: 'Direccion Usuario',
                        dataIndex: 'direccion_usuario'
                    },
					{
                        text: 'Imagen Usuario',
                        dataIndex: 'imagen_usuario'
                    },
					{
                        text: 'Observaciones Usuario',
                        dataIndex: 'observaciones_usuario'
                    },
					{
                        text: 'Acceso Ip Usuario',
                        dataIndex: 'acceso_ip_usuario'
                    },
					{
                        text: 'Fecha Creacion Usuario',
                        dataIndex: 'fecha_creacion_usuario',
                        renderer: Ext.util.Format.dateRenderer('Y-m-d')
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
                            //hidden: me.privilegio('usuario.add'),
                            itemId: 'add',
                            iconCls: 'icon_add',
                            text: 'Añadir'
                        },
                        {
                            xtype: 'button',
                            //hidden: me.privilegio('usuario.edit'),
                            itemId: 'edit',
                            iconCls: 'icon_edit',
                            text: 'Editar'
                        },
                        {
                            xtype: 'button',
                            //hidden: me.privilegio('usuario.delete'),
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