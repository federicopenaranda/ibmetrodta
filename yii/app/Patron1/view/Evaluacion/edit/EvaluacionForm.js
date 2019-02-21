Ext.define('ibmetrodta.view.evaluacion.Evaluacion.edit.EvaluacionForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.evaluacion.evaluacion.edit.evaluacionform',
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
                                xtype: 'ux.form.field.remotecombobox',
                                name: 'fk_id_oec_contacto_alta_direccion',
                                fieldLabel: 'Fk Id Oec Contacto Alta Direccion',
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
                                xtype: 'ux.form.field.remotecombobox',
                                name: 'fk_id_oec_contacto_gerente_tecnico',
                                fieldLabel: 'Fk Id Oec Contacto Gerente Tecnico',
                                displayField: 'codigo_peticion',
                                valueField: 'id_peticion',
                                store: {
                                    type: 'oec.peticion'
                                },
                                editable: false,
                                forceSelection: true,
                                allowBlank: false
							}
                        	]
                    	}, 
						{
                  			xtype: 'fieldcontainer',
                    		items: [
                            {
                                xtype: 'ux.form.field.remotecombobox',
                                name: 'fk_id_oec_contacto_gerente_calidad',
                                fieldLabel: 'Fk Id Oec Contacto Gerente Calidad',
                                displayField: 'primer_nombre_oec_contacto',
                                valueField: 'id_oec_contacto',
                                store: {
                                    type: 'opciones.oeccontacto'
                                },
                                editable: false,
                                forceSelection: true,
                                allowBlank: false
                    		},
                                {
                                    xtype: 'textfield',
                                    name: 'codigo_evaluacion',
                                    fieldLabel: 'Codigo Evaluacion'
                    			},
                                {
                                    xtype: 'datefield',
                                    name: 'fecha_inicio_evaluacion',
                                    fieldLabel: 'Fecha Inicio Evaluacion',
                                    format: 'Y-m-d',
                                    submitFormat: 'Y-m-d'
								}
                        	]
                    	}, 
						{
                  			xtype: 'fieldcontainer',
                    		items: [
                                {
                                    xtype: 'datefield',
                                    name: 'fecha_fin_evaluacion',
                                    fieldLabel: 'Fecha Fin Evaluacion',
                                    format: 'Y-m-d',
                                    submitFormat: 'Y-m-d'
                    			},
                                {
                                    xtype: 'textareafield',
                                    name: 'objetivo_evaluacion',
                                    fieldLabel: 'Objetivo Evaluacion'
								},
                                {
                                    xtype: 'textareafield',
                                    name: 'documento_referencia_evaluacion',
                                    fieldLabel: 'Documento Referencia Evaluacion'
								}
                        	]
                    	}, 
						{
                  			xtype: 'fieldcontainer',
                    		items: [
                                {
                                    xtype: 'textareafield',
                                    name: 'identificacion_manual_evaluacion',
                                    fieldLabel: 'Identificacion Manual Evaluacion'
								},
                                {
                                    xtype: 'datefield',
                                    name: 'fecha_reunion_inicial_evaluacion',
                                    fieldLabel: 'Fecha Reunion Inicial Evaluacion',
                                    format: 'Y-m-d',
                                    submitFormat: 'Y-m-d'
                    			},
                        	]
                    	}, 
						{
                  			xtype: 'fieldcontainer',
                    		items: [
                                {
                                    xtype: 'datefield',
                                    name: 'fecha_reunion_ee_evaluacion',
                                    fieldLabel: 'Fecha Reunion Ee Evaluacion',
                                    format: 'Y-m-d',
                                    submitFormat: 'Y-m-d'
                    			},
                                {
                                    xtype: 'datefield',
                                    name: 'fecha_reunion_final_evaluacion',
                                    fieldLabel: 'Fecha Reunion Final Evaluacion',
                                    format: 'Y-m-d',
                                    submitFormat: 'Y-m-d'
								}
                        	]
                    	}, 
						{
                  			xtype: 'fieldcontainer',
                    		items: [
                                {
                                    xtype: 'combo',
                                    name: 'idioma_evaluacion',
                                    fieldLabel: 'Idioma Evaluacion:',
                                    displayField: 'nombre',
                                    valueField: 'valor',
                                    store: new Ext.data.SimpleStore({
                                        fields: ['nombre', 'valor'],
                                        data: [['es','es'],['en','en']]
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
                                    name: 'observacion_ra_oec_evaluacion',
                                    fieldLabel: 'Observacion Ra Oec Evaluacion'
								}
                        	]
                    	}, 
						{
                  			xtype: 'fieldcontainer',
                    		items: [
                                {
                                    xtype: 'textareafield',
                                    name: 'observacion_ra_ee_evaluacion',
                                    fieldLabel: 'Observacion Ra Ee Evaluacion'
								},
                                {
                                    xtype: 'textareafield',
                                    name: 'cumplimiento_etapas_evaluacion',
                                    fieldLabel: 'Cumplimiento Etapas Evaluacion'
								},
                                {
                                    xtype: 'textareafield',
                                    name: 'recomendacion_ra_evaluacion',
                                    fieldLabel: 'Recomendacion Ra Evaluacion'
								}
                        	]
                    	}, 
						{
                  			xtype: 'fieldcontainer',
                    		items: [
                                {
                                    xtype: 'datefield',
                                    name: 'recomendacion_fecha_evaluacion',
                                    fieldLabel: 'Recomendacion Fecha Evaluacion',
                                    format: 'Y-m-d',
                                    submitFormat: 'Y-m-d'
                    			},
                                {
                                    xtype: 'textareafield',
                                    name: 'decision_da_evaluacion',
                                    fieldLabel: 'Decision Da Evaluacion'
								},
                                {
                                    xtype: 'datefield',
                                    name: 'decision_fecha_da_evaluacion',
                                    fieldLabel: 'Decision Fecha Da Evaluacion',
                                    format: 'Y-m-d',
                                    submitFormat: 'Y-m-d'
								}
                        	]
                    	}, 
						{
                  			xtype: 'fieldcontainer',
                    		items: [
                                {
                                    xtype: 'datefield',
                                    name: 'fecha_creacion_evaluacion',
                                    fieldLabel: 'Fecha Creacion Evaluacion',
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