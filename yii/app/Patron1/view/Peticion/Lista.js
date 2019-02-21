Ext.define('ibmetrodta.view.proceso.Peticion.Lista', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.proceso.peticion.lista',
    title: 'Administrar Peticion',
    iconCls: 'icon_gear',
    store: 'Peticion',
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
                        text: 'Proceso',
                        dataIndex: 'fk_id_proceso',
                        renderer: function( value, metaData, record, rowIndex, colIndex, store, view ) {
                            return record.get( 'nombre_proceso' ); // Debe estar en el modelo
                        }
                    },
					{
                        text: 'Oec',
                        dataIndex: 'fk_id_oec',
                        renderer: function( value, metaData, record, rowIndex, colIndex, store, view ) {
                            return record.get( 'nombre_oec' ); // Debe estar en el modelo
                        }
                    },
					{
                        text: 'Titulo Peticion',
                        dataIndex: 'titulo_peticion'
                    },
					{
                        text: 'Fechahora Peticion',
                        dataIndex: 'fechahora_peticion',
                        renderer: Ext.util.Format.dateRenderer('Y-m-d')
                    },
					{
                        text: 'Codigo Peticion',
                        dataIndex: 'codigo_peticion'
                    },
					{
                        text: 'Descripcion Peticion',
                        dataIndex: 'descripcion_peticion'
                    },
					{
                        text: 'Codigo Acreditacion Peticion',
                        dataIndex: 'codigo_acreditacion_peticion'
                    },
					{
                        text: 'Fecha Creacion Peticion',
                        dataIndex: 'fecha_creacion_peticion',
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