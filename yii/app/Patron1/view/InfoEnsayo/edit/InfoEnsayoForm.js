Ext.define('ibmetrodta.view.formularios.InfoEnsayo.edit.InfoEnsayoForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.formularios.infoensayo.edit.infoensayoform',
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
                                    name: 'estado_info_ensayo',
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
                                    name: 'objetivo_info_ensayo',
                                    fieldLabel: 'Objetivo Info Ensayo:',
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
                                    name: 'nombre_info_ensayo',
                                    fieldLabel: 'Nombre Info Ensayo'
								},
                                {
                                    xtype: 'textareafield',
                                    name: 'norma_info_ensayo',
                                    fieldLabel: 'Norma Info Ensayo'
								},
                                {
                                    xtype: 'textareafield',
                                    name: 'matriz_info_ensayo',
                                    fieldLabel: 'Matriz Info Ensayo'
								}
                        	]
                    	}, 
						{
                  			xtype: 'fieldcontainer',
                    		items: [
                                {
                                    xtype: 'combo',
                                    name: 'tipo_servicio_info_ensayo',
                                    fieldLabel: 'Tipo Servicio Info Ensayo:',
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
                                    xtype: 'combo',
                                    name: 'categoria_info_ensayo',
                                    fieldLabel: 'Categoria Info Ensayo:',
                                    displayField: 'nombre',
                                    valueField: 'valor',
                                    store: new Ext.data.SimpleStore({
                                        fields: ['nombre', 'valor'],
                                        data: [['i','i'],['ii','ii'],['iii','iii'],['iv','iv'],['na','na']]
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
                                    name: 'pesonal_autorizado_info_ensayo',
                                    fieldLabel: 'Pesonal Autorizado Info Ensayo'
								}
                        	]
                    	}, 
						{
                  			xtype: 'fieldcontainer',
                    		items: [
                                {
                                    xtype: 'textareafield',
                                    name: 'rango_medicion_info_ensayo',
                                    fieldLabel: 'Rango Medicion Info Ensayo'
								},
                                {
                                    xtype: 'textareafield',
                                    name: 'incertidumbre_medicion_info_ensayo',
                                    fieldLabel: 'Incertidumbre Medicion Info Ensayo'
								},
                                {
                                    xtype: 'textareafield',
                                    name: 'lista_equipos_utilizados_info_ensayo',
                                    fieldLabel: 'Lista Equipos Utilizados Info Ensayo'
								}
                        	]
                    	}, 
						{
                  			xtype: 'fieldcontainer',
                    		items: [
                                {
                                    xtype: 'textareafield',
                                    name: 'ad_calculo_incertidumbre_info_ensayo',
                                    fieldLabel: 'Ad Calculo Incertidumbre Info Ensayo'
								},
                                {
                                    xtype: 'textareafield',
                                    name: 'ad_confirmacion_aplicacion_info_ensayo',
                                    fieldLabel: 'Ad Confirmacion Aplicacion Info Ensayo'
								},
                                {
                                    xtype: 'textareafield',
                                    name: 'ad_validacion_info_ensayo',
                                    fieldLabel: 'Ad Validacion Info Ensayo'
								}
                        	]
                    	}, 
						{
                  			xtype: 'fieldcontainer',
                    		items: [
                                {
                                    xtype: 'textareafield',
                                    name: 'ad_patrones_referencia_info_ensayo',
                                    fieldLabel: 'Ad Patrones Referencia Info Ensayo'
								},
                                {
                                    xtype: 'textareafield',
                                    name: 'ad_material_referencia_info_ensayo',
                                    fieldLabel: 'Ad Material Referencia Info Ensayo'
								},
                                {
                                    xtype: 'textareafield',
                                    name: 'ad_comparaciones_interlaboratorios_info_ensayo',
                                    fieldLabel: 'Ad Comparaciones Interlaboratorios Info Ensayo'
								}
                        	]
                    	}, 
						{
                  			xtype: 'fieldcontainer',
                    		items: [
                                {
                                    xtype: 'datefield',
                                    name: 'fecha_creacion_info_ensayo',
                                    fieldLabel: 'Fecha Creacion Info Ensayo',
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