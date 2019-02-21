Ext.define('ibmetrodta.view.formularios.DetalleCalibracion.edit.tab.Info', {
    extend: 'Ext.form.Panel',
    alias: 'widget.formularios.detallecalibracion.edit.tab.info',
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
                            name: 'fk_id_campo_calibracion',
                            fieldLabel: 'Campo de Calibración',
                            displayField: 'nombre_campo_calibracion',
                            valueField: 'id_campo_calibracion',
                            store: {
                                type: 'opciones.campocalibracion'
                            },
                            editable: false,
                            forceSelection: true,
                            allowBlank: false
                        },
                        {
                            xtype: 'combo',
                            name: 'estado_detalle_calibracion',
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
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    items: [
                        {
                            xtype: 'combo',
                            name: 'objetivo_detalle_calibracion',
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
                        },
                        {
                            xtype: 'combo',
                            name: 'tipo_servicio_detalle_calibracion',
                            fieldLabel: 'Tipo de Servicio:',
                            displayField: 'nombre',
                            valueField: 'valor',
                            store: new Ext.data.SimpleStore({
                                fields: ['nombre', 'valor'],
                                data: [
                                    ['Realizado en las instalaciones del laboratorio', 'eil'], 
                                    ['Realizado en laboratorio móvil', 'elm'], 
                                    ['Realizado fuera del laboratorio', 'fl']
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
                            name: 'descripcion_detalle_calibracion',
                            fieldLabel: 'Descripción'
                        },
                        {
                            xtype: 'textareafield',
                            name: 'norma_detalle_calibracion',
                            fieldLabel: 'Norma'
                        }
                    ]
                }
            ]
        });
        me.callParent(arguments);
    }
});