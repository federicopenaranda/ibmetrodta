Ext.define('ibmetrodta.view.tramite.Tramite.edit.tab.Paso11', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.tramite.tramite.edit.tab.paso11',
    bodyPadding: 8,
    overflowY: 'auto',
    margin: -5,
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'label',
                    html: "<span class='titulo'>Paso 11 - Revisión Documental.</span>"
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
                            html: 'a) Aprobación de Documentación por Equipo Evaluador (Personal DTA): ',
                            itemId: 'txtSubApruebaEE',
                            cls: 'subtitulo',
                            margin: 5
                        },
                        {
                            xtype: 'tramite.tramite.listaequipoevaluadorpeticion',
                            itemId: 'gridEquipoEvaluador'
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    width: 550,
                    layout: 'column',
                    items: [
                        {
                            xtype: 'label',
                            html: "<span style='font-weight: bold'>Nota:</span> Para revisar los Archivos Base, acceda al Paso 6.",
                            columnWidth: 0.7
                        },
                        {
                            xtype: 'button',
                            itemId: 'abrirPaso6',
                            text: 'Ir a Paso 6',
                            columnWidth: 0.2
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
                            html: 'b) Carga de Archivos Adicionales (Personal OEC): ',
                            cls: 'subtitulo',
                            margin: 5
                        },
                        {
                            xtype: 'fieldcontainer',
                            layout: 'column',
                            items: [
                                {
                                    xtype: 'button',
                                    itemId: 'btnCargaArchivosAdicionales',
                                    text: 'Cargar Archivos Adicionales',
                                    margin: '0 0 0 10',
                                    columnWidth: 0.25
                                }/*,
                                {
                                    xtype: 'button',
                                    itemId: 'btnFinalizaCargaArchivosAdicionales',
                                    text: 'Finaliza Carga de Archivos Adicionales',
                                    margin: '0 0 0 10',
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
                }
            ]
        });
        me.callParent(arguments);
    }
});