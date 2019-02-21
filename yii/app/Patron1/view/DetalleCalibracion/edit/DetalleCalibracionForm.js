Ext.define('ibmetrodta.view.formularios.DetalleCalibracion.edit.DetalleCalibracionForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.formularios.detallecalibracion.edit.detallecalibracionform',
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
                                name: 'fk_id_campo_calibracion',
                                fieldLabel: 'Fk Id Campo Calibracion',
                                displayField: 'nombre_campo_calibracion',
                                valueField: 'id_campo_calibracion',
                                store: {
                                    type: 'formularios.campocalibracion'
                                },
                                editable: false,
                                forceSelection: true,
                                allowBlank: false
                    		},
                                {
                                    xtype: 'combo',
                                    name: 'estado_detalle_calibracion',
                                    fieldLabel: 'Estado:',
                                    displayField: 'nombre',
                                    valueField: 'valor',
                                    store: new Ext.data.SimpleStore({
                                            fields: ['nombre', 'valor'],
                                            data : [['Activo', 1],['Inactivo', 0]]
                                        }),
                                    plugins: [
                                        { ptype: 'cleartrigger' }
                                    ],
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
                                    xtype: 'combo',
                                    name: 'objetivo_detalle_calibracion',
                                    fieldLabel: 'Objetivo Detalle Calibracion:',
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
                                    name: 'descripcion_detalle_calibracion',
                                    fieldLabel: 'Descripcion Detalle Calibracion'
								},
                                {
                                    xtype: 'textareafield',
                                    name: 'norma_detalle_calibracion',
                                    fieldLabel: 'Norma Detalle Calibracion'
								}
                        	]
                    	}, 
						{
                  			xtype: 'fieldcontainer',
                    		items: [
                                {
                                    xtype: 'textareafield',
                                    name: 'equipo_calibrado_detalle_calibracion',
                                    fieldLabel: 'Equipo Calibrado Detalle Calibracion'
								},
                                {
                                    xtype: 'combo',
                                    name: 'tipo_servicio_detalle_calibracion',
                                    fieldLabel: 'Tipo Servicio Detalle Calibracion:',
                                    displayField: 'nombre',
                                    valueField: 'valor',
                                    store: new Ext.data.SimpleStore({
                                        fields: ['nombre', 'valor'],
                                        data: [['eil','eil'],['elm','elm'],['fl','fl']]
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
                                    name: 'personal_autorizado_detalle_calibracion',
                                    fieldLabel: 'Personal Autorizado Detalle Calibracion'
								}
                        	]
                    	}, 
						{
                  			xtype: 'fieldcontainer',
                    		items: [
                                {
                                    xtype: 'textareafield',
                                    name: 'rango_calibracion_detalle_calibracion',
                                    fieldLabel: 'Rango Calibracion Detalle Calibracion'
								},
                                {
                                    xtype: 'textareafield',
                                    name: 'mejor_capacidad_medicion_detalle_calibracion',
                                    fieldLabel: 'Mejor Capacidad Medicion Detalle Calibracion'
								},
                                {
                                    xtype: 'textareafield',
                                    name: 'equipos_utilizados_detalle_calibracion',
                                    fieldLabel: 'Equipos Utilizados Detalle Calibracion'
								}
                        	]
                    	}, 
						{
                  			xtype: 'fieldcontainer',
                    		items: [
                                {
                                    xtype: 'textareafield',
                                    name: 'ad_estimacion_incertidumbre_detalle_calibracion',
                                    fieldLabel: 'Ad Estimacion Incertidumbre Detalle Calibracion'
								},
                                {
                                    xtype: 'textareafield',
                                    name: 'ad_patrones_referencia_detalle_calibracion',
                                    fieldLabel: 'Ad Patrones Referencia Detalle Calibracion'
								},
                                {
                                    xtype: 'textareafield',
                                    name: 'ad_manipulacion_patrones_referencia_detalle_calibracion',
                                    fieldLabel: 'Ad Manipulacion Patrones Referencia Detalle Calibracion'
								}
                        	]
                    	}, 
						{
                  			xtype: 'fieldcontainer',
                    		items: [
                                {
                                    xtype: 'datefield',
                                    name: 'ad_fecha_ultima_calibracion_detalle_calibracion',
                                    fieldLabel: 'Ad Fecha Ultima Calibracion Detalle Calibracion',
                                    format: 'Y-m-d',
                                    submitFormat: 'Y-m-d'
                    			},
                                {
                                    xtype: 'textareafield',
                                    name: 'ad_organismo_realizo_calibracion_detalle_calibracion',
                                    fieldLabel: 'Ad Organismo Realizo Calibracion Detalle Calibracion'
								},
                                {
                                    xtype: 'textareafield',
                                    name: 'ad_certificado_calibracion_detalle_calibracion',
                                    fieldLabel: 'Ad Certificado Calibracion Detalle Calibracion'
								}
                        	]
                    	}, 
						{
                  			xtype: 'fieldcontainer',
                    		items: [
                                {
                                    xtype: 'datefield',
                                    name: 'ad_fecha_proxima_calibracion_detalle_calibracion',
                                    fieldLabel: 'Ad Fecha Proxima Calibracion Detalle Calibracion',
                                    format: 'Y-m-d',
                                    submitFormat: 'Y-m-d'
                    			},
                                {
                                    xtype: 'textareafield',
                                    name: 'ad_declaracion_trazabilidad_detalle_calibracion',
                                    fieldLabel: 'Ad Declaracion Trazabilidad Detalle Calibracion'
								},
                                {
                                    xtype: 'textareafield',
                                    name: 'ad_criterio_aceptacion_detalle_calibracion',
                                    fieldLabel: 'Ad Criterio Aceptacion Detalle Calibracion'
								}
                        	]
                    	}, 
						{
                  			xtype: 'fieldcontainer',
                    		items: [
                                {
                                    xtype: 'textareafield',
                                    name: 'ad_comparaciones_interlaboratorios_detalle_calibracion',
                                    fieldLabel: 'Ad Comparaciones Interlaboratorios Detalle Calibracion'
								},
                                {
                                    xtype: 'datefield',
                                    name: 'fecha_creacion_detalle_calibracion',
                                    fieldLabel: 'Fecha Creacion Detalle Calibracion',
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