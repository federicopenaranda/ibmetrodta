Ext.define('ibmetrodta.view.tramite.Tramite.edit.tab.Paso9', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.tramite.tramite.edit.tab.paso9',
    bodyPadding: 8,
    overflowY: 'auto',
    margin: -5,
    require: [
        'ibmetrodta.view.tramite.Tramite.ListaEquipoEvaluador'
    ],
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'label',
                    html: "<span class='titulo'>Paso 9 - Designación de Equipo Evaluador.</span>"
                },
                {
                    xtype: 'label',
                    itemId: 'textEstado',
                    html: "<span class='tituloEstado'> Estado:</span></span><span class='estadoPendiente'> Pendiente</span>"
                },
                {
                    xtype: 'container',
                    margin: '15 0 0 0',
                    items: [
                        {
                            xtype: 'label',
                            html: 'a) Designación de Equipo Evaluador (Personal DTA): ',
                            itemId: 'txtSubDesignacionEE',
                            cls: 'subtitulo',
                            margin: 5
                        },
                        {
                            xtype: 'proceso.equipopeticion.lista',
                            itemId: 'gridEquipoEvaluador',
                            autoLoad: false
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    layout: 'vbox',
                    margin: '15 0 0 0',
                    items: [
                        /*{
                            xtype: 'label',
                            html: 'b) Finalizar Designación de Equipo Evaluador (Personal DTA): ',
                            cls: 'subtitulo',
                            margin: 5
                        },*/
                        {
                            xtype: 'fieldcontainer',
                            layout: 'column',
                            items: [
                                {
                                    xtype: 'button',
                                    itemId: 'btnFinalizarDesignacionEquipoEvaluador',
                                    text: 'Finalizar Designación',
                                    margin: 2,
                                    columnWidth: 0.25
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'container',
                    layout: 'vbox',
                    margin: '15 0 0 0',
                    items: [
                         {
                            xtype: 'label',
                            html: 'b) Aprobación de Equipo Evaluador (Personal OEC): ',
                            itemId: 'txtSubAprobacionEE',
                            cls: 'subtitulo',
                            margin: 3
                        },
                        {
                            xtype: 'fieldcontainer',
                            layout: 'column',
                            items: [,
                                {
                                    xtype: 'button',
                                    itemId: 'btnApruebaEE',
                                    text: 'Aprobar Equipo Evaluador',
                                    margin: 5,
                                    columnWidth: 0.25
                                }/*,
                                {
                                    xtype: 'button',
                                    itemId: 'btnObservaEE',
                                    text: 'Observar Equipo Evaluador',
                                    margin: 5,
                                    columnWidth: 0.25
                                }*/
                            ]
                        }
                    ]
                },
                {
                    xtype: 'label',
                    html: "<p><span style='font-weight: bold'>Nota:</span> Recibirá una notificación del avance de este paso mediante un correo electrónico automático.</p>"
                }
            ]
        });
        me.callParent(arguments);
    }
});