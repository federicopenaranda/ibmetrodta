Ext.define('ibmetrodta.view.evaluacion.Evaluacion.edit.AlcanceAcreditacionLabForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.evaluacion.evaluacion.edit.alcanceacreditacionlabform',
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
                allowBlank: true,
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
                            name: 'descripcion_ensayo_alcance_acreditacion_lab',
                            fieldLabel: 'Descripcion Ensayo Alcance Acreditacion Lab'
                        },
                        {
                            xtype: 'textareafield',
                            name: 'metodo_ensayo_alcance_acreditacion_lab',
                            fieldLabel: 'Metodo Ensayo Alcance Acreditacion Lab'
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    items: [
                        {
                            xtype: 'textareafield',
                            name: 'rango_medicion_alcance_acreditacion_lab',
                            fieldLabel: 'Rango Medicion Alcance Acreditacion Lab'
                        },
                        {
                            xtype: 'textareafield',
                            name: 'incertidumbre_alcance_acreditacion_lab',
                            fieldLabel: 'Incertidumbre Alcance Acreditacion Lab'
                        }
                    ]
                }
            ]
        });
        me.callParent(arguments);
    }
});