Ext.define('ibmetrodta.view.formularios.DetalleInspeccion.edit.DetalleInspeccionForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.formularios.detalleinspeccion.edit.detalleinspeccionform',
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
                                    name: 'estado_detalle_inspeccion',
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
                                    name: 'objetivo_detalle_inspeccion',
                                    fieldLabel: 'Objetivo Detalle Inspeccion:',
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
                                    name: 'nombre_detalle_inspeccion',
                                    fieldLabel: 'Nombre Detalle Inspeccion'
								},
                                {
                                    xtype: 'combo',
                                    name: 'tipo_detalle_inspeccion',
                                    fieldLabel: 'Tipo Detalle Inspeccion:',
                                    displayField: 'nombre',
                                    valueField: 'valor',
                                    store: new Ext.data.SimpleStore({
                                        fields: ['nombre', 'valor'],
                                        data: [['a','a'],['b','b'],['c','c']]
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
                                    name: 'matriz_inspeccionada_detalle_inspeccion',
                                    fieldLabel: 'Matriz Inspeccionada Detalle Inspeccion'
								}
                        	]
                    	}, 
						{
                  			xtype: 'fieldcontainer',
                    		items: [
                                {
                                    xtype: 'textareafield',
                                    name: 'documento_normativo_detalle_inspeccion',
                                    fieldLabel: 'Documento Normativo Detalle Inspeccion'
								},
                                {
                                    xtype: 'textareafield',
                                    name: 'procedimiento_inspeccion_detalle_inspeccion',
                                    fieldLabel: 'Procedimiento Inspeccion Detalle Inspeccion'
								},
                                {
                                    xtype: 'combo',
                                    name: 'inspeccion_se_realiza_detalle_inspeccion',
                                    fieldLabel: 'Inspeccion Se Realiza Detalle Inspeccion:',
                                    displayField: 'nombre',
                                    valueField: 'valor',
                                    store: new Ext.data.SimpleStore({
                                        fields: ['nombre', 'valor'],
                                        data: [['solo-of-principal-oi','solo-of-principal-oi'],['solo-delef-oi','solo-delef-oi'],['of-principal-deleg-oi','of-principal-deleg-oi'],['fuera-inst-oi','fuera-inst-oi']]
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
                                    name: 'direccion_delegaciones_detalle_inspeccion',
                                    fieldLabel: 'Direccion Delegaciones Detalle Inspeccion'
								},
                                {
                                    xtype: 'textareafield',
                                    name: 'inspectores_autorizados_detalle_inspeccion',
                                    fieldLabel: 'Inspectores Autorizados Detalle Inspeccion'
								},
                                {
                                    xtype: 'textareafield',
                                    name: 'equipos_utilizados_inspeccion_detalle_inspeccion',
                                    fieldLabel: 'Equipos Utilizados Inspeccion Detalle Inspeccion'
								}
                        	]
                    	}, 
						{
                  			xtype: 'fieldcontainer',
                    		items: [
                                {
                                    xtype: 'textareafield',
                                    name: 'ad_patrones_referencia_detalle_inspeccion',
                                    fieldLabel: 'Ad Patrones Referencia Detalle Inspeccion'
								},
                                {
                                    xtype: 'textareafield',
                                    name: 'ad_material_referencia_cert_detalle_inspeccion',
                                    fieldLabel: 'Ad Material Referencia Cert Detalle Inspeccion'
								},
                                {
                                    xtype: 'datefield',
                                    name: 'fecha_creacion_detalle_inspeccion',
                                    fieldLabel: 'Fecha Creacion Detalle Inspeccion',
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