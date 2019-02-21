Ext.define('ibmetrodta.view.oec.Oec.edit.OecForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.oec.oec.edit.oecform',
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
                                name: 'fk_id_oec_tipo',
                                fieldLabel: 'Fk Id Oec Tipo',
                                displayField: 'nombre_oec_tipo',
                                valueField: 'id_oec_tipo',
                                store: {
                                    type: 'oec.oectipo'
                                },
                                editable: false,
                                forceSelection: true,
                                allowBlank: false
                    		},
                            {
                                xtype: 'ux.form.field.remotecombobox',
                                name: 'fk_id_pais',
                                fieldLabel: 'Fk Id Pais',
                                displayField: 'nombre_pais',
                                valueField: 'id_pais',
                                store: {
                                    type: 'oec.pais'
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
                                    type: 'oec.normareferencia'
                                },
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
                                    xtype: 'textfield',
                                    name: 'nombre_oec',
                                    fieldLabel: 'Nombre Oec'
                    			},
                                {
                                    xtype: 'textfield',
                                    name: 'nit_oec',
                                    fieldLabel: 'Nit Oec'
                    			},
                                {
                                    xtype: 'textareafield',
                                    name: 'direccion_oec',
                                    fieldLabel: 'Direccion Oec'
								}
                        	]
                    	}, 
						{
                  			xtype: 'fieldcontainer',
                    		items: [
                                {
                                    xtype: 'textfield',
                                    name: 'ciudad_oec',
                                    fieldLabel: 'Ciudad Oec'
                    			},
                                {
                                    xtype: 'textfield',
                                    name: 'departamento_oec',
                                    fieldLabel: 'Departamento Oec'
                    			},
                                {
                                    xtype: 'textfield',
                                    name: 'telefono1_oec',
                                    fieldLabel: 'Telefono1 Oec'
								}
                        	]
                    	}, 
						{
                  			xtype: 'fieldcontainer',
                    		items: [
                                {
                                    xtype: 'textfield',
                                    name: 'telefono2_oec',
                                    fieldLabel: 'Telefono2 Oec'
                    			},
                                {
                                    xtype: 'textfield',
                                    name: 'celular_oec',
                                    fieldLabel: 'Celular Oec'
                    			},
                                {
                                    xtype: 'textfield',
                                    name: 'fax_oec',
                                    fieldLabel: 'Fax Oec'
								}
                        	]
                    	}, 
						{
                  			xtype: 'fieldcontainer',
                    		items: [
                                {
                                    xtype: 'textfield',
                                    name: 'email1_oec',
                                    fieldLabel: 'Email1 Oec'
                    			},
                                {
                                    xtype: 'textfield',
                                    name: 'email2_oec',
                                    fieldLabel: 'Email2 Oec'
                    			},
                                {
                                    xtype: 'datefield',
                                    name: 'fecha_creacion_oec',
                                    fieldLabel: 'Fecha Creacion Oec',
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