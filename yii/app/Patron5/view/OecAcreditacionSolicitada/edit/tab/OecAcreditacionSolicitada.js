Ext.define('ibmetrodta.view.oec.OecAcreditacionSolicitada.edit.tab.OecAcreditacionSolicitada', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.oec.oecacreditacionsolicitada.edit.tab.oecacreditacionsolicitada',
    layout: 'form',
    bodyPadding: 0,
    margin: 5,
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'fieldset',
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
                                    xtype: 'textareafield',
                                    name: 'inspeccion_oec_acreditacion_solicitada',
                                    fieldLabel: 'Inspeccion Oec Acreditacion Solicitada'
								},
                                {
                                    xtype: 'textareafield',
                                    name: 'especificaciones_oec_acreditacion_solicitada',
                                    fieldLabel: 'Especificaciones Oec Acreditacion Solicitada'
								}
							]
                    	}
						]
		
                }
            ]
        });
        me.callParent(arguments);	
    }
});