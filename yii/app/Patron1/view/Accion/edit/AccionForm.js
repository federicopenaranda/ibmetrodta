
Ext.define('ibmetrodta.view.proceso.Accion.edit.AccionForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.proceso.accion.edit.accionform',
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
                                name: 'fk_id_accion_tipo',
                                fieldLabel: 'Fk Id Accion Tipo',
                                displayField: 'nombre_accion_tipo',
                                valueField: 'id_accion_tipo',
                                store: {
                                    type: 'proceso.acciontipo'
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
                                    name: 'nombre_accion',
                                    fieldLabel: 'Nombre Accion'
								}
                        	]
                    	}, 
						{
                  			xtype: 'fieldcontainer',
                    		items: [
                                {
                                    xtype: 'textfield',
                                    name: 'descripcion_accion',
                                    fieldLabel: 'Descripcion Accion'
								}
							]
                    	}
				]
        });
        me.callParent(arguments);
    }
});