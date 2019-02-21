Ext.define('ibmetrodta.view.proceso.Peticion.edit.PeticionForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.proceso.peticion.edit.peticionform',
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
                            name: 'fk_id_proceso',
                            fieldLabel: 'Tipo de Trámite',
                            displayField: 'nombre_proceso',
                            valueField: 'id_proceso',
                            store: {
                                type: 'proceso.proceso'
                            },
                            editable: false,
                            forceSelection: true,
                            allowBlank: false
                        },
                        {
                            xtype: 'textfield',
                            name: 'titulo_peticion',
                            fieldLabel: 'Gestión'
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    items: [
                        {
                            xtype: 'ux.form.field.remotecombobox',
                            name: 'fk_id_codigo_peticion',
                            itemId: 'fk_id_codigo_peticion',
                            fieldLabel: 'Código de Trámite',
                            displayField: 'codigo_peticion',
                            valueField: 'id_codigo_peticion',
                            totalProperty : 'total',
                            pageSize : 10,
                            store: {
                                type: 'opciones.codigopeticion'
                            },
                            editable: false,
                            forceSelection: true,
                            allowBlank: false
                        },
                        {
                            xtype: 'button',
                            itemId: 'creaCodigoPeticion',
                            iconCls: 'icon_user',
                            text: 'Nuevo Código',
                            margin: '26 0 0 0'
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    items: [
                        {
                            xtype: 'textfield',
                            name: 'codigo_temporal',
                            fieldLabel: 'Código de Trámite',
                            allowBlank: false
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    items: [
                        {
                            xtype: 'textfield',
                            name: 'codigo_acreditacion_peticion',
                            fieldLabel: 'Codigo de Acreditación'
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    items: [
                        {
                            xtype: 'textareafield',
                            name: 'descripcion_peticion',
                            fieldLabel: 'Descripción de Trámite'
                        }
                    ]
                }
            ]
        });
        me.callParent(arguments);
    }
});