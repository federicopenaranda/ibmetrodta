Ext.define('ibmetrodta.view.tramite.Tramite.edit.tab.Paso6', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.tramite.tramite.edit.tab.paso6',
    bodyPadding: 8,
    overflowY: 'auto',
    margin: -5,
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'label',
                    html: "<span class='titulo'>Paso 6 - Carga de Archivos Base.</span>"
                },
                {
                    xtype: 'label',
                    itemId: 'textEstado',
                    html: "<span class='tituloEstado'> Estado:</span></span><span class='estadoPendiente'> Pendiente</span>"
                },
                {
                    xtype: 'container',
                    layout: 'hbox',
                    margin: '10 0 0 0',
                    items: [
                        {
                            xtype: 'label',
                            html: 'a) Carga de Archivos: "Manual de Calidad": ',
                            cls: 'subtitulo',
                            columnWidth: 0.75,
                            margin: 5
                        },
                        {
                            xtype: 'button',
                            itemId: 'btnCargaManualCalidad',
                            text: 'Cargar Archivos',
                            margin: '0 0 0 10',
                            columnWidth: 0.25
                        }
                    ]
                },
                {
                    xtype: 'container',
                    layout: 'hbox',
                    margin: '10 0 0 0',
                    items: [
                        {
                            xtype: 'label',
                            html: 'b) Carga de Archivos: "Procedimientos": ',
                            cls: 'subtitulo',
                            columnWidth: 0.75,
                            margin: 5
                        },
                        {
                            xtype: 'button',
                            itemId: 'btnCargaProcedimientos',
                            text: 'Cargar Archivos',
                            margin: '0 0 0 10',
                            columnWidth: 0.25
                        }
                    ]
                },
                {
                    xtype: 'container',
                    layout: 'hbox',
                    margin: '10 0 0 0',
                    items: [
                        {
                            xtype: 'label',
                            html: 'c) Carga de Archivos: "Informe de Revisión por la Dirección": ',
                            cls: 'subtitulo',
                            columnWidth: 0.75,
                            margin: 5
                        },
                        {
                            xtype: 'button',
                            itemId: 'btnCargaInforme',
                            text: 'Cargar Archivos',
                            margin: '0 0 0 10',
                            columnWidth: 0.25
                        }
                    ]
                },
                {
                    xtype: 'container',
                    layout: 'hbox',
                    margin: '10 0 0 0',
                    items: [
                        {
                            xtype: 'label',
                            html: 'd) Carga de Archivos: "Informe de Auditoria Interna": ',
                            cls: 'subtitulo',
                            columnWidth: 0.75,
                            margin: 5
                        },
                        {
                            xtype: 'button',
                            itemId: 'btnCargaAuditoria',
                            text: 'Cargar Archivos',
                            margin: '0 0 0 10',
                            columnWidth: 0.25
                        }
                    ]
                },
                {
                    xtype: 'container',
                    layout: 'hbox',
                    margin: '10 0 0 0',
                    items: [
                        {
                            xtype: 'label',
                            html: 'e) Carga de Archivos: "Informe de Validación": ',
                            cls: 'subtitulo',
                            columnWidth: 0.75,
                            margin: 5
                        },
                        {
                            xtype: 'button',
                            itemId: 'btnCargaValidacion',
                            text: 'Cargar Archivos',
                            margin: '0 0 0 10',
                            columnWidth: 0.25
                        }
                    ]
                },
                {
                    xtype: 'container',
                    layout: 'hbox',
                    margin: '10 0 0 0',
                    items: [
                        {
                            xtype: 'label',
                            html: 'f) Carga de Archivos: "Certificado de Material de Referencia o Certificado de Patrones": ',
                            cls: 'subtitulo',
                            columnWidth: 0.75,
                            margin: 5
                        },
                        {
                            xtype: 'button',
                            itemId: 'btnCargaCertificado',
                            text: 'Cargar Archivos',
                            margin: '0 0 0 10',
                            columnWidth: 0.25
                        }
                    ]
                },
                {
                    xtype: 'container',
                    layout: 'hbox',
                    margin: '10 0 0 0',
                    items: [
                        {
                            xtype: 'label',
                            html: 'g) Carga de Archivos: "Lista Maestra de Documentos": ',
                            cls: 'subtitulo',
                            columnWidth: 0.75,
                            margin: 5
                        },
                        {
                            xtype: 'button',
                            itemId: 'btnCargaLista',
                            text: 'Cargar Archivos',
                            margin: '0 0 0 10',
                            columnWidth: 0.25
                        }
                    ]
                },
                {
                    xtype: 'container',
                    layout: 'hbox',
                    margin: '10 0 0 0',
                    items: [
                        {
                            xtype: 'label',
                            html: 'h) Carga de Archivos: "Otros Archivos": ',
                            cls: 'subtitulo',
                            columnWidth: 0.75,
                            margin: 5
                        },
                        {
                            xtype: 'button',
                            itemId: 'btnCargaOtros',
                            text: 'Cargar Archivos',
                            margin: '0 0 0 10',
                            columnWidth: 0.25
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
                            html: 'i) Finalizar Carga de Archivos Base: ',
                            cls: 'subtitulo',
                            columnWidth: 0.75,
                            margin: 5
                        },
                        {
                            xtype: 'button',
                            itemId: 'btnFinalizaCargaArchivosBase',
                            text: 'Finalizar Cargar de Archivos Base',
                            margin: '0 0 0 10'
                        }
                    ]
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