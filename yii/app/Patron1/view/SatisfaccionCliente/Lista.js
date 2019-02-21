Ext.define('ibmetrodta.view.formularios.SatisfaccionCliente.Lista', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.formularios.satisfaccioncliente.lista',
    title: 'Administrar SatisfaccionCliente',
    iconCls: 'icon_gear',
    store: 'SatisfaccionCliente',
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
                        text: 'Peticion',
                        dataIndex: 'fk_id_peticion',
                        renderer: function( value, metaData, record, rowIndex, colIndex, store, view ) {
                            return record.get( 'codigo_peticion' ); // Debe estar en el modelo
                        }
                    },
					{
                        text: 'Reclamos Satisfaccion Cliente',
                        dataIndex: 'reclamos_satisfaccion_cliente'
                    },
					{
                        text: 'Empresa Satisfaccion Cliente',
                        dataIndex: 'empresa_satisfaccion_cliente'
                    },
					{
                        text: 'Contacto Satisfaccion Cliente',
                        dataIndex: 'contacto_satisfaccion_cliente'
                    },
					{
                        text: 'Lugar Satisfaccion Cliente',
                        dataIndex: 'lugar_satisfaccion_cliente'
                    },
					{
                        text: 'Fecha Satisfaccion Cliente',
                        dataIndex: 'fecha_satisfaccion_cliente',
                        renderer: Ext.util.Format.dateRenderer('Y-m-d')
                    },
					{
                        text: 'Fecha Creacion Satisfaccion Cliente',
                        dataIndex: 'fecha_creacion_satisfaccion_cliente',
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
                            //hidden: me.privilegio('satisfaccioncliente.add'),
                            itemId: 'add',
                            iconCls: 'icon_add',
                            text: 'Añadir'
                        },
                        {
                            xtype: 'button',
                            //hidden: me.privilegio('satisfaccioncliente.edit'),
                            itemId: 'edit',
                            iconCls: 'icon_edit',
                            text: 'Editar'
                        },
                        {
                            xtype: 'button',
                            //hidden: me.privilegio('satisfaccioncliente.delete'),
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