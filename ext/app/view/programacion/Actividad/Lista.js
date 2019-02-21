Ext.define('ibmetrodta.view.programacion.Actividad.Lista', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.programacion.actividad.lista',
    title: 'Administrar Actividades',
    iconCls: 'icon_status',
    store: {type: 'programacion.actividad'},
    initComponent: function () {
        var me = this;
        Ext.applyIf(me, {
            columns: {
                defaults: {
                    flex: .2
                },
                items: [
                    {
                        text: 'OEC',
                        dataIndex: 'fk_id_oec',
                        renderer: function (value, metaData, record, rowIndex, colIndex, store, view) {
                            return record.get('nombre_oec');
                        }
                    },
                    {
                        text: 'Tipo de Actividad',
                        dataIndex: 'fk_id_tipo_actividad',
                        renderer: function (value, metaData, record, rowIndex, colIndex, store, view) {
                            return record.get('nombre_tipo_actividad');
                        }
                    },
                    {
                        text: 'Tipo de Curso',
                        dataIndex: 'fk_id_tipo_curso',
                        renderer: function (value, metaData, record, rowIndex, colIndex, store, view) {
                            return record.get('nombre_tipo_curso');
                        }
                    },
                    {
                        text: 'Código',
                        dataIndex: 'codigo_actividad'
                    },
                    {
                        text: 'Fecha',
                        dataIndex: 'fecha_actividad',
                        hidden: true
                    },
                    {
                        text: 'Título de Actividad',
                        dataIndex: 'nombre_actividad'
                    },
                    {
                        text: 'Descripción',
                        dataIndex: 'descripcion_actividad',
                        hidden: true
                    },
                    {
                        text: 'Horas',
                        dataIndex: 'horas_actividad'
                    },
                    {
                        text: 'Fecha Inicio',
                        dataIndex: 'fecha_inicial_actividad',
                        renderer: Ext.util.Format.dateRenderer('Y-m-d')
                    },
                    {
                        text: 'Fecha Fin',
                        dataIndex: 'fecha_final_actividad',
                        renderer: Ext.util.Format.dateRenderer('Y-m-d')
                    },
                    {
                        text: 'PRS',
                        dataIndex: 'prs_actividad'
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
                            xtype:'splitbutton',
                            itemId: 'buscar',
                            iconCls: 'icon_search',
                            text: 'Buscar',
                            menu: [
                                {text: 'Borrar Filtro', itemId: 'clear'}
                            ]
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