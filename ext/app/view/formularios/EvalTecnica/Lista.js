Ext.define('ibmetrodta.view.formularios.EvalTecnica.Lista', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.formularios.evaltecnica.lista',
    header: false,
    iconCls: 'icon_gear',
    store: {type: 'formularios.evaltecnica'},
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
                        text: 'Área',
                        dataIndex: 'area_ensayo_eval_tecnica'
                    },
                    {
                        text: 'Método',
                        dataIndex: 'metodo_ensayo_eval_tecnica'
                    },
                    {
                        text: 'Lista de Sign.',
                        dataIndex: 'lista_signatarios_eval_tecnica',
                        hidden: true
                    },
                    {
                        text: 'Supervisión a Pers.',
                        dataIndex: 'supervision_personal_eval_tecnica',
                        hidden: true
                    },
                    {
                        text: 'Autorización',
                        dataIndex: 'autorizacion_eval_tecnica'
                    },
                    {
                        text: 'Adecuación',
                        dataIndex: 'adecuacion_eval_tecnica',
                        hidden: true
                    },
                    {
                        text: 'Seguimiento',
                        dataIndex: 'seguimiento_eval_tecnica',
                        hidden: true
                    },
                    {
                        text: 'Separación Areas',
                        dataIndex: 'separacion_areas_eval_tecnica',
                        hidden: true
                    },
                    {
                        text: 'Control de Acceso',
                        dataIndex: 'control_acceso_eval_tecnica',
                        hidden: true
                    },
                    {
                        text: 'Orden y Limpieza',
                        dataIndex: 'orden_limpieza_eval_tecnica',
                        hidden: true
                    },
                    {
                        text: 'Uso Métodos Ap.',
                        dataIndex: 'uso_metodos_apropiados_eval_tecnica',
                        hidden: true
                    },
                    {
                        text: 'Confirmación Métodos',
                        dataIndex: 'confirmacion_metodos_eval_tecnica',
                        hidden: true
                    },
                    {
                        text: 'Instructivo de Uso',
                        dataIndex: 'instructivo_uso_eval_tecnica',
                        hidden: true
                    },
                    {
                        text: 'Validación Desviaciones',
                        dataIndex: 'validacion_desviaciones_eval_tecnica',
                        hidden: true
                    },
                    {
                        text: 'Estimación Incertidumbre',
                        dataIndex: 'estimacion_incertidumbre_eval_tecnica',
                        hidden: true
                    },
                    {
                        text: 'Verificación Cálculos',
                        dataIndex: 'verificacion_calculos_eval_tecnica',
                        hidden: true
                    },
                    {
                        text: 'Procedimientos de Calibración',
                        dataIndex: 'procedimientos_calibracion_eval_tecnica',
                        hidden: true
                    },
                    {
                        text: 'Trazabilidad de Calibración',
                        dataIndex: 'trazabilidad_calibracion_eval_tecnica',
                        hidden: true
                    },
                    {
                        text: 'Disponibilidad de Material',
                        dataIndex: 'disponibilidad_mterial_eval_tecnica',
                        hidden: true
                    },
                    {
                        text: 'Certificados de Calibración',
                        dataIndex: 'certificados_calibracion_eval_tecnica',
                        hidden: true
                    },
                    {
                        text: 'Plan Muestreo',
                        dataIndex: 'plan_muestreo_eval_tecnica',
                        hidden: true
                    },
                    {
                        text: 'Registros de Muestreo',
                        dataIndex: 'registros_muestreo_eval_tecnica',
                        hidden: true
                    },
                    {
                        text: 'Uso de Técnicas Estadísticas',
                        dataIndex: 'tecnicas_estadisticas_eval_tecnica',
                        hidden: true
                    },
                    {
                        text: 'Procedimiento de Muestras',
                        dataIndex: 'procedimiento_muestras_eval_tecnica',
                        hidden: true
                    },
                    {
                        text: 'Sistema de Identificación',
                        dataIndex: 'sistema_identificacion_eval_tecnica',
                        hidden: true
                    },
                    {
                        text: 'Adecuación de Instalaciones',
                        dataIndex: 'adecuacion_instalaciones_eval_tecnica',
                        hidden: true
                    },
                    {
                        text: 'Procedimiento de Aseguramiento',
                        dataIndex: 'procedimiento_aseguramiento_eval_tecnica',
                        hidden: true
                    },
                    {
                        text: 'Uso Regular de Material',
                        dataIndex: 'uso_regular_material_eval_tecnica',
                        hidden: true
                    },
                    {
                        text: 'Participación Intercomparaciones',
                        dataIndex: 'participacion_intercomparaciones_eval_tecnica',
                        hidden: true
                    },
                    {
                        text: 'Repeticion de Ensayos',
                        dataIndex: 'repeticion_ensayos_eval_tecnica',
                        hidden: true
                    },
                    {
                        text: 'Correlación',
                        dataIndex: 'correlacion_eval_tecnica',
                        hidden: true
                    },
                    {
                        text: 'Registro de Aseguramiento',
                        dataIndex: 'registro_aseguramiento_eval_tecnica',
                        hidden: true
                    },
                    {
                        text: 'Formatos Apropiados',
                        dataIndex: 'formatos_apropiados_eval_tecnica',
                        hidden: true
                    },
                    {
                        text: 'Cumple Requisitos Norma',
                        dataIndex: 'cumple_requisitos_norma_eval_tecnica',
                        hidden: true
                    },
                    {
                        text: 'Documentación Opiniones',
                        dataIndex: 'documentacion_opiniones_eval_tecnica',
                        hidden: true
                    },
                    {
                        text: 'Seguridad en Transmisión',
                        dataIndex: 'seguridad_transmision_eval_tecnica',
                        hidden: true
                    },
                    {
                        text: 'Confidencialidad',
                        dataIndex: 'confidencialidad_eval_tecnica',
                        hidden: true
                    },
                    {
                        text: 'Criterios Incertidumbre',
                        dataIndex: 'criterios_insertidumbre_eval_tecnica',
                        hidden: true
                    },
                    {
                        text: 'Criterios Trazabilidad',
                        dataIndex: 'criterios_trazabilidad_eval_tecnica',
                        hidden: true
                    },
                    {
                        text: 'Requisito Núm.',
                        dataIndex: 'numero_requisito_eval_tecnica',
                        hidden: true
                    },
                    {
                        text: 'Comentario Requisito',
                        dataIndex: 'comentario_requisito_eval_tecnica',
                        hidden: true
                    },
                    {
                        text: 'Conclusión',
                        dataIndex: 'conclusion_eval_tecnica',
                        hidden: true
                    },
                    {
                        xtype: 'datecolumn',
                        text: 'Fecha de Inicio Eval.',
                        dataIndex: 'fecha_inicio_eval_tecnica',
                        format: 'Y-m-d'
                    },
                    {
                        xtype: 'datecolumn',
                        text: 'Fecha de Fin Eval.',
                        dataIndex: 'fecha_fin_eval_tecnica',
                        format: 'Y-m-d'
                    },
                    {
                        text: 'Horas de Eval. Inicio',
                        dataIndex: 'hora_inicio_eval_tecnica'
                    },
                    {
                        text: 'Horas de Eval. Fin',
                        dataIndex: 'hora_fin_eval_tecnica'
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
                            //hidden: me.privilegio('evaltecnica.add'),
                            itemId: 'add',
                            iconCls: 'icon_add',
                            text: 'Añadir'
                        },
                        {
                            xtype: 'button',
                            //hidden: me.privilegio('evaltecnica.edit'),
                            itemId: 'edit',
                            iconCls: 'icon_edit',
                            text: 'Editar'
                        },
                        {
                            xtype: 'button',
                            //hidden: me.privilegio('evaltecnica.delete'),
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