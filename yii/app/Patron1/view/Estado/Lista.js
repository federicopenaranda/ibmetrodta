Ext.define('ibmetrodta.view.proceso.Estado.Lista', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.proceso.estado.lista',
    title: 'Administrar Estado',
    iconCls: 'icon_gear',
    store: 'Estado',
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
                        text: 'Estado Tipo',
                        dataIndex: 'fk_id_estado_tipo',
                        renderer: function( value, metaData, record, rowIndex, colIndex, store, view ) {
                            return record.get( 'nombre_proceso_estado' ); // Debe estar en el modelo
                        }
                    },
					{
                        text: 'Proceso',
                        dataIndex: 'fk_id_proceso',
                        renderer: function( value, metaData, record, rowIndex, colIndex, store, view ) {
                            return record.get( 'nombre_proceso' ); // Debe estar en el modelo
                        }
                    },
					{
                        text: 'Nombre Estado',
                        dataIndex: 'nombre_estado'
                    },
					{
                        text: 'Descripcion Estado',
                        dataIndex: 'descripcion_estado'
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
                            //hidden: me.privilegio('estado.add'),
                            itemId: 'add',
                            iconCls: 'icon_add',
                            text: 'Añadir'
                        },
                        {
                            xtype: 'button',
                            //hidden: me.privilegio('estado.edit'),
                            itemId: 'edit',
                            iconCls: 'icon_edit',
                            text: 'Editar'
                        },
                        {
                            xtype: 'button',
                            //hidden: me.privilegio('estado.delete'),
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