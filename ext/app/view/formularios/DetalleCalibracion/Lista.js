Ext.define('ibmetrodta.view.formularios.DetalleCalibracion.Lista', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.formularios.detallecalibracion.lista',
    header: false,
    iconCls: 'icon_gear',
    store: {type: 'formularios.detallecalibracion'},
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
                        text: 'Campo Calibracion',
                        dataIndex: 'fk_id_campo_calibracion',
                        renderer: function (value, metaData, record, rowIndex, colIndex, store, view) {
                            return record.get('nombre_campo_calibracion');
                        }
                    },
                    {
                        text: 'Estado Detalle Calibracion',
                        dataIndex: 'estado_detalle_calibracion',
                        renderer: function (valor) {
                            if (valor === 1)
                                return 'Activo';

                            if (valor === 0)
                                return 'Inactivo';

                            return '';
                        }
                    },
                    {
                        text: 'Objetivo Detalle Calibracion',
                        dataIndex: 'objetivo_detalle_calibracion',
                        hidden: true
                    },
                    {
                        text: 'Descripcion Detalle Calibracion',
                        dataIndex: 'descripcion_detalle_calibracion',
                        hidden: true
                    },
                    {
                        text: 'Norma Detalle Calibracion',
                        dataIndex: 'norma_detalle_calibracion',
                        hidden: true
                    },
                    {
                        text: 'Equipo Calibrado Detalle Calibracion',
                        dataIndex: 'equipo_calibrado_detalle_calibracion',
                        hidden: true
                    },
                    {
                        text: 'Tipo Servicio Detalle Calibracion',
                        dataIndex: 'tipo_servicio_detalle_calibracion',
                        hidden: true
                    },
                    {
                        text: 'Personal Autorizado Detalle Calibracion',
                        dataIndex: 'personal_autorizado_detalle_calibracion',
                        hidden: true
                    },
                    {
                        text: 'Rango Calibracion Detalle Calibracion',
                        dataIndex: 'rango_calibracion_detalle_calibracion',
                        hidden: true
                    },
                    {
                        text: 'Mejor Capacidad Medicion Detalle Calibracion',
                        dataIndex: 'mejor_capacidad_medicion_detalle_calibracion',
                        hidden: true
                    },
                    {
                        text: 'Equipos Utilizados Detalle Calibracion',
                        dataIndex: 'equipos_utilizados_detalle_calibracion',
                        hidden: true
                    },
                    {
                        text: 'Ad Estimacion Incertidumbre Detalle Calibracion',
                        dataIndex: 'ad_estimacion_incertidumbre_detalle_calibracion',
                        hidden: true
                    },
                    {
                        text: 'Ad Patrones Referencia Detalle Calibracion',
                        dataIndex: 'ad_patrones_referencia_detalle_calibracion',
                        hidden: true
                    },
                    {
                        text: 'Ad Manipulacion Patrones Referencia Detalle Calibracion',
                        dataIndex: 'ad_manipulacion_patrones_referencia_detalle_calibracion',
                        hidden: true
                    },
                    {
                        text: 'Ad Fecha Ultima Calibracion Detalle Calibracion',
                        dataIndex: 'ad_fecha_ultima_calibracion_detalle_calibracion',
                        renderer: Ext.util.Format.dateRenderer('Y-m-d'),
                        hidden: true
                    },
                    {
                        text: 'Ad Organismo Realizo Calibracion Detalle Calibracion',
                        dataIndex: 'ad_organismo_realizo_calibracion_detalle_calibracion',
                        hidden: true
                    },
                    {
                        text: 'Ad Certificado Calibracion Detalle Calibracion',
                        dataIndex: 'ad_certificado_calibracion_detalle_calibracion',
                        hidden: true
                    },
                    {
                        text: 'Ad Fecha Proxima Calibracion Detalle Calibracion',
                        dataIndex: 'ad_fecha_proxima_calibracion_detalle_calibracion',
                        renderer: Ext.util.Format.dateRenderer('Y-m-d'),
                        hidden: true
                    },
                    {
                        text: 'Ad Declaracion Trazabilidad Detalle Calibracion',
                        dataIndex: 'ad_declaracion_trazabilidad_detalle_calibracion',
                        hidden: true
                    },
                    {
                        text: 'Ad Criterio Aceptacion Detalle Calibracion',
                        dataIndex: 'ad_criterio_aceptacion_detalle_calibracion',
                        hidden: true
                    },
                    {
                        text: 'Ad Comparaciones Interlaboratorios Detalle Calibracion',
                        dataIndex: 'ad_comparaciones_interlaboratorios_detalle_calibracion',
                        hidden: true
                    },
                    {
                        text: 'Fecha Creacion Detalle Calibracion',
                        dataIndex: 'fecha_creacion_detalle_calibracion',
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
                            //hidden: me.privilegio('detallecalibracion.add'),
                            itemId: 'add',
                            iconCls: 'icon_add',
                            text: 'Añadir'
                        },
                        {
                            xtype: 'button',
                            //hidden: me.privilegio('detallecalibracion.edit'),
                            itemId: 'edit',
                            iconCls: 'icon_edit',
                            text: 'Editar'
                        },
                        {
                            xtype: 'button',
                            //hidden: me.privilegio('detallecalibracion.delete'),
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