Ext.define('ibmetrodta.view.formularios.PruebaParticipacion.edit.PruebaParticipacionForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.formularios.pruebaparticipacion.edit.pruebaparticipacionform',
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
                                xtype: 'ux.form.field.remotecombobox',
                                name: 'fk_id_criterio_evaluacion',
                                fieldLabel: 'Fk Id Criterio Evaluacion',
                                displayField: 'nombre_criterio_evaluacion',
                                valueField: 'id_criterio_evaluacion',
                                store: {
                                    type: 'formularios.criterioevaluacion'
                                },
                                editable: false,
                                forceSelection: true,
                                allowBlank: false
                    		},
                                {
                                    xtype: 'numberfield',
                                    name: 'horas_evaluacion_prueba_participacion',
                                    fieldLabel: 'Horas Evaluacion Prueba Participacion'
								}
	
                        	]
                    	}, 
						{
                  			xtype: 'fieldcontainer',
                    		items: [
                                {
                                    xtype: 'textareafield',
                                    name: 'dir_nombre_responsable_prueba_participacion',
                                    fieldLabel: 'Dir Nombre Responsable Prueba Participacion'
								},
                                {
                                    xtype: 'textareafield',
                                    name: 'dir_cargo_prueba_participacion',
                                    fieldLabel: 'Dir Cargo Prueba Participacion'
								},
                                {
                                    xtype: 'datefield',
                                    name: 'dir_fecha_prueba_participacion',
                                    fieldLabel: 'Dir Fecha Prueba Participacion',
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
                                    name: 'oec_nombre_responsable_prueba_participacion',
                                    fieldLabel: 'Oec Nombre Responsable Prueba Participacion'
								},
                                {
                                    xtype: 'textareafield',
                                    name: 'oec_cargo_prueba_participacion',
                                    fieldLabel: 'Oec Cargo Prueba Participacion'
								},
                                {
                                    xtype: 'datefield',
                                    name: 'oec_fecha_prueba_participacion',
                                    fieldLabel: 'Oec Fecha Prueba Participacion',
                                    format: 'Y-m-d',
                                    submitFormat: 'Y-m-d'
								}
                        	]
                    	}, 
						{
                  			xtype: 'fieldcontainer',
                    		items: [
                                {
                                    xtype: 'datefield',
                                    name: 'fecha_creacion_prueba_participacion',
                                    fieldLabel: 'Fecha Creacion Prueba Participacion',
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