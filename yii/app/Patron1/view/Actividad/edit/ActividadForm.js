Ext.define('ibmetrodta.view.proceso.Actividad.edit.ActividadForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.proceso.actividad.edit.actividadform',
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
                                name: 'fk_id_actividad_tipo',
                                fieldLabel: 'Fk Id Actividad Tipo',
                                displayField: 'nombre_actividad_tipo',
                                valueField: 'id_actividad_tipo',
                                store: {
                                    type: 'proceso.actividadtipo'
                                },
                                editable: false,
                                forceSelection: true,
                                allowBlank: false
                    		},
                            {
                                xtype: 'ux.form.field.remotecombobox',
                                name: 'fk_id_proceso',
                                fieldLabel: 'Fk Id Proceso',
                                displayField: 'nombre_proceso',
                                valueField: 'id_proceso',
                                store: {
                                    type: 'proceso.proceso'
                                },
                                editable: false,
                                forceSelection: true,
                                allowBlank: false
                    		},
                                {
                                    xtype: 'textfield',
                                    name: 'nombre_actividad',
                                    fieldLabel: 'Nombre Actividad'
								}
                        	]
                    	}, 
						{
                  			xtype: 'fieldcontainer',
                    		items: [
                                {
                                    xtype: 'textareafield',
                                    name: 'descripcion_actividad',
                                    fieldLabel: 'Descripcion Actividad'
								}
							]
                    	}
				]
        });
        me.callParent(arguments);
    }
});