Ext.define('ibmetrodta.view.formularios.InformeEvaluacion.Lista', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.formularios.informeevaluacion.lista',
    header: false,
    iconCls: 'icon_gear',
    store: {type:'formularios.informeevaluacion'},
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
                        xtype: 'datecolumn',
                        text: 'Fecha de Inicio',
                        dataIndex: 'fecha_inicio_informe_evaluacion',
                        format: 'Y-m-d',
                        hidden: true
                    },
                    {
                        xtype: 'datecolumn',
                        text: 'Fecha de Fin',
                        dataIndex: 'fecha_fin_informe_evaluacion',
                        format: 'Y-m-d',
                        hidden: true
                    },
                    {
                        text: 'Lugar',
                        dataIndex: 'lugar_informe_evaluacion',
                        hidden: true
                    },
                    {
                        text: 'Objetivo',
                        dataIndex: 'objetivo_informe_evaluacion'
                    },
                    {
                        text: 'Documentos de Ref.',
                        dataIndex: 'documentos_referencia_informe_evaluacion',
                        hidden: true
                    },
                    {
                        text: 'Instalaciones Visitadas',
                        dataIndex: 'instalaciones_visitadas_informe_evaluacion'
                    },
                    {
                        text: 'Profesionales Visitados',
                        dataIndex: 'profesionales_visitados_informe_evaluacion',
                        hidden: true
                    },
                    {
                        text: 'Equipo Evaluador',
                        dataIndex: 'equipo_evaluador_informe_evaluacion',
                        hidden: true
                    },
                    {
                        text: 'Alcance de Acreditación',
                        dataIndex: 'alcance_acreditacion_informe_evaluacion',
                        hidden: true
                    },
                    {
                        text: 'Comentario de Requisito',
                        dataIndex: 'comentario_requisito_informe_evaluacion',
                        hidden: true
                    },
                    {
                        text: 'Comentario de Evaluación',
                        dataIndex: 'comentario_evaluacion_informe_evaluacion'
                    },
                    {
                        text: 'Conclusión de Informe',
                        dataIndex: 'conclusion_informe_evaluacion'
                    },
                    {
                        text: 'Anexos',
                        dataIndex: 'anexos_informe_evaluacion'
                    },
                    {
                        xtype: 'datecolumn',
                        text: 'Fecha de Emisión',
                        dataIndex: 'fecha_emision_informe_evaluacion',
                        format: 'Y-m-d',
                        hidden: true
                    },
                    {
                        text: 'Lugar de Emisión',
                        dataIndex: 'lugar_emision_informe_evaluacion',
                        hidden: true
                    },
                    {
                        xtype: 'datecolumn',
                        text: 'Fecha de Creación',
                        dataIndex: 'fecha_creacion_informe_evaluacion',
                        format: 'Y-m-d'
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
                            //hidden: me.privilegio('informeevaluacion.add'),
                            itemId: 'add',
                            iconCls: 'icon_add',
                            text: 'Añadir'
                        },
                        {
                            xtype: 'button',
                            //hidden: me.privilegio('informeevaluacion.edit'),
                            itemId: 'edit',
                            iconCls: 'icon_edit',
                            text: 'Editar'
                        },
                        {
                            xtype: 'button',
                            //hidden: me.privilegio('informeevaluacion.delete'),
                            itemId: 'delete',
                            iconCls: 'icon_delete',
                            text: 'Eliminar'
                        }, '->',
                        {
                            xtype: 'button',
                            //hidden: me.privilegio('designacionevaluador.delete'),
                            itemId: 'descargaForm',
                            iconCls: 'icon_reporte',
                            text: 'Descargar PDF'
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
    
    
    privilegio: function (opcion) {
        var storePrivilegios = Ext.data.StoreManager.lookup('usuario.UsuarioPrivilegio');
        var res = storePrivilegios.findRecord('nombre_privilegio_usuario', opcion);
        return (res !== null) ? false : true;
    }
});