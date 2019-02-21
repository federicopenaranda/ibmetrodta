Ext.define('ibmetrodta.view.formularios;display.EvalTecnica.Lista', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.formularios;display.evaltecnica.lista',
    title: 'Administrar EvalTecnica',
    iconCls: 'icon_gear',
    store: 'EvalTecnica',
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
                        text: 'Area Ensayo Eval Tecnica',
                        dataIndex: 'area_ensayo_eval_tecnica'
                    },
					{
                        text: 'Metodo Ensayo Eval Tecnica',
                        dataIndex: 'metodo_ensayo_eval_tecnica'
                    },
					{
                        text: 'Lista Signatarios Eval Tecnica',
                        dataIndex: 'lista_signatarios_eval_tecnica'
                    },
					{
                        text: 'Supervision Personal Eval Tecnica',
                        dataIndex: 'supervision_personal_eval_tecnica'
                    },
					{
                        text: 'Autorizacion Eval Tecnica',
                        dataIndex: 'autorizacion_eval_tecnica'
                    },
					{
                        text: 'Adecuacion Eval Tecnica',
                        dataIndex: 'adecuacion_eval_tecnica'
                    },
					{
                        text: 'Seguimiento Eval Tecnica',
                        dataIndex: 'seguimiento_eval_tecnica'
                    },
					{
                        text: 'Separacion Areas Eval Tecnica',
                        dataIndex: 'separacion_areas_eval_tecnica'
                    },
					{
                        text: 'Control Acceso Eval Tecnica',
                        dataIndex: 'control_acceso_eval_tecnica'
                    },
					{
                        text: 'Orden Limpieza Eval Tecnica',
                        dataIndex: 'orden_limpieza_eval_tecnica'
                    },
					{
                        text: 'Uso Metodos Apropiados Eval Tecnica',
                        dataIndex: 'uso_metodos_apropiados_eval_tecnica'
                    },
					{
                        text: 'Confirmacion Metodos Eval Tecnica',
                        dataIndex: 'confirmacion_metodos_eval_tecnica'
                    },
					{
                        text: 'Instructivo Uso Eval Tecnica',
                        dataIndex: 'instructivo_uso_eval_tecnica'
                    },
					{
                        text: 'Validacion Desviaciones Eval Tecnica',
                        dataIndex: 'validacion_desviaciones_eval_tecnica'
                    },
					{
                        text: 'Estimacion Incertidumbre Eval Tecnica',
                        dataIndex: 'estimacion_incertidumbre_eval_tecnica'
                    },
					{
                        text: 'Verificacion Calculos Eval Tecnica',
                        dataIndex: 'verificacion_calculos_eval_tecnica'
                    },
					{
                        text: 'Procedimientos Calibracion Eval Tecnica',
                        dataIndex: 'procedimientos_calibracion_eval_tecnica'
                    },
					{
                        text: 'Trazabilidad Calibracion Eval Tecnica',
                        dataIndex: 'trazabilidad_calibracion_eval_tecnica'
                    },
					{
                        text: 'Disponibilidad Mterial Eval Tecnica',
                        dataIndex: 'disponibilidad_mterial_eval_tecnica'
                    },
					{
                        text: 'Certificados Calibracion Eval Tecnica',
                        dataIndex: 'certificados_calibracion_eval_tecnica'
                    },
					{
                        text: 'Plan Muestreo Eval Tecnica',
                        dataIndex: 'plan_muestreo_eval_tecnica'
                    },
					{
                        text: 'Registros Muestreo Eval Tecnica',
                        dataIndex: 'registros_muestreo_eval_tecnica'
                    },
					{
                        text: 'Tecnicas Estadisticas Eval Tecnica',
                        dataIndex: 'tecnicas_estadisticas_eval_tecnica'
                    },
					{
                        text: 'Procedimiento Muestras Eval Tecnica',
                        dataIndex: 'procedimiento_muestras_eval_tecnica'
                    },
					{
                        text: 'Sistema Identificacion Eval Tecnica',
                        dataIndex: 'sistema_identificacion_eval_tecnica'
                    },
					{
                        text: 'Adecuacion Instalaciones Eval Tecnica',
                        dataIndex: 'adecuacion_instalaciones_eval_tecnica'
                    },
					{
                        text: 'Procedimiento Aseguramiento Eval Tecnica',
                        dataIndex: 'procedimiento_aseguramiento_eval_tecnica'
                    },
					{
                        text: 'Uso Regular Material Eval Tecnica',
                        dataIndex: 'uso_regular_material_eval_tecnica'
                    },
					{
                        text: 'Participacion Intercomparaciones Eval Tecnica',
                        dataIndex: 'participacion_intercomparaciones_eval_tecnica'
                    },
					{
                        text: 'Repeticion Ensayos Eval Tecnica',
                        dataIndex: 'repeticion_ensayos_eval_tecnica'
                    },
					{
                        text: 'Correlacion Eval Tecnica',
                        dataIndex: 'correlacion_eval_tecnica'
                    },
					{
                        text: 'Registro Aseguramiento Eval Tecnica',
                        dataIndex: 'registro_aseguramiento_eval_tecnica'
                    },
					{
                        text: 'Formatos Apropiados Eval Tecnica',
                        dataIndex: 'formatos_apropiados_eval_tecnica'
                    },
					{
                        text: 'Cumple Requisitos Norma Eval Tecnica',
                        dataIndex: 'cumple_requisitos_norma_eval_tecnica'
                    },
					{
                        text: 'Documentacion Opiniones Eval Tecnica',
                        dataIndex: 'documentacion_opiniones_eval_tecnica'
                    },
					{
                        text: 'Seguridad Transmision Eval Tecnica',
                        dataIndex: 'seguridad_transmision_eval_tecnica'
                    },
					{
                        text: 'Confidencialidad Eval Tecnica',
                        dataIndex: 'confidencialidad_eval_tecnica'
                    },
					{
                        text: 'Criterios Insertidumbre Eval Tecnica',
                        dataIndex: 'criterios_insertidumbre_eval_tecnica'
                    },
					{
                        text: 'Criterios Trazabilidad Eval Tecnica',
                        dataIndex: 'criterios_trazabilidad_eval_tecnica'
                    },
					{
                        text: 'Numero Requisito Eval Tecnica',
                        dataIndex: 'numero_requisito_eval_tecnica'
                    },
					{
                        text: 'Comentario Requisito Eval Tecnica',
                        dataIndex: 'comentario_requisito_eval_tecnica'
                    },
					{
                        text: 'Conclusion Eval Tecnica',
                        dataIndex: 'conclusion_eval_tecnica'
                    },
					{
                        text: 'Fecha Inicio Eval Tecnica',
                        dataIndex: 'fecha_inicio_eval_tecnica',
                        renderer: Ext.util.Format.dateRenderer('Y-m-d')
                    },
					{
                        text: 'Fecha Fin Eval Tecnica',
                        dataIndex: 'fecha_fin_eval_tecnica',
                        renderer: Ext.util.Format.dateRenderer('Y-m-d')
                    },
                    {
                        text: 'Hora Inicio Eval Tecnica',
                        dataIndex: 'hora_inicio_eval_tecnica'
                    },
					{
                        text: 'Fecha Creacion Eval Tecnica',
                        dataIndex: 'fecha_creacion_eval_tecnica',
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