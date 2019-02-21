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
									xtype: 'textfield',
									name: 'primer_nombre_usuario',
									fieldLabel: 'Primer Nombre Usuario',
									allowBlank: false
								},
								{
									xtype: 'textfield',
									name: 'segundo_nombre_usuario',
									fieldLabel: 'Segundo Nombre Usuario',
									allowBlank: false
								},
								{
									xtype: 'textfield',
									name: 'apellido_paterno_usuario',
									fieldLabel: 'Apellido Paterno Usuario',
									allowBlank: false
								},
								{
									xtype: 'textfield',
									name: 'apellido_materno_usuario',
									fieldLabel: 'Apellido Materno Usuario',
									allowBlank: false
								},
								{
									xtype: 'textfield',
									name: 'codigo_usuario',
									fieldLabel: 'Codigo Usuario',
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