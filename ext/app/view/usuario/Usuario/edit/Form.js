Ext.define('ibmetrodta.view.usuario.Usuario.edit.Form', {
    extend: 'Ext.form.Panel',
    alias: 'widget.usuario.usuario.edit.form',
    requires: [
        'Ext.form.FieldContainer',
        'Ext.form.field.Text',
        'Ext.form.field.ComboBox',
        'ibmetrodta.ux.form.field.RemoteComboBox',
        'Ext.ux.form.ItemSelector'
    ],
    initComponent: function () {
        var me = this;
        Ext.applyIf(me, {
            fieldDefaults: {
                allowBlank: true,
                labelAlign: 'top',
                flex: 1,
                margins: 5
            },
            items: [
                {
                    xtype: 'tabpanel',
                    bodyPadding: 5,
                    deferredRender: false,
                    items: [
                        {
                            xtype: 'usuario.usuario.edit.tab.info',
                            title: 'Info'
                        },
                        {
                            xtype: 'usuario.usuario.edit.tab.sistema',
                            title: 'Sistema'
                        },
                        {
                            xtype: 'usuario.usuario.edit.tab.usuariotipousuario',
                            title: 'Tipo de Usuario'
                        },
                        {
                            xtype: 'usuario.usuario.edit.tab.usuariooec',
                            title: 'OECs'
                        },
                        {
                            xtype: 'usuario.usuario.edit.tab.usuarioproceso',
                            title: 'Procesos'
                        }
                    ]
                }
            ]
        });
        me.callParent(arguments);
    }
});