Ext.define('ibmetrodta.view.tramite.Tramite.edit.tab.Paso12', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.tramite.tramite.edit.tab.paso12',
    bodyPadding: 8,
    overflowY: 'auto',
    margin: -5,
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'label',
                    html: "<span class='titulo'>Paso 12 - Llenado de Formulario 024.</span>"
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
                            text: 'a) Complete el formulario 024 (Personal DTA): ',
                            itemId: 'txtSubForm024',
                            cls: 'subtitulo',
                            margin: 5
                        },
                        {
                            xtype: 'fieldcontainer',
                            layout: 'column',
                            items: [
                                {
                                    xtype: 'button',
                                    itemId: 'btnForm024',
                                    text: 'Abrir Formulario',
                                    margin: 5,
                                    columnWidth: 0.25
                                },
                                {
                                    xtype: 'button',
                                    itemId: 'btnVersionesArchivos',
                                    text: 'Añadir Archivos',
                                    margin: 5,
                                    columnWidth: 0.25
                                },
                                {
                                    xtype: 'button',
                                    itemId: 'btnFinalizarForm024',
                                    text: 'Finalizar Edición de Formulario 024',
                                    margin: 5,
                                    columnWidth: 0.25
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'label',
                    html: '<p><span style="font-weight: bold">Nota:</span> Puede llenar el formulario y editarlo posteriormente hasta que haga click en el botón "Finalizar Edición de Formulario 024" y pase al siguiente paso.</p>'
                }
            ]
        });
        me.callParent(arguments);
    }
});