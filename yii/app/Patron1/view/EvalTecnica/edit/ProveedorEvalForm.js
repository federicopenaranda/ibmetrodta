Ext.define('ibmetrodta.view.formularios;display.EvalTecnica.edit.ProveedorEvalForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.formularios;display.evaltecnica.edit.proveedorevalform',
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
                                name: 'fk_id_eval_tecnica',
                                fieldLabel: 'Fk Id Eval Tecnica',
                                displayField: 'id_eval_tecnica',
                                valueField: 'id_eval_tecnica',
                                store: {
                                    type: 'proceso.evaltecnica'
                                },
                                editable: false,
                                forceSelection: true,
                                allowBlank: false
                    		},
                                {
                                    xtype: 'textareafield',
                                    name: 'nombre_proveedor_eval',
                                    fieldLabel: 'Nombre Proveedor Eval'
								},
                                {
                                    xtype: 'textareafield',
                                    name: 'resultados_proveedor_eval',
                                    fieldLabel: 'Resultados Proveedor Eval'
								}
                        	]
                    	}, 
						{
                  			xtype: 'fieldcontainer',
                    		items: [
                                {
                                    xtype: 'textareafield',
                                    name: 'indicador_desempeno_proveedor_eval',
                                    fieldLabel: 'Indicador Desempeno Proveedor Eval'
								},
                                {
                                    xtype: 'textareafield',
                                    name: 'conclusion_desempeno_proveedor_eval',
                                    fieldLabel: 'Conclusion Desempeno Proveedor Eval'
								}
							]
                    	}
				]
        });
        me.callParent(arguments);
    }
});