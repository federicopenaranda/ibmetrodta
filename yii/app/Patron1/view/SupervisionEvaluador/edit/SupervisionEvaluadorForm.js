Ext.define('ibmetrodta.view.formularios.SupervisionEvaluador.edit.SupervisionEvaluadorForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.formularios.supervisionevaluador.edit.supervisionevaluadorform',
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
                                    name: 'criterio_evaluacion_supervision_evaluador',
                                    fieldLabel: 'Criterio Evaluacion Supervision Evaluador'
								},
                                {
                                    xtype: 'textareafield',
                                    name: 'comentarios_supervision_evaluador',
                                    fieldLabel: 'Comentarios Supervision Evaluador'
								}
                        	]
                    	}, 
						{
                  			xtype: 'fieldcontainer',
                    		items: [
                                {
                                    xtype: 'textareafield',
                                    name: 'observaciones_supervision_evaluador',
                                    fieldLabel: 'Observaciones Supervision Evaluador'
								},
                                {
                                    xtype: 'textfield',
                                    name: 'nombre_supervision_evaluador',
                                    fieldLabel: 'Nombre Supervision Evaluador'
                    			},
                                {
                                    xtype: 'textfield',
                                    name: 'cargo_supervision_evaluador',
                                    fieldLabel: 'Cargo Supervision Evaluador'
								}
                        	]
                    	}, 
						{
                  			xtype: 'fieldcontainer',
                    		items: [
                                {
                                    xtype: 'datefield',
                                    name: 'fecha_supervision_evaluador',
                                    fieldLabel: 'Fecha Supervision Evaluador',
                                    format: 'Y-m-d',
                                    submitFormat: 'Y-m-d'
                    			},
                                {
                                    xtype: 'datefield',
                                    name: 'fecha_creacion_supervision_evaluador',
                                    fieldLabel: 'Fecha Creacion Supervision Evaluador',
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