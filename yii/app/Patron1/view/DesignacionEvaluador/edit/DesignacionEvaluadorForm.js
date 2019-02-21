Ext.define('ibmetrodta.view.formularios.DesignacionEvaluador.edit.DesignacionEvaluadorForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.formularios.designacionevaluador.edit.designacionevaluadorform',
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
                                    xtype: 'textfield',
                                    name: 'por_dta_nombre_designacion_evaluador',
                                    fieldLabel: 'Por Dta Nombre Designacion Evaluador'
                    			},
                                {
                                    xtype: 'datefield',
                                    name: 'por_dta_fecha_designacion_evaluador',
                                    fieldLabel: 'Por Dta Fecha Designacion Evaluador',
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
                                    name: 'fecha_creacion_designacion_evaluador',
                                    fieldLabel: 'Fecha Creacion Designacion Evaluador',
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