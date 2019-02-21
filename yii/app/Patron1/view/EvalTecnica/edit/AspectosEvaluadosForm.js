Ext.define('ibmetrodta.view.formularios;display.EvalTecnica.edit.AspectosEvaluadosForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.formularios;display.evaltecnica.edit.aspectosevaluadosform',
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
                                    name: 'nombre_aspectos_evaluados',
                                    fieldLabel: 'Nombre Aspectos Evaluados'
								},
                                {
                                    xtype: 'textareafield',
                                    name: 'educacion_aspectos_evaluados',
                                    fieldLabel: 'Educacion Aspectos Evaluados'
								}
                        	]
                    	}, 
						{
                  			xtype: 'fieldcontainer',
                    		items: [
                                {
                                    xtype: 'textareafield',
                                    name: 'formacion_aspectos_evaluados',
                                    fieldLabel: 'Formacion Aspectos Evaluados'
								},
                                {
                                    xtype: 'textareafield',
                                    name: 'experiencia_aspectos_evaluados',
                                    fieldLabel: 'Experiencia Aspectos Evaluados'
								},
                                {
                                    xtype: 'textareafield',
                                    name: 'habilidades_aspectos_evaluados',
                                    fieldLabel: 'Habilidades Aspectos Evaluados'
								}
							]
                    	}
				]
        });
        me.callParent(arguments);
    }
});