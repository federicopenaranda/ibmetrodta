Ext.define('ibmetrodta.view.formularios.DetalleCertificacion.Lista', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.formularios.detallecertificacion.lista',
    header: false,
    iconCls: 'icon_gear',
    store: {type: 'formularios.detallecertificacion'},
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
                        dataIndex: 'estado_detalle_certificacion',
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
                        dataIndex: 'objetivo_detalle_certificacion',
                        hidden: true
                    },
                    {
                        text: 'Tipo de Cert.',
                        dataIndex: 'tipo_certificacion_detalle_certificacion'
                    },
                    {
                        text: 'Documento Normativo',
                        dataIndex: 'documento_normativo_detalle_certificacion',
                        hidden: true
                    },
                    {
                        text: 'Procedimiento de Cert.',
                        dataIndex: 'procedimiento_certificacion_detalle_certificacion',
                        hidden: true
                    },
                    {
                        text: 'Producto a Certificar',
                        dataIndex: 'producto_certificar_detalle_certificacion',
                        hidden: true
                    },
                    {
                        text: 'Codigo NACE',
                        dataIndex: 'codigo_nace_detalle_certificacion',
                        hidden: true
                    },
                    {
                        text: 'Auditores Calificados',
                        dataIndex: 'auditores_calificados_detalle_certificacion',
                        hidden: true
                    },
                    {
                        text: 'Expertos Técnicos',
                        dataIndex: 'expertos_tecnicos_detalle_certificacion',
                        hidden: true
                    },
                    {
                        text: 'Observaciones',
                        dataIndex: 'observaciones_detalle_certificacion',
                        hidden: true
                    },
                    {
                        text: 'Ensayos en Producto',
                        dataIndex: 'ensayos_en_produccto_detalle_certificacion',
                        hidden: true
                    },
                    {
                        text: 'Laboratorios de Ensayos',
                        dataIndex: 'laboratorios_ensayos_detalle_certificacion',
                        hidden: true
                    },
                    {
                        text: 'Fecha de Creación',
                        dataIndex: 'fecha_creacion_detalle_certificacion',
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
                            //hidden: me.privilegio('detallecertificacion.add'),
                            itemId: 'add',
                            iconCls: 'icon_add',
                            text: 'Añadir'
                        },
                        {
                            xtype: 'button',
                            //hidden: me.privilegio('detallecertificacion.edit'),
                            itemId: 'edit',
                            iconCls: 'icon_edit',
                            text: 'Editar'
                        },
                        {
                            xtype: 'button',
                            //hidden: me.privilegio('detallecertificacion.delete'),
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