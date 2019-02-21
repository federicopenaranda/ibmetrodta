Ext.define('ibmetrodta.view.oec.Oec.Lista', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.oec.oec.lista',
    title: 'Administrar Oec',
    iconCls: 'icon_entidad',
    store: 'Oec',
    minHeight: 450,
    initComponent: function () {
        var me = this;

        Ext.applyIf(me, {
            columns: {
                defaults: {
                    flex: .2
                },
                items: [
                    {
                        text: 'Nombre',
                        dataIndex: 'nombre_oec'
                    },
                    {
                        text: 'Tipo',
                        dataIndex: 'fk_id_oec_tipo',
                        renderer: function (value, metaData, record, rowIndex, colIndex, store, view) {
                            return record.get('nombre_oec_tipo');
                        }
                    },
                    {
                        text: 'Pais',
                        dataIndex: 'fk_id_pais',
                        renderer: function (value, metaData, record, rowIndex, colIndex, store, view) {
                            return record.get('nombre_pais');
                        }
                    },
                    {
                        text: 'NIT',
                        dataIndex: 'nit_oec'
                    },
                    {
                        text: 'Direccion Oec',
                        dataIndex: 'direccion_oec',
                        hidden: true
                    },
                    {
                        text: 'Ciudad',
                        dataIndex: 'ciudad_oec'
                    },
                    {
                        text: 'Departamento',
                        dataIndex: 'departamento_oec',
                        hidden: true
                    },
                    {
                        text: 'Norma',
                        dataIndex: 'fk_id_norma_referencia',
                        renderer: function (value, metaData, record, rowIndex, colIndex, store, view) {
                            return record.get('nombre_norma_referencia');
                        }
                    },
                    {
                        text: 'Teléfono 1',
                        dataIndex: 'telefono1_oec'
                    },
                    {
                        text: 'Teléfono 2',
                        dataIndex: 'telefono2_oec',
                        hidden: true
                    },
                    {
                        text: 'Celular',
                        dataIndex: 'celular_oec',
                        hidden: true
                    },
                    {
                        text: 'Fax',
                        dataIndex: 'fax_oec',
                        hidden: true
                    },
                    {
                        text: 'Email 1',
                        dataIndex: 'email1_oec',
                        hidden: true
                    },
                    {
                        text: 'Email 2',
                        dataIndex: 'email2_oec',
                        hidden: true
                    },
                    {
                        text: 'Fecha de Creación',
                        dataIndex: 'fecha_creacion_oec',
                        renderer: Ext.util.Format.dateRenderer('Y-m-d'),
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
                            //hidden: me.privilegio('oec.add'),
                            itemId: 'add',
                            iconCls: 'icon_add',
                            text: 'Añadir'
                        },
                        {
                            xtype: 'button',
                            //hidden: me.privilegio('oec.edit'),
                            itemId: 'edit',
                            iconCls: 'icon_edit',
                            text: 'Editar'
                        },
                        {
                            xtype: 'button',
                            //hidden: me.privilegio('oec.delete'),
                            itemId: 'delete',
                            iconCls: 'icon_delete',
                            text: 'Eliminar'
                        },'->',
                        {
                            xtype: 'button',
                            //hidden: me.privilegio('oec.delete'),
                            itemId: 'tramite',
                            iconCls: 'icon_detail',
                            text: 'Trámites'
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