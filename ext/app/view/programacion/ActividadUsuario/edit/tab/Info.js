Ext.define('ibmetrodta.view.programacion.ActividadUsuario.edit.tab.Info', {
    extend: 'Ext.form.Panel',
    alias: 'widget.programacion.actividadusuario.edit.tab.info',
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
                            name: 'rol_actividad_usuario',
                            fieldLabel: 'Rol:',
                            displayField: 'nombre',
                            valueField: 'valor',
                            store: new Ext.data.SimpleStore({
                                fields: ['nombre', 'valor'],
                                data: [
                                    ['Responsable', 'responsable'], 
                                    ['Facilitador', 'facilitador'], 
                                    ['Evaluador Lider', 'evaluador_lider'], 
                                    ['Evaluador Técnico', 'evaluador_tecnico'], 
                                    ['Experto Técnico', 'experto_tecnico'], 
                                    ['Evaluador en Entrenamiento', 'evaluacion_entrenamiento'], 
                                    ['Observador', 'observador']
                                ]
                            }),
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