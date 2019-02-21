Ext.define('ibmetrodta.view.evaluacion.Evaluacion.edit.AlcanceAcreditacionCertForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.evaluacion.evaluacion.edit.alcanceacreditacioncertform',
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
                                name: 'fk_id_evaluacion',
                                fieldLabel: 'Fk Id Evaluacion',
                                displayField: 'codigo_evaluacion',
                                valueField: 'id_evaluacion',
                                store: {
                                    type: 'proceso.evaluacion'
                                },
                                editable: false,
                                forceSelection: true,
                                allowBlank: false
                    		},
                                {
                                    xtype: 'textareafield',
                                    name: 'producto_alcance_acreditacion_cert',
                                    fieldLabel: 'Producto Alcance Acreditacion Cert'
								},
                                {
                                    xtype: 'textareafield',
                                    name: 'norma_referencia_alcance_acreditacion_cert',
                                    fieldLabel: 'Norma Referencia Alcance Acreditacion Cert'
								}
                        	]
                    	}, 
						{
                  			xtype: 'fieldcontainer',
                    		items: [
                                {
                                    xtype: 'textareafield',
                                    name: 'sector_economico_alcance_acreditacion_cert',
                                    fieldLabel: 'Sector Economico Alcance Acreditacion Cert'
								},
                                {
                                    xtype: 'textareafield',
                                    name: 'actividad_alcance_acreditacion_cert',
                                    fieldLabel: 'Actividad Alcance Acreditacion Cert'
								},
                                {
                                    xtype: 'textareafield',
                                    name: 'codigo_iaf_alcance_acreditacion_cert',
                                    fieldLabel: 'Codigo Iaf Alcance Acreditacion Cert'
								}
							]
                    	}
				]
        });
        me.callParent(arguments);
    }
});