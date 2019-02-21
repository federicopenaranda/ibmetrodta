Ext.define('ibmetrodta.view.formularios.AnexoConvenio.Lista', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.formularios.anexoconvenio.lista',
    title: 'Administrar AnexoConvenio',
    iconCls: 'icon_gear',
    store: 'AnexoConvenio',
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
                        text: 'Norma Referencia',
                        dataIndex: 'fk_id_norma_referencia',
                        renderer: function( value, metaData, record, rowIndex, colIndex, store, view ) {
                            return record.get( 'nombre_norma_referencia' ); // Debe estar en el modelo
                        }
                    },
					{
                        text: 'Responsable Anexo Convenio',
                        dataIndex: 'responsable_anexo_convenio'
                    },
					{
                        text: 'Cargo Anexo Convenio',
                        dataIndex: 'cargo_anexo_convenio'
                    },
					{
                        text: 'Fecha Anexo Convenio',
                        dataIndex: 'fecha_anexo_convenio',
                        renderer: Ext.util.Format.dateRenderer('Y-m-d')
                    },
					{
                        text: 'Cips Anexo Convenio',
                        dataIndex: 'cips_anexo_convenio'
                    },
					{
                        text: 'Numero Anexo Convenio',
                        dataIndex: 'numero_anexo_convenio'
                    },
					{
                        text: 'Escaneado Anexo Convenio',
                        dataIndex: 'escaneado_anexo_convenio'
                    },
					{
                        text: 'Estado Anexo Convenio',
                        dataIndex: 'estado_anexo_convenio',
                        renderer: function (valor) {
                           if ( valor === 1 )
                               return 'Activo';
                           
                           if ( valor === 0 )
                               return 'Inactivo';
                           
                           return '';
                         }
                    },
					{
                        text: 'Fecha Creacion Anexo Convenio',
                        dataIndex: 'fecha_creacion_anexo_convenio',
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
                            //hidden: me.privilegio('anexoconvenio.add'),
                            itemId: 'add',
                            iconCls: 'icon_add',
                            text: 'Añadir'
                        },
                        {
                            xtype: 'button',
                            //hidden: me.privilegio('anexoconvenio.edit'),
                            itemId: 'edit',
                            iconCls: 'icon_edit',
                            text: 'Editar'
                        },
                        {
                            xtype: 'button',
                            //hidden: me.privilegio('anexoconvenio.delete'),
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