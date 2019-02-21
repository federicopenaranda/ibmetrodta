Ext.define('ibmetrodta.view.proceso.ObsPeticionAccion.edit.ObsPeticionAccionForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.proceso.obspeticionaccion.edit.obspeticionaccionform',
    bodyPadding: 5,
    layout: 'hbox',
    overflowY: 'auto',
    margin: 5,
    initComponent: function () {
        var me = this;
        Ext.applyIf(me, {
            fieldDefaults: {
                labelAlign: 'top',
                flex: 1,
                margins: 5
            },
            items: [
                {
                    xtype: 'fieldset',
                    title: '<strong>Observación de Trámite</strong>',
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
                                    name: 'procede_obs_peticion_accion',
                                    fieldLabel: 'Procede el Trámite?:',
                                    displayField: 'nombre',
                                    valueField: 'valor',
                                    store: new Ext.data.SimpleStore({
                                        fields: ['nombre', 'valor'],
                                        data: [['Aceptar Trámite (Procede)', 1], ['Observar Trámite (No Procede)', 0]]
                                    }),
                                    editable: false,
                                    forceSelection: true,
                                    allowBlank: false,
                                     width: 280
                                }
                            ]
                        },
                        {
                            xtype: 'fieldcontainer',
                            items: [
                                {
                                    xtype: 'textareafield',
                                    name: 'obs_peticion_accion',
                                    fieldLabel: 'Observación',
                                    width: 580,
                                    height: 250,
                                    allowBlank: false
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