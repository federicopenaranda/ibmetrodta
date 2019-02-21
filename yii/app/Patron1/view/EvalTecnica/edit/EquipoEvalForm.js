Ext.define('ibmetrodta.view.formularios;display.EvalTecnica.edit.EquipoEvalForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.formularios;display.evaltecnica.edit.equipoevalform',
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
                                    name: 'nombre_equipo_eval',
                                    fieldLabel: 'Nombre Equipo Eval'
								},
                                {
                                    xtype: 'textareafield',
                                    name: 'disponibilidad_equipo_eval',
                                    fieldLabel: 'Disponibilidad Equipo Eval'
								}
                        	]
                    	}, 
						{
                  			xtype: 'fieldcontainer',
                    		items: [
                                {
                                    xtype: 'textareafield',
                                    name: 'programa_calibracion_equipo_eval',
                                    fieldLabel: 'Programa Calibracion Equipo Eval'
								},
                                {
                                    xtype: 'textareafield',
                                    name: 'identificacion_individual_equipo_eval',
                                    fieldLabel: 'Identificacion Individual Equipo Eval'
								},
                                {
                                    xtype: 'textareafield',
                                    name: 'registros_equipo_eval',
                                    fieldLabel: 'Registros Equipo Eval'
								}
                        	]
                    	}, 
						{
                  			xtype: 'fieldcontainer',
                    		items: [
                                {
                                    xtype: 'textareafield',
                                    name: 'verificaciones_intermedias_equipo_eval',
                                    fieldLabel: 'Verificaciones Intermedias Equipo Eval'
								},
                                {
                                    xtype: 'textareafield',
                                    name: 'proteccion_equipo_eval',
                                    fieldLabel: 'Proteccion Equipo Eval'
								}
							]
                    	}
				]
        });
        me.callParent(arguments);
    }
});