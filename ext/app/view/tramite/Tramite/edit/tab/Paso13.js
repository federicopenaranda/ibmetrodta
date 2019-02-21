Ext.define('ibmetrodta.view.tramite.Tramite.edit.tab.Paso13', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.tramite.tramite.edit.tab.paso13',
    bodyPadding: 8,
    overflowY: 'auto',
    margin: -5,
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'label',
                    html: "<span class='titulo'>Paso 13 - Carga de Formularios Adicionales.</span>"
                },
                {
                    xtype: 'label',
                    itemId: 'textEstado',
                    html: "<span class='tituloEstado'> Estado:</span></span><span class='estadoPendiente'> Pendiente</span>"
                },
                {
                    xtype: 'fieldcontainer',
                    layout: 'vbox',
                    margin: '15 0 0 0',
                    items: [
                        {
                            xtype: 'label',
                            html: 'a) Carga de Formularios designación Equipo Evaluador (personal DTA)',
                            itemId: 'txtSubCargaFormulariosEL',
                            cls: 'subtitulo',
                            margin: 5
                        },
                        {
                            xtype: 'fieldcontainer',
                            layout: 'column',
                            items: [
                                {
                                    xtype: 'button',
                                    itemId: 'btnCargaForm031',
                                    text: 'Cargar Formulario 031',
                                    margin: 5,
                                    columnWidth: 0.25
                                },
                                {
                                    xtype: 'button',
                                    itemId: 'btnCargaForm034',
                                    text: 'Cargar Formulario 034',
                                    margin: 5,
                                    columnWidth: 0.25
                                },
                                {
                                    xtype: 'button',
                                    itemId: 'btnCargaArchivo13Adicional1',
                                    text: 'Cargar Archivos',
                                    margin: 5,
                                    columnWidth: 0.25
                                },
                                {
                                    xtype: 'button',
                                    itemId: 'btnFinalizaCargaFormulariosEL',
                                    text: 'Finaliza Carga de Formularios',
                                    margin: 5,
                                    columnWidth: 0.25,
                                    style: {
                                        background: '#FF5566'
                                    }
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
                            html: 'b) Carga de Formularios de la Evaluación in situ (equipo Evaluador)',
                            itemId: 'txtSubCargaFormulariosET',
                            cls: 'subtitulo',
                            margin: 5
                        },
                        {
                            xtype: 'fieldcontainer',
                            layout: 'column',
                            items: [
                                {
                                    xtype: 'button',
                                    itemId: 'btnCargaForm011',
                                    text: 'Cargar Formulario 011',
                                    margin: 5,
                                    columnWidth: 0.25
                                },/*
                                {
                                    xtype: 'button',
                                    itemId: 'btnCargaForm012',
                                    text: 'Cargar Formulario 012',
                                    margin: 5,
                                    columnWidth: 0.25
                                },*/
                                {
                                    xtype: 'button',
                                    itemId: 'btnCargaForm038',
                                    text: 'Cargar Formulario 038',
                                    margin: 5,
                                    columnWidth: 0.25
                                },
                                {
                                    xtype: 'button',
                                    itemId: 'btnCargaForm046',
                                    text: 'Cargar Formulario 046',
                                    margin: 5,
                                    columnWidth: 0.25
                                },
                                {
                                    xtype: 'button',
                                    itemId: 'btnCargaArchivo13Adicional2',
                                    text: 'Cargar Archivos',
                                    margin: 5,
                                    columnWidth: 0.25
                                },
                                {
                                    xtype: 'button',
                                    itemId: 'btnFinalizaCargaFormulariosET',
                                    text: 'Finaliza Carga de Formularios',
                                    margin: 5,
                                    columnWidth: 0.25,
                                    style: {
                                        background: '#FF5566'
                                    }
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
                            html: 'c) Carga de Formularios de la Calificación de la Evaluación (personal OEC)',
                            itemId: 'txtSubCargaFormulariosEE',
                            cls: 'subtitulo',
                            margin: 5
                        },
                        {
                            xtype: 'fieldcontainer',
                            layout: 'column',
                            items: [
                                {
                                    xtype: 'button',
                                    itemId: 'btnCargaForm033',
                                    text: 'Cargar Formulario 033',
                                    margin: 5,
                                    columnWidth: 0.25
                                }
                                /*{
                                    xtype: 'button',
                                    itemId: 'btnCargaForm106',
                                    text: 'Cargar Formulario 106',
                                    margin: 5,
                                    columnWidth: 0.25
                                },*/,
                                {
                                    xtype: 'button',
                                    itemId: 'btnCargaArchivo13Adicional3',
                                    text: 'Cargar Archivos',
                                    margin: 5,
                                    columnWidth: 0.25
                                },
                                {
                                    xtype: 'button',
                                    itemId: 'btnFinalizaCargaFormulariosEE',
                                    text: 'Finaliza Carga de Formularios',
                                    margin: 5,
                                    columnWidth: 0.25,
                                    style: {
                                        background: '#FF5566'
                                    }
                                }
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