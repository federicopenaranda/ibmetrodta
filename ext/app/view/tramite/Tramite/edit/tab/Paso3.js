Ext.define('ibmetrodta.view.tramite.Tramite.edit.tab.Paso3', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.tramite.tramite.edit.tab.paso3',
    bodyPadding: 8,
    overflowY: 'auto',
    margin: -5,
    require: [
        'ibmetrodta.view.tramite.Tramite.ListaConsejoPeticion'
    ],
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'label',
                    html: "<span class='titulo'>Paso 3 - Aprobación de Consejo.</span>"
                },
                {
                    xtype: 'label',
                    itemId: 'textEstado',
                    html: "<span class='tituloEstado'> Estado:</span></span><span class='estadoPendiente'> Pendiente</span>"
                },
                {
                    xtype: 'container',
                    layout: 'vbox',
                    margin: '15 0 0 0',
                    items: [
                         {
                            xtype: 'label',
                            html: 'a) Carga de Informe para el Consejo (Personal DTA): ',
                            cls: 'subtitulo',
                            margin: 5
                        },
                        {
                            xtype: 'fieldcontainer',
                            layout: 'column',
                            items: [
                                {
                                    xtype: 'form',
                                    itemId: 'formInformeConsejo',
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
                                            itemId: 'fileInformeConsejo',
                                            fieldLabel: 'Informe de Consejo',
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
                                    itemId: 'btnCargaInformeConsejo',
                                    text: 'Cargar Informe de Consejo',
                                    margin: 5,
                                    columnWidth: 0.25
                                },
                                {
                                    xtype: 'button',
                                    itemId: 'btnVersionesInformeConsejo',
                                    text: 'Ver Archivos',
                                    margin: 5,
                                    columnWidth: 0.25
                                }
                                
                                
                                
                                /*,
                                {
                                    xtype: 'label',
                                    itemId: 'txtDescargaInformeConsejo',
                                    text: 'Descarga: ',
                                    cls: 'txtDescarga',
                                    margin: 5,
                                    columnWidth: 0.25
                                },
                                {
                                    xtype: 'label',
                                    itemId: 'txtURLInformeConsejo',
                                    text: '(Vacio)',
                                    cls: 'txtDescargaURL',
                                    margin: 5,
                                    columnWidth: 0.25
                                },
                                {
                                    xtype: 'label',
                                    itemId: 'txtTextoVersionesInformeConsejo',
                                    text: 'Versiones: ',
                                    cls: 'txtDescarga',
                                    margin: 5,
                                    columnWidth: 0.25
                                },
                                {
                                    xtype: 'label',
                                    itemId: 'txtVersionesInformeConsejo',
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
                    xtype: 'container',
                    margin: '15 0 0 0',
                    items: [
                        {
                            xtype: 'label',
                            html: 'b) Aprobación de Trámite por Consejo (Personal DTA): ',
                            itemId: 'txtSubApruebaConsejo',
                            cls: 'subtitulo',
                            margin: 5
                        },
                        {
                            xtype: 'tramite.tramite.listaconsejopeticion',
                            itemId: 'gridConsejo'
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
                            html: 'c) Carga de Acta de Consejo (Personal DTA): ',
                            itemId: 'txtSubActaConsejo',
                            cls: 'subtitulo',
                            margin: 5
                        },
                        {
                            xtype: 'fieldcontainer',
                            layout: 'column',
                            items: [
                                {
                                    xtype: 'form',
                                    itemId: 'formActaConsejo',
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
                                            itemId: 'fileActaConsejo',
                                            fieldLabel: 'Acta de Consejo',
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
                                    itemId: 'btnCargaActaConsejo',
                                    text: 'Cargar Acta de Consejo',
                                    margin: 5,
                                    columnWidth: 0.25
                                },
                                {
                                    xtype: 'button',
                                    itemId: 'btnVersionesActaConsejo',
                                    text: 'Ver Archivos',
                                    margin: 5,
                                    columnWidth: 0.25
                                }
                                /*,
                                {
                                    xtype: 'label',
                                    itemId: 'txtDescargaActaConsejo',
                                    text: 'Descargar Acta de Consejo: ',
                                    cls: 'txtDescarga',
                                    margin: 5,
                                    columnWidth: 0.25
                                },
                                {
                                    xtype: 'label',
                                    itemId: 'txtURLActaConsejo',
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
                    xtype: 'label',
                    html: "<p><span style='font-weight: bold'>Nota:</span> Recibirá una notificación del avance de este paso mediante un correo electrónico automático.</p>"
                },
                {
                    xtype: 'label',
                    html: "<p><span style='font-weight: bold'>Nota:</span> El tamaño máximo de archivos para cargar es de 20 MB por archivo.</p>"
                },
                {
                    xtype: 'fieldcontainer',
                    width: 550,
                    layout: 'column',
                    items: [
                        {
                            xtype: 'label',
                            html: "<span style='font-weight: bold'>Nota:</span> Para revisar el Formulario 002, acceda al Paso 1 y descarguelo.",
                            columnWidth: 0.8
                        },
                        {
                            xtype: 'button',
                            itemId: 'abrirPaso1',
                            text: 'Ir a Paso 1',
                            columnWidth: 0.2
                        }
                    ]
                }
            ]
        });
        me.callParent(arguments);
    }
});