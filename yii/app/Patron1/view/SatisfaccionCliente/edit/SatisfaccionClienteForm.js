Ext.define('ibmetrodta.view.formularios.SatisfaccionCliente.edit.SatisfaccionClienteForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.formularios.satisfaccioncliente.edit.satisfaccionclienteform',
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
                                    xtype: 'textareafield',
                                    name: 'reclamos_satisfaccion_cliente',
                                    fieldLabel: 'Reclamos Satisfaccion Cliente'
								},
                                {
                                    xtype: 'textareafield',
                                    name: 'empresa_satisfaccion_cliente',
                                    fieldLabel: 'Empresa Satisfaccion Cliente'
								}
                        	]
                    	}, 
						{
                  			xtype: 'fieldcontainer',
                    		items: [
                                {
                                    xtype: 'textareafield',
                                    name: 'contacto_satisfaccion_cliente',
                                    fieldLabel: 'Contacto Satisfaccion Cliente'
								},
                                {
                                    xtype: 'textareafield',
                                    name: 'lugar_satisfaccion_cliente',
                                    fieldLabel: 'Lugar Satisfaccion Cliente'
								},
                                {
                                    xtype: 'datefield',
                                    name: 'fecha_satisfaccion_cliente',
                                    fieldLabel: 'Fecha Satisfaccion Cliente',
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
                                    name: 'fecha_creacion_satisfaccion_cliente',
                                    fieldLabel: 'Fecha Creacion Satisfaccion Cliente',
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