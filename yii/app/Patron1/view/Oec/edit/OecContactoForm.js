Ext.define('ibmetrodta.view.oec.Oec.edit.OecContactoForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.oec.oec.edit.oeccontactoform',
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
                allowBlank: true,
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
                                name: 'fk_id_oec',
                                fieldLabel: 'Fk Id Oec',
                                displayField: 'nombre_oec',
                                valueField: 'id_oec',
                                store: {
                                    type: 'opciones.oec'
                                },
                                editable: false,
                                forceSelection: true,
                                allowBlank: false
                    		},
                            {
                                xtype: 'ux.form.field.remotecombobox',
                                name: 'fk_id_oec_titulo',
                                fieldLabel: 'Fk Id Oec Titulo',
                                displayField: 'nombre_oec_titulo',
                                valueField: 'id_oec_titulo',
                                store: {
                                    type: 'oec.oectitulo'
                                },
                                editable: false,
                                forceSelection: true,
                                allowBlank: false
                    		},
                                {
                                    xtype: 'textfield',
                                    name: 'primer_nombre_oec_contacto',
                                    fieldLabel: 'Primer Nombre Oec Contacto'
								}
                        	]
                    	}, 
						{
                  			xtype: 'fieldcontainer',
                    		items: [
                                {
                                    xtype: 'textfield',
                                    name: 'segundo_nombre_oec_contacto',
                                    fieldLabel: 'Segundo Nombre Oec Contacto'
                    			},
                                {
                                    xtype: 'textfield',
                                    name: 'apellido_paterno_oec_contacto',
                                    fieldLabel: 'Apellido Paterno Oec Contacto'
                    			},
                                {
                                    xtype: 'textfield',
                                    name: 'apellido_materno_oec_contacto',
                                    fieldLabel: 'Apellido Materno Oec Contacto'
								}
                        	]
                    	}, 
						{
                  			xtype: 'fieldcontainer',
                    		items: [
                                {
                                    xtype: 'textfield',
                                    name: 'cargo_oec_contacto',
                                    fieldLabel: 'Cargo Oec Contacto'
                    			},
                                {
                                    xtype: 'textfield',
                                    name: 'email_oec_contacto',
                                    fieldLabel: 'Email Oec Contacto'
                    			},
                                {
                                    xtype: 'textfield',
                                    name: 'celular_oec_contacto',
                                    fieldLabel: 'Celular Oec Contacto'
								}
                        	]
                    	}, 
						{
                  			xtype: 'fieldcontainer',
                    		items: [
                                {
                                    xtype: 'textfield',
                                    name: 'telefono_oec_contacto',
                                    fieldLabel: 'Telefono Oec Contacto'
                    			},
                                {
                                    xtype: 'combo',
                                    name: 'representante_legal_oec_contacto',
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
                    	}
				]
        });
        me.callParent(arguments);
    }
});