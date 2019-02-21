Ext.define('ibmetrodta.view.formularios.DetalleInspeccion.Lista', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.formularios.detalleinspeccion.lista',
    title: 'Administrar DetalleInspeccion',
    iconCls: 'icon_gear',
    store: 'DetalleInspeccion',
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
                        text: 'Estado Detalle Inspeccion',
                        dataIndex: 'estado_detalle_inspeccion',
                        renderer: function (valor) {
                           if ( valor === 1 )
                               return 'Activo';
                           
                           if ( valor === 0 )
                               return 'Inactivo';
                           
                           return '';
                         }
                    },
					{
                        text: 'Objetivo Detalle Inspeccion',
                        dataIndex: 'objetivo_detalle_inspeccion'
                    },
					{
                        text: 'Nombre Detalle Inspeccion',
                        dataIndex: 'nombre_detalle_inspeccion'
                    },
					{
                        text: 'Tipo Detalle Inspeccion',
                        dataIndex: 'tipo_detalle_inspeccion'
                    },
					{
                        text: 'Matriz Inspeccionada Detalle Inspeccion',
                        dataIndex: 'matriz_inspeccionada_detalle_inspeccion'
                    },
					{
                        text: 'Documento Normativo Detalle Inspeccion',
                        dataIndex: 'documento_normativo_detalle_inspeccion'
                    },
					{
                        text: 'Procedimiento Inspeccion Detalle Inspeccion',
                        dataIndex: 'procedimiento_inspeccion_detalle_inspeccion'
                    },
					{
                        text: 'Inspeccion Se Realiza Detalle Inspeccion',
                        dataIndex: 'inspeccion_se_realiza_detalle_inspeccion'
                    },
					{
                        text: 'Direccion Delegaciones Detalle Inspeccion',
                        dataIndex: 'direccion_delegaciones_detalle_inspeccion'
                    },
					{
                        text: 'Inspectores Autorizados Detalle Inspeccion',
                        dataIndex: 'inspectores_autorizados_detalle_inspeccion'
                    },
					{
                        text: 'Equipos Utilizados Inspeccion Detalle Inspeccion',
                        dataIndex: 'equipos_utilizados_inspeccion_detalle_inspeccion'
                    },
					{
                        text: 'Ad Patrones Referencia Detalle Inspeccion',
                        dataIndex: 'ad_patrones_referencia_detalle_inspeccion'
                    },
					{
                        text: 'Ad Material Referencia Cert Detalle Inspeccion',
                        dataIndex: 'ad_material_referencia_cert_detalle_inspeccion'
                    },
					{
                        text: 'Fecha Creacion Detalle Inspeccion',
                        dataIndex: 'fecha_creacion_detalle_inspeccion',
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
                            //hidden: me.privilegio('detalleinspeccion.add'),
                            itemId: 'add',
                            iconCls: 'icon_add',
                            text: 'Añadir'
                        },
                        {
                            xtype: 'button',
                            //hidden: me.privilegio('detalleinspeccion.edit'),
                            itemId: 'edit',
                            iconCls: 'icon_edit',
                            text: 'Editar'
                        },
                        {
                            xtype: 'button',
                            //hidden: me.privilegio('detalleinspeccion.delete'),
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