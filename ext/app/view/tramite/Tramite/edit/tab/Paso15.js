Ext.define('ibmetrodta.view.tramite.Tramite.edit.tab.Paso15', {
    extend: 'Ext.form.Panel',
    alias: 'widget.tramite.tramite.edit.tab.paso15',
    bodyPadding: 8,
    overflowY: 'auto',
    margin: -5,
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'label',
                    html: "<span class='titulo'>Paso 15 - Llenado de Formulario 050.</span>"
                },
                {
                    xtype: 'label',
                    itemId: 'textEstado',
                    html: "<span class='tituloEstado'> Estado:</span></span><span class='estadoPendiente'>Pendiente</span>"
                },
                {
                    xtype: 'fieldcontainer',
                    layout: 'vbox',
                    margin: '15 0 0 0',
                    items: [
                        {
                            xtype: 'text',
                            text: 'a) Complete el formulario 050 (Personal DTA): ',
                            cls: 'subtitulo',
                            margin: 5
                        },
                        {
                            xtype: 'fieldcontainer',
                            layout: 'column',
                            items: [
                                {
                                    xtype: 'button',
                                    itemId: 'btnForm050',
                                    text: 'Abrir Formulario 050',
                                    margin: 5,
                                    columnWidth: 0.25
                                },
                                {
                                    xtype: 'button',
                                    itemId: 'btnFinalizarForm050',
                                    text: 'Finalizar Edición de Formulario 050',
                                    margin: 5,
                                    columnWidth: 0.25
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    layout: 'vbox',
                    margin: '15 0 0 0',
                    items: [
                        {
                            xtype: 'label',
                            html: 'b) Definir la necesidad de un Comité Técnico (Personal DTA): ',
                            cls: 'subtitulo',
                            margin: 5
                        },
                        {
                            xtype: 'fieldcontainer',
                            //layout: 'column',
                            items: [
                                {
                                    xtype: 'combo',
                                    itemId: 'necesidad_comite_tecnico',
                                    name: 'necesidad_comite_tecnico',
                                    displayField: 'nombre',
                                    valueField: 'valor',
                                    store: new Ext.data.SimpleStore({
                                        fields: ['nombre', 'valor'],
                                        data: [['SI es necesario el Comité Técnico', 1], ['NO es necesario el Comité Técnico', 0]]
                                    }),
                                    width: 300,
                                    editable: false,
                                    forceSelection: true,
                                    allowBlank: false
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'label',
                    html: '<p><span style="font-weight: bold">Nota 1:</span> Puede llenar el formulario y editarlo posteriormente hasta que haga click en el botón "Finalizar Edición de Formulario 050" y pase al siguiente paso.</p>'
                },
                {
                    xtype: 'label',
                    html: '<p><span style="font-weight: bold">Nota 2:</span> Si se define que no es necesario un Comité Técnico, se pasará directamente al Paso 17 (omitiendose el paso 16)</p>'
                }
            ]
        });
        me.callParent(arguments);
    }
});