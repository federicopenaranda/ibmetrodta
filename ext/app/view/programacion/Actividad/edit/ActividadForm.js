Ext.define('ibmetrodta.view.programacion.Actividad.edit.ActividadForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.programacion.actividad.edit.actividadform',
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
                            xtype: 'programacion.actividad.edit.tab.info',
                            title: 'Info'
                        },
                        {
                            xtype: 'programacion.actividad.edit.tab.actividadusuario',
                            title: 'Usuarios'
                        }/*,
                        {
                            xtype: 'programacion.actividad.edit.tab.paso3',
                            title: 'Paso 3 de 20'
                        }*/
                    ]
                }
            ]
        });
        me.callParent(arguments);
    }
});