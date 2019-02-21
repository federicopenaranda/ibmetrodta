Ext.define('ibmetrodta.view.formularios.InformeAcred.edit.InformeAcredForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.formularios.informeacred.edit.informeacredform',
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
                                    name: 'observaciones_ra_oec_informe_acred',
                                    fieldLabel: 'Observaciones Ra Oec Informe Acred'
								},
                                {
                                    xtype: 'textareafield',
                                    name: 'observaciones_ra_ee_informe_acred',
                                    fieldLabel: 'Observaciones Ra Ee Informe Acred'
								}
                        	]
                    	}, 
						{
                  			xtype: 'fieldcontainer',
                    		items: [
                                {
                                    xtype: 'textareafield',
                                    name: 'cumplimiento_etapas_informe_acred',
                                    fieldLabel: 'Cumplimiento Etapas Informe Acred'
								},
                                {
                                    xtype: 'textareafield',
                                    name: 'recomendacion_ra_informe_acred',
                                    fieldLabel: 'Recomendacion Ra Informe Acred'
								},
                                {
                                    xtype: 'datefield',
                                    name: 'recomendacion_fecha_informe_acred',
                                    fieldLabel: 'Recomendacion Fecha Informe Acred',
                                    format: 'Y-m-d',
                                    submitFormat: 'Y-m-d'
								}
                        	]
                    	}, 
						{
                  			xtype: 'fieldcontainer',
                    		items: [
                                {
                                    xtype: 'textareafield',
                                    name: 'toma_decision_da_informe_acred',
                                    fieldLabel: 'Toma Decision Da Informe Acred'
								},
                                {
                                    xtype: 'datefield',
                                    name: 'toma_decision_da_fecha_informe_acred',
                                    fieldLabel: 'Toma Decision Da Fecha Informe Acred',
                                    format: 'Y-m-d',
                                    submitFormat: 'Y-m-d'
                    			},
                                {
                                    xtype: 'datefield',
                                    name: 'fecha_creacion_informe_acred',
                                    fieldLabel: 'Fecha Creacion Informe Acred',
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