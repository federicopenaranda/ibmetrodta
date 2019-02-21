Ext.define('ibmetrodta.view.proceso.Peticion.edit.PeticionForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.proceso.peticion.edit.peticionform',
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
                                name: 'fk_id_proceso',
                                fieldLabel: 'Fk Id Proceso',
                                displayField: 'nombre_proceso',
                                valueField: 'id_proceso',
                                store: {
                                    type: 'proceso.proceso'
                                },
                                editable: false,
                                forceSelection: true,
                                allowBlank: false
                    		},
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
                                    xtype: 'textfield',
                                    name: 'titulo_peticion',
                                    fieldLabel: 'Titulo Peticion'
								}
                        	]
                    	}, 
						{
                  			xtype: 'fieldcontainer',
                    		items: [
                                {
                                    xtype: 'datefield',
                                    name: 'fechahora_peticion',
                                    fieldLabel: 'Fechahora Peticion',
                                    format: 'Y-m-d',
                                    submitFormat: 'Y-m-d'
                    			},
                                {
                                    xtype: 'textfield',
                                    name: 'codigo_peticion',
                                    fieldLabel: 'Codigo Peticion'
                    			},
                                {
                                    xtype: 'textareafield',
                                    name: 'descripcion_peticion',
                                    fieldLabel: 'Descripcion Peticion'
								}
                        	]
                    	}, 
						{
                  			xtype: 'fieldcontainer',
                    		items: [
                                {
                                    xtype: 'textfield',
                                    name: 'codigo_acreditacion_peticion',
                                    fieldLabel: 'Codigo Acreditacion Peticion'
                    			},
                                {
                                    xtype: 'datefield',
                                    name: 'fecha_creacion_peticion',
                                    fieldLabel: 'Fecha Creacion Peticion',
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