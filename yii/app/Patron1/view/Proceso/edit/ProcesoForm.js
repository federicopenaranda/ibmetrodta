Ext.define('ibmetrodta.view.proceso.Proceso.edit.ProcesoForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.proceso.proceso.edit.procesoform',
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
                                    xtype: 'textfield',
                                    name: 'nombre_proceso',
                                    fieldLabel: 'Nombre Proceso'
                    			},
                                {
                                    xtype: 'textfield',
                                    name: 'valor_proceso',
                                    fieldLabel: 'Valor Proceso'
								}
							]
                    	}
				]
        });
        me.callParent(arguments);
    }
});