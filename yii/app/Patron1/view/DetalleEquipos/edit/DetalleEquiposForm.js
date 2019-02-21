Ext.define('ibmetrodta.view.formularios.DetalleEquipos.edit.DetalleEquiposForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.formularios.detalleequipos.edit.detalleequiposform',
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
                                    xtype: 'combo',
                                    name: 'estado_detalle_equipos',
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
                    			},
                                {
                                    xtype: 'combo',
                                    name: 'objetivo_detalle_equipos',
                                    fieldLabel: 'Objetivo Detalle Equipos:',
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
								}
	
                        	]
                    	}, 
						{
                  			xtype: 'fieldcontainer',
                    		items: [
                                {
                                    xtype: 'textareafield',
                                    name: 'nombre_detalle_equipos',
                                    fieldLabel: 'Nombre Detalle Equipos'
								},
                                {
                                    xtype: 'textareafield',
                                    name: 'norma_detalle_equipos',
                                    fieldLabel: 'Norma Detalle Equipos'
								},
                                {
                                    xtype: 'textareafield',
                                    name: 'matriz_detalle_equipos',
                                    fieldLabel: 'Matriz Detalle Equipos'
								}
                        	]
                    	}, 
						{
                  			xtype: 'fieldcontainer',
                    		items: [
                                {
                                    xtype: 'textareafield',
                                    name: 'tipo_equipo_detalle_equipos',
                                    fieldLabel: 'Tipo Equipo Detalle Equipos'
								},
                                {
                                    xtype: 'textareafield',
                                    name: 'personal_responsable_detalle_equipos',
                                    fieldLabel: 'Personal Responsable Detalle Equipos'
								},
                                {
                                    xtype: 'textareafield',
                                    name: 'codigo_equipo_detalle_equipos',
                                    fieldLabel: 'Codigo Equipo Detalle Equipos'
								}
                        	]
                    	}, 
						{
                  			xtype: 'fieldcontainer',
                    		items: [
                                {
                                    xtype: 'textareafield',
                                    name: 'numero_serie_detalle_equipos',
                                    fieldLabel: 'Numero Serie Detalle Equipos'
								},
                                {
                                    xtype: 'textareafield',
                                    name: 'nombre_fabricante_detalle_equipos',
                                    fieldLabel: 'Nombre Fabricante Detalle Equipos'
								},
                                {
                                    xtype: 'datefield',
                                    name: 'fecha_puesta_servicio_detalle_equipos',
                                    fieldLabel: 'Fecha Puesta Servicio Detalle Equipos',
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
                                    name: 'fecha_ultima_calibracion_detalle_equipos',
                                    fieldLabel: 'Fecha Ultima Calibracion Detalle Equipos',
                                    format: 'Y-m-d',
                                    submitFormat: 'Y-m-d'
                    			},
                                {
                                    xtype: 'textareafield',
                                    name: 'organismo_realizo_calibracion_detalle_equipos',
                                    fieldLabel: 'Organismo Realizo Calibracion Detalle Equipos'
								},
                                {
                                    xtype: 'textareafield',
                                    name: 'certificado_calibracion_detalle_equipos',
                                    fieldLabel: 'Certificado Calibracion Detalle Equipos'
								}
                        	]
                    	}, 
						{
                  			xtype: 'fieldcontainer',
                    		items: [
                                {
                                    xtype: 'datefield',
                                    name: 'fecha_proxima_calibracion_detalle_equipos',
                                    fieldLabel: 'Fecha Proxima Calibracion Detalle Equipos',
                                    format: 'Y-m-d',
                                    submitFormat: 'Y-m-d'
                    			},
                                {
                                    xtype: 'combo',
                                    name: 'criterio_aceptacion_cert_detalle_equipos',
                                    fieldLabel: 'Criterio Aceptacion Cert Detalle Equipos:',
                                    displayField: 'nombre',
                                    valueField: 'valor',
                                    store: new Ext.data.SimpleStore({
                                        fields: ['nombre', 'valor'],
                                        data: [['lab-ibmetro','lab-ibmetro'],['lab-rec-ibmetro','lab-rec-ibmetro'],['lab-acred-dta','lab-acred-dta'],['lab-otros-inm','lab-otros-inm'],['lab-acred-ona','lab-acred-ona'],['solucion-dta-oec','solucion-dta-oec']]
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
                                    name: 'procedimientos_uso_detalle_equipos',
                                    fieldLabel: 'Procedimientos Uso Detalle Equipos'
								}
                        	]
                    	}, 
						{
                  			xtype: 'fieldcontainer',
                    		items: [
                                {
                                    xtype: 'textareafield',
                                    name: 'patrones_comprobaciones_detalle_equipos',
                                    fieldLabel: 'Patrones Comprobaciones Detalle Equipos'
								},
                                {
                                    xtype: 'datefield',
                                    name: 'fecha_creacion_detalle_equipos',
                                    fieldLabel: 'Fecha Creacion Detalle Equipos',
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