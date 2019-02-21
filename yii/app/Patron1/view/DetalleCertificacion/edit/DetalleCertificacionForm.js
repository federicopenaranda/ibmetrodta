Ext.define('ibmetrodta.view.formularios.DetalleCertificacion.edit.DetalleCertificacionForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.formularios.detallecertificacion.edit.detallecertificacionform',
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
                                    name: 'estado_detalle_certificacion',
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
                                    name: 'objetivo_detalle_certificacion',
                                    fieldLabel: 'Objetivo Detalle Certificacion:',
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
                                    xtype: 'combo',
                                    name: 'tipo_certificacion_detalle_certificacion',
                                    fieldLabel: 'Tipo Certificacion Detalle Certificacion:',
                                    displayField: 'nombre',
                                    valueField: 'valor',
                                    store: new Ext.data.SimpleStore({
                                        fields: ['nombre', 'valor'],
                                        data: [['sis-gestion','sis-gestion'],['producto','producto'],['persona','persona']]
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
                                    name: 'documento_normativo_detalle_certificacion',
                                    fieldLabel: 'Documento Normativo Detalle Certificacion'
								},
                                {
                                    xtype: 'textareafield',
                                    name: 'procedimiento_certificacion_detalle_certificacion',
                                    fieldLabel: 'Procedimiento Certificacion Detalle Certificacion'
								}
                        	]
                    	}, 
						{
                  			xtype: 'fieldcontainer',
                    		items: [
                                {
                                    xtype: 'textareafield',
                                    name: 'producto_certificar_detalle_certificacion',
                                    fieldLabel: 'Producto Certificar Detalle Certificacion'
								},
                                {
                                    xtype: 'textareafield',
                                    name: 'codigo_nace_detalle_certificacion',
                                    fieldLabel: 'Codigo Nace Detalle Certificacion'
								},
                                {
                                    xtype: 'textareafield',
                                    name: 'auditores_calificados_detalle_certificacion',
                                    fieldLabel: 'Auditores Calificados Detalle Certificacion'
								}
                        	]
                    	}, 
						{
                  			xtype: 'fieldcontainer',
                    		items: [
                                {
                                    xtype: 'textareafield',
                                    name: 'expertos_tecnicos_detalle_certificacion',
                                    fieldLabel: 'Expertos Tecnicos Detalle Certificacion'
								},
                                {
                                    xtype: 'textareafield',
                                    name: 'observaciones_detalle_certificacion',
                                    fieldLabel: 'Observaciones Detalle Certificacion'
								},
                                {
                                    xtype: 'textareafield',
                                    name: 'ensayos_en_produccto_detalle_certificacion',
                                    fieldLabel: 'Ensayos En Produccto Detalle Certificacion'
								}
                        	]
                    	}, 
						{
                  			xtype: 'fieldcontainer',
                    		items: [
                                {
                                    xtype: 'textareafield',
                                    name: 'laboratorios_ensayos_detalle_certificacion',
                                    fieldLabel: 'Laboratorios Ensayos Detalle Certificacion'
								},
                                {
                                    xtype: 'datefield',
                                    name: 'fecha_creacion_detalle_certificacion',
                                    fieldLabel: 'Fecha Creacion Detalle Certificacion',
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