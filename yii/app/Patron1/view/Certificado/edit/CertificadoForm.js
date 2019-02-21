Ext.define('ibmetrodta.view.formularios.Certificado.edit.CertificadoForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.formularios.certificado.edit.certificadoform',
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
                                    name: 'fecha_acreditacion_inicial_certificado',
                                    fieldLabel: 'Fecha Acreditacion Inicial Certificado',
                                    format: 'Y-m-d',
                                    submitFormat: 'Y-m-d'
                    			},
                                {
                                    xtype: 'datefield',
                                    name: 'fecha_validez_certificado',
                                    fieldLabel: 'Fecha Validez Certificado',
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
                                    name: 'texto1_certificado',
                                    fieldLabel: 'Texto1 Certificado'
								},
                                {
                                    xtype: 'textfield',
                                    name: 'escaneado_certificado',
                                    fieldLabel: 'Escaneado Certificado'
                    			},
                                {
                                    xtype: 'datefield',
                                    name: 'fecha_ultima_generacion_certificado',
                                    fieldLabel: 'Fecha Ultima Generacion Certificado',
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
                                    name: 'fecha_creacion_certificado',
                                    fieldLabel: 'Fecha Creacion Certificado',
                                    format: 'Y-m-d',
                                    submitFormat: 'Y-m-d'
                    			},
                                {
                                    xtype: 'combo',
                                    name: 'estado_certificado',
                                    fieldLabel: 'Estado Certificado:',
                                    displayField: 'nombre',
                                    valueField: 'valor',
                                    store: new Ext.data.SimpleStore({
                                        fields: ['nombre', 'valor'],
                                        data: [['aprobado','aprobado'],['observado','observado']]
                                    }),
                                    plugins: [
                                        { ptype: 'cleartrigger' }
                                    ],
                                    editable: false,
                                    forceSelection: true,
                                    allowBlank: false
								}
	
							]
                    	}
				]
        });
        me.callParent(arguments);
    }
});