Ext.define('ibmetrodta.view.tramite.Tramite.edit.tab.Paso14', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.tramite.tramite.edit.tab.paso14',
    bodyPadding: 8,
    overflowY: 'auto',
    margin: -5,
    initComponent: function () {
        var me = this;
        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'label',
                    html: "<span class='titulo'>Paso 14 - Carga de Plan de Acción.</span>"
                },
                {
                    xtype: 'label',
                    itemId: 'textEstado',
                    html: "<span class='tituloEstado'> Estado:</span></span><span class='estadoPendiente'> Pendiente</span>"
                },
                {
                    xtype: 'container',
                    layout: 'vbox',
                    margin: '10 0 0 0',
                    items: [
                        {
                            xtype: 'label',
                            html: 'a) Carga de Plan de Acción (Personal OEC): ',
                            cls: 'subtitulo',
                            margin: 5
                        },
                        {
                            xtype: 'fieldcontainer',
                            layout: 'column',
                            items: [
                                {
                                    xtype: 'button',
                                    itemId: 'btnCargaPlanAccion',
                                    text: 'Cargar Archivos',
                                    margin: '0 0 0 10'
                                },
                                {
                                    xtype: 'button',
                                    itemId: 'btnFinalizaCargaPlanAccion',
                                    text: 'Finalizar Cargar de Archivos para Plan de Acción',
                                    margin: '0 0 0 10'
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'container',
                    layout: 'vbox',
                    margin: '10 0 0 0',
                    items: [
                        {
                            xtype: 'label',
                            html: 'b) Revisión de Archivos para Plan de Acción (Personal DTA: Evaluador Lider): ',
                            cls: 'subtitulo',
                            margin: 5
                        },
                        {
                            xtype: 'fieldcontainer',
                            layout: 'column',
                            items: [
                                {
                                    xtype: 'button',
                                    itemId: 'btnApruebaArchivosPlanAccion',
                                    text: 'Aprobar Archivos de Plan de Acción',
                                    margin: '0 0 0 10'
                                },
                                {
                                    xtype: 'button',
                                    itemId: 'btnObservarArchivosPlanAccion',
                                    text: 'Observar Archivos de Plan de Acción',
                                    margin: '0 0 0 10'
                                },
                                {
                                    xtype: 'button',
                                    itemId: 'btnHabilitarAnterior',
                                    text: 'Habilitar Carga de Plan de Acción',
                                    margin: '0 0 0 10'
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'container',
                    layout: 'vbox',
                    margin: '10 0 0 0',
                    items: [
                        {
                            xtype: 'label',
                            html: 'c) Carga de Evidencias de Plan de Acción (Personal OEC): ',
                            cls: 'subtitulo',
                            margin: 5
                        },
                        {
                            xtype: 'fieldcontainer',
                            layout: 'column',
                            items: [
                                {
                                    xtype: 'button',
                                    itemId: 'btnCargaEvidenciasPlanAccion',
                                    text: 'Cargar Evidencias de Plan de Acción',
                                    margin: '0 0 0 10'
                                }/*,
                                {
                                    xtype: 'button',
                                    itemId: 'btnFinalizaCargaEvidenciasPlanAccion',
                                    text: 'Finalizar Cargar de Evidencias de Plan de Acción',
                                    margin: '0 0 0 10'
                                }*/
                            ]
                        }
                    ]
                },
                {
                    xtype: 'container',
                    layout: 'vbox',
                    margin: '10 0 0 0',
                    items: [
                        {
                            xtype: 'label',
                            html: 'd) Carga de Formulario 108 (Personal DTA: Evaluador Líder): ',
                            cls: 'subtitulo',
                            margin: 5
                        },
                        {
                            xtype: 'fieldcontainer',
                            layout: 'column',
                            items: [
                                {
                                    xtype: 'button',
                                    itemId: 'btnCargaFormulario108',
                                    text: 'Cargar Formulario 108',
                                    margin: '0 0 0 10'
                                },
                                {
                                    xtype: 'button',
                                    itemId: 'btnObservarFormulario108',
                                    text: 'Observar Formulario 108',
                                    margin: '0 0 0 10'
                                },
                                {
                                    xtype: 'button',
                                    itemId: 'btnApruebaFormulario108',
                                    text: 'Aprobar Formulario 108',
                                    margin: '0 0 0 10'
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'label',
                    html: '<p><span style="font-weight: bold">Nota:</span> El personal de la OEC debe cargar estos archivos dentro de los siguientes 5 dias calendario una vez ingresado al este paso.</p>'
                },
                {
                    xtype: 'label',
                    html: "<p><span style='font-weight: bold'>Nota:</span> El tamaño máximo de archivos para cargar es de 20 MB por archivo.</p>"
                }
            ]
        });
        me.callParent(arguments);
    }
});