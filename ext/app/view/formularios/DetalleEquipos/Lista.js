Ext.define('ibmetrodta.view.formularios.DetalleEquipos.Lista', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.formularios.detalleequipos.lista',
    header: false,
    iconCls: 'icon_gear',
    store: { type: 'formularios.detalleequipos' },
    minHeight: 250,
    initComponent: function () {
        var me = this;
        Ext.applyIf(me, {
            columns: {
                defaults: {
                    flex: .2
                },
                items: [
                    {
                        text: 'Trámite',
                        dataIndex: 'nombre_codigo'
                    },
                    {
                        text: 'Estado',
                        dataIndex: 'estado_detalle_equipos',
                        renderer: function (valor) {
                            if (valor === 1)
                                return 'Activo';

                            if (valor === 0)
                                return 'Inactivo';

                            return '';
                        }
                    },
                    {
                        text: 'Objetivo',
                        dataIndex: 'objetivo_detalle_equipos',
                        hidden: true
                    },
                    {
                        text: 'Nombre',
                        dataIndex: 'nombre_detalle_equipos'
                    },
                    {
                        text: 'Norma',
                        dataIndex: 'norma_detalle_equipos',
                        hidden: true
                    },
                    {
                        text: 'Matriz',
                        dataIndex: 'matriz_detalle_equipos',
                        hidden: true
                    },
                    {
                        text: 'Tipo de Equipo',
                        dataIndex: 'tipo_equipo_detalle_equipos',
                        hidden: true
                    },
                    {
                        text: 'Personal Responsable',
                        dataIndex: 'personal_responsable_detalle_equipos',
                        hidden: true
                    },
                    {
                        text: 'Codigo de Equipo',
                        dataIndex: 'codigo_equipo_detalle_equipos',
                        hidden: true
                    },
                    {
                        text: 'Numero de Serie',
                        dataIndex: 'numero_serie_detalle_equipos',
                        hidden: true
                    },
                    {
                        text: 'Nombre de Fabricante',
                        dataIndex: 'nombre_fabricante_detalle_equipos',
                        hidden: true
                    },
                    {
                        text: 'Fecha de Puesta en Servicio',
                        dataIndex: 'fecha_puesta_servicio_detalle_equipos',
                        renderer: Ext.util.Format.dateRenderer('Y-m-d'),
                        hidden: true
                    },
                    {
                        text: 'Fecha Última Calibración',
                        dataIndex: 'fecha_ultima_calibracion_detalle_equipos',
                        renderer: Ext.util.Format.dateRenderer('Y-m-d'),
                        hidden: true
                    },
                    {
                        text: 'Organismo que Realizó la Calibración',
                        dataIndex: 'organismo_realizo_calibracion_detalle_equipos',
                        hidden: true
                    },
                    {
                        text: 'Certificado de Calibración',
                        dataIndex: 'certificado_calibracion_detalle_equipos',
                        hidden: true
                    },
                    {
                        text: 'Fecha de Próxima Calibración',
                        dataIndex: 'fecha_proxima_calibracion_detalle_equipos',
                        renderer: Ext.util.Format.dateRenderer('Y-m-d'),
                        hidden: true
                    },
                    {
                        text: 'Criterio de Aceptación de Cert.',
                        dataIndex: 'criterio_aceptacion_cert_detalle_equipos',
                        hidden: true
                    },
                    {
                        text: 'Procedimientos de Uso',
                        dataIndex: 'procedimientos_uso_detalle_equipos',
                        hidden: true
                    },
                    {
                        text: 'Patrones de Comprobaciones',
                        dataIndex: 'patrones_comprobaciones_detalle_equipos',
                        hidden: true
                    },
                    {
                        text: 'Fecha de Creación',
                        dataIndex: 'fecha_creacion_detalle_equipos'
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
                        }, '->',
                        {
                            xtype: 'button',
                            //hidden: me.privilegio('detallecalibracion.delete'),
                            itemId: 'descargaForm',
                            iconCls: 'icon_reporte',
                            text: 'Descargar PDF'
                        }
                    ]
                }/*,
                {
                    xtype: 'pagingtoolbar',
                    ui: 'footer',
                    defaultButtonUI: 'default',
                    dock: 'bottom',
                    displayInfo: true,
                    store: me.getStore()
                }*/
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