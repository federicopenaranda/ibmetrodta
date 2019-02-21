Ext.define('ibmetrodta.view.formularios.InformeEvaluacion.edit.InformeEvaluacionForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.formularios.informeevaluacion.edit.informeevaluacionform',
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
                                    xtype: 'datefield',
                                    name: 'fecha_inicio_informe_evaluacion',
                                    fieldLabel: 'Fecha Inicio Informe Evaluacion',
                                    format: 'Y-m-d',
                                    submitFormat: 'Y-m-d'
                    			},
                                {
                                    xtype: 'datefield',
                                    name: 'fecha_fin_informe_evaluacion',
                                    fieldLabel: 'Fecha Fin Informe Evaluacion',
                                    format: 'Y-m-d',
                                    submitFormat: 'Y-m-d'
								}
                        	]
                    	}, 
						{
                  			xtype: 'fieldcontainer',
                    		items: [
                                {
                                    xtype: 'textareafield',
                                    name: 'lugar_informe_evaluacion',
                                    fieldLabel: 'Lugar Informe Evaluacion'
								},
                                {
                                    xtype: 'combo',
                                    name: 'objetivo_informe_evaluacion',
                                    fieldLabel: 'Objetivo Informe Evaluacion:',
                                    displayField: 'nombre',
                                    valueField: 'valor',
                                    store: new Ext.data.SimpleStore({
                                        fields: ['nombre', 'valor'],
                                        data: [['acreditacion_inicial','acreditacion_inicial'],['reacreditacion','reacreditacion'],['extension_acreditacion','extension_acreditacion']]
                                    }),
                                    plugins: [
                                        { ptype: 'cleartrigger' }
                                    ],
                                    editable: false,
                                    forceSelection: true,
                                    allowBlank: false
                    			},
	
                                {
                                    xtype: 'textareafield',
                                    name: 'documentos_referencia_informe_evaluacion',
                                    fieldLabel: 'Documentos Referencia Informe Evaluacion'
								}
                        	]
                    	}, 
						{
                  			xtype: 'fieldcontainer',
                    		items: [
                                {
                                    xtype: 'textareafield',
                                    name: 'instalaciones_visitadas_informe_evaluacion',
                                    fieldLabel: 'Instalaciones Visitadas Informe Evaluacion'
								},
                                {
                                    xtype: 'textareafield',
                                    name: 'profesionales_visitados_informe_evaluacion',
                                    fieldLabel: 'Profesionales Visitados Informe Evaluacion'
								},
                                {
                                    xtype: 'textareafield',
                                    name: 'equipo_evaluador_informe_evaluacion',
                                    fieldLabel: 'Equipo Evaluador Informe Evaluacion'
								}
                        	]
                    	}, 
						{
                  			xtype: 'fieldcontainer',
                    		items: [
                                {
                                    xtype: 'textareafield',
                                    name: 'alcance_acreditacion_informe_evaluacion',
                                    fieldLabel: 'Alcance Acreditacion Informe Evaluacion'
								},
                                {
                                    xtype: 'textareafield',
                                    name: 'comentario_requisito_informe_evaluacion',
                                    fieldLabel: 'Comentario Requisito Informe Evaluacion'
								},
                                {
                                    xtype: 'textareafield',
                                    name: 'comentario_evaluacion_informe_evaluacion',
                                    fieldLabel: 'Comentario Evaluacion Informe Evaluacion'
								}
                        	]
                    	}, 
						{
                  			xtype: 'fieldcontainer',
                    		items: [
                                {
                                    xtype: 'textareafield',
                                    name: 'conclusion_informe_evaluacion',
                                    fieldLabel: 'Conclusion Informe Evaluacion'
								},
                                {
                                    xtype: 'textareafield',
                                    name: 'anexos_informe_evaluacion',
                                    fieldLabel: 'Anexos Informe Evaluacion'
								},
                                {
                                    xtype: 'datefield',
                                    name: 'fecha_emision_informe_evaluacion',
                                    fieldLabel: 'Fecha Emision Informe Evaluacion',
                                    format: 'Y-m-d',
                                    submitFormat: 'Y-m-d'
								}
                        	]
                    	}, 
						{
                  			xtype: 'fieldcontainer',
                    		items: [
                                {
                                    xtype: 'textareafield',
                                    name: 'lugar_emision_informe_evaluacion',
                                    fieldLabel: 'Lugar Emision Informe Evaluacion'
								},
                                {
                                    xtype: 'datefield',
                                    name: 'fecha_creacion_informe_evaluacion',
                                    fieldLabel: 'Fecha Creacion Informe Evaluacion',
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