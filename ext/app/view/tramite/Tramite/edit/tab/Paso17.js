Ext.define('ibmetrodta.view.tramite.Tramite.edit.tab.Paso17', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.tramite.tramite.edit.tab.paso17',
    bodyPadding: 8,
    overflowY: 'auto',
    margin: -5,
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'label',
                    html: "<span class='titulo'>Paso 17 - Llenado de Formulario 026.</span>"
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
                            text: 'a) Complete el formulario 026 (Personal DTA): ',
                            cls: 'subtitulo',
                            margin: 5
                        },
                        {
                            xtype: 'fieldcontainer',
                            layout: 'column',
                            items: [
                                {
                                    xtype: 'button',
                                    itemId: 'btnForm026',
                                    text: 'Abrir Formulario',
                                    margin: 5,
                                    columnWidth: 0.25
                                },
                                {
                                    xtype: 'button',
                                    itemId: 'btnFinalizarForm026',
                                    text: 'Finalizar Edición de Formulario 026',
                                    margin: 5,
                                    columnWidth: 0.25
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'label',
                    html: '<p><span style="font-weight: bold">Nota 1:</span> Puede llenar el formulario y editarlo posteriormente hasta que haga click en el botón "Finalizar Edición de Formulario 026" y pase al siguiente paso.</p>'
                }
            ]
        });
        me.callParent(arguments);
    }
});