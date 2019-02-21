Ext.define('ibmetrodta.view.formularios.InfoEnsayo.Lista', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.formularios.infoensayo.lista',
    title: 'Administrar InfoEnsayo',
    iconCls: 'icon_gear',
    store: 'InfoEnsayo',
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
                        text: 'Estado Info Ensayo',
                        dataIndex: 'estado_info_ensayo',
                        renderer: function (valor) {
                           if ( valor === 1 )
                               return 'Activo';
                           
                           if ( valor === 0 )
                               return 'Inactivo';
                           
                           return '';
                         }
                    },
					{
                        text: 'Objetivo Info Ensayo',
                        dataIndex: 'objetivo_info_ensayo'
                    },
					{
                        text: 'Nombre Info Ensayo',
                        dataIndex: 'nombre_info_ensayo'
                    },
					{
                        text: 'Norma Info Ensayo',
                        dataIndex: 'norma_info_ensayo'
                    },
					{
                        text: 'Matriz Info Ensayo',
                        dataIndex: 'matriz_info_ensayo'
                    },
					{
                        text: 'Tipo Servicio Info Ensayo',
                        dataIndex: 'tipo_servicio_info_ensayo'
                    },
					{
                        text: 'Categoria Info Ensayo',
                        dataIndex: 'categoria_info_ensayo'
                    },
					{
                        text: 'Pesonal Autorizado Info Ensayo',
                        dataIndex: 'pesonal_autorizado_info_ensayo'
                    },
					{
                        text: 'Rango Medicion Info Ensayo',
                        dataIndex: 'rango_medicion_info_ensayo'
                    },
					{
                        text: 'Incertidumbre Medicion Info Ensayo',
                        dataIndex: 'incertidumbre_medicion_info_ensayo'
                    },
					{
                        text: 'Lista Equipos Utilizados Info Ensayo',
                        dataIndex: 'lista_equipos_utilizados_info_ensayo'
                    },
					{
                        text: 'Ad Calculo Incertidumbre Info Ensayo',
                        dataIndex: 'ad_calculo_incertidumbre_info_ensayo'
                    },
					{
                        text: 'Ad Confirmacion Aplicacion Info Ensayo',
                        dataIndex: 'ad_confirmacion_aplicacion_info_ensayo'
                    },
					{
                        text: 'Ad Validacion Info Ensayo',
                        dataIndex: 'ad_validacion_info_ensayo'
                    },
					{
                        text: 'Ad Patrones Referencia Info Ensayo',
                        dataIndex: 'ad_patrones_referencia_info_ensayo'
                    },
					{
                        text: 'Ad Material Referencia Info Ensayo',
                        dataIndex: 'ad_material_referencia_info_ensayo'
                    },
					{
                        text: 'Ad Comparaciones Interlaboratorios Info Ensayo',
                        dataIndex: 'ad_comparaciones_interlaboratorios_info_ensayo'
                    },
					{
                        text: 'Fecha Creacion Info Ensayo',
                        dataIndex: 'fecha_creacion_info_ensayo',
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
                            //hidden: me.privilegio('infoensayo.add'),
                            itemId: 'add',
                            iconCls: 'icon_add',
                            text: 'Añadir'
                        },
                        {
                            xtype: 'button',
                            //hidden: me.privilegio('infoensayo.edit'),
                            itemId: 'edit',
                            iconCls: 'icon_edit',
                            text: 'Editar'
                        },
                        {
                            xtype: 'button',
                            //hidden: me.privilegio('infoensayo.delete'),
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