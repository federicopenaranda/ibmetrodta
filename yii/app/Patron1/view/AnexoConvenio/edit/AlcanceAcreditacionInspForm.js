Ext.define('ibmetrodta.view.formularios.AnexoConvenio.edit.AlcanceAcreditacionInspForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.formularios.anexoconvenio.edit.alcanceacreditacioninspform',
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
                                name: 'fk_id_anexo_convenio',
                                fieldLabel: 'Fk Id Anexo Convenio',
                                displayField: 'responsable_anexo_convenio',
                                valueField: 'id_anexo_convenio',
                                store: {
                                    type: 'proceso.anexoconvenio'
                                },
                                editable: false,
                                forceSelection: true,
                                allowBlank: false
                    		},
                                {
                                    xtype: 'datefield',
                                    name: 'fecha_acreditacion_alcance_acreditacion_insp',
                                    fieldLabel: 'Fecha Acreditacion Alcance Acreditacion Insp',
                                    format: 'Y-m-d',
                                    submitFormat: 'Y-m-d'
                    			},
                                {
                                    xtype: 'textareafield',
                                    name: 'procedimiento_alcance_acreditacion_insp',
                                    fieldLabel: 'Procedimiento Alcance Acreditacion Insp'
								}
                        	]
                    	}, 
						{
                  			xtype: 'fieldcontainer',
                    		items: [
                                {
                                    xtype: 'textareafield',
                                    name: 'norma_ref_alcance_acreditacion_insp',
                                    fieldLabel: 'Norma Ref Alcance Acreditacion Insp'
								},
                                {
                                    xtype: 'textareafield',
                                    name: 'items_inspeccionados_alcance_acreditacion_insp',
                                    fieldLabel: 'Items Inspeccionados Alcance Acreditacion Insp'
								},
                                {
                                    xtype: 'textareafield',
                                    name: 'items_referencia_alcance_acreditacion_insp',
                                    fieldLabel: 'Items Referencia Alcance Acreditacion Insp'
								}
                        	]
                    	}, 
						{
                  			xtype: 'fieldcontainer',
                    		items: [
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