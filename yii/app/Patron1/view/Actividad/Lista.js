Ext.define('ibmetrodta.view.proceso.Actividad.Lista', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.proceso.actividad.lista',
    title: 'Administrar Actividad',
    iconCls: 'icon_gear',
    store: 'Actividad',
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
                        text: 'Actividad Tipo',
                        dataIndex: 'fk_id_actividad_tipo',
                        renderer: function( value, metaData, record, rowIndex, colIndex, store, view ) {
                            return record.get( 'nombre_actividad_tipo' ); // Debe estar en el modelo
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
                        text: 'Nombre Actividad',
                        dataIndex: 'nombre_actividad'
                    },
					{
                        text: 'Descripcion Actividad',
                        dataIndex: 'descripcion_actividad'
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
                            //hidden: me.privilegio('actividad.add'),
                            itemId: 'add',
                            iconCls: 'icon_add',
                            text: 'Añadir'
                        },
                        {
                            xtype: 'button',
                            //hidden: me.privilegio('actividad.edit'),
                            itemId: 'edit',
                            iconCls: 'icon_edit',
                            text: 'Editar'
                        },
                        {
                            xtype: 'button',
                            //hidden: me.privilegio('actividad.delete'),
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