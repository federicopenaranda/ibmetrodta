Ext.define('ibmetrodta.view.programacion.Vacacion.edit.Form', {
    extend: 'Ext.form.Panel',
    alias: 'widget.programacion.vacacion.edit.form',
    requires: [
        'Ext.form.FieldContainer',
        'Ext.form.field.Text',
        'Ext.form.field.ComboBox',
        'ibmetrodta.ux.form.field.RemoteComboBox'
    ],
    bodyPadding: 5,
    initComponent: function () {
        var me = this;
        Ext.applyIf(me, {
            fieldDefaults: {
                allowBlank: false,
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
                            xtype: 'datefield',
                            name: 'fecha_inicio_vacacion',
                            fieldLabel: 'Fecha de Inicio',
                            format: 'Y-m-d',
                            submitFormat: 'Y-m-d'
                        },
                        {
                            xtype: 'datefield',
                            name: 'fecha_fin_vacacion',
                            fieldLabel: 'Fecha de Fin',
                            format: 'Y-m-d',
                            submitFormat: 'Y-m-d'
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    items: [
                        {
                            xtype: 'ux.form.field.remotecombobox',
                            name: 'fk_id_usuario',
                            fieldLabel: 'Usuario:',
                            displayTpl: Ext.create('Ext.XTemplate',
                                        '<tpl for=".">',
                                            '{primer_nombre_usuario} {segundo_nombre_usuario} {apellido_paterno_usuario} {apellido_materno_usuario} ({codigo_usuario})',
                                        '</tpl>'),
                                    tpl: Ext.create('Ext.XTemplate',
                                        '<tpl for=".">',
                                            '<div class="x-boundlist-item">{primer_nombre_usuario} {segundo_nombre_usuario} {apellido_paterno_usuario} {apellido_materno_usuario} ({codigo_usuario})</div>',
                                        '</tpl>'),
                            valueField: 'id_usuario',
                            store: {
                                type: 'usuario.usuario'
                            },
                            editable: false,
                            forceSelection: true,
                            allowBlank: false
                        }
                    ]
                }
            ]
        });
        me.callParent(arguments);
    }
});