Ext.define('ibmetrodta.view.formularios.InfoEnsayo.edit.tab.Info', {
    extend: 'Ext.form.Panel',
    alias: 'widget.formularios.infoensayo.edit.tab.info',
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
                            name: 'tipo_servicio_info_ensayo',
                            fieldLabel: 'Tipo de Servicio:',
                            displayField: 'nombre',
                            valueField: 'valor',
                            store: new Ext.data.SimpleStore({
                                fields: ['nombre', 'valor'],
                                data: [
                                    ['En Instalaciones del laboratorio', 'eil'], 
                                    ['En Laboratorio Móvil', 'elm'], 
                                    ['Fuera de Laboratorio', 'fl']
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
                            name: 'categoria_info_ensayo',
                            fieldLabel: 'Categoría (Según DTA-CRI-011):',
                            displayField: 'nombre',
                            valueField: 'valor',
                            store: new Ext.data.SimpleStore({
                                fields: ['nombre', 'valor'],
                                data: [
                                    ['I (Ensayo Cualitativo)', 'i'], 
                                    ['II (Ensayo Normalizado)', 'ii'], 
                                    ['III (Ensayo Normalizado)', 'iii'], 
                                    ['IV (Ensayo No Normalizado)', 'iv'], 
                                    ['No Aplica', 'na']
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
                            xtype: 'combo',
                            name: 'estado_info_ensayo',
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
                            name: 'objetivo_info_ensayo',
                            fieldLabel: 'Objetivo:',
                            displayField: 'nombre',
                            valueField: 'valor',
                            store: new Ext.data.SimpleStore({
                                fields: ['nombre', 'valor'],
                                data: [
                                    ['Acreditación Inicial', 'acreditacion_inicial'], 
                                    ['Reacreditación', 'reacreditacion'], 
                                    ['Extensión Acreditación', 'extension_acreditacion']
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
                            name: 'matriz_info_ensayo',
                            fieldLabel: 'Matriz o Producto Ensayado'
                        },
                        {
                            xtype: 'textareafield',
                            name: 'pesonal_autorizado_info_ensayo',
                            fieldLabel: 'Pesonal Autorizado'
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    items: [
                        {
                            xtype: 'textareafield',
                            name: 'nombre_info_ensayo',
                            fieldLabel: 'Nombre del Ensayo'
                        },
                        {
                            xtype: 'textareafield',
                            name: 'norma_info_ensayo',
                            fieldLabel: 'Norma o Procedimiento'
                        }
                    ]
                }
            ]
        });
        me.callParent(arguments);
    }
});