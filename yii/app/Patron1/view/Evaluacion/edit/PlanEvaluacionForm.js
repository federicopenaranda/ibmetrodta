Ext.define('ibmetrodta.view.evaluacion.Evaluacion.edit.PlanEvaluacionForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.evaluacion.evaluacion.edit.planevaluacionform',
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
                                xtype: 'ux.form.field.remotecombobox',
                                name: 'fk_id_oec_contacto',
                                fieldLabel: 'Fk Id Oec Contacto',
                                displayField: 'primer_nombre_oec_contacto',
                                valueField: 'id_oec_contacto',
                                store: {
                                    type: 'opciones.oeccontacto'
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
                                    type: 'evaluacion.usuario'
                                },
                                editable: false,
                                forceSelection: true,
                                allowBlank: false
							}
                        	]
                    	}, 
						{
                  			xtype: 'fieldcontainer',
                    		items: [
                                {
                                    xtype: 'datefield',
                                    name: 'fecha_plan_evaluacion',
                                    fieldLabel: 'Fecha Plan Evaluacion',
                                    format: 'Y-m-d',
                                    submitFormat: 'Y-m-d'
                    			},
                                {
                                    xtype: 'textareafield',
                                    name: 'requisitos_norma_plan_evaluacion',
                                    fieldLabel: 'Requisitos Norma Plan Evaluacion'
								}
                        	]
                    	}, 
						{
                  			xtype: 'fieldcontainer',
                    		items: [
                                {
                                    xtype: 'textareafield',
                                    name: 'metodologia_plan_evaluacion',
                                    fieldLabel: 'Metodologia Plan Evaluacion'
								}
							]
                    	}
				]
        });
        me.callParent(arguments);
    }
});