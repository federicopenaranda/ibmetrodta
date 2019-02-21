Ext.define('ibmetrodta.view.usuario.Usuario.search.Form', {
    extend: 'Ext.form.Panel',
    alias: 'widget.usuario.usuario.search.form',
    requires: [
        'Ext.form.FieldContainer',
        'Ext.form.FieldSet',
        'Ext.form.field.Date',
        'Ext.form.field.Text',
        'Ext.form.field.ComboBox',
        'Ext.slider.Multi',
        'ibmetrodta.ux.form.field.RemoteComboBox',
        'ibmetrodta.ux.form.field.plugin.ClearTrigger'
    ],
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
            fieldDefaults: {
                labelAlign: 'top',
                flex: 1,
                margins: 5
            },
            items: [
                {
                    xtype: 'fieldset',
                    title: 'Criterios de Búsqueda',
                    collapsible: true,
                    items: [
                        {
                            xtype: 'fieldcontainer',
                            layout: 'hbox',
                            items: [

								{
									xtype: 'datefield',
                            		name: 'primer_nombre_usuario',
                            		fieldLabel: 'Primer Nombre Usuario:',
                            		format: 'Y-m-d',
                            		submitFormat: 'Y-m-d',
                            		allowBlank: false
								},
								{
									xtype: 'datefield',
                            		name: 'segundo_nombre_usuario',
                            		fieldLabel: 'Segundo Nombre Usuario:',
                            		format: 'Y-m-d',
                            		submitFormat: 'Y-m-d',
                            		allowBlank: false
								},
								{
									xtype: 'datefield',
                            		name: 'apellido_paterno_usuario',
                            		fieldLabel: 'Apellido Paterno Usuario:',
                            		format: 'Y-m-d',
                            		submitFormat: 'Y-m-d',
                            		allowBlank: false
								},
								{
									xtype: 'datefield',
                            		name: 'apellido_materno_usuario',
                            		fieldLabel: 'Apellido Materno Usuario:',
                            		format: 'Y-m-d',
                            		submitFormat: 'Y-m-d',
                            		allowBlank: false
								},
								{
									xtype: 'datefield',
                            		name: 'login_usuario',
                            		fieldLabel: 'Login Usuario:',
                            		format: 'Y-m-d',
                            		submitFormat: 'Y-m-d',
                            		allowBlank: false
								},
								{
									xtype: 'datefield',
                            		name: 'telefono_usuario',
                            		fieldLabel: 'Telefono Usuario:',
                            		format: 'Y-m-d',
                            		submitFormat: 'Y-m-d',
                            		allowBlank: false
								},
								{
									xtype: 'datefield',
                            		name: 'celular_usuario',
                            		fieldLabel: 'Celular Usuario:',
                            		format: 'Y-m-d',
                            		submitFormat: 'Y-m-d',
                            		allowBlank: false
								},
								{
									xtype: 'datefield',
                            		name: 'correo_usuario',
                            		fieldLabel: 'Correo Usuario:',
                            		format: 'Y-m-d',
                            		submitFormat: 'Y-m-d',
                            		allowBlank: false
								}
                            ]
                        }
                    ]
                }
            ]
        });
        me.callParent( arguments );
    }
});