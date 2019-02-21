Ext.define('ibmetrodta.view.evaluacion.Evaluacion.edit.tab.Info', {
    extend: 'Ext.form.Panel',
    alias: 'widget.evaluacion.evaluacion.edit.tab.info',
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
                            itemId: 'fk_id_oec_contacto_alta_direccion',
                            name: 'fk_id_oec_contacto_alta_direccion',
                            fieldLabel: 'Contacto Alta Dirección (OEC)',
                            displayTpl: Ext.create('Ext.XTemplate',
                                        '<tpl for=".">',
                                            '{primer_nombre_oec_contacto} {segundo_nombre_usuario} {apellido_paterno_oec_contacto} ({cargo_oec_contacto})',
                                        '</tpl>'),
                            tpl: Ext.create('Ext.XTemplate',
                                        '<tpl for=".">',
                                            '<div class="x-boundlist-item">{primer_nombre_oec_contacto} {apellido_paterno_oec_contacto} ({cargo_oec_contacto})</div>',
                                        '</tpl>'),
                            valueField: 'id_oec_contacto',
                            store: {
                                type: 'oec.oeccontacto'
                            },
                            editable: false,
                            forceSelection: true,
                            allowBlank: false
                        },
                        {
                            xtype: 'ux.form.field.remotecombobox',
                            itemId: 'fk_id_oec_contacto_gerente_tecnico',
                            name: 'fk_id_oec_contacto_gerente_tecnico',
                            fieldLabel: 'Contacto Gerente Técnico (OEC)',
                            displayTpl: Ext.create('Ext.XTemplate',
                                        '<tpl for=".">',
                                            '{primer_nombre_oec_contacto} {segundo_nombre_usuario} {apellido_paterno_oec_contacto} ({cargo_oec_contacto})',
                                        '</tpl>'),
                            tpl: Ext.create('Ext.XTemplate',
                                        '<tpl for=".">',
                                            '<div class="x-boundlist-item">{primer_nombre_oec_contacto} {apellido_paterno_oec_contacto} ({cargo_oec_contacto})</div>',
                                        '</tpl>'),
                            valueField: 'id_oec_contacto',
                            store: {
                                type: 'oec.oeccontacto'
                            },
                            editable: false,
                            forceSelection: true,
                            allowBlank: false
                        },
                        {
                            xtype: 'ux.form.field.remotecombobox',
                            itemId: 'fk_id_oec_contacto_gerente_calidad',
                            name: 'fk_id_oec_contacto_gerente_calidad',
                            fieldLabel: 'Contacto Gerente Calidad (OEC)',
                            displayTpl: Ext.create('Ext.XTemplate',
                                        '<tpl for=".">',
                                            '{primer_nombre_oec_contacto} {segundo_nombre_usuario} {apellido_paterno_oec_contacto} ({cargo_oec_contacto})',
                                        '</tpl>'),
                            tpl: Ext.create('Ext.XTemplate',
                                        '<tpl for=".">',
                                            '<div class="x-boundlist-item">{primer_nombre_oec_contacto} {apellido_paterno_oec_contacto} ({cargo_oec_contacto})</div>',
                                        '</tpl>'),
                            valueField: 'id_oec_contacto',
                            store: {
                                type: 'oec.oeccontacto'
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
                            xtype: 'textfield',
                            name: 'codigo_evaluacion',
                            fieldLabel: 'Código de Evaluación'
                        },
                        {
                            xtype: 'datefield',
                            name: 'fecha_inicio_evaluacion',
                            fieldLabel: 'Fecha de Inicio de Evaluación',
                            format: 'Y-m-d',
                            submitFormat: 'Y-m-d'
                        },
                        {
                            xtype: 'datefield',
                            name: 'fecha_fin_evaluacion',
                            fieldLabel: 'Fecha de Fin de Evaluación',
                            format: 'Y-m-d',
                            submitFormat: 'Y-m-d'
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    items: [
                        {
                            xtype: 'textareafield',
                            name: 'objetivo_evaluacion',
                            fieldLabel: 'Objetivo de la Evaluación'
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    items: [
                        {
                            xtype: 'textareafield',
                            name: 'documento_referencia_evaluacion',
                            fieldLabel: 'Documentos de Referencia'
                        }
                    ]
                }
            ]
        });
        me.callParent(arguments);
    }
});