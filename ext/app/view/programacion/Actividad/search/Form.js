Ext.define('ibmetrodta.view.programacion.Actividad.search.Form', {
    extend: 'Ext.form.Panel',
    alias: 'widget.programacion.actividad.search.form',
    requires: [
        'Ext.form.FieldContainer',
        'Ext.form.FieldSet',
        'Ext.form.field.Date',
        'Ext.form.field.Text',
        'Ext.form.field.ComboBox',
        'Ext.slider.Multi',
        'ibmetrodta.ux.form.field.RemoteComboBox',
        'ibmetrodta.ux.form.field.plugin.ClearTrigger'
    ],
    initComponent: function () {
        var me = this;
        Ext.applyIf(me, {
            fieldDefaults: {
                labelAlign: 'top',
                flex: 1,
                margins: 5,
                allowBlank: true
            },
            items: [
                {
                    xtype: 'fieldset',
                    title: 'Criterios de Búsqueda',
                    collapsible: true,
                    items: [
                        {
                            xtype: 'fieldcontainer',
                            layout: 'hbox',
                            items: [
                                {
                                    xtype: 'ux.form.field.remotecombobox',
                                    name: 'fk_id_oec',
                                    itemId: 'fk_id_oec',
                                    fieldLabel: 'OEC',
                                    displayField: 'nombre_oec',
                                    valueField: 'id_oec',
                                    store: {
                                        type: 'oec.oec'
                                    },
                                    plugins: [
                                        { ptype: 'cleartrigger' }
                                    ],
                                    editable: false,
                                    forceSelection: true
                                },
                                {
                                    xtype: 'ux.form.field.remotecombobox',
                                    name: 'fk_id_tipo_actividad',
                                    fieldLabel: 'Tipo de Actividad',
                                    displayField: 'nombre_tipo_actividad',
                                    valueField: 'id_tipo_actividad',
                                    store: {
                                        type: 'programacion.tipoactividad'
                                    },
                                    plugins: [
                                        { ptype: 'cleartrigger' }
                                    ],
                                    editable: false,
                                    forceSelection: true
                                }
                            ]
                        },
                        {
                            xtype: 'fieldcontainer',
                            layout: 'hbox',
                            items: [
                                {
                                    xtype: 'datefield',
                                    name: 'fecha_inicial_actividad',
                                    fieldLabel: 'Fecha de Inicio:',
                                    format: 'Y-m-d',
                                    submitFormat: 'Y-m-d'
                                },
                                {
                                    xtype: 'datefield',
                                    name: 'fecha_final_actividad',
                                    fieldLabel: 'Fecha de Fin:',
                                    format: 'Y-m-d',
                                    submitFormat: 'Y-m-d'
                                }
                            ]
                        }
                    ]
                }
            ]
        });
        me.callParent(arguments);
    }
});