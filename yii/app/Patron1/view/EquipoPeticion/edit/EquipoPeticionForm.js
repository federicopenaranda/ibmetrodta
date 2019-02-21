Ext.define('ibmetrodta.view.proceso;display.EquipoPeticion.edit.EquipoPeticionForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.proceso;display.equipopeticion.edit.equipopeticionform',
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
                                name: 'fk_id_usuario',
                                fieldLabel: 'Fk Id Usuario',
                                displayField: 'codigo_usuario',
                                valueField: 'id_usuario',
                                store: {
                                    type: 'proceso;display.usuario'
                                },
                                editable: false,
                                forceSelection: true,
                                allowBlank: false
                    		},
                                {
                                    xtype: 'numberfield',
                                    name: 'cantidad_horas_equipo_peticion',
                                    fieldLabel: 'Cantidad Horas Equipo Peticion'
								}
	
                        	]
                    	}, 
						{
                  			xtype: 'fieldcontainer',
                    		items: [
                                {
                                    xtype: 'textareafield',
                                    name: 'observaciones_equipo_peticion',
                                    fieldLabel: 'Observaciones Equipo Peticion'
								},
                                {
                                    xtype: 'combo',
                                    name: 'estado_equipo_peticion',
                                    fieldLabel: 'Estado Equipo Peticion:',
                                    displayField: 'nombre',
                                    valueField: 'valor',
                                    store: new Ext.data.SimpleStore({
                                        fields: ['nombre', 'valor'],
                                        data: [['n','n'],['e','e'],['a','a'],['r','r']]
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