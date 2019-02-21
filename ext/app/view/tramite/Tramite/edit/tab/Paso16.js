Ext.define('ibmetrodta.view.tramite.Tramite.edit.tab.Paso16', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.tramite.tramite.edit.tab.paso16',
    bodyPadding: 8,
    overflowY: 'auto',
    margin: -5,
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'label',
                    html: "<span class='titulo'>Paso 16 - Aprobación de Comité Técnico.</span>"
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
                            text: 'a) Aprobar la documentación cargada (Personal DTA: RA): ',
                            itemId: 'txtSubAprobarDocumentacion',
                            cls: 'subtitulo',
                            margin: 5
                        },
                        {
                            xtype: 'fieldcontainer',
                            layout: 'column',
                            items: [
                                {
                                    xtype: 'button',
                                    itemId: 'btnCargaAdicionales',
                                    text: 'Cargar Archivos Adicionales',
                                    margin: 5,
                                    columnWidth: 0.25
                                },
                                {
                                    xtype: 'button',
                                    itemId: 'btnApruebaDocumentacion',
                                    text: 'Aprobar Documentación',
                                    margin: 5,
                                    columnWidth: 0.25
                                },
                                {
                                    xtype: 'button',
                                    itemId: 'btnPedirDocumentacionAdicional',
                                    text: 'Observar Documentación',
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
                            html: 'b) Carga de Acta de Comité Técnico (Personal DTA): ',
                            itemId: 'txtSubCargaActa',
                            cls: 'subtitulo',
                            margin: 5
                        },
                        {
                            xtype: 'fieldcontainer',
                            layout: 'column',
                            items: [
                                {
                                    xtype: 'form',
                                    itemId: 'formActaComite',
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
                                            itemId: 'fileActaComite',
                                            fieldLabel: 'Cargar Acta',
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
                                    itemId: 'btnCargaActa',
                                    text: 'Cargar Acta',
                                    margin: 5,
                                    columnWidth: 0.25
                                },
                                {
                                    xtype: 'button',
                                    itemId: 'btnVersionesActa',
                                    text: 'Ver Archivos',
                                    margin: 5,
                                    columnWidth: 0.25
                                }/*,
                                {
                                    xtype: 'label',
                                    itemId: 'txtDescargaActa',
                                    text: 'Descargar Acta: ',
                                    cls: 'txtDescarga',
                                    margin: 5,
                                    columnWidth: 0.25
                                },
                                {
                                    xtype: 'label',
                                    itemId: 'txtURLActa',
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
                            html: 'c) Recomendación de la Dirección de Acreditación (Personal DA): ',
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
                    html: '<p><span style="font-weight: bold">Nota: </span>Se notificará mediante correo electrónico el avance de este paso.</p>'
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