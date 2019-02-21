Ext.define('ibmetrodta.view.oec.Oec.edit.OecAcreditacionSolicitadaForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.oec.oec.edit.oecacreditacionsolicitadaform',
    layout: 'form',
    bodyPadding: 0,
    margin: 5,
    initComponent: function () {
        var me = this;
        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'fieldcontainer',
                    items: [
                        {
                            xtype: 'label',
                            text: 'Ensayo/Calibración/Certificación/Inspección Realizada'
                        },
                        {
                            xtype: 'textareafield',
                            width: 400,
                            height: 120,
                            name: 'inspeccion_oec_acreditacion_solicitada',
                            allowBlank: false
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    items: [
                        {
                            xtype: 'label',
                            text: 'Normas/Procedimientos Internos o Especificaciones'
                        },
                        {
                            xtype: 'textareafield',
                            width: 400,
                            height: 120,
                            name: 'especificaciones_oec_acreditacion_solicitada',
                            allowBlank: false
                        }
                    ]
                }
            ]
        });
        me.callParent(arguments);
    }
});