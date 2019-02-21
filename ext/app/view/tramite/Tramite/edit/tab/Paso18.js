Ext.define('ibmetrodta.view.tramite.Tramite.edit.tab.Paso18', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.tramite.tramite.edit.tab.paso18',
    bodyPadding: 8,
    overflowY: 'auto',
    margin: -5,
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'label',
                    html: "<span class='titulo'>Paso 18 - Generación de Certificado.</span>"
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
                            text: 'a) Complete los datos para el Certificado (Personal DTA): ',
                            cls: 'subtitulo',
                            margin: 5
                        },
                        {
                            xtype: 'fieldcontainer',
                            layout: 'column',
                            items: [
                                {
                                    xtype: 'button',
                                    itemId: 'btnCertificado',
                                    text: 'Abrir Certificados',
                                    margin: 5,
                                    columnWidth: 0.25
                                },
                                {
                                    xtype: 'button',
                                    itemId: 'btnCargaArchivoAdicional1',
                                    text: 'Cargar Archivos',
                                    margin: 5,
                                    columnWidth: 0.25
                                },
                                {
                                    xtype: 'button',
                                    itemId: 'btnAprobarCertificado',
                                    text: 'Aprobar Certificado',
                                    margin: 5,
                                    columnWidth: 0.25
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'label',
                    html: '<p><span style="font-weight: bold">Nota:</span> El usuario DA deberá ingresar a la lista de certificados para aprobar el certificado creado.</p>'
                }
            ]
        });
        me.callParent(arguments);
    }
});