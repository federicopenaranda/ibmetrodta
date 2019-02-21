Ext.define('ibmetrodta.view.formularios.InfoEnsayo.edit.tab.Info2', {
    extend: 'Ext.form.Panel',
    alias: 'widget.formularios.infoensayo.edit.tab.info2',
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
                            xtype: 'textareafield',
                            name: 'rango_medicion_info_ensayo',
                            fieldLabel: 'Rango de Medición'
                        },
                        {
                            xtype: 'textareafield',
                            name: 'incertidumbre_medicion_info_ensayo',
                            fieldLabel: 'Incertidumbre de Medición'
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    items: [
                        {
                            xtype: 'textareafield',
                            name: 'lista_equipos_utilizados_info_ensayo',
                            fieldLabel: 'Lista de Equipos Utilizados'
                        },
                        {
                            xtype: 'textareafield',
                            name: 'ad_calculo_incertidumbre_info_ensayo',
                            fieldLabel: 'Procedimiento para el Cálculo de Incertidumbre  (para Ensayos Tipo III Y IV)'
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    items: [
                        {
                            xtype: 'textareafield',
                            name: 'ad_confirmacion_aplicacion_info_ensayo',
                            fieldLabel: 'Procedimiento para la confirmación de la aplicación en el Laboratorio (Para ensayos de Tipo II O III, Ver 5.4.2 De NB-ISO-IEC 17025:2005)'
                        },
                        {
                            xtype: 'textareafield',
                            name: 'ad_validacion_info_ensayo',
                            fieldLabel: 'Procedimiento de Validación (para Ensayos Tipo IV)'
                        }
                    ]
                }
            ]
        });
        me.callParent(arguments);
    }
});