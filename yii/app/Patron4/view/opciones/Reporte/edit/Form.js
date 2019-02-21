Ext.define('ibmetrodta.view.opciones.Reporte.edit.Form', {
    extend: 'Ext.form.Panel',
    alias: 'widget.opciones.reporte.edit.form',
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
                allowBlank: false,
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
                                    name: 'codigo_reporte',
                                    fieldLabel: 'Codigo Reporte'
                    			},
                                {
                                    xtype: 'textfield',
                                    name: 'nombre_reporte',
                                    fieldLabel: 'Nombre Reporte'
                    			},
                                {
                                    xtype: 'textareafield',
                                    name: 'descripcion_reporte',
                                    fieldLabel: 'Descripcion Reporte'
								}
                        	]
                    	}, 
						{
                  			xtype: 'fieldcontainer',
                    		items: [
                                {
                                    xtype: 'combo',
                                    name: 'estado_reporte',
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
                                    xtype: 'textfield',
                                    name: 'ruta_reporte',
                                    fieldLabel: 'Ruta Reporte'
                    			},
                                {
                                    xtype: 'combo',
                                    name: 'tipo_reporte',
                                    fieldLabel: 'Tipo Reporte:',
                                    displayField: 'nombre',
                                    valueField: 'valor',
                                    store: new Ext.data.SimpleStore({
                                        fields: ['nombre', 'valor'],
                                        data: [['vista','vista'],['pdf','pdf'],['excel','excel']]
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