Ext.define('ibmetrodta.view.formularios.DetalleEquipos.edit.tab.Info', {
    extend: 'Ext.form.Panel',
    alias: 'widget.formularios.detalleequipos.edit.tab.info',
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
                            xtype: 'combo',
                            name: 'estado_detalle_equipos',
                            fieldLabel: 'Estado:',
                            displayField: 'nombre',
                            valueField: 'valor',
                            store: new Ext.data.SimpleStore({
                                fields: ['nombre', 'valor'],
                                data: [['Activo', 1], ['Inactivo', 0]]
                            }),
                            plugins: [
                                {ptype: 'cleartrigger'}
                            ],
                            editable: false,
                            forceSelection: true,
                            allowBlank: false
                        },
                        {
                            xtype: 'combo',
                            name: 'objetivo_detalle_equipos',
                            fieldLabel: 'Objetivo:',
                            displayField: 'nombre',
                            valueField: 'valor',
                            store: new Ext.data.SimpleStore({
                                fields: ['nombre', 'valor'],
                                data: [
                                    ['Acreditación Inicial', 'acreditacion_inicial'], 
                                    ['Reacreditación', 'reacreditacion'], 
                                    ['Extensión de Acreditación', 'extension_acreditacion']
                                ]
                            }),
                            plugins: [
                                {ptype: 'cleartrigger'}
                            ],
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
                            xtype: 'textareafield',
                            name: 'nombre_detalle_equipos',
                            fieldLabel: 'Nombre'
                        },
                        {
                            xtype: 'textareafield',
                            name: 'norma_detalle_equipos',
                            fieldLabel: 'Norma o Procedimiento'
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    items: [
                        {
                            xtype: 'textareafield',
                            name: 'matriz_detalle_equipos',
                            fieldLabel: 'Matriz, Producto o Equipo'
                        },
                        {
                            xtype: 'textareafield',
                            name: 'tipo_equipo_detalle_equipos',
                            fieldLabel: 'Tipo de Equipo'
                        }
                    ]
                }
            ]
        });
        me.callParent(arguments);
    }
});