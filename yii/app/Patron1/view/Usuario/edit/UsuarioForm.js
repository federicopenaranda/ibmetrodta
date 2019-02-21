Ext.define('ibmetrodta.view.usuario.Usuario.edit.UsuarioForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.usuario.usuario.edit.usuarioform',
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
                                    xtype: 'textfield',
                                    name: 'primer_nombre_usuario',
                                    fieldLabel: 'Primer Nombre Usuario'
                    			},
                                {
                                    xtype: 'textfield',
                                    name: 'segundo_nombre_usuario',
                                    fieldLabel: 'Segundo Nombre Usuario'
                    			},
                                {
                                    xtype: 'textfield',
                                    name: 'apellido_paterno_usuario',
                                    fieldLabel: 'Apellido Paterno Usuario'
								}
                        	]
                    	}, 
						{
                  			xtype: 'fieldcontainer',
                    		items: [
                                {
                                    xtype: 'textfield',
                                    name: 'apellido_materno_usuario',
                                    fieldLabel: 'Apellido Materno Usuario'
                    			},
                                {
                                    xtype: 'textfield',
                                    name: 'codigo_usuario',
                                    fieldLabel: 'Codigo Usuario'
                    			},
                                {
                                    xtype: 'textfield',
                                    name: 'login_usuario',
                                    fieldLabel: 'Login Usuario'
								}
                        	]
                    	}, 
						{
                  			xtype: 'fieldcontainer',
                    		items: [
                                {
                                    xtype: 'textfield',
                                    name: 'contrasena_usuario',
                                    fieldLabel: 'Contrasena Usuario'
                    			},
                                {
                                    xtype: 'combo',
                                    name: 'sexo_usuario',
                                    fieldLabel: 'Sexo Usuario:',
                                    displayField: 'nombre',
                                    valueField: 'valor',
                                    store: new Ext.data.SimpleStore({
                                        fields: ['nombre', 'valor'],
                                        data: [['f','f'],['m','m']]
                                    }),
                                    plugins: [
                                        { ptype: 'cleartrigger' }
                                    ],
                                    editable: false,
                                    forceSelection: true,
                                    allowBlank: false
                    			},
	
                                {
                                    xtype: 'textfield',
                                    name: 'telefono_usuario',
                                    fieldLabel: 'Telefono Usuario'
								}
                        	]
                    	}, 
						{
                  			xtype: 'fieldcontainer',
                    		items: [
                                {
                                    xtype: 'textfield',
                                    name: 'celular_usuario',
                                    fieldLabel: 'Celular Usuario'
                    			},
                                {
                                    xtype: 'textfield',
                                    name: 'correo_usuario',
                                    fieldLabel: 'Correo Usuario'
                    			},
                                {
                                    xtype: 'textfield',
                                    name: 'direccion_usuario',
                                    fieldLabel: 'Direccion Usuario'
								}
                        	]
                    	}, 
						{
                  			xtype: 'fieldcontainer',
                    		items: [
                                {
                                    xtype: 'textareafield',
                                    name: 'imagen_usuario',
                                    fieldLabel: 'Imagen Usuario'
								},
                                {
                                    xtype: 'textfield',
                                    name: 'observaciones_usuario',
                                    fieldLabel: 'Observaciones Usuario'
                    			},
                                {
                                    xtype: 'textfield',
                                    name: 'acceso_ip_usuario',
                                    fieldLabel: 'Acceso Ip Usuario'
								}
                        	]
                    	}, 
						{
                  			xtype: 'fieldcontainer',
                    		items: [
                                {
                                    xtype: 'datefield',
                                    name: 'fecha_creacion_usuario',
                                    fieldLabel: 'Fecha Creacion Usuario',
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