Ext.define('ibmetrodta.view.proceso.PeticionArchivo.edit.PeticionArchivoForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.proceso.peticionarchivo.edit.peticionarchivoform',
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
                                name: 'fk_id_peticion_estado',
                                fieldLabel: 'Fk Id Peticion Estado',
                                displayField: 'id_peticion_estado',
                                valueField: 'id_peticion_estado',
                                store: {
                                    type: 'proceso.peticionestado'
                                },
                                editable: false,
                                forceSelection: true,
                                allowBlank: false
                    		},
                                {
                                    xtype: 'textfield',
                                    name: 'nombre_peticion_archivo',
                                    fieldLabel: 'Nombre Peticion Archivo'
                    			},
                                {
                                    xtype: 'textfield',
                                    name: 'version_peticion_archivo',
                                    fieldLabel: 'Version Peticion Archivo'
								}
                        	]
                    	}, 
						{
                  			xtype: 'fieldcontainer',
                    		items: [
                                {
                                    xtype: 'combo',
                                    name: 'activo_peticion_archivo',
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
                                    xtype: 'textareafield',
                                    name: 'descripcion_peticion_archivo',
                                    fieldLabel: 'Descripcion Peticion Archivo'
								},
                                {
                                    xtype: 'combo',
                                    name: 'tipo_peticion_archivo',
                                    fieldLabel: 'Tipo Peticion Archivo:',
                                    displayField: 'nombre',
                                    valueField: 'valor',
                                    store: new Ext.data.SimpleStore({
                                        fields: ['nombre', 'valor'],
                                        data: [['t','t'],['s','s']]
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
                                    name: 'estado_peticion_archivo',
                                    fieldLabel: 'Estado Peticion Archivo:',
                                    displayField: 'nombre',
                                    valueField: 'valor',
                                    store: new Ext.data.SimpleStore({
                                        fields: ['nombre', 'valor'],
                                        data: [['c','c'],['v','v']]
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
                                    name: 'adicional_peticion_archivo',
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
                                	xtype: 'filefield',
                            		name: 'DocumentoEnviado020001[file]',
                            		itemId: 'escaneado_peticion_archivo',
                            		fieldLabel: 'Escaneado Peticion Archivo',
                            		labelWidth: 80,
                            		msgTarget: 'side',
                            		labelAlign: 'top',
                            		allowBlank: true,
                            		anchor: '100%',
                            		buttonConfig: {
                                		iconCls: 'icon_picture',
                                		text: ''
                            		}
								}
                        	]
                    	}, 
						{
                  			xtype: 'fieldcontainer',
                    		items: [
                                {
                                    xtype: 'datefield',
                                    name: 'fecha_creacion_peticion_archivo',
                                    fieldLabel: 'Fecha Creacion Peticion Archivo',
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