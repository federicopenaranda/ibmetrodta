Ext.define('ibmetrodta.view.proceso.PeticionArchivo.Lista', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.proceso.peticionarchivo.lista',
    title: 'Administrar PeticionArchivo',
    iconCls: 'icon_gear',
    store: 'PeticionArchivo',
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
                        text: 'Peticion Estado',
                        dataIndex: 'fk_id_peticion_estado',
                        renderer: function( value, metaData, record, rowIndex, colIndex, store, view ) {
                            return record.get( 'id_peticion_estado' ); // Debe estar en el modelo
                        }
                    },
					{
                        text: 'Nombre Peticion Archivo',
                        dataIndex: 'nombre_peticion_archivo'
                    },
					{
                        text: 'Version Peticion Archivo',
                        dataIndex: 'version_peticion_archivo'
                    },
					{
                        text: 'Activo Peticion Archivo',
                        dataIndex: 'activo_peticion_archivo',
                        renderer: function (valor) {
                           if ( valor === 1 )
                               return 'Activo';
                           
                           if ( valor === 0 )
                               return 'Inactivo';
                           
                           return '';
                         }
                    },
					{
                        text: 'Descripcion Peticion Archivo',
                        dataIndex: 'descripcion_peticion_archivo'
                    },
					{
                        text: 'Tipo Peticion Archivo',
                        dataIndex: 'tipo_peticion_archivo'
                    },
					{
                        text: 'Estado Peticion Archivo',
                        dataIndex: 'estado_peticion_archivo'
                    },
					{
                        text: 'Adicional Peticion Archivo',
                        dataIndex: 'adicional_peticion_archivo',
                        renderer: function (valor) {
                           if ( valor === 1 )
                               return 'Activo';
                           
                           if ( valor === 0 )
                               return 'Inactivo';
                           
                           return '';
                         }
                    },
					{
                        text: 'Escaneado Peticion Archivo',
                        dataIndex: 'escaneado_peticion_archivo'
                    },
					{
                        text: 'Fecha Creacion Peticion Archivo',
                        dataIndex: 'fecha_creacion_peticion_archivo',
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
                            //hidden: me.privilegio('peticionarchivo.add'),
                            itemId: 'add',
                            iconCls: 'icon_add',
                            text: 'Añadir'
                        },
                        {
                            xtype: 'button',
                            //hidden: me.privilegio('peticionarchivo.edit'),
                            itemId: 'edit',
                            iconCls: 'icon_edit',
                            text: 'Editar'
                        },
                        {
                            xtype: 'button',
                            //hidden: me.privilegio('peticionarchivo.delete'),
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