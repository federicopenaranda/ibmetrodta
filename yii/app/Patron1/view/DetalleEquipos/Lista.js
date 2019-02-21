Ext.define('ibmetrodta.view.formularios.DetalleEquipos.Lista', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.formularios.detalleequipos.lista',
    title: 'Administrar DetalleEquipos',
    iconCls: 'icon_gear',
    store: 'DetalleEquipos',
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
                        text: 'Estado Detalle Equipos',
                        dataIndex: 'estado_detalle_equipos',
                        renderer: function (valor) {
                           if ( valor === 1 )
                               return 'Activo';
                           
                           if ( valor === 0 )
                               return 'Inactivo';
                           
                           return '';
                         }
                    },
					{
                        text: 'Objetivo Detalle Equipos',
                        dataIndex: 'objetivo_detalle_equipos'
                    },
					{
                        text: 'Nombre Detalle Equipos',
                        dataIndex: 'nombre_detalle_equipos'
                    },
					{
                        text: 'Norma Detalle Equipos',
                        dataIndex: 'norma_detalle_equipos'
                    },
					{
                        text: 'Matriz Detalle Equipos',
                        dataIndex: 'matriz_detalle_equipos'
                    },
					{
                        text: 'Tipo Equipo Detalle Equipos',
                        dataIndex: 'tipo_equipo_detalle_equipos'
                    },
					{
                        text: 'Personal Responsable Detalle Equipos',
                        dataIndex: 'personal_responsable_detalle_equipos'
                    },
					{
                        text: 'Codigo Equipo Detalle Equipos',
                        dataIndex: 'codigo_equipo_detalle_equipos'
                    },
					{
                        text: 'Numero Serie Detalle Equipos',
                        dataIndex: 'numero_serie_detalle_equipos'
                    },
					{
                        text: 'Nombre Fabricante Detalle Equipos',
                        dataIndex: 'nombre_fabricante_detalle_equipos'
                    },
					{
                        text: 'Fecha Puesta Servicio Detalle Equipos',
                        dataIndex: 'fecha_puesta_servicio_detalle_equipos',
                        renderer: Ext.util.Format.dateRenderer('Y-m-d')
                    },
					{
                        text: 'Fecha Ultima Calibracion Detalle Equipos',
                        dataIndex: 'fecha_ultima_calibracion_detalle_equipos',
                        renderer: Ext.util.Format.dateRenderer('Y-m-d')
                    },
					{
                        text: 'Organismo Realizo Calibracion Detalle Equipos',
                        dataIndex: 'organismo_realizo_calibracion_detalle_equipos'
                    },
					{
                        text: 'Certificado Calibracion Detalle Equipos',
                        dataIndex: 'certificado_calibracion_detalle_equipos'
                    },
					{
                        text: 'Fecha Proxima Calibracion Detalle Equipos',
                        dataIndex: 'fecha_proxima_calibracion_detalle_equipos',
                        renderer: Ext.util.Format.dateRenderer('Y-m-d')
                    },
					{
                        text: 'Criterio Aceptacion Cert Detalle Equipos',
                        dataIndex: 'criterio_aceptacion_cert_detalle_equipos'
                    },
					{
                        text: 'Procedimientos Uso Detalle Equipos',
                        dataIndex: 'procedimientos_uso_detalle_equipos'
                    },
					{
                        text: 'Patrones Comprobaciones Detalle Equipos',
                        dataIndex: 'patrones_comprobaciones_detalle_equipos'
                    },
					{
                        text: 'Fecha Creacion Detalle Equipos',
                        dataIndex: 'fecha_creacion_detalle_equipos',
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
                            //hidden: me.privilegio('detalleequipos.add'),
                            itemId: 'add',
                            iconCls: 'icon_add',
                            text: 'Añadir'
                        },
                        {
                            xtype: 'button',
                            //hidden: me.privilegio('detalleequipos.edit'),
                            itemId: 'edit',
                            iconCls: 'icon_edit',
                            text: 'Editar'
                        },
                        {
                            xtype: 'button',
                            //hidden: me.privilegio('detalleequipos.delete'),
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