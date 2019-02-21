Ext.define('ibmetrodta.view.proceso.Estado.edit.EstadoForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.proceso.estado.edit.estadoform',
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
                                name: 'fk_id_estado_tipo',
                                fieldLabel: 'Fk Id Estado Tipo',
                                displayField: 'nombre_proceso_estado',
                                valueField: 'id_estado_tipo',
                                store: {
                                    type: 'proceso.estadotipo'
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
                                    name: 'nombre_estado',
                                    fieldLabel: 'Nombre Estado'
								}
                        	]
                    	}, 
						{
                  			xtype: 'fieldcontainer',
                    		items: [
                                {
                                    xtype: 'textareafield',
                                    name: 'descripcion_estado',
                                    fieldLabel: 'Descripcion Estado'
								}
							]
                    	}
				]
        });
        me.callParent(arguments);
    }
});