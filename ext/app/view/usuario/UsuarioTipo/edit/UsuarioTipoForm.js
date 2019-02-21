Ext.define('ibmetrodta.view.usuario.UsuarioTipo.edit.UsuarioTipoForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.usuario.usuariotipo.edit.usuarioform',
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
                                    name: 'nombre_usuario_tipo',
                                    fieldLabel: 'Nombre Usuario Tipo'
                    			},
                                {
                                    xtype: 'textareafield',
                                    name: 'descripcion_usuario_tipo',
                                    fieldLabel: 'Descripcion Usuario Tipo'
								}
							]
                    	}
				]
        });
        me.callParent(arguments);
    }
});