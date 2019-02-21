Ext.define('ibmetrodta.view.proceso.EquipoPeticion.Lista', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.proceso.equipopeticion.lista',
    store: {type: 'proceso.equipopeticion'},
    emptyText: 'Equipo no Asignado',
    overflowY: 'auto',
    margin: 10,
    initComponent: function () {
        var me = this;
        Ext.applyIf(me, {
            columns: {
                items: [
                    {
                        text: 'Nombre1',
                        dataIndex: 'primer_nombre_usuario',
                        flex: 0.1
                    },
                    {
                        text: 'Nombre2',
                        dataIndex: 'segundo_nombre_usuario',
                        flex: 0.1,
                        hidden: true
                    },
                    {
                        text: 'Apellido1',
                        dataIndex: 'apellido_paterno_usuario',
                        flex: 0.1
                    },
                    {
                        text: 'Apellido2',
                        dataIndex: 'apellido_materno_usuario',
                        flex: 0.1,
                        hidden: true
                    },
                    {
                        text: 'Empresa',
                        dataIndex: 'empresa_usuario',
                        flex: 0.1
                    },
                    {
                        text: 'Tipo',
                        dataIndex: 'nombre_usuario_tipo',
                        flex: 0.1,
                        renderer: function (value, metaData, record, rowIndex, colIndex, store, view) {
                            if ( record.data.usuarioTipo000201s.length > 0 )
                            {
                                return record.data.usuarioTipo000201s[0].descripcion_usuario_tipo;
                            }
                            else
                            {
                                return '';
                            }
                        }
                    },
                    {
                        text: 'Núm. de Horas',
                        dataIndex: 'cantidad_horas_equipo_peticion',
                        flex: 0.1
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
                            itemId: 'add',
                            iconCls: 'icon_add',
                            text: 'Añadir'
                        },
                        {
                            xtype: 'button',
                            itemId: 'edit',
                            iconCls: 'icon_edit',
                            text: 'Editar'
                            //hidden: storePrivilegios.findRecord('nombre','familia.edit').getData().valor
                        },
                        {
                            xtype: 'button',
                            itemId: 'delete',
                            iconCls: 'icon_delete',
                            text: 'Eliminar'
                            //hidden: storePrivilegios.findRecord('nombre','familia.delete').getData().valor
                        }
                    ]
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