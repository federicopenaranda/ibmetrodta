Ext.define('ibmetrodta.view.evaluacion.Evaluacion.edit.AlcanceAcreditacionInspForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.evaluacion.evaluacion.edit.alcanceacreditacioninspform',
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
                                    name: 'procedimiento_inspeccion_alcance_acreditacion_insp',
                                    fieldLabel: 'Procedimiento Inspeccion Alcance Acreditacion Insp'
								},
                                {
                                    xtype: 'textareafield',
                                    name: 'norma_referencia_alcance_acreditacion_insp',
                                    fieldLabel: 'Norma Referencia Alcance Acreditacion Insp'
								}
                        	]
                    	}, 
						{
                  			xtype: 'fieldcontainer',
                    		items: [
                                {
                                    xtype: 'textareafield',
                                    name: 'items_inspeccionados_alcance_acreditacion_insp',
                                    fieldLabel: 'Items Inspeccionados Alcance Acreditacion Insp'
								},
                                {
                                    xtype: 'textareafield',
                                    name: 'items_referencia_alcance_acreditacion_insp',
                                    fieldLabel: 'Items Referencia Alcance Acreditacion Insp'
								},
                                {
                                    xtype: 'textareafield',
                                    name: 'signatario_alcance_acreditacion_insp',
                                    fieldLabel: 'Signatario Alcance Acreditacion Insp'
								}
							]
                    	}
				]
        });
        me.callParent(arguments);
    }
});