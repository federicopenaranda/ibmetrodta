Ext.define('ibmetrodta.view.formularios;display.EvalTecnica.edit.EvalTecnicaForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.formularios;display.evaltecnica.edit.evaltecnicaform',
    requires: [
        'Ext.form.FieldContainer',
        'Ext.form.field.Text',
        'Ext.form.field.ComboBox',
        'ibmetrodta.ux.form.field.RemoteComboBox'
    ],
    bodyPadding: 5,
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
            fieldDefaults: {
                labelAlign: 'top',
                flex: 1,
                margins: 5
            },
            defaults: {
                layout: 'hbox',
                margins: '0 10 0 10'
            },
            items: [
						{
                  			xtype: 'fieldcontainer',
                    		items: [
                            {
                                xtype: 'ux.form.field.remotecombobox',
                                name: 'fk_id_peticion',
                                fieldLabel: 'Fk Id Peticion',
                                displayField: 'codigo_peticion',
                                valueField: 'id_peticion',
                                store: {
                                    type: 'oec.peticion'
                                },
                                editable: false,
                                forceSelection: true,
                                allowBlank: false
                    		},
                                {
                                    xtype: 'textareafield',
                                    name: 'area_ensayo_eval_tecnica',
                                    fieldLabel: 'Area Ensayo Eval Tecnica'
								},
                                {
                                    xtype: 'textareafield',
                                    name: 'metodo_ensayo_eval_tecnica',
                                    fieldLabel: 'Metodo Ensayo Eval Tecnica'
								}
                        	]
                    	}, 
						{
                  			xtype: 'fieldcontainer',
                    		items: [
                                {
                                    xtype: 'textareafield',
                                    name: 'lista_signatarios_eval_tecnica',
                                    fieldLabel: 'Lista Signatarios Eval Tecnica'
								},
                                {
                                    xtype: 'textareafield',
                                    name: 'supervision_personal_eval_tecnica',
                                    fieldLabel: 'Supervision Personal Eval Tecnica'
								},
                                {
                                    xtype: 'textareafield',
                                    name: 'autorizacion_eval_tecnica',
                                    fieldLabel: 'Autorizacion Eval Tecnica'
								}
                        	]
                    	}, 
						{
                  			xtype: 'fieldcontainer',
                    		items: [
                                {
                                    xtype: 'textareafield',
                                    name: 'adecuacion_eval_tecnica',
                                    fieldLabel: 'Adecuacion Eval Tecnica'
								},
                                {
                                    xtype: 'textareafield',
                                    name: 'seguimiento_eval_tecnica',
                                    fieldLabel: 'Seguimiento Eval Tecnica'
								},
                                {
                                    xtype: 'textareafield',
                                    name: 'separacion_areas_eval_tecnica',
                                    fieldLabel: 'Separacion Areas Eval Tecnica'
								}
                        	]
                    	}, 
						{
                  			xtype: 'fieldcontainer',
                    		items: [
                                {
                                    xtype: 'textareafield',
                                    name: 'control_acceso_eval_tecnica',
                                    fieldLabel: 'Control Acceso Eval Tecnica'
								},
                                {
                                    xtype: 'textareafield',
                                    name: 'orden_limpieza_eval_tecnica',
                                    fieldLabel: 'Orden Limpieza Eval Tecnica'
								},
                                {
                                    xtype: 'textareafield',
                                    name: 'uso_metodos_apropiados_eval_tecnica',
                                    fieldLabel: 'Uso Metodos Apropiados Eval Tecnica'
								}
                        	]
                    	}, 
						{
                  			xtype: 'fieldcontainer',
                    		items: [
                                {
                                    xtype: 'textareafield',
                                    name: 'confirmacion_metodos_eval_tecnica',
                                    fieldLabel: 'Confirmacion Metodos Eval Tecnica'
								},
                                {
                                    xtype: 'textareafield',
                                    name: 'instructivo_uso_eval_tecnica',
                                    fieldLabel: 'Instructivo Uso Eval Tecnica'
								},
                                {
                                    xtype: 'textareafield',
                                    name: 'validacion_desviaciones_eval_tecnica',
                                    fieldLabel: 'Validacion Desviaciones Eval Tecnica'
								}
                        	]
                    	}, 
						{
                  			xtype: 'fieldcontainer',
                    		items: [
                                {
                                    xtype: 'textareafield',
                                    name: 'estimacion_incertidumbre_eval_tecnica',
                                    fieldLabel: 'Estimacion Incertidumbre Eval Tecnica'
								},
                                {
                                    xtype: 'textareafield',
                                    name: 'verificacion_calculos_eval_tecnica',
                                    fieldLabel: 'Verificacion Calculos Eval Tecnica'
								},
                                {
                                    xtype: 'textareafield',
                                    name: 'procedimientos_calibracion_eval_tecnica',
                                    fieldLabel: 'Procedimientos Calibracion Eval Tecnica'
								}
                        	]
                    	}, 
						{
                  			xtype: 'fieldcontainer',
                    		items: [
                                {
                                    xtype: 'textareafield',
                                    name: 'trazabilidad_calibracion_eval_tecnica',
                                    fieldLabel: 'Trazabilidad Calibracion Eval Tecnica'
								},
                                {
                                    xtype: 'textareafield',
                                    name: 'disponibilidad_mterial_eval_tecnica',
                                    fieldLabel: 'Disponibilidad Mterial Eval Tecnica'
								},
                                {
                                    xtype: 'textareafield',
                                    name: 'certificados_calibracion_eval_tecnica',
                                    fieldLabel: 'Certificados Calibracion Eval Tecnica'
								}
                        	]
                    	}, 
						{
                  			xtype: 'fieldcontainer',
                    		items: [
                                {
                                    xtype: 'textareafield',
                                    name: 'plan_muestreo_eval_tecnica',
                                    fieldLabel: 'Plan Muestreo Eval Tecnica'
								},
                                {
                                    xtype: 'textareafield',
                                    name: 'registros_muestreo_eval_tecnica',
                                    fieldLabel: 'Registros Muestreo Eval Tecnica'
								},
                                {
                                    xtype: 'textareafield',
                                    name: 'tecnicas_estadisticas_eval_tecnica',
                                    fieldLabel: 'Tecnicas Estadisticas Eval Tecnica'
								}
                        	]
                    	}, 
						{
                  			xtype: 'fieldcontainer',
                    		items: [
                                {
                                    xtype: 'textareafield',
                                    name: 'procedimiento_muestras_eval_tecnica',
                                    fieldLabel: 'Procedimiento Muestras Eval Tecnica'
								},
                                {
                                    xtype: 'textareafield',
                                    name: 'sistema_identificacion_eval_tecnica',
                                    fieldLabel: 'Sistema Identificacion Eval Tecnica'
								},
                                {
                                    xtype: 'textareafield',
                                    name: 'adecuacion_instalaciones_eval_tecnica',
                                    fieldLabel: 'Adecuacion Instalaciones Eval Tecnica'
								}
                        	]
                    	}, 
						{
                  			xtype: 'fieldcontainer',
                    		items: [
                                {
                                    xtype: 'textareafield',
                                    name: 'procedimiento_aseguramiento_eval_tecnica',
                                    fieldLabel: 'Procedimiento Aseguramiento Eval Tecnica'
								},
                                {
                                    xtype: 'textareafield',
                                    name: 'uso_regular_material_eval_tecnica',
                                    fieldLabel: 'Uso Regular Material Eval Tecnica'
								},
                                {
                                    xtype: 'textareafield',
                                    name: 'participacion_intercomparaciones_eval_tecnica',
                                    fieldLabel: 'Participacion Intercomparaciones Eval Tecnica'
								}
                        	]
                    	}, 
						{
                  			xtype: 'fieldcontainer',
                    		items: [
                                {
                                    xtype: 'textareafield',
                                    name: 'repeticion_ensayos_eval_tecnica',
                                    fieldLabel: 'Repeticion Ensayos Eval Tecnica'
								},
                                {
                                    xtype: 'textareafield',
                                    name: 'correlacion_eval_tecnica',
                                    fieldLabel: 'Correlacion Eval Tecnica'
								},
                                {
                                    xtype: 'textareafield',
                                    name: 'registro_aseguramiento_eval_tecnica',
                                    fieldLabel: 'Registro Aseguramiento Eval Tecnica'
								}
                        	]
                    	}, 
						{
                  			xtype: 'fieldcontainer',
                    		items: [
                                {
                                    xtype: 'textareafield',
                                    name: 'formatos_apropiados_eval_tecnica',
                                    fieldLabel: 'Formatos Apropiados Eval Tecnica'
								},
                                {
                                    xtype: 'textareafield',
                                    name: 'cumple_requisitos_norma_eval_tecnica',
                                    fieldLabel: 'Cumple Requisitos Norma Eval Tecnica'
								},
                                {
                                    xtype: 'textareafield',
                                    name: 'documentacion_opiniones_eval_tecnica',
                                    fieldLabel: 'Documentacion Opiniones Eval Tecnica'
								}
                        	]
                    	}, 
						{
                  			xtype: 'fieldcontainer',
                    		items: [
                                {
                                    xtype: 'textareafield',
                                    name: 'seguridad_transmision_eval_tecnica',
                                    fieldLabel: 'Seguridad Transmision Eval Tecnica'
								},
                                {
                                    xtype: 'textareafield',
                                    name: 'confidencialidad_eval_tecnica',
                                    fieldLabel: 'Confidencialidad Eval Tecnica'
								},
                                {
                                    xtype: 'textareafield',
                                    name: 'criterios_insertidumbre_eval_tecnica',
                                    fieldLabel: 'Criterios Insertidumbre Eval Tecnica'
								}
                        	]
                    	}, 
						{
                  			xtype: 'fieldcontainer',
                    		items: [
                                {
                                    xtype: 'textareafield',
                                    name: 'criterios_trazabilidad_eval_tecnica',
                                    fieldLabel: 'Criterios Trazabilidad Eval Tecnica'
								},
                                {
                                    xtype: 'textareafield',
                                    name: 'numero_requisito_eval_tecnica',
                                    fieldLabel: 'Numero Requisito Eval Tecnica'
								},
                                {
                                    xtype: 'textareafield',
                                    name: 'comentario_requisito_eval_tecnica',
                                    fieldLabel: 'Comentario Requisito Eval Tecnica'
								}
                        	]
                    	}, 
						{
                  			xtype: 'fieldcontainer',
                    		items: [
                                {
                                    xtype: 'textareafield',
                                    name: 'conclusion_eval_tecnica',
                                    fieldLabel: 'Conclusion Eval Tecnica'
								},
                                {
                                    xtype: 'datefield',
                                    name: 'fecha_inicio_eval_tecnica',
                                    fieldLabel: 'Fecha Inicio Eval Tecnica',
                                    format: 'Y-m-d',
                                    submitFormat: 'Y-m-d'
                    			},
                                {
                                    xtype: 'datefield',
                                    name: 'fecha_fin_eval_tecnica',
                                    fieldLabel: 'Fecha Fin Eval Tecnica',
                                    format: 'Y-m-d',
                                    submitFormat: 'Y-m-d'
								}
                        	]
                    	}, 
						{
                  			xtype: 'fieldcontainer',
                    		items: [
                                {
                                    xtype: 'numberfield',
                                    name: 'hora_inicio_eval_tecnica',
                                    fieldLabel: 'Hora Inicio Eval Tecnica'
                    			},
	
                                {
                                    xtype: 'datefield',
                                    name: 'fecha_creacion_eval_tecnica',
                                    fieldLabel: 'Fecha Creacion Eval Tecnica',
                                    format: 'Y-m-d',
                                    submitFormat: 'Y-m-d'
								}
							]
                    	}
				]
        });
        me.callParent(arguments);
    }
});