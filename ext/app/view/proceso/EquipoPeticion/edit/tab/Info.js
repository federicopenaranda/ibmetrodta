Ext.define('ibmetrodta.view.proceso.EquipoPeticion.edit.tab.Info', {
    extend: 'Ext.form.Panel',
    alias: 'widget.proceso.equipopeticion.edit.tab.info',
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
                },
                {
                    xtype: 'fieldcontainer',
                    items: [
                        {
                            xtype: 'combo',
                            name: 'cantidad_horas_equipo_peticion',
                            fieldLabel: 'Cantidad de Horas:',
                            displayField: 'nombre',
                            valueField: 'valor',
                            store: new Ext.data.SimpleStore({
                                fields: ['nombre', 'valor'],
                                data: [['8 Horas', 8], ['16 Horas', 16], ['20 Horas', 20], ['24 Horas', 24], ['32 Horas', 32]]
                            }),
                            editable: false,
                            forceSelection: true,
                            allowBlank: false
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    items: [
                        {
                            xtype: 'textarea',
                            name: 'observaciones_equipo_peticion',
                            fieldLabel: 'Observaciones:',
                            allowBlank: true
                        }
                    ]
                }
            ]
        });
        me.callParent(arguments);
    }
});