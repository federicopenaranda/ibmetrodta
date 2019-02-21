Ext.define('ibmetrodta.view.tramite.Tramite.edit.tab.Paso2', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.tramite.tramite.edit.tab.paso2',
    bodyPadding: 8,
    overflowY: 'auto',
    margin: -5,
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'label',
                    html: "<span class='titulo'>Paso 2 - Cotización de Pertinencia del Alcance.</span>"
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
                            html: 'a) Carga de Cotización de Pertinencia del Alcance (Personal DTA): ',
                            itemId: 'txtSubCargaCotizacion',
                            cls: 'subtitulo',
                            margin: 5
                        },
                        {
                            xtype: 'fieldcontainer',
                            layout: 'column',
                            items: [
                                {
                                    xtype: 'form',
                                    itemId: 'formCotizacionPertinencia',
                                    vtype:'fileUpload',
                                    border: false,
                                    frame: false,
                                    bodyPadding: 0,
                                    margins: '0 0 -5 0',
                                    baseCls: 'x-plain',
                                    hasUpload: true,
                                    items: [
                                        {
                                            xtype: 'filefield',
                                            name: 'PeticionArchivo010401[file]',
                                            itemId: 'fileCotizacionPertinencia',
                                            fieldLabel: 'Cargar Cotización',
                                            labelWidth: 120,
                                            margin: 5,
                                            msgTarget: 'side',
                                            labelAlign: 'left',
                                            allowBlank: false,
                                            buttonConfig: {
                                                iconCls: 'icon_picture',
                                                text: ''
                                            },
                                            columnWidth: 0.25
                                        }
                                    ]
                                },
                                {
                                    xtype: 'button',
                                    itemId: 'btnCargaCotizacion',
                                    text: 'Cargar Cotización',
                                    margin: 5,
                                    columnWidth: 0.25
                                },
                                {
                                    xtype: 'button',
                                    itemId: 'btnVersionesCotizacion',
                                    text: 'Ver Archivos',
                                    margin: 5,
                                    columnWidth: 0.25
                                }/*,
                                {
                                    xtype: 'label',
                                    itemId: 'txtDescargaCotizacion',
                                    text: 'Descargar Cotización: ',
                                    cls: 'txtDescarga',
                                    margin: 5,
                                    columnWidth: 0.25
                                },
                                {
                                    xtype: 'label',
                                    itemId: 'txtURLCotizacion',
                                    text: '(Vacio)',
                                    cls: 'txtDescargaURL',
                                    margin: 5,
                                    columnWidth: 0.25
                                }*/
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
                            html: 'b) Carga de Factura por pago de Cotización de Pertinencia del Alcance (Personal OEC): ',
                            itemId: 'txtSubCargaFactura',
                            cls: 'subtitulo',
                            margin: 5
                        },
                        {
                            xtype: 'fieldcontainer',
                            layout: 'column',
                            items: [
                                {
                                    xtype: 'form',
                                    itemId: 'formFacturaPertinencia',
                                    vtype:'fileUpload',
                                    border: false,
                                    frame: false,
                                    bodyPadding: 0,
                                    margins: '0 0 -5 0',
                                    baseCls: 'x-plain',
                                    hasUpload: true,
                                    items: [
                                        {
                                            xtype: 'filefield',
                                            name: 'PeticionArchivo010401[file]',
                                            itemId: 'fileFacturaPertinencia',
                                            fieldLabel: 'Cargar Factura',
                                            labelWidth: 120,
                                            margin: 5,
                                            msgTarget: 'side',
                                            labelAlign: 'left',
                                            allowBlank: false,
                                            buttonConfig: {
                                                iconCls: 'icon_picture',
                                                text: ''
                                            },
                                            columnWidth: 0.25
                                        }
                                    ]
                                },
                                {
                                    xtype: 'button',
                                    itemId: 'btnCargaFactura',
                                    text: 'Cargar Factura',
                                    margin: 5,
                                    columnWidth: 0.25
                                },
                                {
                                    xtype: 'button',
                                    itemId: 'btnVersionesFactura',
                                    text: 'Ver Archivos',
                                    margin: 5,
                                    columnWidth: 0.25
                                }/*,
                                {
                                    xtype: 'label',
                                    itemId: 'txtDescargaFactura',
                                    text: 'Descargar Factura: ',
                                    cls: 'txtDescarga',
                                    margin: 5,
                                    columnWidth: 0.25
                                },
                                {
                                    xtype: 'label',
                                    itemId: 'txtURLFactura',
                                    text: '(Vacio)',
                                    cls: 'txtDescargaURL',
                                    margin: 5,
                                    columnWidth: 0.25
                                }*/
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
                            html: 'c) Verificación de Factura por pago de Cotización de Pertinencia del Alcance (Personal DTA): ',
                            itemId: 'txtSubVerificacion',
                            cls: 'subtitulo',
                            margin: 5
                        },
                        {
                            xtype: 'fieldcontainer',
                            layout: 'column',
                            items: [
                                {
                                    xtype: 'button',
                                    itemId: 'btnVerificarFactura',
                                    text: 'Verificar Factura',
                                    margin: 5,
                                    columnWidth: 0.25
                                },
                                {
                                    xtype: 'button',
                                    itemId: 'btnObservarFactura',
                                    text: 'Observar Factura',
                                    margin: 5,
                                    columnWidth: 0.25
                                },
                                {
                                    xtype: 'button',
                                    itemId: 'btnHabilitarAnterior',
                                    text: 'Habilitar Carga de Factura',
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
                            html: 'd) Recomendación de la Dirección de Acreditación (Personal DTA): ',
                            itemId: 'txtSubAprobacionDA',
                            cls: 'subtitulo',
                            margin: 5
                        },
                        {
                            xtype: 'fieldcontainer',
                            layout: 'column',
                            items: [
                                {
                                    xtype: 'button',
                                    itemId: 'btnApruebaDA',
                                    text: 'Aprobar Paso',
                                    margin: 5,
                                    columnWidth: 0.25
                                },
                                {
                                    xtype: 'button',
                                    itemId: 'btnObservaDA',
                                    text: 'Observar Paso',
                                    margin: 5,
                                    columnWidth: 0.25
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'label',
                    html: "<p><span style='font-weight: bold'>Nota:</span> Recibirá una notificación del avance de este paso mediante un correo electrónico automático.</p>"
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