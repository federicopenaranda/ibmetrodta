Ext.define('ibmetrodta.view.tramite.Tramite.edit.tab.Paso8', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.tramite.tramite.edit.tab.paso8',
    bodyPadding: 8,
    overflowY: 'auto',
    margin: -5,
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'label',
                    html: "<span class='titulo'>Paso 8 - Aprobación de Documentación.</span>"
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
                                    itemId: 'btnApruebaDocumentacion',
                                    text: 'Aprobar Documentación',
                                    margin: 5,
                                    columnWidth: 0.25
                                },
                                {
                                    xtype: 'button',
                                    itemId: 'btnPedirDocumentacionAdicional',
                                    text: 'Pedir Documentación Adicional',
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
                }
            ]
        });
        me.callParent(arguments);
    }
});