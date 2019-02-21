Ext.define('ibmetrodta.view.proceso.Peticion.Lista', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.proceso.peticion.lista',
    header: false,
    iconCls: 'icon_user',
    store: { type: 'proceso.peticion' },
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
                        text: 'Código de Trámite',
                        dataIndex: 'fk_id_codigo_peticion',
                        renderer: function( value, metaData, record, rowIndex, colIndex, store, view ) {
                            return record.get('codigo_peticion');
                        }
                    },
                    {
                        text: 'Código de Trámite (Temporal)',
                        dataIndex: 'codigo_temporal',
                        renderer: function( value, metaData, record, rowIndex, colIndex, store, view ) {
                            return record.get('codigo_temporal');
                        }
                    },
                    {
                        text: 'Tipo de Proceso',
                        dataIndex: 'fk_id_proceso',
                        renderer: function (value, metaData, record, rowIndex, colIndex, store, view) {
                            return record.get('nombre_proceso');
                        }
                    },
                    {
                        text: 'OEC',
                        dataIndex: 'fk_id_oec',
                        renderer: function (value, metaData, record, rowIndex, colIndex, store, view) {
                            return record.get('nombre_oec');
                        }
                    },
                    {
                        text: 'Gestión',
                        dataIndex: 'titulo_peticion'
                    },
                    {
                        text: 'Descripcion de Trámite',
                        dataIndex: 'descripcion_peticion',
                        hidden: true
                    },
                    {
                        text: 'Código de Acreditación',
                        dataIndex: 'codigo_acreditacion_peticion',
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
                            //hidden: me.privilegio('peticion.add'),
                            itemId: 'add',
                            iconCls: 'icon_add',
                            text: 'Añadir'
                        },
                        {
                            xtype: 'button',
                            //hidden: me.privilegio('peticion.edit'),
                            itemId: 'edit',
                            iconCls: 'icon_edit',
                            text: 'Editar'
                        },
                        {
                            xtype: 'button',
                            //hidden: me.privilegio('peticion.delete'),
                            itemId: 'delete',
                            iconCls: 'icon_delete',
                            text: 'Eliminar'
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