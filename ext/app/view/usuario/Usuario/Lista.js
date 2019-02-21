Ext.define('ibmetrodta.view.usuario.Usuario.Lista', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.usuario.usuario.lista',
    title: 'Administrar Usuario',
    iconCls: 'icon_gear',
    store: 'Usuario',
    minHeight: 250,
    initComponent: function () {
        var me = this;

        Ext.applyIf(me, {
            columns: {
                defaults: {
                    flex: .2
                },
                items: [
                    {
                        text: 'Primer Nombre',
                        dataIndex: 'primer_nombre_usuario'
                    },
                    {
                        text: 'Segundo Nombre',
                        dataIndex: 'segundo_nombre_usuario'
                    },
                    {
                        text: 'Apellido Paterno',
                        dataIndex: 'apellido_paterno_usuario'
                    },
                    {
                        text: 'Apellido Materno',
                        dataIndex: 'apellido_materno_usuario'
                    },
                    {
                        text: 'Login',
                        dataIndex: 'login_usuario'
                    },
                    {
                        text: 'Código',
                        dataIndex: 'codigo_usuario'
                    },
                    {
                        text: 'Sexo Usuario',
                        dataIndex: 'sexo_usuario',
                        hidden: true
                    },
                    {
                        text: 'Teléfono',
                        dataIndex: 'telefono_usuario',
                        hidden: true
                    },
                    {
                        text: 'Celular',
                        dataIndex: 'celular_usuario',
                        hidden: true
                    },
                    {
                        text: 'Correo',
                        dataIndex: 'correo_usuario',
                        hidden: true
                    },
                    {
                        text: 'Dirección',
                        dataIndex: 'direccion_usuario',
                        hidden: true
                    },
                    {
                        text: 'Observaciones',
                        dataIndex: 'observaciones_usuario',
                        hidden: true
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
    
    
    privilegio: function (opcion) {
        var storePrivilegios = Ext.data.StoreManager.lookup('usuario.UsuarioPrivilegio');
        var res = storePrivilegios.findRecord('nombre_privilegio_usuario', opcion);
        return (res !== null) ? false : true;
    }
});