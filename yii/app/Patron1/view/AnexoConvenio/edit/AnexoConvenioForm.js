Ext.define('ibmetrodta.view.formularios.AnexoConvenio.edit.AnexoConvenioForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.formularios.anexoconvenio.edit.anexoconvenioform',
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
                                name: 'fk_id_norma_referencia',
                                fieldLabel: 'Fk Id Norma Referencia',
                                displayField: 'nombre_norma_referencia',
                                valueField: 'id_norma_referencia',
                                store: {
                                    type: 'formularios.normareferencia'
                                },
                                editable: false,
                                forceSelection: true,
                                allowBlank: false
                    		},
                                {
                                    xtype: 'textfield',
                                    name: 'responsable_anexo_convenio',
                                    fieldLabel: 'Responsable Anexo Convenio'
								}
                        	]
                    	}, 
						{
                  			xtype: 'fieldcontainer',
                    		items: [
                                {
                                    xtype: 'textfield',
                                    name: 'cargo_anexo_convenio',
                                    fieldLabel: 'Cargo Anexo Convenio'
                    			},
                                {
                                    xtype: 'datefield',
                                    name: 'fecha_anexo_convenio',
                                    fieldLabel: 'Fecha Anexo Convenio',
                                    format: 'Y-m-d',
                                    submitFormat: 'Y-m-d'
                    			},
                                {
                                    xtype: 'textfield',
                                    name: 'cips_anexo_convenio',
                                    fieldLabel: 'Cips Anexo Convenio'
								}
                        	]
                    	}, 
						{
                  			xtype: 'fieldcontainer',
                    		items: [
                                {
                                    xtype: 'textfield',
                                    name: 'numero_anexo_convenio',
                                    fieldLabel: 'Numero Anexo Convenio'
                    			},
                                {
                                	xtype: 'filefield',
                            		name: 'DocumentoEnviado020001[file]',
                            		itemId: 'escaneado_anexo_convenio',
                            		fieldLabel: 'Escaneado Anexo Convenio',
                            		labelWidth: 80,
                            		msgTarget: 'side',
                            		labelAlign: 'top',
                            		allowBlank: true,
                            		anchor: '100%',
                            		buttonConfig: {
                                		iconCls: 'icon_picture',
                                		text: ''
                            		}
                    			},
                                {
                                    xtype: 'combo',
                                    name: 'estado_anexo_convenio',
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
                                    xtype: 'datefield',
                                    name: 'fecha_creacion_anexo_convenio',
                                    fieldLabel: 'Fecha Creacion Anexo Convenio',
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